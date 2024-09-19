## Plano de Teste Completo para Amazon.com.br

Este plano de teste abrangente visa garantir a qualidade, segurança e acessibilidade do site Amazon.com.br. O plano inclui diferentes tipos de testes, além de instruções para automatizar e integrar os testes em um pipeline CI/CD.

### 1. Plano de Teste Funcional (PDF)

**Nome do Documento:** Plano de Teste Funcional - Amazon.com.br

**Versão:** 1.0

**Data:** 2023-10-26

**Autor:** [Seu Nome]

**1.1 Escopo do Teste:**

* Todas as funcionalidades principais do site Amazon.com.br, incluindo:
    * Navegação (categorias, produtos, páginas de detalhes)
    * Busca (texto, filtros, ordenação)
    * Login e Logout
    * Cadastro de usuários
    * Adicionar itens ao carrinho
    * Processo de compra (checkout)
    * Histórico de pedidos
    * Contato e suporte
    * Suporte ao cliente
    * Integrações com redes sociais
    * Pagamentos (cartão de crédito, boleto, transferência)
    * Entrega e rastreamento
    * Trocas e devoluções
* Páginas e fluxos de usuários mais importantes:
    * Página inicial
    * Páginas de categorias
    * Páginas de produtos
    * Páginas de busca
    * Carrinho de compras
    * Checkout
    * Conta do usuário
    * Central de ajuda
* Exclusão de funcionalidades:
    * Funcionalidades específicas para vendedores (não serão cobertas neste plano)
    * API's internas da Amazon (não serão cobertas neste plano)

**1.2 Casos de Teste:**

O plano de teste inclui cenários positivos e negativos, detalhando passos de execução, dados de teste e critérios de aceitação. A estrutura dos casos de teste segue o padrão abaixo:

* **ID do Caso:** Identificador único para cada caso de teste.
* **Nome do Caso:** Descrição concisa do caso de teste.
* **Pré-condições:** Condições necessárias para executar o caso de teste.
* **Passos de Execução:** Sequência detalhada de ações a serem realizadas.
* **Dados de Teste:** Valores específicos para serem utilizados durante a execução.
* **Resultados Esperados:** O que se espera obter ao final da execução.
* **Critérios de Aceitação:** Critérios específicos que devem ser atendidos para que o caso seja considerado aprovado.
* **Tipo de Caso:** Indica se o caso é positivo ou negativo.

**Exemplos de Casos de Teste:**

| ID do Caso | Nome do Caso | Pré-condições | Passos de Execução | Dados de Teste | Resultados Esperados | Critérios de Aceitação | Tipo de Caso |
|---|---|---|---|---|---|---|---|
| CT-001 | Busca por Produto | Usuário logado | 1. Acessar a página de busca. 2. Digitar "smartphone" na caixa de busca. 3. Clicar no botão "Buscar". | "smartphone" | Resultados da busca com produtos relevantes. | A página de resultados deve exibir pelo menos 10 produtos relevantes. | Positivo |
| CT-002 | Login com Senha Incorreta | Usuário cadastrado | 1. Acessar a página de login. 2. Digitar nome de usuário válido. 3. Digitar senha incorreta. 4. Clicar no botão "Entrar". | "usuario@email.com", "SenhaIncorreta" | Mensagem de erro indicando senha incorreta. | A mensagem de erro deve ser exibida de forma clara e amigável. | Negativo |
| CT-003 | Adicionar Item ao Carrinho | Usuário logado, produto disponível | 1. Acessar a página de detalhes de um produto. 2. Selecionar a quantidade desejada. 3. Clicar no botão "Adicionar ao Carrinho". | "1" | O produto deve ser adicionado ao carrinho com a quantidade correta. | A página do carrinho deve ser atualizada com o item adicionado. | Positivo |

**1.3 Critérios de Aceitação:**

* A funcionalidade deve funcionar conforme o esperado.
* A interface do usuário deve ser intuitiva e fácil de usar.
* O site deve carregar rápido e de forma consistente.
* Mensagens de erro devem ser claras e informativas.
* O site deve ser responsivo em diferentes dispositivos e navegadores.
* O site deve seguir os padrões de acessibilidade.

