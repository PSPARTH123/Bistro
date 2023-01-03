
const firebaseConfig = {
    apiKey: "AIzaSyAPMse7iEZC8qyjWoijXHsQ1FmFK18c26E",
    authDomain: "paymentgateway-f582a.firebaseapp.com",
    projectId: "paymentgateway-f582a",
    storageBucket: "paymentgateway-f582a.appspot.com",
    messagingSenderId: "974996649796",
    appId: "1:974996649796:web:9adcce33d86e8913028911",
    measurementId: "G-KYR33JWEZV"
  };

    firebase.initializeApp(firebaseConfig);

// render recaptcha verifier
render();
function render() {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    recaptchaVerifier.render();
}

// function for send OTP
function phoneAuth() {
    var number = document.getElementById('number').value;
    num = "+91"+number
    firebase.auth().signInWithPhoneNumber(num, window.recaptchaVerifier).then(function (confirmationResult){
        window.confirmationResult = confirmationResult;
        coderesult = confirmationResult;
        document.getElementById('sender').style.display = 'none';
        document.getElementById('verifier').style.display = 'block';
        alert('OTP Sent');
    }).catch(function (error) {
        alert(error.message);
    });
}

function codeverify() {
    var code = document.getElementById('verificationcode').value;
    coderesult.confirm(code).then(function(){
        document.getElementsByClassName('p-conf')[0].style.display = 'block';
        document.getElementsByClassName('n-conf')[0].style.display = 'none';
        // alert('OTP Verified');
        // alert("Transaction is successfully Completed!!!")
        setTimeout(myURL,3500);
        function myURL(){
            window.location = "pagefive.html";
        }
    }).catch(function () {
        document.getElementsByClassName('p-conf')[0].style.display = 'none';
        document.getElementsByClassName('n-conf')[0].style.display = 'block';
        setTimeout(myURL,3500);
        function myURL(){
            window.location = "pagesix.html";
        }
        // alert('OTP Not correct');
    })
}
//---------------------------------------------------------------------------------------------------------//
function validate(){
    var name = document.getElementById('name').value
    var number = document.getElementById('number').value
    var cardnumber = document.getElementById('Cardnumber').value
    var cvc = document.getElementById('cvc').value
    var year = document.getElementById('year').value
    if(name.length<=0){
        alert("Invalid Name")
    }
    else if(number.length<10 || number.length>10){
        alert("Invalid Phone Number")
    }
    else if(cardnumber.length<16 || cardnumber.length>16){
        alert("Invalid Card Number")
    }
    else if(cvc.length>3 || cvc.length<3){
        alert("Invalid CVV Number")
    }
    else if(year.length>4 || year.length<4){
        alert("Invalid Year")
    }
    else{
        phoneAuth()
    }

}