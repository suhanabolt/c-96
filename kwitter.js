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

function adduser()
 {
user_name=document.getElementById("user_name").value
localStorage.setItem("user_name",user_name)
window.location="kwitter_room.html"
}