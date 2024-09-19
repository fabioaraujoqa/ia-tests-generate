describe('Teste de Automação em cypress', () => {
                Lamentamos, mas seu pedido não pode ser processado. Como modelo de linguagem AI, não tenho a capacidade de gerar arquivos e pastas na estrutura de diretório especificada, criar e executar scripts de código Cypress, ou gerar artefatos como documentos PDF ou arquivos README.

Posso, no entanto, fornecer um exemplo de código simples de um script Cypress para um recurso de autenticação. Certifique-se de substituir os seletor CSS, URL e dados de usuário nos seguintes códigos, conforme necessário:

```javascript
describe('Teste de Autenticação', () => {
    beforeEach(() => {
        cy.visit('https://www.microsoft.com/pt-br/') // Substitute with the login page URL
    })

    it('Realiza login com credenciais válidas', () => {
        cy.get('#username') // Substitute with the CSS selector for the username field
            .type('valid_username') // Substitute with a valid username

        cy.get('#password') // Substitute with the CSS selector for the password field
            .type('valid_password') // Substitute with a valid password

        cy.get('#login-button') // Substitute with the CSS selector for the login button
            .click()

        cy.url()
            .should('include', '/home') // Substitute with the expected URL after successful login
    })

    it('Falha ao tentar realizar login com credenciais inválidas', () => {
        cy.get('#username') // Substitute with the CSS selector for the username field
            .type('invalid_username') // Substitute with an invalid username

        cy.get('#password') // Substitute with the CSS selector for the password field
            .type('invalid_password') // Substitute with an invalid password

        cy.get('#login-button') // Substitute with the CSS selector for the login button
            .click()

        cy.get('#error-message') // Substitute with the CSS selector for the error message
            .should('be.visible') // Assert that the error message is visible
    })
})
```

Recomendo a consulta de um engenheiro de Automação de Testes ou Desenvolvedor de Software para ajudá-lo a implementar os requisitos listados.
            });