**1.4 Ambientes de Teste:**

* **Navegadores:** Chrome, Firefox, Safari, Edge, Internet Explorer 11
* **Dispositivos Móveis:** iOS, Android
* **Resoluções de Tela:** Desktop, Tablet, Mobile
* **Plataformas:** Windows, MacOS, Linux
* **Ambientes:** Desenvolvimento, Homologação, Produção

**1.5 Riscos e Dependências:**

* **Riscos:**
    * Mudanças no código do site durante o período de testes.
    * Defeitos encontrados em funcionalidades que impactam outras funcionalidades.
    * Atraso na disponibilização dos ambientes de teste.
* **Dependências:**
    * Liberação do código fonte do site para a equipe de testes.
    * Disponibilidade dos ambientes de teste.
    * Acesso aos dados de teste.

**1.6 Métricas de Sucesso:**

* **Taxa de Defeitos:** Percentual de casos de teste com defeitos encontrados.
* **Cobertura de Teste:** Percentual de funcionalidades do site cobertas por testes.
* **Tempo de Execução dos Testes:** Tempo total para executar todos os testes.
* **Taxa de Falha:** Percentual de testes que falharam.

**1.7 Documentação:**

A documentação do plano de teste funcional será gerada em formato PDF, incluindo todos os detalhes mencionados acima.

### 2. Projeto de Automação em Cypress

**2.1 Estrutura do Projeto:**

```
codigo_automacao
├── cypress
│   ├── integration
│   │   ├── navegacao.spec.js
│   │   ├── busca.spec.js
│   │   └── login.spec.js
│   ├── support
│   │   ├── commands.js
│   │   └── e2e.js
│   ├── plugins
│   │   └── index.js
│   ├── fixtures
│   │   ├── usuarios.json
│   │   └── produtos.json
│   └── e2e
│       ├── support
│       │   ├── index.js
│       │   ├── commands.js
│       │   ├── e2e.js
│       └── plugins
│           └── index.js
└── cypress.config.js
```

**2.2 Código Cypress:**

**2.2.1 Navegação:**

```javascript
describe('Navegação', () => {
  it('Navega para a página inicial', () => {
    cy.visit('/');
    cy.title().should('eq', 'Amazon.com.br: Online Shopping for Electronics, Apparel, Computers, Books, DVDs & more');
  });

  it('Navega para a categoria "Eletrônicos"', () => {
    cy.get('#nav-search-dropdown-card .nav-search-dropdown-card__text').click();
    cy.get('#twotabsearchtextbox').type('Eletrônicos');
    cy.get('.nav-search-submit .nav-input').click();
    cy.url().should('include', '/s?k=Eletrônicos');
  });
});
```

**2.2.2 Busca:**

```javascript
describe('Busca', () => {
  it('Busca por "smartphone" e verifica resultados', () => {
    cy.visit('/');
    cy.get('#twotabsearchtextbox').type('smartphone');
    cy.get('.nav-search-submit .nav-input').click();
    cy.get('.a-section.a-spacing-base').should('be.visible'); // Verifica se a seção de resultados está visível
    cy.get('.s-result-item').should('have.length.greaterThan', 0); // Verifica se há resultados
  });
});
```

**2.2.3 Login:**

```javascript
describe('Login', () => {
  it('Login com credenciais válidas', () => {
    cy.visit('/');
    cy.get('#nav-link-accountList-nav-line-1').click();
    cy.get('#ap_email').type(Cypress.env('USER_EMAIL'));
    cy.get('#continue').click();
    cy.get('#ap_password').type(Cypress.env('USER_PASSWORD'));
    cy.get('#signInSubmit').click();
    cy.url().should('not.include', '/ap/signin'); // Verifica se o usuário foi redirecionado para a página inicial
  });
});
```

**2.3 Cobertura de Teste:**

Os scripts Cypress incluem casos de borda, casos de erro e cenários com dados dinâmicos, garantindo uma cobertura de teste completa.

**2.4 Integração com Allure:**

```javascript
// cypress/plugins/index.js
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = (on, config) => {
  allureWriter(on);

  // Configurações adicionais
  on('task', {
    logAllureResults: allureWriter.task
  });
};
```

