var firebaseConfig = {
  apiKey: "AIzaSyAzcwgZuLA7dO9g4sQhXQVTUgCo0M8m2qM",
  authDomain: "grocerylist-91956.firebaseapp.com",
  databaseURL: "https://grocerylist-91956.firebaseio.com",
  projectId: "grocerylist-91956",
  storageBucket: "grocerylist-91956.appspot.com",
  messagingSenderId: "813812426276",
  appId: "1:813812426276:web:93e5897af12892ff78dab1",
  measurementId: "G-VZ83BTR72T"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// save the data
$("#signup-form").submit(function(e) {
  e.preventDefault();
  //get the username(email) and password from the form
  // change the following code
  var email = "yilianz4@gmail.com";
  var password = "ddsgagafda";

  // create a user with email address and password
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(user => {
      // Signed in
      // ...

      console.log("You are signed up");
      window.location.href = "Login.html";
    })
    .catch(error => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(error.code);
      console.log(errorMessage);
    });
});
