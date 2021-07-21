  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDE_lUZj5tfbSSkuMppa1djKVMmbutYO5U",
    authDomain: "bdcontextos.firebaseapp.com",
    projectId: "bdcontextos",
    storageBucket: "bdcontextos.appspot.com",
    messagingSenderId: "982159884747",
    appId: "1:982159884747:web:441d3d10bfe5927a1e764e",
    measurementId: "G-W0NJ39M789"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('message');


//Listen for form submit
document.getElementById('contForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
    e.preventDefault();

   // Get  values
   var name = getInputVal('name'); 
   var email = getInputVal('email'); 
   var subject = getInputVal('subject'); 
   var message = getInputVal('message'); 

   // Save message
   saveMessage(name, email, subject, message);

   // Show alert
    document.querySelector('.alert').style.display = 'block';

   // Hide alert after 3 seconds
   setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
   }), 3000;

   // Clear form
   document.getElementById('contForm').reset();
}


// Function to get  get form values
function getInputVal(id){
    return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, subject, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
       name:name,
       email:email,
       subject:subject,
       message:message 
    });
}