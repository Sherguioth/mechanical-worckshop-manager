// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import { loginForm } from "./utils/definitions.js";
// import { firebaseApp } from "./config/firebase.config.js";

// const auth = getAuth(firebaseApp);

// const getLoginFromInfo = () => {
//     const emailField = document.getElementById("login-email");
//     const passwordField = document.getElementById("login-password");

//     const email = emailField.value;
//     const password = passwordField.value;

//     if (email === "" || password === "") {
//         alert("Invalid data");
//     } else {
//         return { email, password };
//     }
// };

// loginForm.addEventListener("submit", (event) => {
//     event.preventDefault();
//     const credentials = getLoginFromInfo();
//     console.log(credentials);

//     signInWithEmailAndPassword(auth, credentials.email, credentials.password)
//         .then((userCredentiasls) => {
//             const user = userCredentiasls.user;
//             console.log(user);

//             return user;
//         })
//         .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//         });
// });
