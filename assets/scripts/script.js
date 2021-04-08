var mainpassword = null;
function validatepassword(val) {
    console.log("hhhk==>",val)
    if ( val == 'clicked') {
        document.getElementById("error-mainpassword1").innerHTML = "8 Characters";
        document.getElementById("error-mainpassword2").innerHTML = "1 Number";
        document.getElementById("error-mainpassword3").innerHTML = "1 Letter";
        setTimeout(() => {
        mainpassword = document.forms["myForm"]["main-password"].value;
        var format = /\d/;
        var testletter = /[a-zA-Z]/g;

        console.log("yuyuyuyuyuuyu====>", mainpassword)

        if (mainpassword.length > 7) {
            document.getElementById("error-mainpassword1").style.color = "green";
        }
        else {
            document.getElementById("error-mainpassword1").style.color = "red";
        }
        if (format.test(mainpassword) == true) {
            document.getElementById("error-mainpassword2").style.color="green";
        }else{
            document.getElementById("error-mainpassword2").style.color="red";
        }
        if (testletter.test(mainpassword) == true) {
            document.getElementById("error-mainpassword3").style.color="green";
        }else{
            document.getElementById("error-mainpassword3").style.color="red";
        }
        if (mainpassword.length > 7 && format.test(mainpassword) == true && testletter.test(mainpassword) == true) {
            return true;
        }else {
            return false;
        }
    }, 100);
    }
}
function confirmPassword() {
    setTimeout(() => {
    var confirmPassword = document.forms["myForm"]["confirmpassword"].value;
    if (mainpassword != confirmPassword || confirmPassword == ""){
        document.getElementById("error-confirmPassword").innerHTML = "Passwords Do Not Match";
        return false;
    }else {
        document.getElementById("error-confirmPassword").innerHTML = "";
        return true;
    }
    console.log("hh==>",confirmPassword)
}, 100);
}
function passwordfocus() {
    document.getElementById("error-mainpassword1").innerHTML = "";
    document.getElementById("error-mainpassword2").innerHTML = "";
    document.getElementById("error-mainpassword3").innerHTML = "";
}
function validateForm() {
    var firstname = document.forms["myForm"]["first-name"].value;
    var lastname = document.forms["myForm"]["last-name"].value;
    var email = document.forms["myForm"]["your-email"].value;
    // var confirmemail = document.forms["myForm"]["confirm-email"].value;
    var phone = document.forms["myForm"]["your-phone"].value;
    var zipcode = document.forms["myForm"]["zip-code"].value;
    var validation1 = validatepassword("clicked");
    var validation2 = confirmPassword();

    // var message = document.forms["myForm"]["your-message"].value;

    if (firstname.length < 1) {
        document.getElementById('error-firstname').innerHTML = "&#42; Please enter your First Name"
    }
    if (lastname.length < 1) {
        document.getElementById('error-lastname').innerHTML = "&#42; Please enter your Last Name"
    }
    if (email.length < 1) {
        document.getElementById('error-email').innerHTML = " Please Enter Your Email *";
    }
    // if (confirmemail.length < 1) {
    //     document.getElementById('error-confirm').innerHTML = " Please Confirm Your Email *";
    // }
    if (phone.length < 1) {
        document.getElementById('error-phone').innerHTML = " Please Enter Your Phone *";
    }
    if (zipcode.length < 1) {
        document.getElementById('error-zipcode').innerHTML = " Please Enter Your Zipcode *";
    }

    // if (message.length<1) {
    //     document.getElementById('error-message').innerHTML = " Please Enter Your Message *";
    // }          
    // if(name.length<1 || email.length<1 || phone.length<1 || message.length<1){
    if (firstname.length < 1 || lastname.length < 1 || email.length < 1 || confirmemail.length < 1 || phone.length < 1 || zipcode.length < 1 || validation1 == false || validation2 == false) {
        document.getElementById("alertMsg").style.backgroundColor="red";
        document.getElementById("alertMsg").style.visibility="visible";
        return false;
    }else {
        document.getElementById("alertMsg").style.backgroundColor="green";
        document.getElementById("alertMsg").style.visibility="visible";
        return true
    }
}
function confirmEmail() {
    var confmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var email = document.forms["myForm"]["your-email"].value;
    if (confmail.test(email)==false){
        document.getElementById("error-email").innerHTML="Please Enter Vaild Email"
    }else {
        document.getElementById("error-email").innerHTML=""
    }
}