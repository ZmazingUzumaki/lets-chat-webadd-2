
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAwfCx3Bz27uTWWXsnD4rrJGFa8UqQiiX8",
    authDomain: "kwitter-d9a35.firebaseapp.com",
    databaseURL: "https://kwitter-d9a35-default-rtdb.firebaseio.com",
    projectId: "kwitter-d9a35",
    storageBucket: "kwitter-d9a35.appspot.com",
    messagingSenderId: "527244973864",
    appId: "1:527244973864:web:83fddc1751e231f11a221d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("Username");
    document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

    function addroom() {
           room_name = document.getElementById("room_name").value;
  
          localStorage.setItem("Roomname",room_name);
      
          window.location = "kwitter_page.html";
          firebase.database().rel("/").child(room_name).update({
            purpose: "Adding Room Name"
          });
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
