function validate()
{
    var name = document.getElementById("name").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    

    if(name=="Admin" && username=="abcd@gmail.com"&& password=="abcd" )
    {
        alert("Sign-Up Successfully");
        window.open("../signin.html");
    }
    else{
        alert("Login Failed");
    }
}