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
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var specialization = getElementVal("specialization");
    var price = getElementVal("price");
  
    saveMessages(name, specialization, price);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, specialization, price) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      specialization: specialization,
      price: price,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };