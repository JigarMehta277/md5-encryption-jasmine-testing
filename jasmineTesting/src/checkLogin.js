/**
 * checkLogin function for validation and encryption of username and password.
 * Returns Invalid Username or 
  Password. if the username input does not match a known 
  username; or the password input does not match a known 
  password; or a valid username is input with an invalid password, or 
  an invalid username is input with a valid password.
 *
 */

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
