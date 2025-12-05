  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const togglePassword = document.querySelector('.toggle-password');

  const emailError = document.getElementById("emailError");

  const reqBox = document.getElementById("reqBox");
  const lengthReq = document.getElementById("lengthReq");
  const uppercaseReq = document.getElementById("uppercaseReq");
  const numberReq = document.getElementById("numberReq");
  const specialReq = document.getElementById("specialReq");

  const loginForm = document.getElementById("loginForm");

  // Show Password
    togglePassword.addEventListener("click", () => {
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
    togglePassword.innerHTML = passwordInput.type === "password"
      ? '<i class="bi bi-eye"></i>'
      : '<i class="bi bi-eye-slash"></i>';
  });

  // Email Validation
  emailInput.addEventListener("input", () => {
    const email = emailInput.value;
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    emailError.style.display = valid ? "none" : "block";
  });

  // Show Rules After Click
  passwordInput.addEventListener("focus", () => {
    reqBox.style.display = "block";
  });

  // Live Password Validation
  passwordInput.addEventListener("input", validatePassword);

  function validatePassword() {
    const pass = passwordInput.value;

    lengthReq.classList.toggle("valid", pass.length >= 6);
    uppercaseReq.classList.toggle("valid", /[A-Z]/.test(pass));
    numberReq.classList.toggle("valid", /[0-9]/.test(pass));
    specialReq.classList.toggle("valid", /[^A-Za-z0-9]/.test(pass));
  }

  // Submit
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value);
    const passwordValid = document.querySelectorAll(".requirement.valid").length === 4;

    if (emailValid && passwordValid) {

      localStorage.setItem("loginInfo", JSON.stringify({
        email: emailInput.value,
        password: passwordInput.value,
        loginTime: new Date().toISOString()
      }));

      loginForm.reset();

      reqBox.style.display = "none";
      document.querySelectorAll('.requirement').forEach(r => r.classList.remove('valid'));
    }
  });

  