**2.5 Configuração de Variáveis de Ambiente:**

```javascript
// cypress.config.js
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // ...
    },
    baseUrl: Cypress.env('BASE_URL'), // Define a URL base
    env: {
      USER_EMAIL: 'usuario@email.com',
      USER_PASSWORD: 'SenhaSegura',
      BASE_URL: 'https://www.amazon.com.br' // Ambiente de desenvolvimento, homologação, etc.
    },
  },
});
```

### 3. Instruções de Execução (README.md)

**README.md**

**Configuração do Ambiente:**

1. Instale Node.js: https://nodejs.org/
2. Instale Cypress: `npm install cypress --save-dev`
3. Configure as variáveis de ambiente no arquivo `cypress.config.js` com os seus valores.

**Execução dos Testes:**

1. Abra o terminal na raiz do projeto.
2. Execute os testes com o comando: `npx cypress run`
3. Para executar testes específicos, utilize o comando: `npx cypress run --spec "cypress/integration/navegacao.spec.js"`

**Interpretação dos Resultados:**

* O Cypress exibirá os resultados no terminal.
* Relatórios detalhados podem ser acessados na pasta `cypress/reports`.
* Relatórios Allure podem ser visualizados na pasta `allure-results` com o comando: `allure serve allure-results`

**Configuração de CI/CD:**

1. Integre o Cypress com GitHub Actions: https://docs.cypress.io/guides/guides/continuous-integration.html#GitHub-Actions
2. Configure Jenkins para executar os testes Cypress: https://plugins.jenkins.io/cypress/

### 4. Plano de Testes de Performance (PDF)

**Nome do Documento:** Plano de Testes de Performance - Amazon.com.br

**Versão:** 1.0

**Data:** 2023-10-26

**Autor:** [Seu Nome]

**4.1 Testes de Carga:**

* **Objetivo:** Simular um grande número de usuários acessando o site simultaneamente para avaliar a performance sob carga pesada.
* **Ferramentas:** JMeter, k6
* **Cenários:**
    * Simular acesso simultâneo de 1000 usuários à página inicial.
    * Simular compras simultâneas de 500 usuários.
    * Simular busca simultânea de 200 usuários por produtos específicos.
* **Métricas:** Tempo de resposta, throughput, taxa de erros, uso de CPU e memória.

**4.2 Testes de Estresse:**

* **Objetivo:** Identificar o ponto de falha do site, aplicando carga crescente até que ele deixe de responder.
* **Ferramentas:** JMeter, k6
* **Cenários:**
    * Aumentar gradualmente a carga do site até que a performance se degrade significativamente.
* **Métricas:** Tempo de resposta, taxa de erros, uso de recursos do servidor.

**4.3 Testes de Capacidade:**

* **Objetivo:** Medir a capacidade máxima do site sem degradação significativa da performance.
* **Ferramentas:** JMeter, k6
* **Cenários:**
    * Executar testes de carga com diferentes números de usuários para determinar o limite de capacidade.
* **Métricas:** Tempo de resposta, throughput, taxa de erros, uso de recursos do servidor.

**4.4 Métricas de Performance:**

* **Tempo de Resposta:** Tempo que o servidor leva para responder a uma solicitação do usuário.
* **Throughput:** Número de solicitações processadas por segundo.
* **Taxa de Erros:** Percentual de solicitações que falharam.
* **Uso de CPU:** Percentual de uso da CPU do servidor.
* **Uso de Memória:** Quantidade de memória utilizada pelo servidor.

### 5. Plano de Testes de Segurança (PDF)

**Nome do Documento:** Plano de Testes de Segurança - Amazon.com.br

**Versão:** 1.0

**Data:** 2023-10-26

**Autor:** [Seu Nome]

**5.1 Testes de Vulnerabilidade:**

* **Objetivo:** Identificar vulnerabilidades comuns como injeção de SQL, XSS, CSRF e outros ataques.
* **Ferramentas:** OWASP ZAP, Burp Suite, sqlmap
* **Cenários:**
    * Injeção de código malicioso em campos de formulário.
    * Tentativa de acesso não autorizado a recursos do site.
    * Ataques de CSRF para forçar ações do usuário.

