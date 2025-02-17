import { createAttendanceSheet } from "./components/createAttendanceSheet.js";
import { createLoginPage } from "./components/createLoginPage.js";
import { createRegisterPage } from "./components/createRegisterPage.js";

let container;
let isLoggedIn = false;
let userDetail = {};

// Event Listeners
document.addEventListener("DOMContentLoaded", loadMainPage);

// This function calls the API endpoints and retrives the response,
// formats it and returns to the calling function.
async function fetchFromURL(url, request) {
    console.log("fetchFromURL called with url: ", url, " and request: ", request);
    const response = await fetch(url, request);
    const data = await response.json();
    // console.log("Data received: ", data);
    if (data.status < 200 || data.status >= 400) {
        throw new Error(data)
    }
    return data;
}

function setStatusMessage(message) {
    const statusMessage = document.getElementById("statusMessage");
    statusMessage.textContent = message;
}

function setContainerContent(htmlText) {
    container.innerHTML = htmlText;
}

function loginButtonAction(event) {
    event.preventDefault(); // Prevent form from actually submitting

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "" || password === "") {
        setStatusMessage("Username and password are required.");
        return;
    }

    fetchFromURL('/login', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username, password
        })
    }).then((data) => {
        isLoggedIn = true;
        if (data.authenticated) {
            loadDashboard(data.role);
        } else {
            setStatusMessage('Invalid credentials');
        }
    })
}

function registerButtonAction(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const role = document.querySelector('input[name="role"]:checked').value; // Get selected role

    if (password !== confirmPassword) {
        setStatusMessage("Passwords do not match.");
        return;
    }

    // Basic validation (you would add more robust checks)
    if (username === "" || password === "" || confirmPassword === "") {
        setStatusMessage("All fields are required.");
        return;
    }

    // Here you would send the registration data to your server
    // For this example, we'll just simulate a successful registration
    alert(`Registration successful!\nUsername: ${username}\nRole: ${role}`);
    // Optionally redirect: window.location.href = "login.html";
}

function addFunctionstologinPage() {
    const loginForm = document.getElementById("loginForm");
    loginForm.addEventListener("submit", (event) => loginButtonAction(event));

    const registerButton = document.getElementById("registerButton");
    registerButton.addEventListener("click", (event) => loadRegisterPage(event));
}

function loadRegisterPage(event) {
    setStatusMessage(""); // Clear any previous errors
    const registerPage = createRegisterPage();
    setContainerContent(registerPage);

    const registerForm = document.getElementById("registerForm");
    registerForm.addEventListener("submit", (event) => registerButtonAction(event));
}

function loadMainPage() {
    container = document.querySelector(".container");
    if (isLoggedIn) {
        loadDashboard();
    } else {
        const loginPage = createLoginPage();
        setContainerContent(loginPage);
        addFunctionstologinPage()
    }
}
