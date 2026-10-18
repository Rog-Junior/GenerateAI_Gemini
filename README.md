# 🚀 ModelAI - Integração com Google Gemini AI

Uma aplicação Node.js desenvolvida para demonstrar a utilização da nova SDK oficial do Google Generative AI (`@google/genai`), cobrindo geração de conteúdo com resposta única e respostas em fluxo em tempo real (streaming).

---

## 📸 Projeto em Funcionamento

![Projeto Funcionando](https://github.com/Rog-Junior/GenerateAI_Gemini/blob/main/Image_Readme/ProjFuncionando.png))

---

## 🔑 Como Obter a Chave de API do Gemini AI

Siga os passos abaixo para gerar sua chave de API gratuita no **Google AI Studio**:

1. Acesse o site oficial: [https://aistudio.google.com/api-keys](https://aistudio.google.com/api-keys)
2. Clique no botão indicado para criar uma nova chave de API:
   
   ![Acessar AI Studio e criar chave](https://github.com/Rog-Junior/GenerateAI_Gemini/blob/main/Image_Readme/APIGemini.png)

3. Siga as instruções em tela para selecionar ou criar o projeto:

   ![Passo a passo no AI Studio](https://github.com/Rog-Junior/GenerateAI_Gemini/blob/main/Image_Readme/CriandoAPI.png)

4. Copie a chave de API gerada conforme exibido na imagem:

   ![Copiar chave de API](https://github.com/Rog-Junior/GenerateAI_Gemini/blob/main/Image_Readme/Criando%20API2.png)

---

## 📦 Instalação e Configuração

### 1. Clonar o Repositório
```bash
git clone https://github.com/Rog-Junior/GenerateAI_Gemini/

### 2. Instalar as Dependências
Navegue até a pasta do repositório Node.js e execute o comando abaixo para instalar as dependências necessárias:

```bash
npm install
```

### 3. Configurar as Variáveis de Ambiente
Crie um arquivo chamado `.env` na raiz do projeto (mesma pasta do `package.json`) e insira a chave obtida no Google AI Studio:

![Colar a chave de API](https://github.com/Rog-Junior/GenerateAI_Gemini/blob/main/Image_Readme/CriandoEnv.png)
```env
GEMINI_API_KEY=sua_chave_de_api_aqui
```

---

## 🚀 Como Executar o Projeto

Para rodar a aplicação no modo de desenvolvimento com recarregamento automático (*watch mode*):

```bash
npm run dev
```

Ou para rodar diretamente via Node.js:

```bash
npm start
```

---

## 🛠️ Tecnologias Utilizadas

* **Node.js**
* **@google/genai** (SDK Oficial)
* **dotenv**
