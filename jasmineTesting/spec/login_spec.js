describe("Login__Testing", function () {

  describe("checkLogin() testing", function () {

    describe("checkLogin() test to pass", function () {

      it("should return the Boolean true if the username and the password match a known username and matching password using md5Encrpt function username(Jigar) password(Mehta)", function () {
        let username = "Jigar";
        let password = "Mehta";
        expect(checkLogin(username, password)).toEqual(true);
      });

    });//checkLogin() test to pass function end

    describe("checkLogin() test to fail", function () {

      it("should return Invalid Username or Password. if an invalid username is input with a valid password", function () {

        let username = "WrongUserName";
        let password = "Mehta";
        expect(checkLogin(username, password)).toEqual("Invalid Username or Password");
      });

      it("should return Invalid Username or Password. if a valid username is input with an invalid password", function () {

        let username = "Jigar";
        let password = "WrongPassWord";
        expect(checkLogin(username, password)).toEqual("Invalid Username or Password");
      });

      it("should return No username entered. if the username is an empty string", function () {

        let username = "";
        let password = "test";
        expect(checkLogin(username, password)).toEqual("No username entered");
      });

      it("should return No password entered. if the Password is empty string", function () {

        let username = "test123"
        let password = "";
        expect(checkLogin(username, password)).toEqual("No password entered");
      });

    });//checkLogin() test to fail function end

  });//End of checkLogin() function testing

  describe("md5Encrypt() testing", function () {

    describe("md5Encrypt() test to pass", function () {

      it("should return a string of the hashed value (as 32 hexadecimal characters)", function () {

        let hashValue = "HelloWorld";
        expect(md5Encrypt(hashValue)).toMatch("68e109f0f40ca72a15e05cc22786f8e6");
      });//md5Encrypt() test to pass end

    });

  });//End of md5Encrypt() function testing
});