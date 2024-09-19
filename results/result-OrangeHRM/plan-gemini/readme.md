## Plano de Teste Completo para o Site de Recursos Humanos - https://opensource-demo.orangehrmlive.com/

Este plano de teste abrangente visa garantir a qualidade, performance, segurança e acessibilidade do site de Recursos Humanos https://opensource-demo.orangehrmlive.com/. Ele inclui vários artefatos para orientar o processo de teste, desde a definição de casos de teste até a automação e integração em um pipeline CI/CD.

### 1. Plano de Teste Funcional (PDF)

**1.1. Casos de Teste**

| Caso de Teste | Descrição | Cenários Positivos | Cenários Negativos | Passos de Execução | Dados de Teste | Critérios de Aceitação |
|---|---|---|---|---|---|---|
| Login | Verificar se o usuário consegue acessar o sistema com credenciais válidas | Usuário autenticado com sucesso | Senha inválida, usuário não encontrado, usuário bloqueado | 1. Acessar a página de login. 2. Inserir usuário e senha válidos. 3. Clicar em "Login". | Usuário: "admin", Senha: "admin" | O usuário deve ser redirecionado para a página inicial do sistema. |
| Cadastro de Funcionário | Verificar se o sistema permite cadastrar novos funcionários |  Nome completo, cargo, departamento, data de admissão válidos | Nome completo inválido, cargo inválido, departamento inválido, data de admissão inválida | 1. Acessar a página de cadastro de funcionários. 2. Preencher todos os campos obrigatórios com dados válidos. 3. Clicar em "Salvar". | Nome: "João da Silva", Cargo: "Engenheiro", Departamento: "TI", Data de Admissão: "2023-03-15" | O sistema deve salvar o novo funcionário com sucesso. |
| Gerenciamento de Férias | Verificar se o sistema permite gerenciar solicitações de férias |  Solicitação de férias com data de início e fim válidas, aprovação de férias pelo gestor | Solicitação de férias com data de início ou fim inválidas, data de férias já ocupada,  rejeição da solicitação pelo gestor | 1. Acessar a página de gerenciamento de férias. 2. Criar uma nova solicitação de férias. 3. Preencher as informações de data de início e fim, justificativa, etc. 4. Enviar a solicitação para o gestor. | Data de Início: "2023-04-01", Data de Fim: "2023-04-05" | A solicitação de férias deve ser salva com sucesso e o gestor deve receber a solicitação para aprovação. |
| Pesquisa de Funcionários | Verificar se o sistema permite pesquisar funcionários por nome, cargo, departamento, etc. | Resultados encontrados com base nos critérios de pesquisa | Nenhum resultado encontrado para critérios inválidos | 1. Acessar a página de pesquisa de funcionários. 2. Digitar o critério de pesquisa (nome, cargo, departamento, etc.). 3. Clicar em "Pesquisar". | Critério de pesquisa: "João" | O sistema deve exibir os funcionários que atendem aos critérios de pesquisa. |
| Relatórios | Verificar se o sistema gera relatórios de funcionários, férias, folha de pagamento, etc. | Relatório gerado com dados corretos | Erro ao gerar o relatório, dados incorretos no relatório | 1. Acessar a página de relatórios. 2. Selecionar o tipo de relatório desejado. 3. Definir os filtros (data, departamento, etc.). 4. Clicar em "Gerar Relatório". | Tipo de relatório: "Relatório de Funcionários", Data: "2023-03-01" | O sistema deve gerar o relatório solicitado com os dados corretos e formatação adequada. |

**1.2. Critérios de Aceitação**

* Todos os campos obrigatórios devem ser preenchidos corretamente.
* O sistema deve validar a entrada de dados para evitar erros.
* As funcionalidades devem funcionar de forma intuitiva e amigável para o usuário.
* O sistema deve ser responsivo e oferecer uma boa experiência para o usuário.
* Todos os erros devem ser tratados de forma clara e amigável para o usuário.

**1.3. Escopo do Teste**

