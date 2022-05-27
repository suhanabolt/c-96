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

  function send() 
  {
  msg=document.getElementById("msg").value
  firebase.database().ref(room_name).push({
  name:user_name,
  message:msg,
  like:0
  })
  document.getElementById("msg").value=""
  }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function logout() 
{
  localStorage.removeItem("user_name")
  localStorage.removeItem("room_name")
  window.location="index.html"
  
}

