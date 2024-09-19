describe("Login", () => {
  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');;
  });

  it("deve fazer login com credenciais válidas", () => {
    cy.fixture("login").then((login) => {
      cy.get("#txtUsername").type(login.username);
      cy.get("#txtPassword").type(login.password);
      cy.get("#btnLogin").click();
      cy.url().should("include", "/dashboard");
    });
  });

  it("deve exibir mensagem de erro com credenciais inválidas", () => {
    cy.fixture("login").then((login) => {
      cy.get("#txtUsername").type(login.invalidUsername);
      cy.get("#txtPassword").type(login.invalidPassword);
      cy.get("#btnLogin").click();
      cy.get(".message").should("be.visible");
    });
  });
});

describe("Cadastro de Funcionário", () => {
  beforeEach(() => {
    cy.visit("/symfony/web/index.php/pim/addEmployee");
  });

  it("deve cadastrar um funcionário com informações válidas", () => {
    cy.fixture("cadastro").then((cadastro) => {
      cy.get("#firstName").type(cadastro.firstName);
      cy.get("#lastName").type(cadastro.lastName);
      // ... preencher os demais campos
      cy.get("#btnSave").click();
      cy.get(".success-msg").should("be.visible");
    });
  });

  it("deve exibir mensagens de erro para campos inválidos", () => {
    cy.get("#firstName").type("João");
    // ... deixar campos obrigatórios em branco
    cy.get("#btnSave").click();
    cy.get(".error").should("be.visible");
  });
});
