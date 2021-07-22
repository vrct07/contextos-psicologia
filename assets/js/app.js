  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAZSG8jscC8C0TsJeAPDNnrHVL_kpw3ee8",
    authDomain: "dbcontextos.firebaseapp.com",
    projectId: "dbcontextos",
    storageBucket: "dbcontextos.appspot.com",
    messagingSenderId: "414487014581",
    appId: "1:414487014581:web:673a29cd40cca0a59562fc"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Reference contacInfo collections
  let contactInfo = firebase.database().ref("infos");


  // Listen for a submit
document.getElementById('contactForm').addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    // Get input Values
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let subject = document.querySelector("#subject").value;
    let message = document.querySelector("#message").value;
    console.log(name, email, subject, message);

    saveContactInfo(name, email, subject, message);

    document.getElementById('contactForm').reset();
}

  // Save infos to Firebase
function saveContactInfo(name, email, subject, message) {
    let newContactInfo = contactInfo.push();

    newContactInfo.set({
        name: name,
        email: email,
        subject: subject,
        message: message,
    });
}

  // Show alert
  function send(){ 
      document.querySelector('.alert').style.display = '';
  }

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = '';
  }, 3000);