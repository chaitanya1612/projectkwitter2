
//ADD YOUR FIREBASE LINKS
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCQgNqGGMUkAlfvbKou_9oUaIAGvEK977w",
    authDomain: "kwitter-ce9b7.firebaseapp.com",
    databaseURL: "https://kwitter-ce9b7-default-rtdb.firebaseio.com",
    projectId: "kwitter-ce9b7",
    storageBucket: "kwitter-ce9b7.appspot.com",
    messagingSenderId: "26032158702",
    appId: "1:26032158702:web:c88e476571edce7a5e80ff"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function addUser()
  {
      user_name=document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose:"Adding User Name"
      });
      localStorage.setItem("user_name",user_name);
  }