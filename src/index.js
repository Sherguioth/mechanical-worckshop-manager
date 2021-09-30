import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseApp } from "./config/firebase.config.js";

document.addEventListener("DOMContentLoaded", () => {
    const auth = getAuth(firebaseApp);
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const credentials = getLoginFromInfo();
        console.log(credentials);

        const btnClose = document.getElementById("close-login");

        signInWithEmailAndPassword(auth, credentials.email, credentials.password)
            .then((userCredentiasls) => {
                const user = userCredentiasls.user;
                console.log(user);
                btnClose.click();
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    });
});

const getLoginFromInfo = () => {
    const emailField = document.getElementById("login-email");
    const passwordField = document.getElementById("login-password");

    const email = emailField.value;
    const password = passwordField.value;

    if (email === "" || password === "") {
        alert("Invalid data");
    } else {
        return { email, password };
    }
};
