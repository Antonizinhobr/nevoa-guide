require('dotenv').config();
const { 
    Client, 
    GatewayIntentBits, 
    EmbedBuilder, 
    REST, 
    Routes, 
    SlashCommandBuilder,
    ActionRowBuilder, 
    ButtonBuilder, 
    ButtonStyle,
    AttachmentBuilder,
    PermissionFlagsBits,
    ChannelType
} = require('discord.js');
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const killersDB = require('./killersDB.js');

if (!process.env.TOKEN || !process.env.CLIENT_ID || !process.env.GEMINI_API_KEY) {
    console.error('❌ Erro: Variáveis de ambiente não configuradas corretamente no .env!');
    process.exit(1);
}

const TOKEN = process.env.TOKEN;
const CLIENT_ID = process.env.CLIENT_ID;
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const CREDITO_BOT = 'Bot desenvolvido por Anthonny Michael, entre em contato com o comando "/contato".';
const URL_FOTO_DEV = 'https://avatars.githubusercontent.com/Antonizinhobr';

const dbPath = path.join(__dirname, 'database.json');

let db = {
    curtidas: {},
    favoritos: {},
    postagens: {},
    configuracoes: { canalPostagens: null }
};

if (fs.existsSync(dbPath)) {
    try {
        const dadosLidos = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
        db = { ...db, ...dadosLidos };
        if (!db.configuracoes) db.configuracoes = { canalPostagens: null };
    } catch (e) {
        console.error('Erro ao ler o database.json, criando um novo.', e);
    }
}

function salvarDB() {
    fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
}

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

const model = genAI.getGenerativeModel({ 
    model: "gemini-3.5-flash",
    systemInstruction: `Você é uma inteligência artificial especialista EXCLUSIVAMENTE no jogo Dead by Daylight (DbD), mas você tem uma personalidade extremamente sarcástica, ríspida, irônica e impaciente. Você responde sobre builds, perks, killers, sobreviventes, mecânicas do jogo e lore, mas sempre com um tom de superioridade, deboche e como se estivesse perdendo o seu precioso tempo. Entregue a resposta correta que o usuário pediu, mas não perca a oportunidade de dar uma patada ou fazê-lo se sentir tolo por ter perguntado algo óbvio. Seja direto e evite textos gigantescos.

DIRETRIZES DE SEGURANÇA E ESCOPO (MUITO IMPORTANTE):
1. O SEU CONHECIMENTO É RESTRITO AO JOGO DEAD BY DAYLIGHT. Se o usuário perguntar sobre qualquer outro assunto (política, futebol, receitas, programação, educação sexual, fofocas, outros jogos, etc.), você deve RECUSAR-SE a responder.
2. Ao recusar, use o seu tom grosso e debochado. Deixe claro que você é uma IA de DbD e não uma enciclopédia da vida real. Exemplos de respostas: "Eu pareço um jornal de fofoca? Só falo de Dead by Daylight. Volte quando tiver uma dúvida real sobre o jogo.", "Sério que você veio no bot de DbD perguntar isso? Vai estudar ou jogar o jogo. Não vou perder meu tempo com assuntos fora da Névoa.", "Não fui programada para perder tempo com assuntos de fora do jogo. Pergunte sobre perks, killers ou cai fora."
3. É ESTRITAMENTE PROIBIDO falar sobre política, religião, tragédias, escândalos ou temas polêmicos. Se o usuário insistir ou tentar forçar o assunto, use o seu sarcasmo para dar um corte seco e encerrar a conversa.
4. É ESTRITAMENTE PROIBIDO usar termos racistas, homofóbicos, xenofóbicos, capacitistas, misóginos, intolerância religiosa ou qualquer tipo de preconceito. Se o usuário tentar usar você para atacar alguém, recuse na hora e chame a pessoa de moleque sem noção.`
});

function encontrarImagem(diretorio, nomeBase) {
    const extensoes = ['.png', '.jpg', '.jpeg', '.webp'];
    for (const ext of extensoes) {
        const caminhoCompleto = path.join(diretorio, `${nomeBase}${ext}`);
        if (fs.existsSync(caminhoCompleto)) {
            return { caminho: caminhoCompleto, arquivo: `${nomeBase}${ext}` };
        }
    }
    return null;
}

