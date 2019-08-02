var firebaseConfig = {
    apiKey: "AIzaSyA8b1nMfgXRE80oPVhSwVRpNzJYvTS1wPs",
    authDomain: "mehdi-6ae50.firebaseapp.com",
    databaseURL: "https://mehdi-6ae50.firebaseio.com",
    projectId: "mehdi-6ae50",
    storageBucket: "",
    messagingSenderId: "125430847420",
    appId: "1:125430847420:web:6c4c66925fc6bd55"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var messagesRef = firebase.database().ref('projet');

  function submitForm(e){
  e.preventDefault();
  var objet = document.getElementById('obj').value;
  var desc = document.getElementById('desc').value;
  var email = document.getElementById('email').value;
    saveMessage(objet,desc,email);

  }


  document.getElementById('contactForm').addEventListener('submit',submitForm);

  function saveMessage(objet,desc,email) {
    var newMessagesRef = messagesRef.push();
    newMessagesRef.set ({
    Objet: objet,
    Description:desc,
    Email: email,



    });

  }

