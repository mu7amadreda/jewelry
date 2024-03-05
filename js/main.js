function validate(){
    var user = document.getElementById("user").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    var confpass = document.getElementById("confpass").value;
    var messege = document.getElementById("error");
    messege.setAttribute("class","alert alert-danger");
    messege.setAttribute("role","alert");

    if(user=="" && email=="" && pass=="" && confpass==""){
        messege.innerHTML="Enter Data In Form";
        return false
    }else if(user.length >15 || user.length < 5 ){
        messege.innerHTML="Enter username 5-15 character";
        return false
    }else if(email.indexOf("@")==-1){
        messege.innerHTML="Enter valid E mail";
        return false
    }else if(pass.length<8){
        messege.innerHTML="Enter strong password";
        return false
    }else if(confpass != pass){
        messege.innerHTML="Not the same password";
        return false
    }else{
        return true
    }
}