
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyCDLSI_1Ci2TS2c4kVX-H2vLv0z0ZkPzNw",
      authDomain: "c93kwitter-ae986.firebaseapp.com",
      projectId: "c93kwitter-ae986",
      storageBucket: "c93kwitter-ae986.appspot.com",
      messagingSenderId: "974650574920",
      appId: "1:974650574920:web:46ccd016fc50b228d9b07d"
    };

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       //start code
       console.log("Room Name - " + Room_names);
       row = "<div class ='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
       //end code

      });});}
getData();
function addRoom()
       {
            room_name = document.getElementById("room_name").value;

            firebase.database().ref("/").child(room_name).update({
                  purose : "adding room name"
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
      window.location = "kwitter.html";
}
