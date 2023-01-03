const firebaseConfig = {
    apiKey: "AIzaSyDucTSoZcsS8N6-HPGI85x5evs9ScEmi7c",
    authDomain: "miniproject-7b6f6.firebaseapp.com",
    databaseURL: "https://miniproject-7b6f6-default-rtdb.firebaseio.com",
    projectId: "miniproject-7b6f6",
    storageBucket: "miniproject-7b6f6.appspot.com",
    messagingSenderId: "1936285328",
    appId: "1:1936285328:web:35f1d18a150256c9304215"
  };

//---------------------------------------------------------------------------------//
  //Initialize firebse 
  firebase.initializeApp(firebaseConfig);
//----------------------------------------------------------------------------------//
  //Reference the Firebase
  var MiniProjectDB = firebase.database().ref('MiniProject');
//----------------------------------------------------------------------------------//
  document.getElementById("contactForm").addEventListener("submit",submitForm);

//----------------------------------------------------------------------------------//
function submitForm(e){
    e.preventDefault();
    var rname = getElementVal('rname');
    var remail = getElementVal('remail');
    var rpass = getElementVal('rpass');

    saveMessages(rname,remail,rpass);
    
    console.log(rname,rpass);

}
const saveMessages = (rname,remail,rpass) =>{
    var newform = MiniProjectDB.push();
    newform.set({
        rname: rname,
        remail: remail,
        rpass: rpass,
    });
    
};
const getElementVal = (id) =>{
    return document.getElementById(id).value;
};
//------------------------------------------------------------------------------------//






