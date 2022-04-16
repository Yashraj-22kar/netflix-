function validate()
{
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if(username=="abcd@gmail.com"&& password=="abcd" )
    {
        window.open("../netflix.html")
    }
    else{
        alert("Login Failed");
    }
}