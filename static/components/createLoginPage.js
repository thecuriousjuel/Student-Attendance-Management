export function createLoginPage() {
    return (`
        <div class="login-container">
            <h2>Login</h2>
            <form id="loginForm">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username">

                <label for="password">Password:</label>
                <input type="password" id="password" name="password">

                <div class="button-container">
                    <button type="submit">Login</button>
                    <button type="button" id="registerButton">Register</button>
                </div>
            </form>
        </div>
        `);

}