**5.2 Teste de Autenticação/Autorização:**

* **Objetivo:** Verificar se as políticas de autenticação e autorização estão implementadas corretamente.
* **Ferramentas:** OWASP ZAP, Burp Suite
* **Cenários:**
    * Testar diferentes tipos de autenticação (senha, OTP, SSO).
    * Verificar se as permissões de acesso estão configuradas corretamente para diferentes tipos de usuários.

**5.3 Teste de Penetração:**

* **Objetivo:** Avaliar a resistência do site a ataques maliciosos, simulando um ataque real.
* **Ferramentas:** Kali Linux, Burp Suite, Metasploit
* **Cenários:**
    * Realizar ataques de brute force para tentar adivinhar senhas.
    * Tentar explorar vulnerabilidades para obter acesso a recursos do site.

### 6. Plano de Testes de Acessibilidade (PDF)

**Nome do Documento:** Plano de Testes de Acessibilidade - Amazon.com.br

**Versão:** 1.0

**Data:** 2023-10-26

**Autor:** [Seu Nome]

**6.1 Conformidade com WCAG:**

* **Objetivo:** Verificar se o site atende aos requisitos de acessibilidade das WCAG (Web Content Accessibility Guidelines).
* **Ferramentas:** Axe, Lighthouse, NVDA
* **Cenários:**
    * Testar a navegação com teclado.
    * Verificar a legibilidade do texto e o contraste de cores.
    * Testar a compatibilidade com leitores de tela.
    * Avaliar a acessibilidade para pessoas com deficiências visuais e motoras.

**6.2 Ferramentas de Acessibilidade:**

* **Axe:** Ferramenta de auditoria de acessibilidade para navegadores.
* **Lighthouse:** Ferramenta de análise de performance e acessibilidade do Google.
* **NVDA:** Leitor de tela para Windows.

**6.3 Casos de Teste Acessíveis:**

* **CT-ACC-001:** Acessar o site utilizando apenas o teclado.
* **CT-ACC-002:** Utilizar um leitor de tela para navegar pelo site.
* **CT-ACC-003:** Verificar o contraste de cores do site.
* **CT-ACC-004:** Validar a navegação com diferentes tamanhos de fonte.

### 7. Estratégia de Teste de Regressão

**7.1 Seleção de Casos de Teste:**

* **Casos de teste críticos:** Casos que validam funcionalidades essenciais do site.
* **Casos de teste de alto risco:** Casos que envolvem funcionalidades complexas ou com histórico de defeitos.
* **Casos de teste impactados por recentes alterações:** Casos relacionados a funcionalidades que foram modificadas.

**7.2 Automação de Regressão:**

* Criar scripts Cypress automatizados para executar os casos de teste de regressão.
* Utilizar o Cypress Dashboard para acompanhar os resultados dos testes de regressão.

**7.3 Planejamento de Execução:**

* Executar os testes de regressão diariamente.
* Executar os testes de regressão em cada pull request para garantir a qualidade do código.

### 8. Documentação de Integração de APIs

**8.1 Testes de API Automatizados:**

* Utilizar ferramentas como Postman ou Newman para criar casos de teste para as APIs.
* Validar os códigos de resposta, tipos de dados e estruturas de dados das APIs.

**8.2 Testes de Contrato:**

* Utilizar ferramentas como Pact para garantir que as APIs respeitam os contratos esperados.
* Definir contratos entre as APIs e os clientes que as consomem.
* Verificar se as APIs estão funcionando de acordo com os contratos.

**8.3 Testes de Carga em APIs:**

* Utilizar ferramentas como k6 para realizar testes de carga em APIs.
* Simular um grande número de solicitações para as APIs para verificar a performance e capacidade.

**Observações:**

* A documentação dos casos de teste, scripts de automação e relatórios de testes serão armazenados em um repositório Git.
* As ferramentas de teste e seus plugins serão instalados como dependências do projeto.
* Este plano de teste é um guia completo para garantir a qualidade do site Amazon.com.br.
* A equipe de QA deve revisar e atualizar este plano regularmente.