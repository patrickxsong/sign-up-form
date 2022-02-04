const myForm = document.getElementById("sign-up");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const errorElement = document.getElementById("error");
const focus = document.querySelector(".focus");
const btn = document.querySelector("button");

const validatePassword = (e) => {
    let messages = [];
    if (!password.value) {
        messages.push("Password is required.")
    }

    if (password.value !== confirmPassword.value) {
        messages.push("*Passwords do not match.")
        confirmPassword.classList.add("error");
    }

    if (!focus.value) {
        messages.push("Last name is required.")
        focus.classList.add("error");
    }

    if (messages.length > 0) {
        e.preventDefault();
        errorElement.innerText = messages.join(" ");
    } 
}

myForm.addEventListener("submit", validatePassword);

