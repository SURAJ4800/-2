// --- assets/js/functioning.js ---

// 1. Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyDBn5GMIvsqhTPMVAeylq-I_2R8SSJYzmI",
    authDomain: "js-login-form.firebaseapp.com",
    projectId: "js-login-form",
    storageBucket: "js-login-form.appspot.com",
    messagingSenderId: "1039987076182",
    appId: "1:1039987076182:web:e51f940647b55c0cd7dff7",
};

if (typeof firebase !== 'undefined') {
  firebase.initializeApp(firebaseConfig);
} else {
  console.error("Firebase SDK not loaded.");
}

// 2. Logic Classes
class signUpMethods {
    builtInSignUp(myForm) {
        const userName = myForm["sign-up-full-name"].value;
        const email = myForm["sign-up-email"].value;
        const password = myForm["sign-up-password"].value;
        const repassword = myForm["sign-up-repassword"].value;
        const phoneNumber = myForm["sign-up-number"].value;

        if (password != repassword || password === '') {
            Swal.fire('Passwords do not match');
        } else if (phoneNumber.length != 10) {
            Swal.fire('Phone Number is not valid');
        } else {
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then((cred) => {
                    saveDatabase.UserfirebaseDatabase(userName, email, password, phoneNumber);
                    Swal.fire({ icon: 'success', title: 'Account Created. Please Log In.' });
                })
                .catch((error) => Swal.fire("" + error));
        }
    }

    googleSignUpIn() {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then((result) => { this.notifyUser(); this.firebaseAuthRedirect(); })
            .catch((error) => Swal.fire("" + error));
    }

    facebookSignUpIn() {
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then((result) => { this.notifyUser(); this.firebaseAuthRedirect(); })
            .catch((error) => Swal.fire("" + error));
    }

    githubSignUpIn() {
        var provider = new firebase.auth.GithubAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then((result) => { this.notifyUser(); this.firebaseAuthRedirect(); })
            .catch((error) => Swal.fire("" + error));
    }

    // --- ADMIN REDIRECT LOGIC ---
    static authRedirecting() {
        window.setTimeout(() => {
            const user = firebase.auth().currentUser;
            if (user && user.email === "admin@karimcitycollege.org") {
                window.location.replace('admin-side.html');
            } else {
                window.location.replace('client-side.html');
            }
        }, 1000);
    }

    notifyUser() {
        window.setTimeout(function() {
            Swal.fire({ icon: 'success', title: 'Signed In Successfully', })
        }, 1250)
    }

    firebaseAuthRedirect() {
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                if (user.email === "admin@karimcitycollege.org") {
                    window.location.replace('admin-side.html');
                } else {
                    window.location.replace('client-side.html');
                }
            }
        });
    }
}

class signInMethods {
    builtInSignIn() {
        const email = document.getElementById('sign-in-email').value;
        const password = document.getElementById('sign-in-password').value;

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(userCredential => {
                Swal.fire({ icon: 'success', title: 'Logged In', })
                signUpMethods.authRedirecting(); 
            })
            .catch(error => {
                Swal.fire({ icon: 'error', title: '' + error, })
            });
    }
}

class saveDatabase {
    static UserfirebaseDatabase(userName, email, password, phoneNumber) {
        const userID = makeUserDataID(email);
        firebase.database().ref('User_Data/' + userID).set({
            User_Name: userName,
            Email: email,
            Password: password,
            Phone_Number: phoneNumber,
        });
    }
}

function makeUserDataID(userEmailID) {
    let userDataID = '';
    for (let i = 0; i < userEmailID.length; i++) {
        if (userEmailID[i] != '@') { userDataID = userDataID + userEmailID[i] } else { break }
    }
    return userDataID
}

// 3. Document Load Listeners
document.addEventListener("DOMContentLoaded", () => {
    const myForm = document.getElementById("main-form");
    const googleSignUp = document.querySelectorAll("#google-signUpIn");
    const githubSignUp = document.querySelectorAll("#github-signUpIn");
    const facebookSignUp = document.querySelectorAll("#facebook-signUpIn");
    const signInForm = document.getElementById('signIn-form');
    
    // --- THE FIX: Look for BOTH 'userlogout' AND 'logout' buttons ---
    const logout = document.querySelectorAll('#userlogout, #logout');

    const signUp = new signUpMethods();
    const signIn = new signInMethods();

    if (myForm) {
        myForm.addEventListener("submit", (e) => { e.preventDefault(); signUp.builtInSignUp(myForm); });
    }
    if (googleSignUp) { googleSignUp.forEach(el => el.addEventListener("click", (e) => { e.preventDefault(); signUp.googleSignUpIn(); })); }
    if (githubSignUp) { githubSignUp.forEach(el => el.addEventListener("click", (e) => { e.preventDefault(); signUp.githubSignUpIn(); })); }
    if (facebookSignUp) { facebookSignUp.forEach(el => el.addEventListener("click", (e) => { e.preventDefault(); signUp.facebookSignUpIn(); })); }
    
    if (signInForm) {
        signInForm.addEventListener("submit", (e) => {
            e.preventDefault();
            signIn.builtInSignIn();
        });
    }

    // Logout Logic (Now works for both Admin and Client)
    if (logout) {
        logout.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                Swal.fire({ icon: 'success', title: 'Logged Out', });
                firebase.auth().signOut().then(() => {
                    window.location.replace("index.html");
                });
            });
        })
    }
});