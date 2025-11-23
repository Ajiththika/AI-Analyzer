/**
 * Expenova - Analyze Page Logic
 * Handles expense tracking, chart updates, and AI feedback
 */

document.addEventListener('DOMContentLoaded', () => {
    const expenseForm = document.getElementById('expenseForm');
    const expenseTableBody = document.getElementById('expenseTableBody');
    const totalSpentEl = document.getElementById('totalSpent');
    const topCategoryEl = document.getElementById('topCategory');
    const aiFeedbackEl = document.getElementById('aiFeedback');

    let expenses = JSON.parse(localStorage.getItem('expenses')) || [];
    let categoryChartInstance = null;

    // Initialize
    renderExpenses();
    updateStats();
    renderCharts();

    // Add Expense
    expenseForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const newItem = {
            id: Date.now(),
            name: document.getElementById('itemName').value,
            price: parseFloat(document.getElementById('itemPrice').value),
            category: document.getElementById('itemCategory').value,
            date: document.getElementById('itemDate').value
        };

        expenses.push(newItem);
        saveExpenses();
        renderExpenses();
        updateStats();
        renderCharts();
        expenseForm.reset();

        // Set default date to today after reset
        document.getElementById('itemDate').valueAsDate = new Date();
    });

    // Set default date
    document.getElementById('itemDate').valueAsDate = new Date();

    // Render Expenses Table
    function renderExpenses() {
        expenseTableBody.innerHTML = '';
        expenses.sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort by date desc

        expenses.forEach(expense => {
            const row = document.createElement('tr');
            row.className = 'align-middle border-bottom border-light border-opacity-10';
            row.innerHTML = `
                <td>${expense.date}</td>
                <td>${expense.name}</td>
                <td><span class="badge bg-light text-dark bg-opacity-75">${expense.category}</span></td>
                <td class="${getColorClass(expense.price)} fw-bold">Rs. ${expense.price.toFixed(2)}</td>
                <td>
                    <button class="btn btn-sm btn-outline-danger border-0" onclick="deleteExpense(${expense.id})">
                        <i class="bi bi-trash"></i>
                    </button>
                </td>
            `;
            expenseTableBody.appendChild(row);
        });
    }

    // Color Coding Rules
    function getColorClass(price) {
        if (price < 500) return 'text-success';
        if (price < 1000) return 'text-warning';
        if (price < 2000) return 'text-orange';
        return 'text-danger';
    }

    // Save to LocalStorage
    function saveExpenses() {
        localStorage.setItem('expenses', JSON.stringify(expenses));
    }

    // Global delete function
    window.deleteExpense = function (id) {
        expenses = expenses.filter(e => e.id !== id);
        saveExpenses();
        renderExpenses();
        updateStats();
        renderCharts();
    };

    // Update Stats & AI Feedback
    function updateStats() {
        const total = expenses.reduce((sum, item) => sum + item.price, 0);
        totalSpentEl.textContent = `Rs. ${total.toFixed(2)}`;

        // Calculate Category Totals
        const categoryTotals = {};
        expenses.forEach(item => {
            categoryTotals[item.category] = (categoryTotals[item.category] || 0) + item.price;
        });

        // Find Top Category
        let maxCat = '-';
        let maxVal = 0;
        for (const [cat, val] of Object.entries(categoryTotals)) {
            if (val > maxVal) {
                maxVal = val;
                maxCat = cat;
            }
        }
        topCategoryEl.textContent = maxCat;

        // Check Daily Limit (2000 LKR)
        const today = new Date().toISOString().split('T')[0];
        const todayExpenses = expenses.filter(e => e.date === today);
        const todayTotal = todayExpenses.reduce((sum, item) => sum + item.price, 0);

        // AI Feedback Logic
        let feedback = "Start adding expenses to get insights.";
        let feedbackClass = "small opacity-75";

        if (expenses.length > 0) {
            if (todayTotal > 2000) {
                feedback = `⚠️ Alert: You have exceeded your daily limit of Rs. 2000! Today's total: Rs. ${todayTotal.toFixed(2)}`;
                feedbackClass = "text-danger small fw-bold";
            } else if (todayTotal > 1500) {
                feedback = `Caution: You are approaching your daily limit. Today's total: Rs. ${todayTotal.toFixed(2)}`;
                feedbackClass = "text-warning small";
            } else {
                feedback = `Good job! You are within your daily limit. Today's total: Rs. ${todayTotal.toFixed(2)}`;
                feedbackClass = "text-success small";
            }
        }
        aiFeedbackEl.textContent = feedback;
        aiFeedbackEl.className = feedbackClass;
    }

    // Render Charts
    function renderCharts() {
        const ctxCategory = document.getElementById('categoryChart').getContext('2d');

        // Prepare Data
        const categoryTotals = {};
        expenses.forEach(item => {
            categoryTotals[item.category] = (categoryTotals[item.category] || 0) + item.price;
        });

        const categories = Object.keys(categoryTotals);
        const dataValues = Object.values(categoryTotals);

        // Destroy old charts if exist
        if (categoryChartInstance) categoryChartInstance.destroy();

        // Category Pie Chart
        categoryChartInstance = new Chart(ctxCategory, {
            type: 'doughnut',
            data: {
                labels: categories,
                datasets: [{
                    data: dataValues,
                    backgroundColor: [
                        '#6C63FF', '#00BFA5', '#FF6584', '#FFC107', '#0DCAF0', '#ADB5BD'
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { position: 'bottom', labels: { color: '#fff' } }
                }
            }
        });
    }
});
