const firebaseConfig = {
    apiKey: "AIzaSyCX2-KhJfAu3uoxbZK0Z4PV59PGIeg4CZo",
    authDomain: "formm-65847.firebaseapp.com",
    databaseURL: "https://formm-65847-default-rtdb.firebaseio.com",
    projectId: "formm-65847",
    storageBucket: "formm-65847.appspot.com",
    messagingSenderId: "358845513013",
    appId: "1:358845513013:web:374e06d877e8785190a07c"
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var firebaseRef = firebase.database().ref("contactForm");

  firebaseRef.on("value", function(snapshot){
    snapshot.forEach(function(element){
        console.log(element.val());
    });
})