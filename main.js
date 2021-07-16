document.getElementById("signin").onsubmit = function () {
    var user = new User(
        document.getElementById("signin_email").value,
        document.getElementById("signin_pass").value
    );

    AuthService
        .authenticate(user)
        .then(data=>{
            localStorage.setItem("user_access_token", data)
        })

    return false;
}