const firebaseConfig = {
  apiKey: "AIzaSyAdQK9LZn7_AAXo1Cu9-v0AbZVcSh4FEA0",
  authDomain: "csc225-9aadf.firebaseapp.com",
  projectId: "csc225-9aadf",
  storageBucket: "csc225-9aadf.appspot.com",
  messagingSenderId: "583854877860",
  appId: "1:583854877860:web:1b51a06f357c7f0cefca31",
  measurementId: "G-EBKL03K9XW"
};

firebase.initializeApp(firebaseConfig);

$("#signup-form").submit(function(e) {
  e.preventDefault();
  var email = $("#signup-form input[name='username']").val();
  console.log('email you typed is'+email);
  var password = $("#signup-form input[name='password']").val();
  console.log(password);


  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(user => {

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

$('#google').click(function(){
  console.log("Click google login method");
  var provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;
    firebase.auth().signInWithRedirect(provider);

  });
});