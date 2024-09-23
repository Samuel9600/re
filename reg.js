// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaPWkFOXA2bSaDS1Ci4wn_3CvOCed5HLw",
  authDomain: "pro-active-12262.firebaseapp.com",
  projectId: "pro-active-12262",
  storageBucket: "pro-active-12262.appspot.com",
  messagingSenderId: "812460124236",
  appId: "1:812460124236:web:776e307776e4aa2e75ace9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const username = document.getElementById('username').value;
const password = document.getElementById('password').value;

const submit = document.getElementById('submit');
submit.addEventListener("click",function(event){
    event.preventDefault()
    alert(5)
})