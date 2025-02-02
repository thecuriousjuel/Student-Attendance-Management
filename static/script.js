import { createLoginPage } from "./components/createLoginPage.js";
import { createRegisterPage } from "./components/createRegisterPage.js";

let mainContainer = document.querySelector(".main-container");
let isLoggedIn = false;

// Event Listeners
document.addEventListener("DOMContentLoaded", loadMainPage);


// This function calls the API endpoints and retrives the response,
// formats it and returns to the calling function.
async function fetchFromURL(url, request)
{
    const response = await fetch(url, request);
    const data = await response.json();
    if (data.status < 200 || data.status >= 400)
    {
        throw new Error(data.response)
    }
    return data.response
}

function loginButtonAction(event)
{
    const errorMessage = document.getElementById("errorMessage");
    event.preventDefault(); // Prevent form from actually submitting

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "" || password === "")
    {
        errorMessage.textContent = "Username and password are required.";
        return;
    }

    // In a real application, you would send this data to a server
    // for authentication.  Here, we'll just simulate a successful login
    // for demonstration purposes.
    if (username === "test" && password === "test")
    {
        // Example credentials
        errorMessage.textContent = ""; // Clear any previous errors
        alert("Login successful!"); // Or redirect to another page: window.location.href = "welcome.html";
    } else
    {
        errorMessage.textContent = "Invalid username or password.";
    }
}

function registerButtonAction(event)
{
    const errorMessage = document.getElementById("errorMessage");
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const role = document.querySelector('input[name="role"]:checked').value; // Get selected role

    errorMessage.textContent = ""; // Clear any previous errors

    if (password !== confirmPassword)
    {
        errorMessage.textContent = "Passwords do not match.";
        return;
    }

    // Basic validation (you would add more robust checks)
    if (username === "" || password === "" || confirmPassword === "")
    {
        errorMessage.textContent = "All fields are required.";
        return;
    }

    // Here you would send the registration data to your server
    // For this example, we'll just simulate a successful registration
    alert(`Registration successful!\nUsername: ${username}\nRole: ${role}`);
    // Optionally redirect: window.location.href = "login.html";
}

function loginPageFunction()
{
    const loginForm = document.getElementById("loginForm");
    loginForm.addEventListener("submit", (event) => loginButtonAction(event));

    const registerButton = document.getElementById("registerButton");
    registerButton.addEventListener("click", (event) => loadRegisterPage(event));
}

function loadRegisterPage(event)
{
    const registerPage = createRegisterPage();
    mainContainer.innerHTML = registerPage;

    const registerForm = document.getElementById("registerForm");
    registerForm.addEventListener("submit", (event) => registerButtonAction(event));
}

function loadMainPage()
{
    const loginPage = createLoginPage();
    mainContainer.innerHTML = loginPage;
    loginPageFunction()
}