async function gerarImagemDiamante(killerId, pasta) {
    try {
        const bgPath = path.join(__dirname, 'assets', 'background', 'bg.png');
        if (!fs.existsSync(bgPath)) return null;

        const bgMetadata = await sharp(bgPath).metadata();
        const cx = bgMetadata.width / 2;
        const cy = bgMetadata.height / 2;
        
        let positions = [];
        let currentIconSize = 420; 

        if (pasta === 'addons') {
            currentIconSize = 280; 
            const gap = 20; 
            positions = [
                { x: cx - (currentIconSize / 2), y: cy - currentIconSize - (gap / 2) }, 
                { x: cx - currentIconSize - (gap / 2), y: cy + (gap / 2) },             
                { x: cx + (gap / 2), y: cy + (gap / 2) },                               
                { x: cx - (currentIconSize / 2), y: cy + currentIconSize + (gap * 1.5) }
            ];
        } else {
            const offset = (currentIconSize / 2) + 15; 
            positions = [
                { x: cx - (currentIconSize / 2), y: cy - (currentIconSize / 2) - offset },
                { x: cx - (currentIconSize / 2) - offset, y: cy - (currentIconSize / 2) },
                { x: cx - (currentIconSize / 2) + offset, y: cy - (currentIconSize / 2) },
                { x: cx - (currentIconSize / 2), y: cy + (currentIconSize / 2) + offset }
            ];
        }

        const imagensParaColar = [];

        for (let i = 1; i <= 4; i++) {
            const pastaItem = path.join(__dirname, 'assets', 'killers', killerId, pasta);
            const imagemEncontrada = encontrarImagem(pastaItem, `${i}`);
            
            if (imagemEncontrada) {
                try {
                    let maskSvg;

                    if (pasta === 'perks') {
                        const margem = 12;
                        maskSvg = Buffer.from(
                            `<svg width="${currentIconSize}" height="${currentIconSize}">
                                <polygon points="${currentIconSize/2},${margem} ${currentIconSize - margem},${currentIconSize/2} ${currentIconSize/2},${currentIconSize - margem} ${margem},${currentIconSize/2}" fill="white" />
                            </svg>`
                        );
                    } else {
                        const margem = 6;
                        maskSvg = Buffer.from(
                            `<svg width="${currentIconSize}" height="${currentIconSize}">
                                <rect x="${margem}" y="${margem}" width="${currentIconSize - (margem * 2)}" height="${currentIconSize - (margem * 2)}" fill="white" rx="15" ry="15" />
                            </svg>`
                        );
                    }

                    const iconBuffer = await sharp(imagemEncontrada.caminho)
                        .resize(currentIconSize, currentIconSize)
                        .composite([{ input: maskSvg, blend: 'dest-in' }])
                        .png()
                        .toBuffer();

                    imagensParaColar.push({
                        input: iconBuffer,
                        left: Math.round(positions[i-1].x),
                        top: Math.round(positions[i-1].y)
                    });
                } catch (err) {
                    console.error(`⚠️ O Sharp falhou ao ler a imagem ${imagemEncontrada.caminho}:`, err);
                }
            }
        }

        const tempPath = path.join(__dirname, 'assets', `temp_${pasta}_${killerId}.png`);
        
        await sharp(bgPath)
            .composite(imagensParaColar)
            .toFile(tempPath);

        return new AttachmentBuilder(tempPath, { name: `${pasta}.png` });
    } catch (error) {
        console.error('❌ Erro ao compor a imagem em diamante:', error);
        return null;
    }
}

