# 🤖 [Nome do Bot] - Helper e Rede Social

Um bot para Discord completo, desenvolvido para otimizar a experiência do servidor. Ele conta com um guia visual interativo, um sistema de publicações (rede social interna), uma inteligência artificial restrita e ferramentas de administração.

## ✨ Funcionalidades

*   **📖 Guias Visuais:** Geração dinâmica de imagens com composição usando Sharp para exibir dicas e estratégias de forma visual.
*   **📱 Rede Social Interna:** Sistema de postagens com categorias, sistema de curtidas, favoritos privados e busca.
*   **🤖 Inteligência Artificial:** Integração com o Google Gemini. A IA possui uma personalidade sarcástica, porém com filtros de segurança rígidos, sendo restrita a responder apenas sobre o escopo do servidor.
*   **⚙️ Administração:** Comando exclusivo para administradores configurarem o canal onde as postagens do feed serão enviadas.
*   **💾 Banco de Dados Local:** Utiliza um arquivo database.json para salvar curtidas, favoritos e postagens de forma persistente, sem a necessidade de um banco de dados externo.

## 🛠️ Tecnologias Utilizadas

*   Node.js (v16.9.0 ou superior)
*   Discord.js (v14)
*   Sharp (Para processamento e composição de imagens)
*   Google Generative AI (Para a Inteligência Artificial)
*   Dotenv (Para variáveis de ambiente)

## 🚀 Instalação e Configuração

Siga os passos abaixo para rodar o bot localmente ou em uma hospedagem.

### 1. Pré-requisitos
*   Ter o Node.js instalado na máquina.
*   Ter uma aplicação criada no Discord Developer Portal.
*   Ter uma chave de API do Google AI Studio (Gemini).

### 2. Clonar o repositório
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio

### 3. Instalar as dependências
npm install

### 4. Configurar as Variáveis de Ambiente
Crie um arquivo chamado .env na raiz do projeto e adicione as seguintes variáveis:

TOKEN=seu_token_do_discord_aqui
CLIENT_ID=id_do_seu_bot_aqui
GEMINI_API_KEY=sua_chave_api_do_gemini_aqui

### 5. Estrutura de Pastas e Assets
O bot depende de imagens e vídeos para funcionar corretamente. Certifique-se de que a pasta assets esteja configurada assim:

📦 seu-repositorio
 ┣ 📂 assets
 ┃ ┣ 📂 background
 ┃ ┃ ┗ bg.png (Imagem de fundo para os guias)
 ┃ ┣ 📂 killers
 ┃ ┃ ┗ 📂 [id_do_killer] (ex: animatronic)
 ┃ ┃   ┣ 📂 addons
 ┃ ┃   ┃ ┣ 1.webp, 2.webp, 3.webp, 4.webp
 ┃ ┃   ┣ 📂 perks
 ┃ ┃   ┃ ┣ 1.png, 2.png, 3.png, 4.png
 ┃ ┃   ┗ killer.png
 ┃ ┗ 📂 Killers videos
 ┃   ┗ [video_do_killer.mp4]
 ┣ 📜 index.js
 ┣ 📜 killersDB.js
 ┣ 📜 database.json (Gerado automaticamente na primeira execução)
 ┗ 📜 package.json

### 6. Executar o Bot
node index.js

## 📜 Comandos Disponíveis

| Comando | Descrição | Permissão |
| :--- | :--- | :--- |
| /ajuda | Exibe o manual completo com todas as funções. | Todos |
| /contato | Mostra informações de contato do desenvolvedor. | Todos |
| /listar_killers | Lista todas as entradas disponíveis no banco de dados. | Todos |
| /como_enfrentar_killer | Gera o guia visual e em vídeo de um item específico. | Todos |
| /postar | Cria uma publicação no feed com imagem e texto. | Todos |
| /favoritas_postagens | Lista as publicações que o usuário salvou. | Todos |
| /pesquisar_postagens | Filtra as publicações do mural por categoria. | Todos |
| /ia | Conversa com a Inteligência Artificial do servidor. | Todos |
| /configurar | Define o canal onde o feed de postagens será enviado. | Apenas Administradores |

## 💾 Sobre o Banco de Dados

O bot cria um arquivo database.json automaticamente. Ele armazena:
*   IDs das mensagens que receberam curtidas e quem curtiu.
*   IDs das postagens favoritadas por cada usuário.
*   Dados das postagens criadas.
*   ID do canal configurado para o feed.

**⚠️ Aviso:** Se você hospedar o bot em serviços que não possuem disco persistente (onde os arquivos são apagados a cada reinício), os dados do database.json serão perdidos. Recomenda-se o uso de VPS ou serviços de hospedagem de bot que garantam a persistência dos arquivos.

## 👨‍💻 Desenvolvedor

Desenvolvido por **[Anthonny Michael]**.
*   **Discord:** [anthonnybrbr]
*   **GitHub:** [@seu-usuario](https://github.com/seu-usuario)

---
*Se este projeto foi útil para você, considere deixar uma ⭐ no repositório!*