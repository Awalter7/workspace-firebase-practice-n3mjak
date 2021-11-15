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
$("#signup-form").submit(function(e) {
  e.preventDefault();
  //get the username(email) and password from the form
  // change the following code
  var email    = $("#signup-form input[name='username']").val();
  var password = $("#signup-form input[name='password']").val();
  var douppass = $("#signup-form input[name='cpassword']").val();

  if(password != douppass){
    alert("The passwords do not match");
  }else{
    firebase
      // create a user with email address and password

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
  }
});

$('#google').click(function(){
  
var provider = new firebase.auth.signInWithPopup(provider).then((result) =>{
  console.log('click google log in method')
});});
