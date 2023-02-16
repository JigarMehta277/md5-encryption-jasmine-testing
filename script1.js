
window.onload = function () {
    var formhandler = document.forms.login__form;
    formhandler.onsubmit = ProcessForm;

    function ProcessForm() {

        var username = formhandler.login__user__name.value;
        var password = formhandler.login__passwords.value;
        var outputdiv = document.getElementById("output");
        outputdiv.style.display = "block";
        var msg = checkLogin(username, password);
        var message = "Welcome Back!";
        if (msg == true) {
            outputdiv.innerHTML = message;
        }
        else {
            outputdiv.innerHTML = msg;
        }
        return false;
    }

    function checkLogin(username, password) {

        var emptyUserName = "No username entered";
        var emptyPassword = "No password entered";
        var errorMessage = "Invalid Username or Password";

        var knownUserName = "Jigar";
        var knownPassWord = "Mehta";

        var encryptUsername = md5Encrypt(knownUserName);
        var encryptPassword = md5Encrypt(knownPassWord);

        if (username === "") {
            return emptyUserName;
        } else if (password === "") {
            return emptyPassword;
        } else {
            if (encryptUsername === md5Encrypt(username) && encryptPassword === md5Encrypt(password)) {
                return true;
            }
            else if (encryptUsername !== md5Encrypt(username) || encryptPassword !== md5Encrypt(password)) {
                return errorMessage;
            }
        }
    }

    function md5Encrypt(stringIn) {
        "use strict";
        var md5string = new CryptoJS.MD5(stringIn);
        return md5string.toString();
    }
};