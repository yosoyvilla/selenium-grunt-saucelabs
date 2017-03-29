var LoginPage = (function () {
    function LoginPage() {
        this.userNameField = element(By.id("userInput"));
        this.passwordField = element(By.id("passwordInput"));
        this.loginButton = element(By.id("btnIngresar"));
        this.currentPage = element(By.id("lblTitleConsultAfiliado"));
    }

    LoginPage.prototype.visitPage = function () {
        browser.get("http://eter:9002/#/");
    };

    LoginPage.prototype.fillUser = function (username) {
        this.userNameField.sendKeys(username);
    };

    LoginPage.prototype.fillPassword = function (password) {
        if (password == null) {
            password = "password";
        }
        this.passwordField.sendKeys(password);
    };

    LoginPage.prototype.login = function () {
        this.loginButton.click();
    };

    LoginPage.prototype.getCurrentPage = function () {
        return this.currentPage.getText();
    };

    return LoginPage;

})();

module.exports = LoginPage;