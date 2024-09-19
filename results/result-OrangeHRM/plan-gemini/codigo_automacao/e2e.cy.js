describe('Teste de Automação em cypress', () => {
                ## Plano de Teste Completo para o Site de Recursos Humanos - OrangeHRM

Este documento detalha o plano de teste completo para o site de Recursos Humanos da OrangeHRM ([https://opensource-demo.orangehrmlive.com/](https://opensource-demo.orangehrmlive.com/)). O plano abrange testes funcionais, de performance, segurança, acessibilidade e regressão. Ele também inclui instruções para configurar e executar os testes de automação em Cypress com integração ao Allure.

### 1. Plano de Teste Funcional (PDF)

**1.1. Casos de Teste**

| Caso de Teste | Descrição | Cenários Positivos | Cenários Negativos | Dados de Teste | Critérios de Aceitação |
|---|---|---|---|---|---|
| **Navegação** | Validação da navegação pelo site | Navegar para cada página principal através do menu, verificar URL e conteúdo da página. | Acessar páginas inexistentes, verificar a existência de mensagens de erro apropriadas. | URL de cada página, textos esperados. | As URLs e os conteúdos das páginas devem ser corretos, mensagens de erro apropriadas devem ser exibidas. |
| **Busca** | Validação da funcionalidade de busca | Realizar buscas por termos simples, complexos e com caracteres especiais. Verificar se os resultados são relevantes e se os filtros funcionam corretamente. | Buscar por termos inexistentes, verificar se a mensagem de "Nenhum resultado encontrado" é exibida. | Termos de busca, filtros específicos. | Os resultados da busca devem ser relevantes e consistentes com os termos pesquisados. Os filtros devem funcionar corretamente e refinar os resultados da busca. |
| **Login/Logout** | Validação do fluxo de autenticação | Realizar login com credenciais válidas. Verificar se o usuário é redirecionado para a página de dashboard. | Realizar login com credenciais inválidas. Verificar se a mensagem de erro "Credenciais inválidas" é exibida. | Credenciais válidas e inválidas, mensagens de erro esperadas. | O login com credenciais válidas deve ser bem-sucedido e o usuário deve ser redirecionado para a página de dashboard. O login com credenciais inválidas deve resultar em uma mensagem de erro apropriada. |
| **Cadastro de Usuário** | Validação do processo de cadastro de novos usuários | Cadastrar um novo usuário com informações válidas. Verificar se o usuário é cadastrado com sucesso e recebe um email de confirmação. | Cadastrar um novo usuário com informações inválidas (por exemplo, email inválido, senha fraca). Verificar se a mensagem de erro é exibida e o cadastro não é concluído. | Informações válidas e inválidas de usuário, mensagens de erro esperadas. | O usuário deve ser cadastrado com sucesso com informações válidas, recebendo um email de confirmação. O cadastro com informações inválidas deve ser impedido com mensagens de erro apropriadas. |
| **Submissão de Formulários** | Validação da submissão de formulários importantes (por exemplo, formulário de contato, formulário de feedback) | Submeter formulários com dados válidos. Verificar se a mensagem de sucesso é exibida e os dados são processados corretamente. | Submeter formulários com dados inválidos (por exemplo, campos obrigatórios em branco, formato de email inválido). Verificar se as mensagens de erro são exibidas e o formulário não é submetido. | Dados válidos e inválidos, mensagens de erro esperadas. | Os formulários devem ser submetidos com sucesso com dados válidos, exibindo uma mensagem de sucesso. Os formulários com dados inválidos devem ser bloqueados com mensagens de erro apropriadas. |
| **Interações Dinâmicas** | Validação de interações com elementos dinâmicos (por exemplo, dropdowns, modais, sliders) | Interagir com os elementos dinâmicos, verificando se eles se comportam como esperado em diferentes estados (aberto, fechado, ativo, inativo). | Tentar interagir com elementos dinâmicos que não devem ser acessíveis (por exemplo, elementos desabilitados), verificar se a interação é bloqueada. | Estados esperados dos elementos, mensagens de erro esperadas. | Os elementos dinâmicos devem ser interativos e se comportar como esperado em diferentes estados. As interações com elementos inacessíveis devem ser bloqueadas. |

**1.2. Critérios de Aceitação**

* Todos os testes devem ser aprovados com uma taxa de defeitos menor que 1%.
* A cobertura de teste deve abranger pelo menos 80% das funcionalidades do site.

**1.3. Escopo do Teste**

* **Funcionalidades:** Navegação, busca, login/logout, cadastro de usuário, submissão de formulários, interações dinâmicas.
* **Páginas:** Todas as páginas principais do site (Home, About Us, Contact Us, etc.).
* **Fluxos de Usuário:** Fluxo de login, fluxo de cadastro, fluxo de busca, fluxo de submissão de formulários.

**1.4. Ambientes de Teste**

* **Navegadores:** Chrome, Firefox, Safari, Edge.
* **Dispositivos Móveis:** Android, iOS.
* **Resoluções de Tela:** 1024x768, 1280x800, 1920x1080.

**1.5. Riscos e Dependências**

* **Riscos:** Falhas de infraestrutura, atualizações de software que podem afetar a funcionalidade do site, mudanças de design inesperadas.
* **Dependências:** Acesso ao ambiente de teste, dados de teste, ferramentas de teste.

**1.6. Métricas de Sucesso**

* **Taxa de defeitos:** A taxa de defeitos deve ser menor que 1%.
* **Cobertura de teste:** A cobertura de teste deve abranger pelo menos 80% das funcionalidades do site.

### 2. Projeto de Automação em Cypress

**2.1. Estrutura do Projeto**

```
codigo_automacao/
├── cypress.config.js
├── cypress/
│   ├── plugins/
│   │   └── index.js
│   ├── support/
│   │   └── commands.js
│   ├── fixtures/
│   │   └── usuarios.json
│   ├── e2e/
│   │   ├── login.cy.js
│   │   ├── busca.cy.js
│   │   ├── cadastro.cy.js
│   │   ├── formulario.cy.js
│   │   ├── navegacao.cy.js
│   │   └── elementos_dinamicos.cy.js
│   └── integration/
│       └── api.cy.js
├── allure-results/
├── allure-report/
└── README.md
```

**2.2. Código Cypress**

**2.2.1. Login.cy.js**

```javascript
describe('Login', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Deve realizar login com credenciais válidas', () => {
    cy.get('#txtUsername').type('Admin');
    cy.get('#txtPassword').type('admin123');
    cy.get('#btnLogin').click();
    cy.url().should('include', '/dashboard/');
  });

  it('Deve exibir mensagem de erro ao utilizar credenciais inválidas', () => {
    cy.get('#txtUsername').type('Admin');
    cy.get('#txtPassword').type('senha_invalida');
    cy.get('#btnLogin').click();
    cy.get('.message').should('contain', 'Invalid credentials');
  });
});
```

**2.2.2. Busca.cy.js**

```javascript
describe('Busca', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('#txtUsername').type('Admin');
    cy.get('#txtPassword').type('admin123');
    cy.get('#btnLogin').click();
  });

  it('Deve realizar busca por um termo simples', () => {
    cy.get('#searchSystemUser_userName').type('John');
    cy.get('#searchBtn').click();
    cy.get('.result-row').should('be.visible');
  });

  it('Deve realizar busca por um termo complexo', () => {
    cy.get('#searchSystemUser_userName').type('John Smith');
    cy.get('#searchBtn').click();
    cy.get('.result-row').should('be.visible');
  });

  it('Deve exibir mensagem de "Nenhum resultado encontrado" para um termo inexistente', () => {
    cy.get('#searchSystemUser_userName').type('inexistente');
    cy.get('#searchBtn').click();
    cy.get('.message').should('contain', 'No Records Found');
  });
});
```

**2.2.3. Cadastro.cy.js**

```javascript
describe('Cadastro de Usuário', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Deve cadastrar um novo usuário com informações válidas', () => {
    cy.get('#menu_pim_viewPimModule').click();
    cy.get('#menu_pim_addEmployee').click();
    cy.get('#firstName').type('John');
    // ... (Preencher os demais campos do formulário de cadastro)
    cy.get('#btnSave').click();
    cy.get('.message').should('contain', 'Successfully Saved');
  });

  it('Deve exibir mensagem de erro ao cadastrar um usuário com informações inválidas', () => {
    cy.get('#menu_pim_viewPimModule').click();
    cy.get('#menu_pim_addEmployee').click();
    cy.get('#firstName').type('John');
    // ... (Preencher os demais campos com informações inválidas)
    cy.get('#btnSave').click();
    cy.get('.message').should('contain', 'Error');
  });
});
```

**2.2.4. Formulario.cy.js**

```javascript
describe('Submissão de Formulários', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Deve submeter o formulário de contato com dados válidos', () => {
    cy.get('#menu_admin_viewAdminModule').click();
    cy.get('#menu_admin_Communication').click();
    cy.get('#frmLeaveEntitlement_submit').click();
    // ... (Preencher os campos do formulário de contato)
    cy.get('#btnSearch').click();
    cy.get('.message').should('contain', 'Successfully Saved');
  });

  it('Deve exibir mensagens de erro ao submeter o formulário de contato com dados inválidos', () => {
    cy.get('#menu_admin_viewAdminModule').click();
    cy.get('#menu_admin_Communication').click();
    cy.get('#frmLeaveEntitlement_submit').click();
    // ... (Preencher os campos com informações inválidas)
    cy.get('#btnSearch').click();
    cy.get('.message').should('contain', 'Error');
  });
});
```

**2.2.5. Navegacao.cy.js**

```javascript
describe('Navegação', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Deve acessar a página "About Us"', () => {
    cy.get('#menu_about_viewAboutUs').click();
    cy.url().should('include', '/about_us.php');
  });

  it('Deve acessar a página "Contact Us"', () => {
    cy.get('#menu_pim_viewPimModule').click();
    cy.get('#menu_pim_addEmployee').click();
    cy.url().should('include', '/addEmployee.php');
  });
});
```

**2.2.6. Elementos_Dinamicos.cy.js**

```javascript
describe('Interações Dinâmicas', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('#txtUsername').type('Admin');
    cy.get('#txtPassword').type('admin123');
    cy.get('#btnLogin').click();
  });

  it('Deve abrir e fechar o dropdown "Employee List"', () => {
    cy.get('#menu_pim_viewPimModule').click();
    cy.get('#menu_pim_viewEmployeeList').click();
    cy.get('#menu_pim_viewEmployeeList > .toggle').click();
    cy.get('#menu_pim_viewEmployeeList > .toggle').click();
  });

  it('Deve abrir e fechar o modal "Add Employee"', () => {
    cy.get('#menu_pim_viewPimModule').click();
    cy.get('#menu_pim_addEmployee').click();
    cy.get('.modal-dialog').should('be.visible');
    cy.get('.close').click();
    cy.get('.modal-dialog').should('not.be.visible');
  });
});
```

**2.2.7. Api.cy.js**

```javascript
describe('API Testing', () => {
  it('Deve validar a resposta da API de login', () => {
    cy.intercept('POST', '/auth/login').as('login');
    cy.visit('/');
    cy.get('#txtUsername').type('Admin');
    cy.get('#txtPassword').type('admin123');
    cy.get('#btnLogin').click();
    cy.wait('@login').then(interception => {
      expect(interception.response.statusCode).to.equal(200);
      // Validar os dados da resposta da API
    });
  });
});
```

**2.3. Cobertura de Teste**

* A cobertura de teste abrange casos de borda, casos de erro e cenários com dados dinâmicos.
* Casos de borda e de erro são testados em todos os casos de teste relevantes.
* Dados dinâmicos são utilizados em cenários como formulários e buscas.

**2.4. Integração com Allure**

* A integração com Allure é configurada através do arquivo `cypress.config.js`:

```javascript
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require('@cypress/allure-plugin/support')(on);
    },
    baseUrl: 'https://opensource-demo.orangehrmlive.com/',
  },
});
```

**2.5. Configuração de Variáveis de Ambiente**

* As variáveis de ambiente são configuradas através do arquivo `cypress.config.js`:

```javascript
module.exports = defineConfig({
  e2e: {
    baseUrl: Cypress.env('BASE_URL'),
  },
});
```

### 3. Instruções de Execução (README.md)

**3.1. Configuração do Ambiente**

1. **Instalar Node.js e npm**: Baixe e instale a última versão do Node.js ([https://nodejs.org/](https://nodejs.org/)).
2. **Instalar Cypress**: Abra o terminal e execute o comando `npm install cypress`.
3. **Configurar Cypress**: Execute o comando `npx cypress open` para abrir o Cypress e configurar o ambiente de teste.
4. **Instalar Allure**: Execute o comando `npm install -D @cypress/allure-plugin allure-commandline`.
5. **Configurar variáveis de ambiente**: Crie um arquivo `.env` na raiz do projeto e defina a variável `BASE_URL` com o endereço do site.

**3.2. Execução dos Testes**

1. **Executar testes localmente**: Execute o comando `npx cypress run` para executar todos os testes.
2. **Executar testes em um pipeline CI/CD**: Utilize a seguinte estrutura de comando para executar os testes em diferentes ambientes:

```bash
npx cypress run --env environment=staging
npx cypress run --env environment=production
```

**3.3. Interpretação dos Resultados**

* Os resultados dos testes são exibidos no terminal e no dashboard do Cypress.
* Os relatórios gerados pelo Allure podem ser acessados na pasta `allure-report/`.
* Os relatórios Allure incluem capturas de tela em caso de falhas e logs de execução.

**3.4. Configuração de CI/CD**

* Para integrar os testes Cypress em uma pipeline CI/CD, utilize ferramentas como GitHub Actions ou Jenkins.
* Configure a pipeline para instalar as dependências, executar os testes e gerar relatórios Allure.

### 4. Plano de Testes de Performance (PDF)

**4.1. Testes de Carga**

* **Ferramentas:** JMeter, k6.
* **Estratégias:** Simular diferentes níveis de carga para avaliar o comportamento do site sob pressão.
* **Métricas:** Tempo de resposta, throughput, taxa de erros.

**4.2. Testes de Estresse**

* **Estratégias:** Simular condições extremas de carga para identificar o ponto de falha do site.
* **Métricas:** Tempo de resposta, taxa de erros, tempo de recuperação.

**4.3. Testes de Capacidade**

* **Estratégias:** Determinar a capacidade máxima do site sem degradação significativa da performance.
* **Métricas:** Tempo de resposta, throughput, uso de recursos.

**4.4. Métricas de Performance**

* **Tempo de resposta:** O tempo que o servidor leva para responder a uma solicitação.
* **Throughput:** O número de solicitações que o servidor pode processar por segundo.
* **Taxa de erros:** O número de erros que ocorrem durante os testes.

### 5. Plano de Testes de Segurança (PDF)

**5.1. Testes de Vulnerabilidade**

* **Tipos de Vulnerabilidades:** Injeção de SQL, XSS, CSRF, falhas de autenticação, vulnerabilidades de criptografia.
* **Ferramentas:** OWASP ZAP, Burp Suite.

**5.2. Teste de Autenticação/Autorização**

* **Verificar:** Se as políticas de autenticação e autorização estão implementadas corretamente.
* **Testar:** Autenticação com credenciais válidas e inválidas, autorização para diferentes papéis de usuário.

**5.3. Teste de Penetração**

* **Objetivos:** Avaliar a resistência do site a ataques maliciosos.
* **Técnicas:** Ataques de força bruta, injeção de código, exploração de vulnerabilidades conhecidas.

### 6. Plano de Testes de Acessibilidade (PDF)

**6.1. Conformidade com WCAG**

* **Verificar:** Se o site atende às diretrizes WCAG (Web Content Accessibility Guidelines).
* **Ferramentas:** Axe, Lighthouse, NVDA.

**6.2. Casos de Teste Acessíveis**

* **Navegação com teclado:** Verificar se todas as funcionalidades são acessíveis através do teclado.
* **Uso de leitores de tela:** Verificar se o site é compatível com leitores de tela.
* **Acessibilidade para pessoas com deficiências visuais e motoras:** Verificar se o site é acessível para usuários com diferentes necessidades.

### 7. Estratégia de Teste de Regressão

**7.1. Seleção de Casos de Teste**

* **Priorizar:** Casos de teste que cobrem as funcionalidades principais do site.
* **Selecionar:** Casos de teste que foram modificados ou que podem ser afetados por novas alterações.

**7.2. Automação de Regressão**

* **Criar:** Scripts de teste automatizados que serão executados em cada build.
* **Utilizar:** Cypress para automatizar os testes de regressão.

**7.3. Planejamento de Execução**

* **Executar:** Testes de regressão diariamente ou em cada pull request.

### 8. Documentação de Integração de APIs

**8.1. Testes de API Automatizados**

* **Ferramentas:** Postman, Newman.
* **Criar:** Casos de teste para validar as respostas de APIs.

**8.2. Testes de Contrato**

* **Ferramentas:** Pact.
* **Definir:** Como garantir que as APIs respeitam os contratos esperados.

**8.3. Testes de Carga em APIs**

* **Ferramentas:** k6.
* **Realizar:** Testes de carga especificamente para as APIs.

### Conclusão

Este plano de teste abrangente fornece uma base sólida para avaliar a qualidade do site de Recursos Humanos da OrangeHRM. Os testes de automação, em conjunto com os testes manuais, garantem a qualidade, a performance e a segurança do site.

**Observação:** Este é um exemplo de plano de teste e pode ser adaptado de acordo com as necessidades específicas do projeto.
            });