* Todos os fluxos principais do sistema, incluindo login, cadastro de funcionários, gerenciamento de férias, pesquisa de funcionários e geração de relatórios.
* Páginas principais do sistema, como página de login, dashboard, cadastro de funcionários, gerenciamento de férias, pesquisa de funcionários e relatórios.

**1.4. Ambientes de Teste**

* Navegadores: Google Chrome, Mozilla Firefox, Microsoft Edge
* Dispositivos móveis: Android e iOS
* Diferentes resoluções de tela: Desktop, Tablet e Mobile

**1.5. Riscos e Dependências**

* Mudanças no sistema ou na plataforma podem afetar o funcionamento dos testes.
* A disponibilidade do sistema e dos dados de teste podem impactar a execução dos testes.

**1.6. Métricas de Sucesso**

* Taxa de defeitos: O número de defeitos encontrados dividido pelo número total de testes.
* Cobertura de teste: A porcentagem de código que foi testada.
* Tempo de execução dos testes: O tempo total gasto para executar todos os testes.

### 2. Projeto de Automação em Cypress

**2.1. Estrutura do Projeto**

```
codigo_automacao/
├── cypress/
│   ├── integration/
│   │   ├── login.spec.js
│   │   ├── cadastro_funcionario.spec.js
│   │   └── gerenciamento_ferias.spec.js
│   ├── support/
│   │   ├── commands.js
│   │   └── e2e.js
│   ├── fixtures/
│   │   └── usuarios.json
│   ├── plugins/
│   │   └── index.js
│   └── cypress.config.js
├── .env.example
├── .eslintrc.js
└── README.md
```

**2.2. Código Cypress**

**login.spec.js**

```javascript
describe('Login', () => {
  it('deve logar com sucesso', () => {
    cy.visit('/');
    cy.get('#txtUsername').type('admin');
    cy.get('#txtPassword').type('admin');
    cy.get('#btnLogin').click();
    cy.url().should('include', '/symfony/web/index.php/dashboard');
  });

  it('deve exibir mensagem de erro para senha inválida', () => {
    cy.visit('/');
    cy.get('#txtUsername').type('admin');
    cy.get('#txtPassword').type('senha_invalida');
    cy.get('#btnLogin').click();
    cy.get('.messagebox').should('be.visible').and('contain', 'Invalid credentials');
  });
});
```

**2.3. Cobertura de Teste**

* Casos de borda: Senha em branco, usuário inexistente, usuário bloqueado.
* Casos de erro: Mensagem de erro para senha inválida, usuário não encontrado, usuário bloqueado.
* Cenários com dados dinâmicos: Gerar dados de teste aleatórios para os campos de cadastro de funcionários.

**2.4. Integração com Allure**

```javascript
// cypress/plugins/index.js
const allureWriter = require('@shepherd-org/cypress-allure-plugin/writer');

module.exports = (on, config) => {
  on('task', {
    allure: allureWriter(config),
  });
};
```

**2.5. Configuração de Variáveis de Ambiente**

```javascript
// cypress/cypress.config.js
module.exports = defineConfig({
  env: {
    baseUrl: 'https://opensource-demo.orangehrmlive.com/',
    username: 'admin',
    password: 'admin',
  },
  e2e: {
    // ...
  },
});
```

### 3. Instruções de Execução (README.md)

**3.1. Configuração do Ambiente**

1. Instalar Node.js: https://nodejs.org/
2. Instalar Cypress: `npm install cypress --save-dev`
3. Criar um arquivo `.env` com as variáveis de ambiente.

**3.2. Execução dos Testes**

* Local: `npx cypress run`
* CI/CD: `npx cypress run --env environment=staging`

**3.3. Interpretação dos Resultados**

* Terminal: Os resultados dos testes são exibidos no terminal.
* Dashboard do Cypress: Acessar `http://localhost:8000/` para visualizar o dashboard do Cypress.
* Relatórios do Allure: Os relatórios do Allure são gerados na pasta `allure-results`.

**3.4. Configuração de CI/CD**

1. Criar um arquivo `cypress.config.js` com as configurações do Cypress.
2. Configurar um pipeline CI/CD com as instruções de execução dos testes.
3. Integrar o Allure para gerar relatórios.

