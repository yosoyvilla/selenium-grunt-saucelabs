require("jasminewd2");
require('jasmine-given');

var LoginPage = require("../pom/login_page.js");

describe("Login en mutual", function() {
  var page = new LoginPage();
  describe("Ingresando a la pagina de login", function() {
    Given(function() {
      page.visitPage();
    });
    describe("Cuando se ingresa el usuario", function() {
      Given(function() {
        page.fillUser("ADMIN");
      });
      Given("Cuando se ingresa el password", function() {
        page.fillPassword("ADMIN");
      });
      When("Se oprime el boton login", function() {
        page.login();
      });
      Then("Debe ingresa a la pantalla de buscar afiliado", function() {
        page.getCurrentPage().then(function(text) {
       expect(text).toEqual("Consultar Afiliado");
        });
      });
    });
  });
});