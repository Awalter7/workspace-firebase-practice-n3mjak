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

$("input[type='button']").click(function(e) {

  const inputdata=$("form").serializeArray();
  console.log(inputdata);
  

  var inputJson={};
  for(var i=0;i<inputdata.length;i++){
    var n = inputdata[i]["name"];
    var v = inputdata[i]["value"];
    inputJson[n]=v;
    console.log(n+' '+v);
  }
  firebase.firestore().collection("hotellist").add(inputJson);

  $("form")[0].reset();
});

firebase
  .firestore()
  .collection("hotellist")
  .onSnapshot(querySnapshot => {
    console.log(querySnapshot.size);
    querySnapshot.forEach(doc => {
      console.log(doc.data());
      console.log(doc.data().room);
      console.log(doc.data().checkout);
    });
  });
