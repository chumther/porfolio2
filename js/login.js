// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js';
import { getAuth, signInWithEmailAndPassword, setPersistence, browserSessionPersistence, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAgbaMHCWddnRSVYlG5aKjCll2I_NAj4jY",
    authDomain: "popita-porfolio.firebaseapp.com",
    projectId: "popita-porfolio",
    storageBucket: "popita-porfolio.appspot.com",
    messagingSenderId: "59197358505",
    appId: "1:59197358505:web:6996f52210e8e67444c4b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  if (user) {
    window.location.href = 'technical.html';
  } else {

  }
});

$('#login').click(signIn);

function signIn() {
    setPersistence(auth, browserSessionPersistence)
        .then(() => {
            let password = $('#password').val();
            return signInWithEmailAndPassword(auth, 'alejandro.chum@gmail.com', password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user);
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    $('#alert').attr('hidden', false);
                });
        })
        .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
        });
}

