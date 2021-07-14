document.getElementById("signin").onsubmit = function () {
    var user = new User(
        document.getElementById("signin_email").value,
        document.getElementById("signin_pass").value
    );

    localStorage.setItem("sigined_user", JSON.stringify(user))

    alert("Você entrou com o email:" + user.email + " e a senha:" + user.pass);

    return false;
}