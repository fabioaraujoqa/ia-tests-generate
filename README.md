# Projeto de Geração de Planos de Teste Automatizados

Este projeto é uma ferramenta que automatiza a criação de planos de teste, código de automação Cypress e instruções de execução usando as APIs do ChatGPT e Gemini. O objetivo é fornecer uma solução automatizada para gerar artefatos de teste para diferentes sites, permitindo validação rápida e fácil.

## Funcionalidades

- **Geração de Planos de Teste**: Cria um documento PDF detalhado com o plano de teste funcional.
- **Geração de Código de Automação Cypress**: Cria scripts de teste Cypress em um projeto organizado.
- **Instruções de Execução**: Gera um arquivo `readme.md` com instruções detalhadas sobre como configurar o ambiente e executar os testes.

## Requisitos

- Node.js (v14 ou superior)
- Conta na OpenAI com uma chave de API para o ChatGPT
- Conta no Google Cloud com uma chave de API para o Gemini
- Git (opcional, mas recomendado para controle de versão)

## Instalação

Siga os passos abaixo para instalar e configurar o projeto:

1. **Clone o repositório**:

    ```bash
    git clone https://github.com/fabioaraujoqa/ia-tests-generate.git
    cd ia-tests-generate
    ```

2. **Instale as dependências**:

    No diretório raiz do projeto, execute:

    ```bash
    npm install
    ```

3. **Configuração das Chaves de API**:

    Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis de ambiente:

    ```plaintext
    CHATGPT_API_KEY=SUA_CHAVE_API_CHATGPT
    GEMINI_API_KEY=SUA_CHAVE_API_GEMINI
    ```

    Substitua `SUA_CHAVE_API_CHATGPT` e `SUA_CHAVE_API_GEMINI` pelas suas respectivas chaves de API.

## Como Usar

### Executando o Programa

1. **Configurar a Instrução**:
   
   Abra o arquivo instrucao.yml e edite o prompt conforme sua necessidade, inserindo um contexto e url da sua aplicação.

2. **Executar o Programa**:

    Execute o programa com Node.js:

    ```bash
    node geradorPlanosTeste.js
    ```

3. **Verifique os Resultados**:

    O programa gerará três artefatos principais:

    - **Plano de Teste em PDF**: Localizado na pasta `plan-chatgpt` ou `plan-gemini`, dependendo da IA utilizada.
    - **Código de Automação Cypress**: Gerado na pasta `codigo_automacao` dentro de `plan-chatgpt` ou `plan-gemini`.
    - **Instruções de Execução**: Localizadas no arquivo `readme.md` dentro das mesmas pastas.

## Personalização

Você pode personalizar o prompt de instrução para se adequar às suas necessidades de teste. O código é flexível e pode ser ajustado para gerar artefatos para diferentes tipos de projetos.

## Contribuição

Se você quiser contribuir com o projeto:

1. Fork este repositório.
2. Crie uma nova branch (`git checkout -b feature/nova-funcionalidade`).
3. Faça suas alterações e faça commit delas (`git commit -am 'Adiciona nova funcionalidade'`).
4. Faça push para a branch (`git push origin feature/nova-funcionalidade`).
5. Abra um Pull Request.

## Licença

Este projeto é licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

### Notas Finais

Certifique-se de atualizar as instruções conforme as particularidades do seu projeto. Se houver dependências específicas ou comandos adicionais, eles devem ser incluídos na seção de instalação ou uso.

Bom proveito! 