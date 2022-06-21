function makeRandomString(char_length, num_length) {
  var result = "";
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  var numbers = "0123456789";
  for (let i = 0; i < char_length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  for (let i = 0; i < num_length; i++) {
    result += numbers.charAt(Math.floor(Math.random() * numbers.length));
  }
  return result;
}

describe("Register user, then login and create a blog", function () {
  it("Gets, types and asserts", function () {
    const username = makeRandomString(8, 4);
    const password = "dfsdfsdfsdfsd";
    const email = username + "@email.com";
    const blogName = makeRandomString(4, 4);
    const blogDescription = "some description";

    cy.visit("https://tblog.kstrahilov.dev/register");

    //Registration form

    cy.get("[id=first_name]").type("Cypress").should("have.value", "Cypress");
    cy.get("[id=last_name]").type("Testuser").should("have.value", "Testuser");
    cy.get("[id=username]").type(username).should("have.value", username);
    cy.get("[id=email]").type(email).should("have.value", email);
    cy.get("[id=password]").type(password).should("have.value", password);
    cy.get("[id=confirm-password]")
      .type(password)
      .should("have.value", password);
    cy.get('[type="submit"]').click();
    cy.wait(5000);
    //Login
    cy.url().should("include", "/login");
    cy.get("[id=username]").type(username).should("have.value", username);
    cy.get("[id=password]").type(password).should("have.value", password);
    cy.get('[type="submit"]').click();

    cy.url().should("include", "/");

    cy.wait(5000);

    cy.contains("Create blog").click();
    cy.get("[name=blogName]").type(blogName).should("have.value", blogName);
    cy.get("[name=blogDescription]")
      .type(blogDescription)
      .should("have.value", blogDescription);
    cy.get('[type="submit"]').click();
    cy.wait(5000);
    cy.reload();
    cy.wait(5000);
    cy.scrollTo(0, 500);
    cy.get(".MuiTypography-h6").contains(blogName);
  });
});