### 4. Plano de Testes de Performance (PDF)

**4.1. Testes de Carga**

* Ferramentas: JMeter, k6
* Estratégias: Simular um grande número de usuários acessando simultaneamente o site para analisar o desempenho do servidor.

**4.2. Testes de Estresse**

* Estratégias: Simular picos de carga repentinos e intensos para verificar a capacidade do site de lidar com situações extremas.

**4.3. Testes de Capacidade**

* Definição: Medir a capacidade máxima do site em termos de número de usuários simultâneos que podem ser suportados sem degradação significativa da performance.

**4.4. Métricas de Performance**

* Tempo de resposta: Tempo que o servidor leva para responder às requisições do usuário.
* Throughput: Número de requisições processadas por segundo.
* Taxa de erros: Número de erros ocorridos durante a execução dos testes.

### 5. Plano de Testes de Segurança (PDF)

**5.1. Testes de Vulnerabilidade**

* Tipos de vulnerabilidades: Injeção de SQL, XSS, CSRF, etc.
* Ferramentas: OWASP ZAP, Burp Suite

**5.2. Teste de Autenticação/Autorização**

* Verificar se as políticas de autenticação e autorização estão implementadas corretamente, incluindo validação de credenciais, controle de acesso e criptografia de dados.

**5.3. Teste de Penetração**

* Descrição: Simular ataques reais para avaliar a resistência do site a ataques maliciosos.
* Ferramentas: Kali Linux, Metasploit

### 6. Plano de Testes de Acessibilidade (PDF)

**6.1. Conformidade com WCAG**

* Verificar se o site atende às diretrizes WCAG (Web Content Accessibility Guidelines).
* Testes: Usar ferramentas como Axe, Lighthouse, e NVDA.

**6.2. Casos de Teste Acessíveis**

* Navegação com teclado: Verificar se todas as funcionalidades podem ser acessadas pelo teclado.
* Uso de leitores de tela: Validar a compatibilidade do site com leitores de tela.
* Acessibilidade para pessoas com deficiências visuais e motoras: Testar o site com diferentes recursos de acessibilidade.

### 7. Estratégia de Teste de Regressão

**7.1. Seleção de Casos de Teste**

* Criar um conjunto de testes de regressão com base nas funcionalidades principais do site.
* Priorizar os testes de regressão que cobrem funcionalidades mais importantes ou complexas.

**7.2. Automação de Regressão**

* Criar scripts automatizados para executar os testes de regressão em cada build.
* Usar ferramentas como Cypress ou Selenium.

**7.3. Planejamento de Execução**

* Executar os testes de regressão diariamente ou em cada pull request.
* Integrar os testes de regressão em um pipeline CI/CD.

### 8. Documentação de Integração de APIs

**8.1. Testes de API Automatizados**

* Usar ferramentas como Postman ou Newman para criar testes automatizados para as APIs.

**8.2. Testes de Contrato**

* Usar ferramentas como Pact para garantir que as APIs respeitam os contratos esperados.

**8.3. Testes de Carga em APIs**

* Usar ferramentas como k6 para realizar testes de carga nas APIs.

### 9. Organização de Arquivos e Pastas

* Todos os arquivos e pastas devem ser organizados de forma clara e acessível.
* Criar uma pasta para cada tipo de artefato (planos de teste, scripts de automação, relatórios, etc.).
* Nomear os arquivos de forma clara e descritiva.

### 10. Armazenamento de Relatórios e Artefatos

* Armazenar todos os relatórios e artefatos em um local facilmente acessível para revisão posterior.
* Usar ferramentas como Git ou plataformas de gerenciamento de testes para armazenar os artefatos.

## Conclusão

Este plano de teste completo fornece um guia abrangente para garantir a qualidade do site de Recursos Humanos https://opensource-demo.orangehrmlive.com/. Ele inclui vários artefatos, desde a definição de casos de teste até a automação e integração em um pipeline CI/CD, para garantir a qualidade, performance, segurança e acessibilidade do site. 

**Nota:** Este plano de teste é um modelo. Ele deve ser adaptado para atender às necessidades específicas do projeto.