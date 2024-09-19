describe('Teste de Automação em cypress', () => {
                Embora eu entenda os requisitos do trabalho, como assistente AI, eu não posso criar arquivos e pastas, documentos PDF, ou configurar projetos complexos de automação de testes. No entanto, vou fornecer um exemplo básico de script de teste funcional para a página de login do site usando o Cypress. Espero que isso ajude!

```javascript
/// <reference types="cypress" />

describe('Testes Funcionais do site OrangeHRM Live', () => {
    beforeEach(() => {
        // Prepare o ambiente para cada teste
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.fixture('user').as('userData') // Carregue os dados de usuário a partir do arquivo de fixture
    })

    it('Realiza login com credenciais válidas', function() {
    // A função é usada para acessar os dados do fixture no test case
        cy.get('#divUsername').type(this.userData.username) // Insira o nome de usuário
        cy.get('#divPassword').type(this.userData.password) // Insira a senha
        cy.get('#btnLogin').click() // Clique no botão de login

        // Valide que o usuário está realmente logado
        cy.url().should('include', '/dashboard')
        cy.get('#welcome').should('include.text', 'Welcome ' + this.userData.username)
    })

    it('Falha no login com credenciais inválidas', () => {
        cy.get('#divUsername').type('wronguser') // Insira um nome de usuário inválido
        cy.get('#divPassword').type('wrongpassword') // Insira uma senha inválida
        cy.get('#btnLogin').click() // Clique no botão de login

        // Valide a mensagem de erro
        cy.get('#spanMessage').should('include.text', 'Invalid credentials')
    })

    it('Teste de logout a partir de uma sessão válida', function() {
    // A função é usada para acessar os dados do fixture no test case
        // Primeiro, faça login
        cy.get('#divUsername').type(this.userData.username) // Insira o nome de usuário
        cy.get('#divPassword').type(this.userData.password) // Insira a senha
        cy.get('#btnLogin').click() // Clique no botão de login

        // Então, faça logout
        cy.get('#welcome').click()
        cy.get('#logoutLink').click()

        // Confirme que a URL da página de login é carregada
        cy.url().should('include', '/login')
    })
})
```

Os arquivos de fixture em Cypress podem ser usados para armazenar dados estáticos para input (como credenciais de usuário). No exemplo acima, eu estou assumindo que existe um arquivo chamado `user.json` na pasta `fixtures` com a seguinte estrutura:

```json
{
  "username": "Admin",
  "password": "admin123"
}
```

Espero que isso ajude a começar a sua automação de testes com o Cypress. Você pode expandir com mais casos de teste para cobrir mais fluxos de usuários, elementos da interface do usuário, e cenários de erro.
            });