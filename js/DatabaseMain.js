
const firebaseConfig = {
    //FireBase API KEY
  };


  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth()
  const database = firebase.database()

  document.getElementById('contactForm').addEventListener('submit',register)
  document.getElementById('contactForm1').addEventListener('submit',login)

  function register(e){
    e.preventDefault();
    rname = document.getElementById('rname').value
    remail = document.getElementById('remail').value
    rpass = document.getElementById('rpass').value
    addr1 = document.getElementById('addr1').value
    addr2 = document.getElementById('addr2').value

    
    auth.createUserWithEmailAndPassword(remail,rpass)
    .then(function(){
      var user = auth.currentUser
      var database_ref = database.ref()
      var user_data = {
        rname: rname,
        remail: remail,
        rpass: rpass,
        addr1: addr1,
        addr2: addr2
      }
      database_ref.child('MiniProject/'+user.uid).set(user_data)
      alert('Registration Done Successfully!!!')
      window.location = 'index.html';
    })
    .catch(function(error){
      // var error_code = error.error_code
      var error_message = error.error_message
      alert(error_message)
      window.location = "index.html";
    })
  }

function login(e){
  e.preventDefault();
  name1 = document.getElementById('name1').value
  pass = document.getElementById('pass').value

  auth.signInWithEmailAndPassword(name1, pass)
  .then(function(){
    var user = auth.currentUser
    var database_ref = database.ref()
    var user_data = {
      name1:name1,
      pass: pass,
    }
    database_ref.child('MiniProject/'+user.uid).update(user_data)
    alert("Logined Successfully!!!");
   
    })
  .catch(function(){
    alert("Invalid Entry");
  })
}





