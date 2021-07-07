
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCv6P1Eh1e1Fd-nwkOJo4HfBfOrfeC-ENM",
      authDomain: "kwitter-86bb7.firebaseapp.com",
      databaseURL: "https://kwitter-86bb7-default-rtdb.firebaseio.com",
      projectId: "kwitter-86bb7",
      storageBucket: "kwitter-86bb7.appspot.com",
      messagingSenderId: "344609414356",
      appId: "1:344609414356:web:8e3a2a5311c3d59b116f41"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    var user_name= localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class= 'room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
       window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}