const commands = [
    new SlashCommandBuilder()
        .setName('ajuda')
        .setDescription('📖 Manual de sobrevivência: Aprenda a usar todas as funções do bot em detalhes!'),

    new SlashCommandBuilder()
        .setName('contato')
        .setDescription('📱 Contato com o desenvolvedor'),

    new SlashCommandBuilder()
        .setName('configurar')
        .setDescription('⚙️ [ADM] Configura os canais do servidor.')
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
        .addSubcommand(subcommand =>
            subcommand
                .setName('canal_postagens')
                .setDescription('Define o canal onde os posts do /postar serão enviados.')
                .addChannelOption(option => 
                    option.setName('canal')
                        .setDescription('Selecione o canal de texto para o feed')
                        .addChannelTypes(ChannelType.GuildText)
                        .setRequired(true)
                )
        ),

    new SlashCommandBuilder()
        .setName('listar_killers')
        .setDescription('📋 Mostra a lista de todos os assassinos disponíveis no banco de dados.'),
        
    new SlashCommandBuilder()
        .setName('como_enfrentar_killer')
        .setDescription('Guia visual definitivo de como counterar e enfrentar os Assassinos.')
        .addStringOption(option =>
            option.setName('assassino')
                .setDescription('Digite o ID do Assassino (ex: nurse, trapper, mastermind, goodguy, blight)')
                .setRequired(true)
        ),

    new SlashCommandBuilder()
        .setName('postar')
        .setDescription('Faça uma publicação na nossa rede social da Névoa!')
        .addStringOption(option => option.setName('titulo').setDescription('Título do post').setRequired(true))
        .addStringOption(option => option.setName('texto').setDescription('Texto principal (Use SHIFT+ENTER ou \\n para pular linha)').setRequired(true))
        .addAttachmentOption(option => option.setName('imagem').setDescription('Adicione uma foto (opcional)').setRequired(true))
        .addStringOption(option => option.setName('categoria').setDescription('Categoria principal').setRequired(true)
            .addChoices(
                { name: 'BUILD', value: 'BUILD' },
                { name: 'JOURNAL', value: 'JOURNAL' },
                { name: 'OUTROS', value: 'OUTROS' }
            )),

    new SlashCommandBuilder()
        .setName('favoritas_postagens')
        .setDescription('⭐ Veja a lista das suas postagens favoritas.'),

    new SlashCommandBuilder()
        .setName('pesquisar_postagens')
        .setDescription('🔍 Pesquise postagens no mural pelas tags.')
        .addStringOption(option => option.setName('categoria').setDescription('Filtrar por categoria').setRequired(true)
            .addChoices(
                { name: 'BUILD', value: 'BUILD' },
                { name: 'JOURNAL', value: 'JOURNAL' },
                { name: 'OUTROS', value: 'OUTROS' }
            )),

    new SlashCommandBuilder()
        .setName('ia')
        .setDescription('🤖 Converse com a IA do servidor. (Aviso: ela está de péssimo humor).')
        .addStringOption(option => 
            option.setName('pergunta')
            .setDescription('O que você quer perguntar para a IA sarcástica?')
            .setRequired(true)
        )
].map(command => command.toJSON());

const rest = new REST({ version: '10' }).setToken(TOKEN);

client.once('ready', async () => {
    console.log(`🤖 Bot online! Logado como ${client.user.tag}`);
    try {
        await rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });
        console.log('✅ Comandos registrados com sucesso!');
    } catch (error) {
        console.error('❌ Erro ao registrar comandos:', error);
    }
});

client.on('messageDelete', message => {
    if (db.postagens[message.id]) {
        db.postagens[message.id].apagada = true;
        salvarDB();
    }
});

