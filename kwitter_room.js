
var firebaseConfig = {
      apiKey: "AIzaSyAChb06vzwMsFNpIaGnuOISbVWGT9LAcNU",
      authDomain: "kwitter-c051c.firebaseapp.com",
      databaseURL: "https://kwitter-c051c-default-rtdb.firebaseio.com",
      projectId: "kwitter-c051c",
      storageBucket: "kwitter-c051c.appspot.com",
      messagingSenderId: "299025334098",
      appId: "1:299025334098:web:a313047c1f1177623b448b",
      measurementId: "G-J50ZZSXML6"
    };
    firebase.initializeApp(firebaseConfig)
  user_name=localStorage.getItem("user_name")
  room_name=localStorage.getItem("room_name")
  document.getElementById("user_name").innerHTML="Welcome " + user_name+"😘🥰"
  function addRoom() {
     room_name=document.getElementById("room_name").value 
     firebase.database().ref("/").child(room_name).update({
      purpose:"adding room name"     
     })
localStorage.setItem("room_name",room_name)
window.location="kwitter_page.html"
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;

      console.log("room name="+Room_names)
      row="<div class='room_name' id="+Room_names+" onclick='redirecttoRoomname(this.id)'>@"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML+= row;

      
      });});}
getData();

function redirecttoRoomname(name)
{
console.log(name);
localStorage.setItem("room_name",name)
window.location="kwitter_page.html"
}

function logout() 
{
  localStorage.removeItem("user_name")
  localStorage.removeItem("room_name")
  window.location="index.html"
  
}