export function createRegisterPage() {
  return `<form id="registerForm">
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
}
