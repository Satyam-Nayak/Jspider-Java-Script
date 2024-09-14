

function validateLogin() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let messageElement = document.getElementById("message");

    if (username === "Satyam" && password === "Satyam123") {
        messageElement.textContent = "Successful login";
        messageElement.style.color = "green";
    } else {
        messageElement.textContent = "Invalid username or password";
        messageElement.style.color = "red";
    }
}
