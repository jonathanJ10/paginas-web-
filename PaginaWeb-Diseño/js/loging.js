document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  const registerForm = document.getElementById("register-form");
  const showRegister = document.getElementById("show-register");
  const showLogin = document.getElementById("show-login");

  const loginButton = document.getElementById("login-button");
  const registerButton = document.getElementById("register-button");

  showRegister.addEventListener("click", () => {
      loginForm.classList.add("hidden");
      registerForm.classList.remove("hidden");
  });

  showLogin.addEventListener("click", () => {
      registerForm.classList.add("hidden");
      loginForm.classList.remove("hidden");
  });

  loginButton.addEventListener("click", () => {
      const email = document.getElementById("login-email").value;
      const password = document.getElementById("login-password").value;

      if (!email || !password) {
          alert("Please fill out all fields.");
          return;
      }

      alert(`Logged in successfully! Email: ${email}`);
  });

  registerButton.addEventListener("click", () => {
      const email = document.getElementById("register-email").value;
      const password = document.getElementById("register-password").value;
      const confirmPassword = document.getElementById("confirm-password").value;

      if (!email || !password || !confirmPassword) {
          alert("Please fill out all fields.");
          return;
      }

      if (password !== confirmPassword) {
          alert("Passwords do not match.");
          return;
      }

      alert(`Registered successfully! Email: ${email}`);
      registerForm.classList.add("hidden");
      loginForm.classList.remove("hidden");
  });
});






  