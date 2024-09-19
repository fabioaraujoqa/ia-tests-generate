const fs = require('fs');
const pdf = require('pdfkit');
const axios = require('axios');
require('dotenv').config();
const path = require('path');
const yaml = require('js-yaml');

// Carregar o conteúdo do arquivo YAML
const instrucaoPath = path.join(__dirname, 'instrucao.yml');
const instrucaoData = fs.readFileSync(instrucaoPath, 'utf8');
const instrucaoYaml = yaml.load(instrucaoData);


// Função para receber a instrução via texto
function receberInstrucao(texto) {
    return texto;
}

// Função para analisar a instrução
function analisarInstrucao(instrucao) {
    console.log('Analisando instrução:', instrucao);
    const planoDeTesteRegex = /gerar.*plano de teste completo/i;
    return planoDeTesteRegex.test(instrucao) ? 'planoDeTesteCompleto' : 'invalido';
}

// Função para configurar headers de autenticação
function configurarHeaders(apiKey) {
    return {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
    };
}

// Função para consultar a API do ChatGPT
async function consultarChatGPT(instrucao, apiKey) {
    try {
        const response = await axios.post('https://api.openai.com/v1/chat/completions', {
            model: versaoChatGPT,
            messages: [{ role: 'user', content: instrucao }],
        }, {
            headers: configurarHeaders(apiKey)
        });
        return response.data.choices[0].message.content;
    } catch (error) {
        console.error('Erro ao consultar a API do ChatGPT:', error.message);
        return null;
    }
}