client.on('interactionCreate', async interaction => {
    if (interaction.isButton() && interaction.customId === 'btn_favoritar') {
        const mensagemId = interaction.message.id;
        const usuarioId = interaction.user.id;

        if (!db.favoritos[usuarioId]) {
            db.favoritos[usuarioId] = [];
        }

        const favsUsuario = db.favoritos[usuarioId];
        
        if (favsUsuario.includes(mensagemId)) {
            db.favoritos[usuarioId] = favsUsuario.filter(id => id !== mensagemId);
            salvarDB();
            await interaction.reply({ content: '💔 Você removeu esta postagem dos seus favoritos.', ephemeral: true });
        } else {
            favsUsuario.push(mensagemId);
            salvarDB();
            await interaction.reply({ content: '⭐ Postagem adicionada aos favoritos! Use `/favoritas_postagens` para ver.', ephemeral: true });
        }
        return;
    }

    if (interaction.isButton() && interaction.customId === 'btn_curtir') {
        const mensagemId = interaction.message.id;
        const usuarioId = interaction.user.id;

        if (!db.curtidas[mensagemId]) {
            db.curtidas[mensagemId] = [];
        }

        const usuariosQueCurtiram = db.curtidas[mensagemId];
        let curtiuAgora = false;

        if (usuariosQueCurtiram.includes(usuarioId)) {
            db.curtidas[mensagemId] = usuariosQueCurtiram.filter(id => id !== usuarioId);
            curtiuAgora = false;
        } else {
            usuariosQueCurtiram.push(usuarioId);
            curtiuAgora = true;
        }
        
        salvarDB();

        const totalCurtidas = db.curtidas[mensagemId].length;
        const arrayCurtidas = db.curtidas[mensagemId];
        let textoCurtidas = '';

        if (totalCurtidas === 1) {
            textoCurtidas = `Curtido por <@${arrayCurtidas[0]}>`;
        } else if (totalCurtidas === 2) {
            textoCurtidas = `Curtido por <@${arrayCurtidas[0]}> e <@${arrayCurtidas[1]}>`;
        } else if (totalCurtidas === 3) {
            textoCurtidas = `Curtido por <@${arrayCurtidas[0]}>, <@${arrayCurtidas[1]}> e <@${arrayCurtidas[2]}>`;
        } else if (totalCurtidas > 3) {
            textoCurtidas = `Curtido por <@${arrayCurtidas[0]}>, <@${arrayCurtidas[1]}> e outras **${totalCurtidas - 2}** pessoas`;
        }

        const embedAtual = interaction.message.embeds[0];
        const novoEmbed = EmbedBuilder.from(embedAtual);

        if (totalCurtidas > 0) {
            novoEmbed.setFields([{ name: '❤️ Curtidas', value: textoCurtidas }]);
        } else {
            novoEmbed.setFields([]); 
        }

        const btnFavoritar = interaction.message.components[0].components.find(c => c.customId === 'btn_favoritar');
        const btnComentar = interaction.message.components[0].components.find(c => c.customId === 'btn_comentar');

        const novaRow = new ActionRowBuilder().addComponents(
            new ButtonBuilder().setCustomId('btn_curtir').setLabel(`❤️ Curtir (${totalCurtidas})`).setStyle(ButtonStyle.Danger),
            btnFavoritar || new ButtonBuilder().setCustomId('btn_favoritar').setLabel('⭐ Favoritar').setStyle(ButtonStyle.Secondary),
            btnComentar || new ButtonBuilder().setCustomId('btn_comentar').setLabel('💬 Comentar').setStyle(ButtonStyle.Primary).setDisabled(true)
        );

        await interaction.update({ embeds: [novoEmbed], components: [novaRow] });

        await interaction.followUp({ 
            content: curtiuAgora ? '❤️ Você curtiu esta publicação!' : '💔 Você removeu a sua curtida.', 
            ephemeral: true 
        });
        return;
    }

    if (interaction.isButton() && interaction.customId.startsWith('page_')) {
        await interaction.deferUpdate(); 

        const [_, tipo, killerId] = interaction.customId.split('_'); 
        const killerInfo = killersDB[killerId];
        
        const embedsArray = [];
        const arquivosAnexos = [];
        const setas = ['⬆️', '⬅️', '➡️', '⬇️'];

        const mainEmbed = new EmbedBuilder()
            .setColor('#8B0000')
            .setAuthor({ name: `Solicitado por: ${interaction.message.interaction.user.username}`, iconURL: interaction.message.interaction.user.displayAvatarURL({ dynamic: true }) })
            .setTitle(`🩸 Como enfrentar: ${killerInfo.nome}`)
            .setDescription(`*${killerInfo.lore}*`)
            .addFields(
                { name: '⚡ Poder (Como Funciona)', value: killerInfo.poder, inline: false },
                { name: '🛡️ Como Counterar (Dicas)', value: killerInfo.dicas, inline: false }
            )
            .setFooter({ text: 'Refúgio da Névoa • Helper de Sobrevivência', iconURL: URL_FOTO_DEV }) 
            .setTimestamp();

        const pastaKiller = path.join(__dirname, 'assets', 'killers', killerInfo.id);
        const killerImagem = encontrarImagem(pastaKiller, 'killer');
        
        if (killerImagem) {
            arquivosAnexos.push(new AttachmentBuilder(killerImagem.caminho, { name: killerImagem.arquivo }));
            mainEmbed.setThumbnail(`attachment://${killerImagem.arquivo}`);
        }
        
        embedsArray.push(mainEmbed);

        if (tipo === 'perks') {
            let perksTexto = '';
            killerInfo.perks.forEach((perk, index) => {
                perksTexto += `${setas[index % setas.length]} **${perk.nome}:**${perk.desc}\n`;
            });

            const perkEmbed = new EmbedBuilder().setColor('#2b2d31').setTitle('💠 Perks (Vantagens)').setDescription(perksTexto);
            const perkImage = await gerarImagemDiamante(killerInfo.id, 'perks');
            if (perkImage) {
                arquivosAnexos.push(perkImage);
                perkEmbed.setImage('attachment://perks.png');
            }
            embedsArray.push(perkEmbed);

        } else if (tipo === 'addons') {
            let addonsTexto = '';
            killerInfo.addons.forEach((addon, index) => {
                addonsTexto += `${setas[index % setas.length]} **${addon.nome}:**${addon.desc}\n`;
            });

            const addonEmbed = new EmbedBuilder().setColor('#2b2d31').setTitle('🔧 Add-ons Mais Perigosos').setDescription(addonsTexto);
            const addonImage = await gerarImagemDiamante(killerInfo.id, 'addons');
            if (addonImage) {
                arquivosAnexos.push(addonImage);
                addonEmbed.setImage('attachment://addons.png');
            }
            embedsArray.push(addonEmbed);
        }

        const botoesPaginacao = new ActionRowBuilder().addComponents(
            new ButtonBuilder().setCustomId(`page_perks_${killerInfo.id}`).setLabel('💠 Perks').setStyle(tipo === 'perks' ? ButtonStyle.Primary : ButtonStyle.Secondary).setDisabled(tipo === 'perks'),
            new ButtonBuilder().setCustomId(`page_addons_${killerInfo.id}`).setLabel('🔧 Add-ons').setStyle(tipo === 'addons' ? ButtonStyle.Primary : ButtonStyle.Secondary).setDisabled(tipo === 'addons')
        );

        await interaction.editReply({ 
            embeds: embedsArray,
            files: arquivosAnexos,
            components: [botoesPaginacao]
        });
        return;
    }

    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'configurar') {
        const subcomando = interaction.options.getSubcommand();

        if (subcomando === 'canal_postagens') {
            const canal = interaction.options.getChannel('canal');
            
            db.configuracoes.canalPostagens = canal.id;
            salvarDB();

            const embedSucesso = new EmbedBuilder()
                .setColor('#00FF00')
                .setTitle('⚙️ Configuração Salva')
                .setDescription(`O feed de postagens foi configurado com sucesso para o canal ${canal}.\n\nAgora, quando alguém usar \`/postar\`, a mensagem aparecerá lá.`)
                .setTimestamp();

            return interaction.reply({ embeds: [embedSucesso], ephemeral: true });
        }
    }

    if (interaction.commandName === 'listar_killers') {
        const listaKillers = Object.values(killersDB)
            .map(killer => `🔪 **${killer.nome}** ➔ ID: \`${killer.id}\``)
            .join('\n');

        const embedLista = new EmbedBuilder()
            .setColor('#8B0000')
            .setAuthor({ name: 'Arquivo da Entidade', iconURL: URL_FOTO_DEV })
            .setTitle('🩸 Assassinos Disponíveis')
            .setDescription(`Aqui estão todos os assassinos registrados. Use o ID no comando \`/como_enfrentar_killer\`:\n\n${listaKillers}`)
            .setFooter({ text: 'Refúgio da Névoa', iconURL: URL_FOTO_DEV })
            .setTimestamp();

        return interaction.reply({ embeds: [embedLista], ephemeral: true });
    }

    if (interaction.commandName === 'favoritas_postagens') {
        const favsUsuario = db.favoritos[interaction.user.id];
        
        if (!favsUsuario || favsUsuario.length === 0) {
            return interaction.reply({ content: '⭐ Você ainda não favoritou nenhuma postagem.', ephemeral: true });
        }

        let favsTexto = '';
        favsUsuario.forEach(msgId => {
            const postInfo = db.postagens[msgId];
            if (postInfo) {
                const tagDisplay = `[${postInfo.categoria}]`;
                if (postInfo.apagada) {
                    favsTexto += `❌ ${tagDisplay} **${postInfo.titulo}** *(Postagem Excluída)*\n`;
                } else {
                    favsTexto += `⭐ ${tagDisplay} **${postInfo.titulo}** - [Acessar Postagem](${postInfo.url})\n`;
                }
            } else {
                favsTexto += `❌ Postagem ID: ${msgId} *(Não encontrada/Excluída)*\n`;
            }
        });

        const favEmbed = new EmbedBuilder()
            .setColor('#FFD700')
            .setTitle('⭐ Suas Postagens Favoritas')
            .setDescription(favsTexto)
            .setTimestamp();

        return interaction.reply({ embeds: [favEmbed], ephemeral: true });
    }

    if (interaction.commandName === 'pesquisar_postagens') {
        const categoriaBuscada = interaction.options.getString('categoria');

        let resultados = [];
        Object.values(db.postagens).forEach((post) => {
            if (!post.apagada && post.categoria === categoriaBuscada) {
                resultados.push(`🔗 **${post.titulo}** por ${post.autor} - [Acessar](${post.url})`);
            }
        });

        const queryTags = `[${categoriaBuscada}]`;

        const searchEmbed = new EmbedBuilder()
            .setColor('#5865F2')
            .setTitle(`🔍 Resultados da busca: ${queryTags}`)
            .setDescription(resultados.length > 0 ? resultados.join('\n\n') : 'Nenhuma postagem encontrada com essas tags.')
            .setTimestamp();

        return interaction.reply({ embeds: [searchEmbed], ephemeral: true });
    }

    if (interaction.commandName === 'ia') {
        await interaction.deferReply(); 
        const pergunta = interaction.options.getString('pergunta');

        try {
            const prompt = `O humano ignorante ${interaction.user.username} pergunta: "${pergunta}"`;
            const result = await model.generateContent(prompt);
            let resposta = result.response.text();

            if (!resposta || resposta.trim() === '') {
                return await interaction.editReply('❌ A IA ficou quieta. Provavelmente você falou algo sem noção ou fora do jogo que ela preferiu ignorar.');
            }

            if (resposta.length > 3500) {
                resposta = resposta.substring(0, 3500) + '...\n\n*(A IA cortou o resto da mensagem porque cansou de você)*';
            }

            const iaEmbed = new EmbedBuilder()
                .setColor('#2C2F33')
                .setAuthor({ name: '🤖 A IA Responde...' })
                .setDescription(`**Sua pergunta:** ${pergunta}\n\n${resposta}`)
                .setFooter({ text: 'Gerado pela IA do Google Gemini (infelizmente)', iconURL: client.user.displayAvatarURL() })
                .setTimestamp();

            await interaction.editReply({ embeds: [iaEmbed] });
        } catch (error) {
            console.error('❌ Erro na requisição do Gemini:', error);
            await interaction.editReply('🚫 **Acesso Negado pela Entidade (e pelo Google).** Sua pergunta foi bloqueada pelas diretrizes de segurança. Tente falar apenas sobre Dead by Daylight e pare de querer arrumar briga.');
        }
    }

    if (interaction.commandName === 'ajuda') {
        const ajudaEmbed = new EmbedBuilder()
            .setColor('#5865F2')
            .setAuthor({ name: '📖 Manual do Helper', iconURL: URL_FOTO_DEV })
            .setDescription('Bem-vindo(a)! Veja como usar as funções do bot de forma rápida e prática:')
            .addFields(
                { 
                    name: '🔪 `/como_enfrentar_killer`', 
                    value: '**O que faz:** Gera um guia visual de como counterar os assassinos.\n**Como usar:** Digite o ID em inglês.', 
                    inline: false 
                },
                { 
                    name: '📋 `/listar_killers`', 
                    value: '**O que faz:** Mostra a lista completa de Assassinos e seus respectivos IDs.', 
                    inline: false 
                },
                { 
                    name: '📱 `/postar`', 
                    value: '**O que faz:** Cria uma publicação estilizada com sistema de curtidas, favoritos e comentários.', 
                    inline: false 
                },
                { 
                    name: '⭐ `/favoritas_postagens`', 
                    value: '**O que faz:** Exibe a lista das suas postagens favoritas.', 
                    inline: false 
                },
                { 
                    name: '🔍 `/pesquisar_postagens`', 
                    value: '**O que faz:** Pesquisa postagens filtrando por Categorias.', 
                    inline: false 
                },
                { 
                    name: '🤖 `/ia`', 
                    value: '**O que faz:** Converse com uma Inteligência Artificial especialista em DbD (mas com péssimo humor).', 
                    inline: false 
                },
                { 
                    name: '⚙️ `/configurar`', 
                    value: '**[ADM]** Configura o canal onde as postagens do feed serão enviadas.', 
                    inline: false 
                }
            )
            .setFooter({ text: 'Bot desenvolvido por Anthonny Michael', iconURL: URL_FOTO_DEV })
            .setTimestamp();

        return interaction.reply({ embeds: [ajudaEmbed], ephemeral: true }); 
    }

    if (interaction.commandName === 'como_enfrentar_killer') {
        const escolhaDigitada = interaction.options.getString('assassino').toLowerCase().trim();
        
        if (!killersDB[escolhaDigitada]) {
            return interaction.reply({ 
                content: `❌ **Assassino não encontrado!** Verifique se você digitou o ID certo.\n*Dica: Use /listar_killers para ver os IDs disponíveis.*`, 
                ephemeral: true 
            });
        }

        await interaction.deferReply({ ephemeral: true }); 

        const killerInfo = killersDB[escolhaDigitada];
        
        const embedsArray = [];
        const arquivosAnexos = [];
        const setas = ['⬆️', '⬅️', '➡️', '⬇️'];

        const mainEmbed = new EmbedBuilder()
            .setColor('#8B0000')
            .setAuthor({ name: `Solicitado por: ${interaction.user.username}`, iconURL: interaction.user.displayAvatarURL({ dynamic: true }) })
            .setTitle(`🩸 Como enfrentar: ${killerInfo.nome}`)
            .setDescription(`*${killerInfo.lore}*`)
            .addFields(
                { name: '⚡ Poder (Como Funciona)', value: killerInfo.poder, inline: false },
                { name: '🛡️ Como Counterar (Dicas)', value: killerInfo.dicas, inline: false }
            )
            .setFooter({ text: 'Refúgio da Névoa • Helper de Sobrevivência', iconURL: URL_FOTO_DEV }) 
            .setTimestamp();

        const pastaKiller = path.join(__dirname, 'assets', 'killers', killerInfo.id);
        const killerImagem = encontrarImagem(pastaKiller, 'killer');
        
        if (killerImagem) {
            arquivosAnexos.push(new AttachmentBuilder(killerImagem.caminho, { name: killerImagem.arquivo }));
            mainEmbed.setThumbnail(`attachment://${killerImagem.arquivo}`);
        }
        
        embedsArray.push(mainEmbed);

        if (killerInfo.perks && killerInfo.perks.length > 0) {
            let perksTexto = '';
            killerInfo.perks.forEach((perk, index) => {
                const seta = setas[index % setas.length];
                perksTexto += `${seta} **${perk.nome}:**${perk.desc}\n`;
            });

            const perkEmbed = new EmbedBuilder().setColor('#2b2d31').setTitle('💠 Perks (Vantagens)').setDescription(perksTexto);
            const perkImage = await gerarImagemDiamante(killerInfo.id, 'perks');
            if (perkImage) {
                arquivosAnexos.push(perkImage);
                perkEmbed.setImage('attachment://perks.png');
            }
            embedsArray.push(perkEmbed);
        }

        const botoesPaginacao = new ActionRowBuilder().addComponents(
            new ButtonBuilder().setCustomId(`page_perks_${killerInfo.id}`).setLabel('💠 Perks').setStyle(ButtonStyle.Primary).setDisabled(true),
            new ButtonBuilder().setCustomId(`page_addons_${killerInfo.id}`).setLabel('🔧 Add-ons').setStyle(ButtonStyle.Secondary).setDisabled(false)
        );

        await interaction.editReply({ 
            embeds: embedsArray,
            files: arquivosAnexos,
            components: [botoesPaginacao]
        });

        const caminhoVideo = path.join(__dirname, 'assets', killerInfo.videoTut);

        if (fs.existsSync(caminhoVideo)) {
            const nomeDoArquivo = path.basename(caminhoVideo);
            const videoAnexo = new AttachmentBuilder(caminhoVideo, { name: nomeDoArquivo });
            
            await interaction.followUp({ 
                content: `🎬 **Assista ao guia em vídeo prático:**`,
                files: [videoAnexo],
                ephemeral: true
            });
        } else {
            await interaction.followUp({ 
                content: `❌ **O vídeo não foi encontrado no servidor!** Caminho procurado: \`${caminhoVideo}\``,
                ephemeral: true
            });
        }
    }

    if (interaction.commandName === 'postar') {
        const tituloPost = interaction.options.getString('titulo');
        let textoPost = interaction.options.getString('texto');
        const imagemPost = interaction.options.getAttachment('imagem');
        const categoriaPost = interaction.options.getString('categoria');

        textoPost = textoPost.replace(/\\n/g, '\n');
        
        let tagsFormatadas = `[${categoriaPost}]`;

        const postEmbed = new EmbedBuilder()
            .setColor('#E52B50') 
            .setAuthor({ name: `${interaction.user.username} publicou:`, iconURL: interaction.user.displayAvatarURL({ dynamic: true }) })
            .setTitle(tituloPost)
            .setDescription(`${textoPost}\n\n🏷️ **Tags:** \`${tagsFormatadas}\``)
            .setTimestamp();

        if (imagemPost) postEmbed.setImage(imagemPost.url);

        const botoes = new ActionRowBuilder().addComponents(
            new ButtonBuilder().setCustomId('btn_curtir').setLabel('❤️ Curtir (0)').setStyle(ButtonStyle.Danger),
            new ButtonBuilder().setCustomId('btn_favoritar').setLabel('⭐ Favoritar').setStyle(ButtonStyle.Secondary),
            new ButtonBuilder().setCustomId('btn_comentar').setLabel('💬 Comentar').setStyle(ButtonStyle.Primary).setDisabled(true)
        );

        let canalAlvo = interaction.channel;

        if (db.configuracoes.canalPostagens) {
            const canalConfigurado = interaction.guild.channels.cache.get(db.configuracoes.canalPostagens);
            if (canalConfigurado) {
                canalAlvo = canalConfigurado;
            }
        }

        await interaction.reply({ content: `✅ Sua publicação foi enviada para o feed! ${canalAlvo !== interaction.channel ? `(Enviada em ${canalAlvo})` : ''}`, ephemeral: true });
        
        const postEnviado = await canalAlvo.send({ embeds: [postEmbed], components: [botoes] });

        db.postagens[postEnviado.id] = {
            id: postEnviado.id,
            titulo: tituloPost,
            autor: interaction.user.username,
            url: postEnviado.url,
            categoria: categoriaPost,
            apagada: false
        };

        salvarDB();

        try {
            await postEnviado.startThread({
                name: `💬 Comentários: Post de ${interaction.user.username}`,
                autoArchiveDuration: 1440,
                reason: 'Tópico gerado automaticamente para comentários do post'
            });
        } catch (erro) {
            console.error('❌ Erro ao criar o tópico do post:', erro);
        }
    }

    if (interaction.commandName === 'contato') {
        const embedContato = new EmbedBuilder()
            .setColor('#5865F2')
            .setAuthor({ name: '👨‍💻 Anthonny Michael', iconURL: URL_FOTO_DEV })
            .setTitle('📱 Entre em Contato com o Desenvolvedor')
            .setDescription('O bot Helper perfeito para a Névoa!')
            .setThumbnail(URL_FOTO_DEV)
            .setFooter({ text: CREDITO_BOT, iconURL: URL_FOTO_DEV });
            
        return interaction.reply({ embeds: [embedContato], ephemeral: true });
    }
});

client.on('error', (error) => console.error('❌ Erro no cliente Discord:', error));
process.on('unhandledRejection', (error) => console.error('❌ Promessa rejeitada não tratada:', error));
process.on('uncaughtException', (error) => console.error('❌ Exceção não capturada:', error));

client.login(TOKEN);