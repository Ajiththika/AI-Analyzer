/**
 * Expenova - Chat Logic
 * Handles user interaction and AI responses
 */

document.addEventListener('DOMContentLoaded', () => {
    const chatForm = document.getElementById('chatForm');
    const chatInput = document.getElementById('chatInput');
    const chatContainer = document.getElementById('chatContainer');

    // Chat Form Submit
    chatForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const message = chatInput.value.trim();
        if (message) {
            handleUserMessage(message);
            chatInput.value = '';
        }
    });

    function handleUserMessage(message) {
        addMessage(message, 'user');

        // Simulate AI thinking delay
        setTimeout(() => {
            const response = generateAIResponse(message);
            addMessage(response, 'ai');
        }, 1000);
    }

    function addMessage(text, sender) {
        const div = document.createElement('div');
        div.className = `message ${sender}`;
        div.textContent = text;
        chatContainer.appendChild(div);
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }

    function generateAIResponse(input) {
        const lowerInput = input.toLowerCase();
        const expenses = JSON.parse(localStorage.getItem('expenses')) || [];

        // Calculate stats
        const total = expenses.reduce((sum, item) => sum + item.price, 0);
        const categoryTotals = {};
        expenses.forEach(item => {
            categoryTotals[item.category] = (categoryTotals[item.category] || 0) + item.price;
        });

        let maxCat = '-';
        let maxVal = 0;
        for (const [cat, val] of Object.entries(categoryTotals)) {
            if (val > maxVal) {
                maxVal = val;
                maxCat = cat;
            }
        }

        // Daily Limit Check
        const today = new Date().toISOString().split('T')[0];
        const todayExpenses = expenses.filter(e => e.date === today);
        const todayTotal = todayExpenses.reduce((sum, item) => sum + item.price, 0);

        // Logic
        if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
            return "Hello! I'm your AI Financial Advisor. Ask me about your spending or daily limit.";
        }

        if (lowerInput.includes('spent') || lowerInput.includes('total') || lowerInput.includes('much')) {
            return `You have spent a total of Rs. ${total.toFixed(2)} so far. Today's total is Rs. ${todayTotal.toFixed(2)}.`;
        }

        if (lowerInput.includes('category') || lowerInput.includes('highest') || lowerInput.includes('most')) {
            if (maxCat === '-') return "You haven't added any expenses yet.";
            return `Your highest spending category is ${maxCat} with Rs. ${maxVal.toFixed(2)}.`;
        }

        if (lowerInput.includes('advice') || lowerInput.includes('help') || lowerInput.includes('limit')) {
            if (todayTotal > 2000) return `⚠️ You have exceeded your daily limit of Rs. 2000! You've spent Rs. ${todayTotal.toFixed(2)} today. Try to stop spending for now.`;
            if (todayTotal > 1500) return `You are close to your daily limit of Rs. 2000. Current total: Rs. ${todayTotal.toFixed(2)}. Be careful!`;
            if (total === 0) return "Start by adding your daily expenses in the Analyze page so I can give you advice.";
            return `You're doing great! You've spent Rs. ${todayTotal.toFixed(2)} today, which is well within your Rs. 2000 limit.`;
        }

        if (lowerInput.includes('food')) {
            const foodTotal = categoryTotals['Food'] || 0;
            return `You've spent Rs. ${foodTotal.toFixed(2)} on Food.`;
        }

        return "I'm not sure about that. Try asking 'How much have I spent?' or 'Am I over my limit?'.";
    }
});