// Função para consultar a API do Gemini
async function consultarGemini(instrucao, apiKey) {
    try {
        const response = await axios.post(`https://generativelanguage.googleapis.com/v1beta/models/${versaoGemini}:generateContent?key=${apiKey}`, {
            contents: [
                {
                    parts: [
                        { text: instrucao }
                    ]
                }
            ]
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        console.log('Resposta da API do Gemini:', JSON.stringify(response.data, null, 2));

        const candidate = response.data.candidates?.[0];
        return candidate?.content?.parts?.[0]?.text ?? null;
    } catch (error) {
        console.error('Erro ao consultar a API do Gemini:', error.message);
        return null;
    }
}

// Função para gerar o arquivo readme.md com as instruções de execução
function gerarInstrucaoExecucao(conteudo, nomeArquivo) {
    fs.writeFileSync(nomeArquivo, conteudo);
}

// Função para criar a estrutura do plano de teste
async function gerarPlanoDeTeste(instrucao, apiKey, ia) {
    const conteudo = ia === 'chatgpt'
        ? await consultarChatGPT(instrucao, apiKey)
        : await consultarGemini(instrucao, apiKey);

    if (conteudo) {
        gerarPDF(conteudo, `plan-${ia}/plano_de_teste.pdf`);
    } else {
        console.error(`Erro ao gerar o plano de teste com a API ${ia}`);
    }
}

// Função para criar o código de automação dinâmico em Cypress
async function gerarCodigoAutomacao(instrucao, apiKey, ia) {
    const promptCypress = `
    Gere código de automação de testes usando Cypress para o site especificado: ${instrucao}. 
    O código deve seguir as melhores práticas e incluir:

    1. **Estrutura Padrão do Cypress**: Crie a estrutura básica com 'describe', 'beforeEach', e múltiplos blocos 'it'.
        - **Describe**: Um bloco que define o conjunto de testes para uma funcionalidade específica.
        - **BeforeEach**: Um bloco que prepara o ambiente antes de cada teste, como carregar a página inicial.
        - **It**: Vários blocos de teste que verificam comportamentos específicos.

    2. **Testes Funcionais Principais**:
        - **Navegação**: Valide que todas as páginas principais são acessíveis a partir do menu de navegação.
            - Teste a navegação para cada item do menu, verificando se a URL e o conteúdo da página estão corretos.
        - **Busca**: Teste a funcionalidade de busca para diferentes termos, incluindo termos simples, complexos, e com caracteres especiais.
            - Verifique se os resultados são relevantes e se os filtros funcionam conforme esperado.
        - **Login/Logout**: Implemente testes para o fluxo completo de autenticação, incluindo login com credenciais válidas e inválidas.
            - Teste a criação de uma nova conta, a recuperação de senha, e o logout.

    3. **Cobertura de Cenários Específicos**:
        - **Formulários**: Valide a submissão de formulários importantes, como o formulário de contato ou cadastro.
            - Teste a validação de campos obrigatórios, formatos de email, e mensagens de erro apropriadas.
        - **Interações Dinâmicas**: Teste interações com elementos dinâmicos como dropdowns, modais, e sliders.
            - Verifique se esses elementos se comportam corretamente em diferentes estados (aberto, fechado, ativo, inativo).

    4. **Tratamento de Dados e Mocking**:
        - Utilize fixtures para carregar dados de teste em cenários como formulários ou buscas.
        - Implemente interceptações ('cy.intercept') para simular respostas de API, especialmente em testes de login e busca.

    5. **Comentários e Documentação**:
        - Adicione comentários explicativos no código para facilitar a compreensão.
        - Inclua uma descrição clara do que cada bloco 'it' está testando e por que.

    6. **Integração com Allure**:
        - Configure a integração com Allure para gerar relatórios detalhados de teste, se possível.
        - Garanta que os relatórios incluam capturas de tela em caso de falhas e logs de execução.

    Certifique-se de que o código gerado seja modular, reutilizável e siga as boas práticas de automação de testes.
    O objetivo é criar um conjunto de testes que possa ser facilmente mantido e expandido conforme necessário.
`;

    const conteudo = ia === 'chatgpt'
        ? await consultarChatGPT(promptCypress, apiKey)
        : await consultarGemini(promptCypress, apiKey);

    if (conteudo) {
        const pastaAutomacao = `plan-${ia}/codigo_automacao`;
        criarPastaSeNaoExistir(pastaAutomacao);

        const codigoCypress = `
            describe('Teste de Automação em cypress', () => {
                ${conteudo}
            });
        `;

        fs.writeFileSync(`${pastaAutomacao}/e2e.cy.js`, codigoCypress.trim());
    } else {
        console.error(`Erro ao gerar o código de automação com a API ${ia}`);
    }
}

// Função para criar as instruções de execução
async function gerarInstrucoes(instrucao, apiKey, ia) {
    const conteudo = ia === 'chatgpt'
        ? await consultarChatGPT(instrucao, apiKey)
        : await consultarGemini(instrucao, apiKey);

    if (conteudo) {
        gerarInstrucaoExecucao(conteudo, `plan-${ia}/readme.md`);
    } else {
        console.error(`Erro ao gerar as instruções com a API ${ia}`);
    }
}

// Função para gerar PDF
function gerarPDF(conteudo, nomeArquivo) {
    const doc = new pdf();
    doc.pipe(fs.createWriteStream(nomeArquivo));
    doc.text(conteudo);
    doc.end();
}

// Função auxiliar para criar pastas se não existirem
function criarPastaSeNaoExistir(pasta) {
    if (!fs.existsSync(pasta)) {
        fs.mkdirSync(pasta);
    }
}

// Função principal para coordenar a execução
async function executarPrograma(instrucao, apis, iasSelecionadas) {
    const tipo = analisarInstrucao(instrucao);
    if (tipo === 'planoDeTesteCompleto') {
        for (const ia of iasSelecionadas) {
            const apiKey = apis[ia];
            criarPastaSeNaoExistir(`plan-${ia}`);

            await gerarPlanoDeTeste(instrucao, apiKey, ia);
            await gerarCodigoAutomacao(instrucao, apiKey, ia);
            await gerarInstrucoes(instrucao, apiKey, ia);
        }
        console.log('Planos de teste completos gerados com sucesso!');
    } else {
        console.log('Instrução inválida.');
    }
}

// Receber a instrução do arquivo YAML
const instrucao = receberInstrucao(instrucaoYaml.instrucao);

const apis = {
    chatgpt: process.env.CHATGPT_API_KEY,
    gemini: process.env.GEMINI_API_KEY
};

const iasSelecionadas = ['chatgpt', 'gemini']; // Escolha as IAs que deseja usar: ['chatgpt'], ['gemini'], ou ['chatgpt', 'gemini']
const versaoChatGPT = 'gpt-3.5-turbo'; // Alterar conforme necessário: gpt-3.5-turbo | gpt-4 | gpt-4-turbo-preview
const versaoGemini = 'gemini-1.5-flash-latest'; // Alterar conforme necessário: gemini-1.5-flash-latest | gemini-2.0-flash-latest

executarPrograma(instrucao, apis, iasSelecionadas);


