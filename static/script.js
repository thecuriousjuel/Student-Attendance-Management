const mainContainer = document.querySelector(".main-container");

// Event Listeners
document.addEventListener("DOMContentLoaded", loadMainPage);

function createLoginPage() {
  const loginPage = `<div class="login-container">
        <h2>Login</h2>
        <form id="loginForm">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required>

            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required>

            <div class="button-container">
                <button type="submit">Login</button>
                <button type="button" id="registerButton">Register</button>
            </div>

            <div id="errorMessage" class="error-message"></div>
        </form>
    </div>`;

  mainContainer.innerHTML = loginPage;

  const loginForm = document.getElementById("loginForm");
  const errorMessage = document.getElementById("errorMessage");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from actually submitting

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Basic validation (you would normally do more robust checks)
    if (username === "" || password === "") {
      errorMessage.textContent = "Username and password are required.";
      return;
    }

    // In a real application, you would send this data to a server
    // for authentication.  Here, we'll just simulate a successful login
    // for demonstration purposes.
    if (username === "testuser" && password === "password") {
      // Example credentials
      errorMessage.textContent = ""; // Clear any previous errors
      alert("Login successful!"); // Or redirect to another page: window.location.href = "welcome.html";
    } else {
      errorMessage.textContent = "Invalid username or password.";
    }
  });

  const registerButton = document.getElementById("registerButton");
  registerButton.addEventListener("click", createRegisterPage);
}

function createRegisterPage() {
  const registerPage = `<form id="registerForm">
    <h2>Register</h2>
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required>

            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required>

            <label for="confirmPassword">Confirm Password:</label>
            <input type="password" id="confirmPassword" name="confirmPassword" required>

            <div class="role-options">
                <label>Register as:</label>
                <label><input type="radio" name="role" value="student" required> Student</label>
                <label><input type="radio" name="role" value="teacher"> Teacher</label>
            </div>

            <button type="submit">Register</button>

            <div id="errorMessage" class="error-message"></div>
        </form>`;

  mainContainer.innerHTML = registerPage;

  const registerForm = document.getElementById("registerForm");
  const errorMessage = document.getElementById("errorMessage");

  registerForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const role = document.querySelector('input[name="role"]:checked').value; // Get selected role

    errorMessage.textContent = ""; // Clear any previous errors

    if (password !== confirmPassword) {
      errorMessage.textContent = "Passwords do not match.";
      return;
    }

    // Basic validation (you would add more robust checks)
    if (username === "" || password === "" || confirmPassword === "") {
      errorMessage.textContent = "All fields are required.";
      return;
    }

    // Here you would send the registration data to your server
    // For this example, we'll just simulate a successful registration
    alert(`Registration successful!\nUsername: ${username}\nRole: ${role}`);
    // Optionally redirect: window.location.href = "login.html";
  });
}

function loadMainPage() {
  createLoginPage();
}
