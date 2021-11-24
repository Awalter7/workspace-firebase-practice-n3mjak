
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

var answer1 = 0;
var answer2 = 0;
var answer3 = 0;
var answer4 = 0;
var answer5 = 0;

$(".sampleSurvey input[type='submit']").click(function(e) {
  e.preventDefault(); 
  console.log("here");
  var inputdata=$('.sampleSurvey').serializeArray();
  console.log(inputdata);
  var inputJson={};
  inputdata.forEach((data)=>{
  console.log(data.name);
  console.log(data.value);
  inputJson[data.name]=data.value;
  });


firebase.firestore().collection("surveydatabase").add(inputJson);

});


firebase
  .firestore()
  .collection("surveydatabase")
  .onSnapshot(querySnapshot => {
    console.log(querySnapshot.size);
    querySnapshot.forEach(doc => {
      switch(doc.data().choice){
        case 'A': answer1++; break;
        case 'B': answer2++; break;
        case 'C': answer3++; break;
        case 'D': answer4++; break;
        case 'E': answer5++; break;
      }
      console.log(doc.data());
      console.log(doc.data().choice);
      console.log(doc.data().comm);
    });
    $('#ans1').text(answer1);
    $('#ans2').text(answer2);
    $('#ans3').text(answer3);
    $('#ans4').text(answer4);
    $('#ans5').text(answer5);

  });