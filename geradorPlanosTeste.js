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
            model: 'gpt-3.5-turbo', // Use 'gpt-4' se tiver acesso
            messages: [{ role: 'user', content: instrucao }],
            max_tokens: 1000
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
        const response = await axios.post(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`, {
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
        Gerar código Cypress para testar o site especificado. O código deve incluir a estrutura padrão do Cypress com 'describe' e 'it'. 
        Certifique-se de incluir testes funcionais para as funcionalidades principais do site ${instrucao}, 
        como navegação, busca, e login, se aplicável.
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

// Escolha as IAs que deseja usar: ['chatgpt'], ['gemini'], ou ['chatgpt', 'gemini']
const iasSelecionadas = ['chatgpt', 'gemini']; // Alterar conforme necessário

executarPrograma(instrucao, apis, iasSelecionadas);
