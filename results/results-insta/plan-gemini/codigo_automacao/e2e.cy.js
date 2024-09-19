describe('Teste de Automação em cypress', () => {
                ## Plano de Teste Completo para o Instagram (Cypress)

Este plano de teste abrangente para o Instagram visa garantir a qualidade do site em diversos aspectos, desde funcionalidades básicas até segurança e acessibilidade.

**1. Plano de Teste Funcional (PDF)**

**1.1 Casos de Teste:**

| **ID** | **Nome do Caso** | **Cenário** | **Passos** | **Dados de Teste** | **Critérios de Aceitação** |
|---|---|---|---|---|---|
| FT-01 | Navegação para Página Inicial | Usuário acessa a página inicial do Instagram | 1. Abrir a URL: https://www.instagram.com/ <br> 2. Verificar se o título da página é "Instagram" | N/A | O título da página deve ser "Instagram" e o conteúdo da página inicial deve ser exibido corretamente. |
| FT-02 | Navegação para Páginas de Perfil | Usuário acessa o perfil de um usuário específico | 1. Abrir a URL: https://www.instagram.com/username/ <br> 2. Verificar se o nome do perfil e a foto do perfil são exibidos corretamente. | Nome de usuário: @username | O nome do perfil e a foto do perfil devem ser exibidos corretamente. |
| FT-03 | Navegação para Páginas de Publicação | Usuário acessa uma publicação específica | 1. Abrir a URL: https://www.instagram.com/p/post_id/ <br> 2. Verificar se a publicação, comentários e curtidas são exibidos corretamente. | ID da Publicação: post_id | A publicação, comentários e curtidas devem ser exibidos corretamente. |
| FT-04 | Busca por Conteúdo | Usuário pesquisa por conteúdo no Instagram | 1. Clicar no ícone de pesquisa. <br> 2. Inserir um termo de busca. <br> 3. Verificar os resultados da pesquisa. | Termos de Busca: #hashtag, @username, palavra-chave | Os resultados da pesquisa devem ser relevantes para o termo de busca e os filtros devem funcionar corretamente. |
| FT-05 | Login com Credenciais Válidas | Usuário realiza login com credenciais válidas | 1. Clicar no botão "Login". <br> 2. Inserir nome de usuário e senha válidos. <br> 3. Verificar se o usuário foi autenticado com sucesso. | Nome de usuário: username <br> Senha: password | O usuário deve ser autenticado com sucesso e redirecionado para sua página inicial. |
| FT-06 | Login com Credenciais Inválidas | Usuário tenta realizar login com credenciais inválidas | 1. Clicar no botão "Login". <br> 2. Inserir nome de usuário ou senha inválidos. <br> 3. Verificar se a mensagem de erro apropriada é exibida. | Nome de usuário: username <br> Senha: password (inválido) | A mensagem de erro "Nome de usuário ou senha incorretos. Tente novamente." deve ser exibida. |
| FT-07 | Criar Nova Conta | Usuário cria uma nova conta | 1. Clicar no botão "Criar nova conta". <br> 2. Preencher os campos de cadastro com dados válidos. <br> 3. Verificar se a conta foi criada com sucesso. | Nome de usuário: username <br> Senha: password <br> Endereço de email: email@example.com | A conta deve ser criada com sucesso e o usuário deve ser autenticado. |
| FT-08 | Recuperar Senha | Usuário solicita a recuperação de senha | 1. Clicar no link "Esqueceu a senha?". <br> 2. Inserir o nome de usuário ou endereço de email. <br> 3. Verificar se o email de recuperação de senha foi enviado com sucesso. | Nome de usuário: username | O email de recuperação de senha deve ser enviado para o endereço de email associado ao nome de usuário. |
| FT-09 | Logout | Usuário realiza logout da conta | 1. Clicar no ícone de perfil. <br> 2. Clicar no botão "Sair". <br> 3. Verificar se o usuário foi desconectado com sucesso. | N/A | O usuário deve ser desconectado com sucesso e redirecionado para a página inicial. |
| FT-10 | Curtir Publicação | Usuário curte uma publicação | 1. Abrir a página de uma publicação. <br> 2. Clicar no ícone de curtida. <br> 3. Verificar se a publicação foi curtida com sucesso. | ID da Publicação: post_id | O ícone de curtida deve ser atualizado para indicar que a publicação foi curtida. |
| FT-11 | Comentar Publicação | Usuário comenta uma publicação | 1. Abrir a página de uma publicação. <br> 2. Inserir um comentário no campo de texto. <br> 3. Verificar se o comentário foi publicado com sucesso. | ID da Publicação: post_id <br> Comentário: "Exemplo de comentário" | O comentário deve ser exibido abaixo da publicação. |
| FT-12 | Compartilhar Publicação | Usuário compartilha uma publicação | 1. Abrir a página de uma publicação. <br> 2. Clicar no ícone de compartilhamento. <br> 3. Selecionar a opção de compartilhamento desejada. <br> 4. Verificar se a publicação foi compartilhada com sucesso. | ID da Publicação: post_id | A publicação deve ser compartilhada com sucesso na plataforma escolhida. |
| FT-13 | Salvar Publicação | Usuário salva uma publicação | 1. Abrir a página de uma publicação. <br> 2. Clicar no ícone de salvar. <br> 3. Verificar se a publicação foi salva com sucesso. | ID da Publicação: post_id | O ícone de salvar deve ser atualizado para indicar que a publicação foi salva. |
| FT-14 | Enviar Mensagem Direta | Usuário envia uma mensagem direta para outro usuário | 1. Clicar no ícone de mensagens diretas. <br> 2. Selecionar o destinatário. <br> 3. Inserir uma mensagem no campo de texto. <br> 4. Verificar se a mensagem foi enviada com sucesso. | Nome de usuário do destinatário: username <br> Mensagem: "Exemplo de mensagem" | A mensagem deve ser enviada com sucesso e o status da mensagem deve ser atualizado. |
| FT-15 | Seguir Usuário | Usuário segue outro usuário | 1. Abrir o perfil de um usuário. <br> 2. Clicar no botão "Seguir". <br> 3. Verificar se o usuário foi seguido com sucesso. | Nome de usuário do usuário a ser seguido: username | O botão "Seguir" deve ser atualizado para "Seguindo" e o número de seguidores do usuário deve ser incrementado. |
| FT-16 | Deixar de Seguir Usuário | Usuário deixa de seguir outro usuário | 1. Abrir o perfil de um usuário que está sendo seguido. <br> 2. Clicar no botão "Seguindo". <br> 3. Verificar se o usuário deixou de seguir com sucesso. | Nome de usuário do usuário a ser deixado de seguir: username | O botão "Seguindo" deve ser atualizado para "Seguir" e o número de seguidores do usuário deve ser decrementado. |
| FT-17 | Bloquear Usuário | Usuário bloqueia outro usuário | 1. Abrir o perfil de um usuário. <br> 2. Clicar no menu de três pontos. <br> 3. Selecionar a opção "Bloquear". <br> 4. Verificar se o usuário foi bloqueado com sucesso. | Nome de usuário do usuário a ser bloqueado: username | O usuário deve ser bloqueado com sucesso e as publicações do usuário bloqueado devem ser ocultadas. |
| FT-18 | Denunciar Publicação | Usuário denuncia uma publicação | 1. Abrir a página de uma publicação. <br> 2. Clicar no menu de três pontos. <br> 3. Selecionar a opção "Denunciar". <br> 4. Verificar se a denúncia foi enviada com sucesso. | ID da Publicação: post_id | A denúncia deve ser enviada com sucesso e o usuário deve receber uma mensagem de confirmação. |
| FT-19 | Criar História | Usuário cria uma história | 1. Clicar no ícone de câmera para criar uma história. <br> 2. Selecionar a foto ou vídeo para a história. <br> 3. Adicionar texto, filtros e outros efeitos. <br> 4. Publicar a história. | N/A | A história deve ser publicada com sucesso e exibida no feed de histórias. |
| FT-20 | Visualizar Histórias | Usuário visualiza as histórias de outros usuários | 1. Abrir o feed de histórias. <br> 2. Clicar na história desejada. <br> 3. Verificar se a história é exibida corretamente. | N/A | A história deve ser exibida com a resolução correta, efeitos e conteúdo apropriado. |
| FT-21 | Explorar | Usuário explora o conteúdo recomendado | 1. Clicar no ícone de explorar. <br> 2. Verificar se o conteúdo recomendado é exibido com base em interesses e atividades anteriores. | N/A | O conteúdo recomendado deve ser relevante e interessante para o usuário. |
| FT-22 | Visualizar Mensagens Directas | Usuário visualiza mensagens diretas | 1. Clicar no ícone de mensagens diretas. <br> 2. Selecionar uma conversa específica. <br> 3. Verificar se as mensagens são exibidas corretamente. | N/A | As mensagens devem ser exibidas na ordem correta e com a formatação adequada. |
| FT-23 | Criar Novo Post | Usuário cria um novo post | 1. Clicar no ícone de câmera para criar um novo post. <br> 2. Selecionar a foto ou vídeo para o post. <br> 3. Adicionar legenda, hashtags e localização. <br> 4. Publicar o post. | N/A | O post deve ser publicado com sucesso e exibido no feed do usuário. |
| FT-24 | Adicionar Localização | Usuário adiciona localização a um post | 1. Criar um novo post. <br> 2. Clicar no ícone de localização. <br> 3. Buscar e selecionar a localização desejada. <br> 4. Verificar se a localização é exibida corretamente no post. | N/A | A localização deve ser exibida corretamente no post e pode ser pesquisada por outros usuários. |
| FT-25 | Adicionar Hashtags | Usuário adiciona hashtags a um post | 1. Criar um novo post. <br> 2. Inserir hashtags no campo de legenda. <br> 3. Verificar se as hashtags são exibidas corretamente no post. | N/A | As hashtags devem ser exibidas corretamente no post e podem ser pesquisadas por outros usuários. |
| FT-26 | Publicar Reels | Usuário publica um Reels | 1. Clicar no ícone de Reels. <br> 2. Gravar ou importar um vídeo para o Reels. <br> 3. Adicionar música, efeitos e transições. <br> 4. Publicar o Reels. | N/A | O Reels deve ser publicado com sucesso e exibido no feed do usuário. |
| FT-27 | Publicar IGTV | Usuário publica um vídeo no IGTV | 1. Clicar no ícone de IGTV. <br> 2. Selecionar o vídeo para o IGTV. <br> 3. Adicionar título, descrição e hashtags. <br> 4. Publicar o vídeo no IGTV. | N/A | O vídeo deve ser publicado com sucesso e exibido no feed do IGTV do usuário. |
| FT-28 | Visualizar Lives | Usuário visualiza uma live de outro usuário | 1. Abrir o perfil do usuário que está transmitindo ao vivo. <br> 2. Clicar no ícone de live. <br> 3. Verificar se a live é exibida corretamente. | N/A | A live deve ser exibida em tempo real com a resolução correta e sem interrupções. |
| FT-29 | Participar de Lives | Usuário participa de uma live de outro usuário | 1. Abrir a live de outro usuário. <br> 2. Enviar mensagens e reações durante a live. <br> 3. Verificar se as mensagens e reações são exibidas na live. | N/A | As mensagens e reações devem ser exibidas na live em tempo real. |
| FT-30 | Compartilhar Stories | Usuário compartilha uma story de outro usuário | 1. Abrir a story de outro usuário. <br> 2. Clicar no ícone de compartilhamento. <br> 3. Selecionar a opção de compartilhamento desejada. <br> 4. Verificar se a story foi compartilhada com sucesso. | N/A | A story deve ser compartilhada com sucesso na plataforma escolhida. |

**1.2 Critérios de Aceitação:**

* **Funcionalidade:** Todas as funcionalidades descritas nos casos de teste devem funcionar como esperado.
* **Interface do Usuário:** A interface do usuário deve ser clara, intuitiva e fácil de usar.
* **Performance:** O site deve carregar rapidamente e responder às ações do usuário de forma rápida e eficiente.
* **Segurança:** As informações do usuário devem ser protegidas e o site deve ser imune a ataques maliciosos.
* **Acessibilidade:** O site deve ser acessível a todos os usuários, incluindo aqueles com deficiência.

**1.3 Escopo do Teste:**

* **Funcionalidades:** Todas as funcionalidades principais do Instagram, incluindo login, busca, feed de notícias, mensagens diretas, stories, reels, IGTV e lives.
* **Páginas:** Todas as páginas principais do Instagram, incluindo a página inicial, páginas de perfil, páginas de publicação, páginas de exploração e páginas de mensagens diretas.
* **Fluxos de Usuário:** Os fluxos de usuário mais comuns, incluindo login, criação de conta, navegação por conteúdo, curtir, comentar, compartilhar, seguir usuários, enviar mensagens diretas e criar posts.

**1.4 Ambientes de Teste:**

* **Navegadores:** Google Chrome, Mozilla Firefox, Safari, Microsoft Edge.
* **Dispositivos Móveis:** iPhone, Android.
* **Resoluções de Tela:** Diversas resoluções, incluindo tela cheia, tela pequena, tablet e dispositivos móveis.

**1.5 Riscos e Dependências:**

* **Disponibilidade do site:** O site do Instagram pode estar indisponível devido a problemas técnicos ou manutenções.
* **Mudanças no site:** O site do Instagram está em constante desenvolvimento, o que pode resultar em alterações que afetam os casos de teste.
* **Dados de Teste:** A dependência de dados de teste pode afetar a consistência dos resultados.

**1.6 Métricas de Sucesso:**

* **Taxa de Defeitos:** A porcentagem de casos de teste que falham.
* **Cobertura de Teste:** A porcentagem de código ou funcionalidades cobertas pelos testes.
* **Tempo de Execução:** O tempo necessário para executar todos os testes.

**2. Projeto de Automação em Cypress**

**2.1 Estrutura do Projeto:**

```
codigo_automacao
├── cypress
│   ├── integration
│   │   ├── navigation.spec.js
│   │   ├── search.spec.js
│   │   ├── authentication.spec.js
│   │   ├── forms.spec.js
│   │   ├── dynamic_elements.spec.js
│   │   ├── api_tests.spec.js
│   │   └── accessibility.spec.js
│   ├── fixtures
│   │   ├── user.json
│   │   └── posts.json
│   ├── plugins
│   │   └── index.js
│   ├── support
│   │   └── commands.js
│   └── e2e
│       └── navigation.cy.js
├── .env
└── README.md
```

**2.2 Código Cypress:**

```javascript
// navigation.spec.js
describe('Navegação', () => {
  beforeEach(() => {
    cy.visit('https://www.instagram.com/');
  });

  it('Acessar página inicial', () => {
    cy.title().should('eq', 'Instagram');
    cy.get('.coreSpriteRightPaginationArrow').should('be.visible');
  });

  it('Acessar perfil de usuário', () => {
    cy.get('.coreSpriteSearch').click();
    cy.get('.searchInput').type('username');
    cy.get('.search-results__item a').first().click();
    cy.url().should('include', '/username/');
    cy.get('.profile-header__title').should('have.text', 'username');
  });

  it('Acessar publicação específica', () => {
    cy.visit('https://www.instagram.com/p/post_id/');
    cy.get('.Image').should('be.visible');
    cy.get('.Caption').should('be.visible');
  });

  // ... outros testes de navegação
});
```

**2.3 Cobertura de Teste:**

* Casos de borda: Testes que verificam o comportamento do site em situações extremas, como a entrada de dados inválidos ou a falta de internet.
* Casos de erro: Testes que verificam o comportamento do site em caso de erros, como a tentativa de login com credenciais inválidas ou a busca por um termo inexistente.
* Cenários com dados dinâmicos: Testes que verificam o comportamento do site com diferentes dados de entrada, como a busca por diferentes termos ou o envio de mensagens diretas para diferentes usuários.

**2.4 Integração com Allure:**

```javascript
// cypress/plugins/index.js
const allureWriter = require('@shepherd/allure-writer');

module.exports = (on, config) => {
  on('after:run', (results) => {
    allureWriter.write(results);
  });
};
```

**2.5 Configuração de Variáveis de Ambiente:**

```
// .env
CYPRESS_BASE_URL=https://www.instagram.com/
CYPRESS_ENV=development
```

**3. Instruções de Execução (README.md)**

**3.1 Configuração do Ambiente:**

1. Instalar Node.js: [https://nodejs.org/](https://nodejs.org/)
2. Instalar Cypress: `npm install cypress --save-dev`
3. Criar arquivo .env com as variáveis de ambiente.

**3.2 Execução dos Testes:**

* Localmente: `npx cypress run`
* CI/CD: `npx cypress run --env environment=staging`

**3.3 Interpretação dos Resultados:**

* Terminal: Os resultados dos testes são exibidos no terminal, com informações sobre testes passados e falhados.
* Dashboard do Cypress: O dashboard do Cypress fornece informações detalhadas sobre os testes, incluindo capturas de tela e logs.
* Relatórios Allure: Os relatórios Allure gerados pelo Cypress fornecem informações completas sobre os testes, incluindo capturas de tela, logs, resultados detalhados e análises estatísticas.

**3.4 Configuração de CI/CD:**

* GitHub Actions: [https://docs.github.com/en/actions/using-workflows/adding-a-workflow-file-to-your-repository](https://docs.github.com/en/actions/using-workflows/adding-a-workflow-file-to-your-repository)
* Jenkins: [https://jenkins.io/doc/](https://jenkins.io/doc/)

**4. Plano de Testes de Performance (PDF)**

**4.1 Testes de Carga:**

* Ferramentas: JMeter, k6.
* Estratégias: Simular um grande número de usuários acessando simultaneamente o site para avaliar o desempenho sob carga pesada.
* Métricas: Tempo de resposta, throughput, taxa de erros.

**4.2 Testes de Estresse:**

* Estratégias: Simular uma carga extrema no site para identificar o ponto de falha e avaliar a capacidade de recuperação.
* Métricas: Tempo de resposta, throughput, taxa de erros, uso de recursos (CPU, memória).

**4.3 Testes de Capacidade:**

* Estratégias: Medir a capacidade máxima do site sem degradação significativa da performance.
* Métricas: Tempo de resposta, throughput, taxa de erros, uso de recursos (CPU, memória).

**5. Plano de Testes de Segurança (PDF)**

**5.1 Testes de Vulnerabilidade:**

* Ferramentas: OWASP ZAP, Burp Suite.
* Vulnerabilidades comuns: Injeção de SQL, XSS, CSRF, autenticação/autorização, falhas de configuração.

**5.2 Testes de Autenticação/Autorização:**

* Validação das políticas de autenticação e autorização.
* Verificação do controle de acesso a recursos restritos.

**5.3 Testes de Penetração:**

* Simular ataques maliciosos para avaliar a resistência do site.

**6. Plano de Testes de Acessibilidade (PDF)**

**6.1 Conformidade com WCAG:**

* Teste o site contra as diretrizes WCAG para garantir a acessibilidade.

**6.2 Ferramentas de Acessibilidade:**

* Axe, Lighthouse, NVDA.

**6.3 Casos de Teste Acessíveis:**

* Teste a navegação com teclado, uso de leitores de tela, acessibilidade para pessoas com deficiências visuais e motoras.

**7. Estratégia de Teste de Regressão**

**7.1 Seleção de Casos de Teste:**

* Casos de teste críticos que garantem o funcionamento principal do site.
* Casos de teste que foram afetados por alterações recentes.
* Casos de teste que representam cenários de alto risco.

**7.2 Automação de Regressão:**

* Criação de scripts de regressão automatizados que serão executados em cada build.

**7.3 Planejamento de Execução:**

* Diariamente, em cada pull request, etc.

**8. Documentação de Integração de APIs**

**8.1 Testes de API Automatizados:**

* Postman, Newman.

**8.2 Testes de Contrato:**

* Pact.

**8.3 Testes de Carga em APIs:**

* k6.

**Conclusão**

Este plano de teste abrangente fornecerá uma base sólida para garantir a qualidade do Instagram. A automação dos testes com Cypress permitirá a detecção de erros e falhas de forma rápida e eficiente. A integração com ferramentas de performance, segurança e acessibilidade também contribuirá para um site de alta qualidade.

**Observação:** Este plano de teste é apenas um exemplo e pode ser adaptado de acordo com as necessidades específicas do projeto.
            });