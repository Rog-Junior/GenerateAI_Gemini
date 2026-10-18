// Carrega automaticamente as variáveis de ambiente declaradas no arquivo .env para o process.env
import 'dotenv/config';

// Importa a classe principal da nova SDK oficial do Google Gen AI
import { GoogleGenAI } from '@google/genai';

// Instancia o cliente da API passando a chave de autenticação guardada na variável de ambiente GEMINI_API_KEY
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });


/**
 * Função assíncrona para requisições de resposta única (em bloco).
 * Aguarda a geração completa do texto antes de exibir o resultado.
 */
async function RespostaUnica() {
  // Chama a API com generateContent para processar o prompt e retornar o resultado completo de uma só vez
  const response = await ai.models.generateContent({
    model: "gemini-3.5-flash", // Especifica o modelo a ser utilizado
    contents: "Quanto é 5+5?", // O prompt enviado para a IA
  });

  // Imprime no console o texto final retornado pela resposta
  console.log(response.text);
}

// Executa a função de resposta única
RespostaUnica();


/**
 * Execução em fluxo (Streaming) em tempo real.
 * Não aguarda a conclusão total: recebe os fragmentos de texto à medida que a IA os gera.
 */
const responseInRealTime = await ai.models.generateContentStream({
  model: "gemini-3.5-flash", // Especifica o modelo a ser utilizado
  contents: "Explique pra mim o que é o NodeJS", // O prompt enviado para a IA
});

// Itera de forma assíncrona sobre cada fragmento (chunk) recebido do servidor
for await (const chunk of responseInRealTime) {
  // Imprime no console o pedaço de texto gerado naquele momento
  console.log(chunk.text);
}