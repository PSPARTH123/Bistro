const firebaseConfig = {
    //FireBASE API KEY
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






