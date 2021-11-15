const firebaseConfig = {
  apiKey: "AIzaSyAdQK9LZn7_AAXo1Cu9-v0AbZVcSh4FEA0",
  authDomain: "csc225-9aadf.firebaseapp.com",
  projectId: "csc225-9aadf",
  storageBucket: "csc225-9aadf.appspot.com",
  messagingSenderId: "583854877860",
  appId: "1:583854877860:web:1b51a06f357c7f0cefca31",
  measurementId: "G-EBKL03K9XW"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// save the data
$('#Login').submit(function (e) {
  e.preventDefault();
  // get the user name and password from form
  // You need to change this.
  var email    = $("#Login-form input[name='login']").val();
  var password = $("#Login-form input[name='pwd']").val();

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((success) => {
      // Signed in
      // ...
      console.log('login in');
      let user = firebase.auth().currentUser;

      //user.updateProfile({ displayName: "Not sure" });
      if (user != null) {
        name = user.displayName;
        email = user.email;
        photoUrl = user.photoURL;
        emailVerified = user.emailVerified;
        console.log(name + email + emailVerified);
      }
    })
    .catch((error) => {

      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });
});
