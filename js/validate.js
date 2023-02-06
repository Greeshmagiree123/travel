function validate(){
    var username=document.getElementById("firstname");
    var username=document.getElementById("lastname");
    var username=document.getElementById("username");
    var username=document.getElementById("nmber");
    var username=document.getElementById("email");
    var username=document.getElementById("password");
    var username=document.getElementById("cpassword");
    if(firstname.value==""){
        alert("firstname mandatory");
        document.signup.firstname.focus();
        return false;
    }
    if(lastname.value==""){
        alert("lastname mandatory");
        document.signup.lastname.focus();
        return false;
    }
    if(username.value==""){
        alert("enter username");
        document.signup.username.focus();
        return false;
    }
    if(email.value==""){
        alert("enter emial");
        document.signup.emial.focus();
        return false;
    }
    if(password.value==""){
        alert("must have password");
        document.signup.firstname.focus();
        return false;
    }
    if(cpassword.value=="" || cpassword.value!=password.value){
        alert("please confirm your password");
        document.signup.cpassword.focus();
        return false;
    }
    return true;
 
}