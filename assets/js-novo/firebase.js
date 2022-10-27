 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-analytics.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyBmm-Vqgev19tESnJhAnEj7pQGZZS7KAto",
   authDomain: "copa-do-mundo---2022.firebaseapp.com",
   projectId: "copa-do-mundo---2022",
   storageBucket: "copa-do-mundo---2022.appspot.com",
   messagingSenderId: "616074278092",
   appId: "1:616074278092:web:d6a59879904c62c4a1be69",
   measurementId: "G-Q3E2SWPPC4"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
 
 export default app