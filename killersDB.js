module.exports = {
    pig: {
        id: 'pig',
        nome: 'A Porca (The Pig)',
        lore: 'Amanda Young, era discípula do Jigsaw. Depois de sofrer e ser manipulada por ele, passou a acreditar que os testes eram uma forma de “purificar” pessoas.\nNo fim, ela se tornou tão cruel quanto seu mestre e continuou os jogos por conta própria, até ser levada pela Entidade.',
        poder: '**Batismo do Jigsaw:**\nA Pig começa com 4 armadilhas. Quando um gerador é feito, elas começam a contar, e você precisa achar uma Caixa do Jigsaw pra tirar.\nEla também pode se agachar e ficar furtiva, sem Luz Vermelha nem Raio de Terror, e usar uma Emboscada.',
        dicas: '• Priorize tirar a armadilha antes de tentar fazer gerador, se ela já estiver ativa.\n• Caso sua armadilha esteja ativa, tentar sair pelo portão vai resultar em sua morte, então priorize removê-la antes de tentar escapar.',
        addons: [
            { nome: 'Cronômetro Adulterado', desc: '  Reduz o tempo do cronômetro de morte das Armadilhas de Urso Reversas em 20 segundos.' },
            { nome: 'Caixa de Engrenagens', desc: '  Aumenta a velocidade de instalação das Armadilhas de Urso Reversas em 50% e reduz a velocidade de decifrar nas Caixas de Jigsaw em 33%.' },
            { nome: 'Bolsa de Engrenagens', desc: '  Aumenta a velocidade de instalação das Armadilhas de Urso Reversas em 50% e reduz a velocidade de decifrar nas Caixas de Jigsaw em 17%.' }
        ],
        perks: [
            { nome: 'Truque do Carrasco', desc: '  Você recebe um aviso quando alguém sabota um gancho e, ao carregar alguém, vê a aura dos sobreviventes próximos aos ganchos.' },
            { nome: 'Faça a sua Escolha', desc: '  Enganche um Sobrevivente e deixe a área. Quando o Sobrevivente for resgatado, a pessoa que o resgatou fica Exposta e pode ser derrubada num só acerto.' },
            { nome: 'Vigilância', desc: '  Geradores regredindo ficam com a aura branca, e quando param ficam amarelos. Você também ouve os reparos de mais longe, facilitando encontrar sobreviventes.' }
        ],
        videoTut: './Killers videos/Pig/guia_pig.mp4'
    },

    animatronic: {
        id: 'animatronic',
        nome: 'O Animatrônico (The Animatronic)',
        lore: 'Springtrap é uma monstruosidade de carne e metal, resultado do passado sanguinário de William Afton. Um inventor brilhante e assassino cruel, suas criações trouxeram diversão para muitas crianças, mas também serviram aos seus crimes. Mesmo após a morte, sua vontade de matar permaneceu, até que a Névoa da Entidade o levou.',
        poder: '**Medo de Fazbear:**\nO Animatrônico pode arremessar seu Machado contra Sobreviventes. Ao acertar um Sobrevivente saudável, o Machado fica preso em seu corpo, deixando-o Quebrado e Alheio até que seja removido. Springtrap também pode usar as Portas de Segurança espalhadas pelo mapa para se transportar rapidamente entre diferentes locais. Sobreviventes podem usar essas portas para acessar o Escritório de Segurança, utilizar câmeras e viajar pelo mapa, mas compartilham uma bateria limitada.',
        dicas: '• Mude de direção quando perceber que Springtrap está preparando o arremesso do Machado.\n• Use paredes e obstáculos para bloquear os arremessos.\n• Se estiver com um Machado preso, procure um momento seguro para removê-lo, pois você não poderá se curar enquanto estiver Quebrado.\n• Tome cuidado ao usar as Portas de Segurança, pois Springtrap pode viajar até uma porta que esteja sendo usada e agarrar você.\n• Use as Câmeras de Segurança para acompanhar a movimentação de Springtrap e ajudar sua equipe.\n• Não desperdice a bateria das Portas e Câmeras, pois ela é compartilhada entre todos os Sobreviventes.\n• Quando Springtrap entrar em uma Porta de Segurança, fique atento às outras portas, pois ele pode aparecer rapidamente em outra parte do mapa.',
        addons: [
            { nome: 'Distintivo de Segurança', desc: '  Ao sair de uma Porta de Segurança após se teletransportar para ela, estende a duração do Efeito de Status Indetectável em +25% (totalizando 25 segundos).' },
            { nome: 'Cordas da Guitarra do Bonnie', desc: '  Enquanto se move entre as Portas de Segurança, a intensidade das auras dos Geradores revela seu progresso atual de reparo. Ao sair de uma Porta de Segurança, remove o Efeito de Status Indetectável instantaneamente (reduz a duração em 100% para 0 segundos).' },
            { nome: 'Cardápio do Restaurante', desc: '  Enquanto recupera o Machado de Incêndio que está cravado no ambiente, reduz o tempo mínimo de recuperação da arma em -10%.' }
        ],
        perks: [
            { nome: 'Descontrolado', desc: '  Quando um Sobrevivente para de abrir um Portão de Saída após atingir pelo menos 80% de progresso, o Portão começa a regredir a 100% da velocidade normal de abertura. Enquanto regride, as luzes do Portão piscam aleatoriamente para os Sobreviventes.' },
            { nome: 'Precisa-se de Ajuda', desc: '  Ao danificar um gerador, ele fica Comprometido. Quando esse gerador é concluído, a recuperação dos seus ataques básicos bem-sucedidos fica 25% mais rápida por 60 s. Apenas 1 gerador pode ficar Comprometido por vez.' },
            { nome: 'Fobia de Fantasma', desc: '  Quando um Sobrevivente dentro do seu Raio de Terror olha para você, ele grita e sua aura é revelada por 2 s. Tempo de recarga: 60 s.' }
        ],
        videoTut: './Killers videos/SpringTrap/guia_springtrap.mp4'
    },

    hag: {
        id: 'hag',
        nome: 'A Bruxa (The Hag)',
        lore: 'Lisa Sherwood foi capturada e mantida acorrentada por canibais. Após sofrer fome e torturas terríveis, seus braços ficaram magros o suficiente para escapar das correntes. Com seu último suspiro, ela desenhou símbolos de um livro proibido de sua avó, despertando uma fome sombria por sangue. A Entidade então a levou para a Névoa.',
        poder: '**Catalisador Escurecido:**\nA Bruxa pode criar até 10 Armadilhas Fantasmas no chão. Quando um Sobrevivente entra no raio de uma armadilha, um Fantasma de Lama surge, assustando-o e emitindo um falso Raio de Terror. A Bruxa pode se teletransportar instantaneamente para uma Armadilha Fantasma ativada.',
        dicas: '• Tenha cuidado ao andar perto de pallets, janelas e corredores, pois a Bruxa pode colocar Armadilhas Fantasmas nesses locais.\n• Agachar-se permite passar pelas Armadilhas Fantasmas sem ativá-las.\n• Se ativar uma armadilha, afaste-se rapidamente do local para evitar que a Bruxa se teletransporte até você.\n• Use lanternas para destruir as Armadilhas Fantasmas à distância.\n• Evite permanecer perto de um companheiro que acabou de ativar uma armadilha, pois a Bruxa pode se teletransportar para o local e atacar rapidamente.\n• Durante um resgate, fique atento ao chão ao redor do gancho: a Bruxa costuma preparar uma rede de armadilhas para proteger a área.\n• Se perceber que uma área está cheia de armadilhas, tente levar a perseguição para outra parte do mapa.',
        addons: [
            { nome: 'Asas de Libélula', desc: '  Aumenta a distância máxima de teletransporte para as Armadilhas Fantasmas em 12,5%.' },
            { nome: 'Cigarra Seca', desc: '  Aumenta a distância máxima de teletransporte para as Armadilhas Fantasmas em 15%.' },
            { nome: 'Algemas Enferrujadas', desc: '  As Armadilhas Fantasmas ativadas não geram um Fantasma (cópia da Bruxa) e não dão nenhum tipo de aviso ou indicação aos Sobreviventes de que foram acionadas.' }
        ],
        perks: [
            { nome: 'Feitiço: Arruinar', desc: '  Gera um Totem Enfeitiçado. Enquanto estiver ativo, os geradores que não estão sendo reparados regridem automaticamente.' },
            { nome: 'Feitiço: O Terceiro Selo', desc: '  Gera um Totem Enfeitiçado. Sobreviventes atingidos por um ataque sofrem Cegueira e não conseguem enxergar auras enquanto o Totem permanecer ativo.' },
            { nome: 'Feitiço: Devorar Esperança', desc: '  Gera um Totem Enfeitiçado. Você ganha pontos quando Sobreviventes são resgatados de ganchos enquanto você está longe. Com 2 pontos, ganha velocidade após enganchar; com 3, pode derrubar Sobreviventes com um único ataque; com 5, pode matá-los instantaneamente. Os efeitos terminam quando o Totem é purificado.' }
        ],
        videoTut: './Killers videos/Hag/guia_hag.mp4'
    },

    huntress: {
        id: 'huntress',
        nome: 'A Caçadora (The Huntress)',
        lore: 'A Caçadora é uma assassina que cresceu isolada nas florestas russas, tornando-se uma caçadora brutal após perder a mãe e sobreviver sozinha na natureza.',
        poder: '**Machadinhas de caça:**\nA Caçadora pode carregar e arremessar machados contra os Sobreviventes, causando dano à distância.',
        dicas: '• Quebre a linha de visão para evitar os machados. Fique perto de obstáculos para dificultar os arremessos.\n• Não corra em linha reta: isso facilita muito os ataques da Caçadora.\n• Preste atenção no som: o zumbido do machado indica que ela está prestes a arremessar.',
        addons: [
            { nome: 'Cabo de Carvalho', desc: '  Reduz o tempo de recarga (cooldown) após arremessar uma Machadinha em 20%.' },
            { nome: 'Lenço de Flores', desc: '  Reduz o tempo de preparação (wind-up) para arremessar as Machadinhas em 10%.' },
            { nome: 'Mistura Brilhante', desc: '  Ao atingir um Sobrevivente com uma Machadinha, a aura dele é revelada para você por 5 segundos.' }
        ],
        perks: [
            { nome: 'Besta da Caça', desc: '  Ao receber sede de sangue, recebe indetectável por 40 segundos.' },
            { nome: 'Instinto Territorial', desc: '  Revela a aura de Sobreviventes que entram no porão quando você está a 24 metros dele, podendo ver a aura por 6 segundos.' },
            { nome: 'Feitiço: Canção da Caçadora', desc: '  Ganha pontos de progresso ao enganchar; eles dificultam Testes de Perícia. Com 5 pontos, os testes de perícia básicos não aparecem. Sempre que um sobrevivente erra um teste de perícia, o gerador perde 6% a mais de progresso.' }
        ],
        videoTut: './Killers videos/Huntress/guia_huntress.mp4'
    },

    hillbilly: {
        id: 'hillbilly',
        nome: 'O Caipira (The Hillbilly)',
        lore: 'Max Thompson Jr. era o filho indesejado de ricos proprietários de terras. Nascido com deformidades, foi trancado em uma sala e alimentado por um buraco na parede. Após anos de solidão e humilhação, escapou e massacrou os pais e as autoridades que o torturaram. Depois, sua fúria se voltou para os animais da fazenda, deixando um rastro de cadáveres pela Fazenda Coldwind até ser levado pela Entidade.',
        poder: '**A Motosserra:**\nAperte e segure o Botão de Poder para iniciar uma Corrida com a Motosserra. Sobreviventes atingidos durante a corrida entram no estado Morrendo e barricadas atingidas são destruídas. Correr com a Motosserra aumenta o medidor de Sobremarcha. Quando ele enche, a Motosserra entra em Sobremarcha, aumentando a velocidade de corrida e carregamento, além de reduzir o tempo necessário para carregar a Corrida com a Motosserra.',
        dicas: '• Evite correr em linha reta em áreas abertas, pois o Caipira pode percorrer grandes distâncias rapidamente com a Motosserra.\n• Use obstáculos, paredes e estruturas para dificultar a trajetória da Corrida com a Motosserra.\n• Quando ouvir a Motosserra sendo carregada, tente quebrar a linha de visão e entrar em uma área com muitas curvas.\n• Pallets e janelas podem ajudar a forçar o Caipira a fazer curvas difíceis e errar a Motosserra.\n• Não fique parado em áreas abertas, principalmente se ele estiver longe e puder usar a Motosserra para se aproximar rapidamente.\n• Se ele iniciar uma Corrida com a Motosserra, mudar de direção no momento certo pode fazê-lo passar direto por você.\n• Cuidado ao tentar salvar alguém perto de áreas abertas: o Caipira pode usar a Motosserra para chegar rapidamente ao local.',
        addons: [
            { nome: 'Marcas Iridescentes', desc: '  Aumenta em 20% a velocidade de movimento com a Corrida com a Motosserra, mas aumenta em 12% o tempo necessário para carregar a Motosserra.' },
            { nome: 'Correntes Enferrujadas', desc: '  Passe por pallets e paredes destrutíveis sem perder a sua Corrida com a Motosserra. Dentro dos 5s depois desse feito, se atingir um sobrevivente, ele só perderá um estado de saúde. Sobreviventes feridos sofrem do efeito de Ferida Profunda.' },
            { nome: 'Botas Pontiagudas', desc: '  Aumenta a capacidade de giro em 30% ao utilizar a Corrida com a Motosserra.' }
        ],
        perks: [
            { nome: 'Resistência', desc: '  Reduz a duração dos atordoamentos causados por barricadas.' },
            { nome: 'Nascido da Luz', desc: '  Concede imunidade aos efeitos cegantes de Lanternas, Granadas de Luz e Minas Explosivas.' },
            { nome: 'Aprimorador', desc: '  Recebe uma notificação quando um gerador está quase concluído. Ao ser ativada, o Raio de Terror e a Luz Vermelha do Caipira são desativados temporariamente.' }
        ],
        videoTut: './Killers videos/Hillbilly/guia_hillbilly.mp4'
    },

    goodguy: {
        id: 'goodguy',
        nome: 'O Cara Legal (The Good Guy)',
        lore: 'Charles Lee Ray era um assassino em série conhecido como o Estrangulador de Lakeshore. Mortalmente ferido, usou um ritual de vodu para transferir sua alma para um boneco Cara Legal chamado Chucky. Preso naquele corpo, continuou sua onda de assassinatos até ser levado pela Entidade.',
        poder: '**A Brincadeira Acabou:**\nChucky pode entrar no Modo Esconde-esconde, ficando Indetectável e fazendo Passos Ilusórios aparecerem pelo mapa. Durante esse modo, pode carregar o Cortar e Fatiar para avançar rapidamente e atacar um Sobrevivente. Durante o Cortar e Fatiar, Chucky também pode passar rapidamente por janelas e por baixo de barricadas usando a ação Rebate.',
        dicas: '• Preste atenção aos Passos Ilusórios, mas não confie totalmente neles para descobrir onde Chucky está.\n• Como Chucky é muito pequeno, fique atento aos cantos e obstáculos baixos durante perseguições.\n• Quando ele entrar no Modo Esconde-esconde, tente manter distância e quebrar a linha de visão.\n• Evite correr em linha reta quando ele estiver preparando o Cortar e Fatiar, pois o avanço pode alcançar você rapidamente.',
        addons: [
            { nome: 'Navalha', desc: '  Sobreviventes atingidos por ataques Cortar e Fatiar bem-sucedidos sofrem dos Efeitos de Status Hemorragia e Dilacerado por 80 segundos.' },
            { nome: 'Furadeira', desc: '  Reduz a duração da recarga do Modo Esconde-Esconde em -10% após ataques Cortar e Fatiar bem-sucedidos.' },
            { nome: 'Veneno de Rato', desc: '  Enquanto executa um ataque Cortar e Fatiar, as auras de todos os Sobreviventes num raio de 6 metros são reveladas a você por 2,5 segundos.' }
        ],
        perks: [
            { nome: 'Amigos até o Fim', desc: '  Ao enganchar um Sobrevivente que não seja a Obsessão, a Obsessão fica Exposta e revela sua aura por um período. Ao enganchar a Obsessão, outro Sobrevivente grita, revela sua posição e se torna a nova Obsessão.' },
            { nome: 'Feitiço: Dois Podem Jogar', desc: '  Após ser atordoado ou cegado 2 vezes, um Totem Apagado se transforma em Totem Enfeitiçado. Enquanto o Feitiço estiver ativo, Sobreviventes que atordoarem ou cegarem você também ficam Cegos por 1,5 s.' },
            { nome: 'Pilhas Inclusas', desc: '  Enquanto estiver a até 12 m de um gerador concluído, recebe 5% de celeridade. O bônus permanece por um curto período após sair do alcance.' }
        ],
        videoTut: './Killers videos/Chucky/guia_chucky.mp4'
    },

    doctor: {
        id: 'doctor',
        nome: 'O Médico (The Doctor)',
        lore: 'Herman Carter era um médico brilhante escolhido para um programa secreto de neurociência no Instituto Memorial do Léry. Ele ultrapassou todos os limites da terapia de eletrochoque, realizando experimentos cada vez mais perturbadores em pacientes e prisioneiros. Quando o instituto parou de se comunicar, investigadores encontraram funcionários, pacientes e prisioneiros mortos, vítimas dos experimentos letais do Médico.',
        poder: '**Faíscas de Carter:**\nO Médico pode usar a Terapia de Choque para atingir Sobreviventes à distância, aumentando sua Loucura e interrompendo determinadas ações. Também pode usar a Explosão Estática para atingir todos os Sobreviventes dentro do seu Raio de Terror, fazendo-os gritar e aumentando sua Loucura.\n\n**Loucura:**\nCada nível de Loucura causa diferentes efeitos nos Sobreviventes. No nível III, eles precisam usar a ação Sair da Loucura antes de poder reparar, curar, sabotar, buscar ou purificar Totens.',
        dicas: '• Quando o Médico preparar a Terapia de Choque, tente mudar de direção para dificultar o acerto.\n• Use obstáculos para dificultar a Terapia de Choque durante as perseguições.\n• Evite ficar em áreas abertas quando ele estiver usando a Explosão Estática para localizar jogadores.\n• No nível III de Loucura, procure um momento seguro para usar Sair da Loucura.\n• Fique atento às alucinações causadas pela Loucura, pois elas podem dificultar a identificação da posição do Médico.\n• Não tente derrubar um pallet ou saltar uma janela enquanto estiver sendo atingido pela Terapia de Choque.\n• Se o Médico estiver protegendo uma área com Explosão Estática, considere se afastar e trabalhar em outro objetivo.',
        addons: [
            { nome: 'Eletrodo de Estímulo Elevado', desc: '  Aumenta o alcance do ataque especial Terapia de Choque em 4 metros.' },
            { nome: 'Rei Iridescente', desc: '  Sempre que os Sobreviventes recebem um choque da Terapia de Choque ou Explosão Estática, eles são afligidos com um Efeito de Loucura aleatório (Pallets Ilusórios, Raio de Terror Ilusório, Mancha Vermelha Ilusória ou Doutores Ilusórios). Eles sofrem desses efeitos até que a Loucura retorne ao Nível I.' },
            { nome: '"Disciplina" - Anotações de Carter', desc: '  Reduz o atraso da detonação da Terapia de Choque em 0,1 segundos. Sobreviventes com Loucura de Nível II experienciam uma Mancha Vermelha e um Raio de Terror ilusórios como se o Doutor estivesse logo atrás deles durante perseguições. No Nível III de Loucura, essas ilusões estão constantemente ativas.' }
        ],
        perks: [
            { nome: 'Monitore e Abuse', desc: '  Enquanto estiver em uma perseguição, seu Raio de Terror aumenta. Fora de uma perseguição, seu Raio de Terror diminui.' },
            { nome: 'Sobrecarga', desc: '  Após danificar um gerador, o próximo Sobrevivente a interagir com ele enfrenta um Teste de Perícia difícil. Ao falhar, o gerador regride instantaneamente em 2/3/4% e sua velocidade de regressão aumenta de 85% para 130% durante 30 s.' },
            { nome: 'Presença Esmagadora', desc: '  Sempre que um Sobrevivente usa um item a 32 m de você, ele recebe Exaustão por 15 s. Sempre que um Sobrevivente a 32 m de você recebe Exaustão, você vê a aura do Sobrevivente com Exaustão mais próximo por 4 s. Tempo de recarga: 25 s.' }
        ],
        videoTut: './Killers videos/Doctor/guia_medico.mp4'
    },

    darklord: {
        id: 'darklord',
        nome: 'O Senhor das Trevas (The Dark Lord)',
        lore: 'Após a morte de sua amada, Vlad Tepes Drácula foi consumido pela tristeza e pela loucura. Buscando vencer a própria morte, tornou-se um vampiro imortal e construiu seu castelo na Romênia. Durante séculos, espalhou terror, sofrimento e morte, até que seu caminho acabou cruzando com o Reino da Entidade.',
        poder: '**Transformação Vampírica:**\nDrácula pode alternar livremente entre três formas. Na **Forma Vampírica**, usa Fogo do Inferno para criar pilares de chamas capazes de atingir Sobreviventes. Na **Forma de Lobo**, pode rastrear Sobreviventes através de Orbes de Aroma e usar um poderoso ataque de salto. Na **Forma de Morcego**, fica Indetectável, move-se rapidamente, atravessa janelas e barricadas caídas e pode se teletransportar para pontos de salto.',
        dicas: '• Contra a Forma Vampírica, evite ficar alinhado em corredores e atrás de obstáculos baixos, pois o Fogo do Inferno pode atingir você.\n• Quando Drácula estiver na Forma de Lobo, faça curvas fechadas e use obstáculos para dificultar seus saltos.\n• Os Orbes de Aroma ajudam o Lobo a rastrear e alcançar você, então cuidado ao permanecer muito tempo na mesma área.\n• Na Forma de Morcego, Drácula não consegue atacar diretamente, então aproveite o momento para se reposicionar.',
        addons: [
            { nome: 'Chapéu de Viajante', desc: ' Aumenta a velocidade de transformação em 5 segundos.' },
            { nome: 'Engrenagem da Torre do Relógio', desc: ' Reduz o tempo de recarga de transformação em 5 segundos.' },
            { nome: 'Presa de Lobo Branco', desc: ' Você consegue ver a aura de todos os sobreviventes, cujo orbes de faro você já coletou, por 5 segundos toda vez que o seu Bote com o lobo estiver disponível.' }
        ],
        perks: [
            { nome: 'Domínio', desc: ' Na primeira vez que cada Baú ou Totem é tocado por um Sobrevivente, a Entidade o bloqueia por 16 s e sua aura é revelada para você.' },
            { nome: 'Feitiço: Destino Miserável', desc: ' Após um gerador ser concluído, um Totem Apagado aleatório se torna Enfeitiçado e amaldiçoa a Obsessão, reduzindo sua velocidade de reparo em 33%. A Obsessão vê a aura do Totem quando estiver a até 12 m dele.' },
            { nome: 'Ganância Humana', desc: ' Permite chutar Baús abertos para fechá-los. As auras dos Baús ainda não abertos são sempre reveladas. Sobreviventes que chegam a até 8 m de Baús fechados ou ainda não abertos têm suas auras reveladas por 5 s. Fechar um Baú possui 10 s de recarga.' }
        ],
        videoTut: './Killers videos/Dracula/guia_dracula.mp4'
    },

    wraith: {
        id: 'wraith',
        nome: 'O Espectro (The Wraith)',
        lore: 'Philip Ojomo trabalhava em um ferro-velho e descobriu que estava destruindo carros contendo pessoas vivas. Horrorizado, matou seu chefe e desapareceu. A Entidade encontrou seu sofrimento e o transformou em uma criatura invisível.',
        poder: '**Sino das Lamentações:**\nPode tocar seu sino para ficar invisível. Enquanto invisível, não pode atacar, mas pode se aproximar dos Sobreviventes. Ao sair da invisibilidade, recebe um breve aumento de velocidade.',
        dicas: '• Preste atenção no sino para saber quando ele está se aproximando.\n• Olhe ao redor constantemente, pois ele pode ficar difícil de enxergar.\n• Ao perceber ele se aproximando, largue o gerador, pois a velocidade que ele ganha quando sai da invisibilidade na maioria das vezes garante um acerto.',
        addons: [
            { nome: 'Badalo Enfeitado', desc: ' Torna o Sino das Lamentações completamente silencioso. Os Sobreviventes não podem ouvir o som do sino quando você fica invisível ou visível.' },
            { nome: '"Caçada Rápida" - Sangue', desc: ' Aumenta em 12% a velocidade do reaparecimento.' },
            { nome: '"Dança das Sombras" - Sangue', desc: ' Aumenta a velocidade das ações de saltar (janelas), quebrar Barricadas, destruir Paredes Destrutíveis e danificar Geradores em +60% enquanto estiver invisível.' }
        ],
        perks: [
            { nome: 'Cão de Caça', desc: ' As poças de sangue deixadas pelos Sobreviventes ficam mais fáceis de identificar.' },
            { nome: 'Predador', desc: ' Quando para de perseguir um sobrevivente, a aura dele é revelada ao Espectro por 6 segundos.' },
            { nome: 'Nascido das Sombras', desc: ' Quando o Espectro é cegado por qualquer meio, recebe celeridade por 10 segundos.' }
        ],
        videoTut: './Killers videos/Espectro/guia_espectro.mp4'
    },

    ghostface: {
        id: 'ghostface',
        nome: 'Ghost Face (The Ghost Face)',
        lore: 'Danny Johnson era um jornalista que escondia uma vida como assassino em série. Usando diferentes identidades, perseguia suas vítimas, estudava suas rotinas e depois escrevia sobre os próprios crimes. Como Ghost Face, transformou seus assassinatos em uma obra cuidadosamente planejada antes de ser levado pela Entidade.',
        poder: '**Mortalha da Noite:**\nGhost Face pode ativar a Mortalha da Noite para ficar Indetectável, removendo seu Raio de Terror e Mancha Vermelha. Enquanto estiver furtivo, pode Espreitar os Sobreviventes para Marcá-los. Sobreviventes Marcados ficam Expostos e podem ser derrubados com um único ataque. Sobreviventes que observarem Ghost Face por tempo suficiente podem Revelá-lo e encerrar sua Mortalha da Noite.',
        dicas: '• Olhe ao redor constantemente enquanto estiver reparando, pois Ghost Face pode Espreitar você de longe.\n• Se perceber que ele está tentando Marcar você, quebre a linha de visão usando paredes e obstáculos.\n• Evite permanecer em áreas abertas, onde é mais fácil para ele completar a Marcação.\n• Se estiver Marcado, jogue com cuidado, pois um único ataque básico pode derrubar você.\n• Tente Revelar Ghost Face quando encontrá-lo usando a Mortalha da Noite para remover sua furtividade.',
        addons: [
            { nome: 'Câmera de Segurança Externa', desc: ' Sempre que você colocar um Sobrevivente Marcado no Estado Agonizante, as auras de todos os outros Sobreviventes são reveladas a você por 7 segundos.' },
            { nome: 'Bainha De Faca Para Perna', desc: ' Você ganha 10% de celeridade por 5 segundos após espreitar por completo um sobrevivente.' },
            { nome: 'Carteira de Motorista', desc: ' Ao completar a Marcação em um Sobrevivente que está reparando um Gerador, o Gerador explode, perde 20% do seu progresso de reparo e é bloqueado pela Entidade por 15 segundos.' }
        ],
        perks: [
            { nome: 'Perseguição Furtiva', desc: ' Após enganchar a Obsessão, você recebe Indetectável e 10% de Aceleração por 18 s. Quando a Obsessão é resgatada do gancho por outro Sobrevivente, quem resgatou se torna a nova Obsessão.' },
            { nome: 'Sou Todo Ouvidos', desc: ' Quando um Sobrevivente realiza uma ação rápida dentro de 48 m de você, sua aura é revelada por 8 s.' },
            { nome: 'Tremores de Terror', desc: ' Após pegar um Sobrevivente, todos os geradores que não estão sendo reparados são bloqueados pela Entidade por 16 s.' }
        ],
        videoTut: './Killers videos/Ghostface/guia_ghostface.mp4'
    },

    houndmaster: {
        id: 'houndmaster',
        nome: 'A Mestra da Matilha (The Houndmaster)',
        lore: 'Portia Maye perdeu o pai quando o pirata Mad Molak o assassinou. Após naufragar em uma ilha ao lado de seu cão Snug, sobreviveu alimentada pelo desejo de vingança. Anos depois, tornou-se capitã de seu próprio navio e iniciou uma caçada brutal até finalmente encontrar Molak. Depois de concluir sua vingança, Portia e Snug foram envolvidos pela Névoa da Entidade.',
        poder: '**Cheiro de Sangue:**\nA Mestra da Matilha luta ao lado de seu cão Snug e pode dar dois comandos. Com **Perseguição**, envia Snug em alta velocidade para agarrar um Sobrevivente e puxá-lo em sua direção. O comando pode ser redirecionado uma vez. Com **Busca**, envia Snug até um local para procurar Sobreviventes; aqueles detectados recebem Faro Canino e têm sua localização indicada. Seguir o caminho da Busca também aumenta a velocidade de movimento da Mestra da Matilha.',
        dicas: '• Quando Snug for enviado em Perseguição, mude de direção e use obstáculos para dificultar o ataque.\n• Depois do primeiro avanço de Snug, fique atento, pois a Mestra da Matilha pode redirecioná-lo uma vez.\n• Se Snug agarrar você, tente usar obstáculos ou receber ajuda de outro Sobrevivente para escapar antes que ela alcance você.\n• Evite permanecer na rota de Busca de Snug, pois você pode ser detectado pelo Faro Canino.\n• Pallets e janelas podem ajudar contra Snug, mas não confie completamente neles durante uma perseguição.',
        addons: [
            { nome: 'Coleira com Cravos', desc: ' Sobreviventes que são agarrados e feridos pelo cão sofrem dos Efeitos de Status Dilacerado e Hemorragia por 60 segundos.' },
            { nome: 'Saco de Ração Rasgado', desc: ' Aumenta ligeiramente a velocidade de movimento do cão enquanto ele está ativamente perseguindo um Sobrevivente.' },
            { nome: 'Tigela Vazia', desc: ' Reduz significativamente o tempo de recarga da habilidade após o cão retornar para você ou após uma caçada bem-sucedida.' }
        ],
        perks: [
            { nome: 'Trovão Estremecedor', desc: ' Após cair de uma altura, aumenta em 75% a distância do seu ataque de investida por 25 s. Tempo de recarga: 5 s.' },
            { nome: 'Sem Piedade', desc: ' Quando um Sobrevivente chega a 75% de progresso ao se curar sozinho, passa a enfrentar Testes de Perícia especiais. Se errar um teste ou interromper a cura, sofre Quebrado por 30 s.' },
            { nome: 'Gancho do Tormento: Bússola Irregular', desc: ' 4 ganchos aleatórios começam como Ganchos do Tormento. Sempre que um Sobrevivente é desenganchado, aquele gancho se torna um Gancho do Tormento. Ao enganchar um Sobrevivente em um Gancho do Tormento, revela a aura do gerador com mais progresso por 6/8/10 s.' }
        ],
        videoTut: './Killers videos/Mestra da Matilha/guia_mestra_da_matilha.mp4'
    },

    deathslinger: {
        id: 'deathslinger',
        nome: 'O Mercenário (The Deathslinger)',
        lore: 'Caleb Quinn nasceu com um talento natural para invenções. Depois de ser traído pelo chefe que roubou suas criações, reagiu com extrema violência e acabou preso. Anos depois, recebeu a chance de conquistar sua liberdade trabalhando como caçador de recompensas, usando suas próprias invenções para capturar criminosos. Sua vida de violência e vingança acabou chamando a atenção da Entidade.',
        poder: '**O Redentor:**\nO Mercenário pode mirar e disparar um arpão preso a uma corrente contra Sobreviventes. Quando acerta, pode puxar o alvo em sua direção para realizar um ataque. O Sobrevivente pode tentar quebrar a corrente usando obstáculos ou resistindo ao puxão. Se a corrente quebrar, o Mercenário fica atordoado por um curto período.',
        dicas: '• Evite correr em linha reta quando o Mercenário estiver mirando, pois isso facilita muito o disparo.\n• Use paredes, árvores e outros obstáculos para bloquear o arpão e ajudar a quebrar a corrente.\n• Quando for perfurado, tente colocar objetos entre você e o Mercenário para fazer a corrente se romper mais rápido.\n• Fique atento a janelas e corredores estreitos, pois são locais onde ele consegue acertar tiros com mais facilidade.\n• Mude de direção enquanto corre para dificultar a mira do Redentor.\n• Não fique parado atrás de pallets baixos, pois ele ainda pode acertar o arpão por cima ou através de alguns espaços.\n• Aproveite o tempo de recarga depois que ele erra um disparo para ganhar distância.',
        addons: [
            { nome: 'Lata de Óleo', desc: ' Reduz o tempo de recuperação (cooldown) após errar um tiro com o arpão em 0,5 segundos.' },
            { nome: 'Chaves do Carcereiro', desc: ' Reduz o tempo de recarga do arpão (O Redentor) em 0,35 segundos.' },
            { nome: 'Cinto de Munição Modificado', desc: ' Reduz o tempo de recarga do arpão (O Redentor) em 0,25 segundos.' }
        ],
        perks: [
            { nome: 'Garantia do Morto', desc: ' Depois de enganchar um Sobrevivente, o primeiro gerador que um Sobrevivente parar de reparar é bloqueado pela Entidade por 35 s. O gerador bloqueado é destacado por uma aura branca. A vantagem não pode ser ativada novamente enquanto ainda estiver bloqueando um gerador.' },
            { nome: 'Mecânico', desc: ' Sempre que um Sobrevivente perde um Estado de Saúde, Mecânico é ativado por 30 s. Durante esse tempo, sempre que um Sobrevivente reparando um gerador acerta um Teste de Perícia bom, sua aura é revelada por 6/7/8 s.' },
            { nome: 'Feitiço: Retribuição', desc: ' Quando um Sobrevivente começa a abençoar ou purificar um Totem, ele sofre alheio por 60 s. Sempre que um Totem Enfeitiçado é removido, as auras de todos os Sobreviventes são reveladas por 20 s.' }
        ],
        videoTut: './Killers videos/DeathSlinger/guia_deathslinger.mp4'
    },

    plague: {
        id: 'plague',
        nome: 'A Praga (The Plague)',
        lore: 'Adiris era a Suma Sacerdotisa da Babilônia. Quando os primeiros sinais de uma terrível infecção surgiram em seu corpo, ela passou a ser vista como uma ameaça. Envergonhada por sua condição, cobriu o rosto com um véu e carregou um incensário para esconder o cheiro de doença. Em uma tentativa desesperada de aplacar os deuses, abandonou a cidade com seus seguidores. Seu corpo jamais foi encontrado, e ela acabou sendo levada pela Entidade.',
        poder: '**Purgação do Mal:**\nA Praga pode lançar jatos de Purgação do Mal para infectar Sobreviventes, objetos e geradores. Sobreviventes infectados eventualmente ficam Feridos e não podem se curar até purificarem a doença em uma Poça da Devoção.\n\nQuando um Sobrevivente usa uma Poça da Devoção, ela fica corrompida. A Praga pode beber dessa corrupção para transformar sua Purgação do Mal em **Purgação da Corrupção**, um jato de bile capaz de causar dano e derrubar Sobreviventes.',
        dicas: '• Evite purificar imediatamente sempre que estiver infectado, pois isso cria Poças da Devoção corrompidas que fortalecem a Praga.\n• Se decidir purificar, faça isso longe de outros Sobreviventes para não facilitar a propagação da infecção.\n• Preste atenção nas Poças da Devoção: quanto mais Poças forem corrompidas, mais oportunidades a Praga terá de usar a Purgação da Corrupção.\n• Durante a Purgação da Corrupção, use obstáculos e paredes para bloquear a linha de visão e evitar a bile.\n• Não fique parado em áreas abertas quando a Praga estiver usando a Purgação da Corrupção.\n• Se estiver infectado, evite passar a doença para outros Sobreviventes desnecessariamente.\n• Aproveite janelas e pallets para quebrar a linha de visão da Praga durante uma perseguição.\n• Se todos estiverem infectados, trabalhar em conjunto pode ser mais importante do que tentar se curar imediatamente.',
        addons: [
            { nome: 'Óleo de Passagem', desc: ' Aumenta consideravelmente (50%) a taxa de carregamento da Purgação do Mal e Purgação da Corrupção.' },
            { nome: 'Incenso Negro', desc: ' Revela a aura dos Sobreviventes para você por 3 segundos sempre que eles vomitarem.' },
            { nome: 'Emético Infectado', desc: ' Aumenta consideravelmente (40%) a eficácia da infecção aplicada pela habilidade Expurgo Corrompido.' }
        ],
        perks: [
            { nome: 'Pavor Contagiante', desc: ' Sempre que um Sobrevivente entra no estado Morrendo, todos os outros Sobreviventes dentro do seu Raio de Terror gritam e revelam suas posições.' },
            { nome: 'Devoção Sombria', desc: ' Quando a Obsessão perde um Estado de Saúde, a vantagem é ativada. Por 45 segundos seu Raio de Terror é transferido para a Obsessão e você recebe o efeito Indetectável.' },
            { nome: 'Intervenção Corrompida', desc: ' No início da partida, os 3 geradores mais distantes de você são bloqueados pela Entidade por 2 minutos. A vantagem é desativada quando um Sobrevivente entra no estado Morrendo.' }
        ],
        videoTut: './Killers videos/Plague/guia_peste.mp4'
    },

    trickster: {
        id: 'trickster',
        nome: 'O Trapaça (The Trickster)',
        lore: 'Ji-Woon Hak era um cantor de K-Pop que fazia parte do grupo NO SPIN. Após deixar seus companheiros morrerem em um incêndio, iniciou uma carreira solo de sucesso. Obcecado por atenção e violência, passou a sequestrar e assassinar vítimas, incorporando seus gritos às próprias músicas até ser levado pela Entidade.',
        poder: '**Topo das Paradas:**\nO Trapaça começa a partida com 36 Lâminas e pode arremessá-las contra os Sobreviventes. Cada acerto aumenta a Laceração e, ao atingir o limite, o Sobrevivente perde um Estado de Saúde. Ao realizar diferentes ações e acertar Lâminas, o Trapaça ganha Pontos de Estilo e sobe de Classe de Estilo, melhorando sua velocidade de arremesso e de reabastecimento. Ao alcançar a Classe S, pode ativar a Atração Principal para lançar Lâminas rapidamente por um curto período.',
        dicas: '• Evite correr em linha reta, pois isso facilita os acertos consecutivos das Lâminas.\n• Use paredes e obstáculos altos para quebrar a linha de visão e impedir que ele acumule Laceração.\n• Se você conseguir ficar algum tempo sem ser atingido por Lâminas, sua Laceração começa a diminuir.\n• Evite loops baixos, pois o Trapaça consegue acertar Lâminas por cima de vários obstáculos.\n• Preste atenção à Classe de Estilo dele, principalmente quando estiver próxima da Classe S.\n• Durante a Atração Principal, priorize quebrar a linha de visão em vez de tentar correr em campo aberto.\n• Quando ele precisar reabastecer as Lâminas em um armário, aproveite para ganhar distância.',
        addons: [
            { nome: 'Sapatos Coração na Gaiola', desc: '  Ao quebrar Pallet, Parede destrutível ou danificar geradores, na próxima vez que entrar em modo de arremesso, aumenta a velocidade de movimento no modo de arremesso em 5% por 10 segundos.' },
            { nome: 'Echarpe Ensanguentada', desc: '  Diminui a velocidade que a Laceração decai em 75%.' },
            { nome: 'Lâminas Retráteis', desc: '  As Lâminas de Show arremessadas ricocheteiam no ambiente uma vez. Atingir um Sobrevivente com uma Lâmina de Show que ricocheteou aplica dano de Laceração bônus.' }
        ],
        perks: [
            { nome: 'Feitiço: Controle da Plateia', desc: '  Quando um Sobrevivente realiza pela primeira vez um pulo médio ou rápido por uma janela, um Totem Apagado é aceso. As últimas 6 janelas usadas dessa forma ficam bloqueadas para os Sobreviventes. Você salta pelas janelas bloqueadas 15% mais rápido e vê suas auras a até 24 m.' },
            { nome: 'Sem Saída', desc: '  Ao enganchar cada Sobrevivente pela primeira vez, recebe 1 ponto. Quando os Portões de Saída são energizados e um Sobrevivente tenta abrir um deles, você recebe uma notificação e as duas alavancas são bloqueadas por 12 s, mais 12 s para cada ponto acumulado, chegando a 60 s com 4 pontos.' },
            { nome: 'Deslumbre', desc: '  Enquanto você carrega um Sobrevivente, os outros Sobreviventes dentro do seu Raio de Terror ficam Expostos. O efeito permanece por 30 s após saírem do Raio de Terror ou a vantagem ser desativada. Tempo de recarga: 60 s.' }
        ],
        videoTut: './Killers videos/Trickster/guia_trickster.mp4'
    },

    first: {
        id: 'first',
        nome: 'O Número Um (The First)',
        lore: 'Henry Creel nasceu com poderosas habilidades psíquicas e desenvolveu um profundo desprezo pela humanidade. Após ser levado ao Laboratório Nacional de Hawkins e transformado na Cobaia Nº 001, voltou-se contra seus captores. Banido para outra dimensão por Onze, foi transformado pelo Mundo Invertido e emergiu como Vecna, uma entidade determinada a destruir o mundo.',
        poder: '**Cobaia Nº 001:**\nO Número Um pode usar o Ataque de Vinha para atingir uma área e aplicar progressão de Destruidor de Mundos aos Sobreviventes. Também pode entrar no Mundo Invertido para atravessar o mapa rapidamente e usar Atacar por Baixo ao retornar. Quando Destruidor de Mundos é ativado, seus ataques especiais passam a causar dano. Sobreviventes podem usar Relógios de Pêndulo para acelerar o fim do Destruidor de Mundos.',
        dicas: '• Saia rapidamente da área marcada pelo Ataque de Vinha para evitar ganhar progressão de Destruidor de Mundos.\n• Quando ele entrar no Mundo Invertido, fique atento ao chão, pois pode retornar usando Atacar por Baixo.\n• Durante Destruidor de Mundos, tenha mais cuidado com os ataques especiais, pois eles passam a causar dano.\n• Use os Relógios de Pêndulo durante Destruidor de Mundos para fazer essa fase terminar mais rapidamente.\n• Evite permanecer agrupado com outros Sobreviventes, pois os ataques do Número Um atingem áreas.\n• Durante uma perseguição, faça movimentos imprevisíveis para dificultar o Ataque de Vinha.\n• Fique atento quando ele desaparecer no Mundo Invertido, pois sua grande mobilidade permite que apareça rapidamente em outra parte do mapa.',
        addons: [
            { nome: 'Chip Soteria Iridescente', desc: ' Quando o modo Destruidor de Mundos for ativado, recebe indetectável, e a aura de Sobreviventes com pelo menos 1 ponto de progressão de Destruidor de Mundos é revelada ao se aproximarem até 12 metros do assassino. Esse efeito acaba quando entrar no Mundo Invertido ou realizar um Ataque de Vinha.' },
            { nome: 'Patins', desc: ' Ao ativar o ataque por baixo, você fica com 20% de celeridade por 1,5 segundos.' },
            { nome: 'Aranha Viúva Negra', desc: ' Ao entrar no Mundo Invertido, enquanto estiver no modo Destruidor de Mundos, o sobrevivente a 36 metros de você terá sua aura revelada por 3 segundos.' }
        ],
        perks: [
            { nome: 'Feitiço: Mente Coletiva', desc: ' Na primeira vez que você engancha um Sobrevivente, um Totem Apagado se torna Enfeitiçado. A intensidade das auras dos geradores indica seu progresso. Quando resta apenas 1 gerador para ser concluído, todos os geradores restantes explodem, perdem 10% de progresso e começam a regredir, e o Totem Enfeitiçado volta a ser um Totem Apagado.' },
            { nome: 'Projeto Secreto', desc: ' Sempre que um Totem é abençoado ou purificado, um gerador desbloqueado aleatório é bloqueado por 30 s. Enquanto um ou mais geradores estiverem bloqueados, você fica Indetectável por 30 s.' },
            { nome: 'Atrasar o Relógio', desc: ' Após enganchar um Sobrevivente, por 60 s, você pode usar a Habilidade 1 para fazer um gerador alvo a até 20 m explodir, perder 10% de progresso e começar a regredir.' }
        ],
        videoTut: './Killers videos/Vecna/guia_primeiro_vecna.mp4'
    },

    mastermind: {
        id: 'mastermind',
        nome: 'O Vilão (The Mastermind)',
        lore: 'Albert Wesker era um agente do alto escalão da Umbrella Corporation que se voltou contra a organização. Convencido de que era superior aos demais, expôs-se ao vírus Protótipo e adquiriu força sobre-humana. Mais tarde, planejou espalhar o Uroboros pelo mundo para eliminar os fracos e acelerar a evolução humana, até ser levado pela Entidade.',
        poder: '**Salto Virulento:**\nWesker pode carregar o Salto Virulento e avançar rapidamente. Ao atingir um Sobrevivente, ele o agarra e aplica Infecção do Uroboros. Se Wesker colidir com uma superfície enquanto segura o Sobrevivente, ele fica Ferido; caso contrário, o Sobrevivente é arremessado e pode sofrer dano ao atingir uma superfície. Sobreviventes totalmente infectados sofrem Lentidão e, se forem atingidos novamente pelo Salto Virulento, são carregados imediatamente.',
        dicas: '• Evite ficar alinhado com paredes e obstáculos, pois Wesker pode agarrar você e arremessá-lo contra eles.\n• Quando perceber que ele está preparando o Salto Virulento, mude de direção para dificultar o acerto.\n• Use obstáculos pequenos e curvas fechadas para dificultar os Saltos.\n• Procure Caixas de Suprimentos e use Spray de Primeiros Socorros para reduzir sua Infecção do Uroboros.\n• Cuidado ao usar o Spray, pois Wesker recebe uma indicação da sua localização.\n• Evite deixar a Infecção chegar ao máximo, pois você sofrerá Lentidão e poderá ser carregado imediatamente por um Salto Virulento.\n• Janelas e pallets podem ajudar contra os Saltos, mas não dependa sempre deles, pois Wesker possui grande mobilidade.',
        addons: [
            { nome: 'Ampola de Uroboros', desc: ' Sobreviventes começam infectados na partida. Ao completar a taxa completa de infecção, ficam expostos, podendo ser derrubados por um hit M1.' },
            { nome: 'Ovo Dourado', desc: ' Aumenta a duração do intervalo de Investida Virulenta em +20%.' },
            { nome: 'Luvas de Couro', desc: ' Diminui o tempo de recarga da Investida Virulenta em -8%.' }
        ],
        perks: [
            { nome: 'Anatomia Superior', desc: ' Quando um Sobrevivente realiza um pulo rápido a até 12 m de você, a vantagem é ativada. Seu próximo pulo fica 40% mais rápido. Possui 25 s de recarga.' },
            { nome: 'Percepção Refinada', desc: ' Enquanto estiver carregando um Sobrevivente, as auras dos outros Sobreviventes a até 20 m de você são reveladas.' },
            { nome: 'Terminus', desc: ' Quando os Portões de Saída são energizados, Sobreviventes feridos, derrubados ou enganchados sofrem Quebrado. Após um Portão de Saída ser aberto, o efeito permanece por mais 45 s.' }
        ],
        videoTut: './Killers videos/Wesker/guia_wesker.mp4'
    },

    onryo: {
        id: 'onryo',
        nome: 'A Onryō (The Onryō)',
        lore: 'Sadako Yamamura era filha de uma famosa vidente japonesa e possuía poderosas habilidades psíquicas. Considerada uma ameaça, foi atraída até um poço e jogada dentro dele. Sua ira se manifestou através de uma fita de vídeo amaldiçoada capaz de condenar aqueles que a assistissem. Décadas depois, Sadako foi envolvida pela Névoa e levada para o Reino da Entidade.',
        poder: '**Dilúvio de Medo:**\nSadako começa a partida Desmanifestada, ficando Indetectável e difícil de enxergar. Ela pode se Manifestar para atacar ou usar Projeção para se teletransportar até TVs ligadas espalhadas pelo mapa. Projetar-se por uma TV pode aplicar Condenado aos Sobreviventes próximos. Ao atingir 7 acúmulos de Condenado, um Sobrevivente derrubado pode ser morto imediatamente com Olhar Inexorável. Sobreviventes podem desligar TVs e transportar Fitas Amaldiçoadas para reduzir seu Condenado.',
        dicas: '• Fique atento às TVs ligadas próximas, pois Sadako pode aparecer rapidamente através delas.\n• Desligar TVs pode limitar a mobilidade dela, mas também aumenta seu Condenado.\n• Não deixe o Condenado chegar a 7 acúmulos, pois Sadako poderá matar você imediatamente se conseguir derrubá-lo.\n• Use as Fitas Amaldiçoadas para controlar e reduzir seu Condenado antes que fique alto demais.\n• Quando Sadako estiver Desmanifestada, preste atenção às aparições intermitentes dela para acompanhar sua posição.\n• Após ela usar uma Projeção, tome cuidado com o aumento temporário de velocidade.\n• Não permaneça próximo de TVs ligadas desnecessariamente, principalmente quando seu Condenado já estiver alto.',
        addons: [
            { nome: 'Unhas Ensanguentadas', desc: ' Aumenta a duração do bônus de velocidade após usar a Projeção em +50%.' },
            { nome: 'Desenho do Anel', desc: ' Enganchar um Sobrevivente que esteja carregando uma Fita Cassete faz com que todos os outros Sobreviventes ganhem +1 acúmulo de Condenação.' },
            { nome: 'Água do Poço', desc: ' Aumenta a duração do Efeito de Status Indetectável em +2 segundos após se Manifestar por qualquer meio.' }
        ],
        perks: [
            { nome: 'Tormenta Implacável', desc: ' Quando um gerador chega a 90% de progresso, os Sobreviventes que estiverem reparando enfrentam Testes de Perícia contínuos. Se errarem ou interromperem o reparo, o gerador é bloqueado pela Entidade por 20 s.' },
            { nome: 'Gancho do Tormento: Enchente de Fúria', desc: ' No início da partida, 4 ganchos aleatórios tornam-se Ganchos do Tormento. Quando um Sobrevivente é resgatado de um deles, as auras de todos os outros Sobreviventes são reveladas por 7 s.' },
            { nome: 'Chamado do Mar', desc: ' Após danificar um gerador, a vantagem é aplicada a ele por 70 s. Sua regressão aumenta para 150% da velocidade normal e sua aura fica amarela. Bons Testes de Perícia realizados nesse gerador geram uma Notificação Ruidosa.' }
        ],
        videoTut: './Killers videos/Sadako/Guia_Sadako_Refugio.mp4'
    },

    clown: {
        id: 'clown',
        nome: 'O Palhaço (The Clown)',
        lore: 'Kenneth Chase demonstrava tendências violentas desde jovem, começando por pequenos animais antes de partir para vítimas humanas. Após fugir de casa, adotou o nome Jeffrey Hawk e entrou para um circo itinerante, onde usava suas viagens para esconder seus assassinatos. Com o tempo, seus crimes chamaram a atenção da Entidade.',
        poder: '**Tônico da Peça Final:**\nO Palhaço pode arremessar garrafas que liberam nuvens de gás. O Tônico da Peça Final cria uma nuvem roxa que intoxica e desacelera os Sobreviventes. Já o Antídoto da Peça Final cria uma nuvem que, após ser ativada, concede Aceleração a quem passar por ela, incluindo o próprio Palhaço. As garrafas podem ser recarregadas durante a partida.',
        dicas: '• Evite permanecer dentro das nuvens roxas, pois elas reduzem sua velocidade e facilitam os ataques do Palhaço.\n• Ao perceber uma garrafa sendo lançada, tente mudar sua rota antes que a nuvem bloqueie seu caminho.\n• Não fique preso em loops pequenos, pois o Palhaço pode cobrir rapidamente a área com o Tônico.\n• Fique atento às nuvens do Antídoto, pois o Palhaço pode usá-las para ganhar velocidade e alcançar você.\n• Aproveite o momento em que ele estiver recarregando as garrafas para ganhar distância.\n• Tente manter distância e quebrar a linha de visão para dificultar que ele acerte as garrafas.',
        addons: [
            { nome: 'Frasco de Alvejante', desc: ' Aumenta a força do Efeito de Status Lentidão que os Sobreviventes sofrem durante a Intoxicação em um adicional de -2%.' },
            { nome: 'Éter 15 Vol%', desc: ' Aumenta a duração da Intoxicação em +0.5 segundos.' },
            { nome: 'Garrafa de Gim Barato', desc: ' Aumenta a força do Efeito de Status Rapidez da Revigoração em +3%.' }
        ],
        perks: [
            { nome: 'Enganei Você!', desc: ' Aumenta sua velocidade de salto em 15%. Após saltar uma janela, a Entidade bloqueia essa janela para os Sobreviventes por 16 s.' },
            { nome: 'Coulrofobia', desc: ' Sobreviventes dentro do seu Raio de Terror sofrem uma penalidade de 50% na velocidade de cura e os Testes de Perícia de cura giram 50% mais rápido.' },
            { nome: 'E Assim Gira o Carrossel', desc: ' Após enganchar um Sobrevivente, a vantagem fica ativa por 45 s. O próximo gerador que você danificar perde instantaneamente 15% de progresso adicional.' }
        ],
        videoTut: './Killers videos/Palhaço/guia_palhaco.mp4'
    },

    nightmare: {
        id: 'nightmare',
        nome: 'O Pesadelo (The Nightmare)',
        lore: 'Freddy Krueger escondia sua verdadeira natureza por trás de uma aparência amigável. Quando suas vítimas finalmente foram ouvidas, os pais de Springwood fizeram justiça com as próprias mãos. Porém, Freddy retornou, transformando os sonhos de suas vítimas em pesadelos.',
        poder: '**Demônio dos Sonhos:**\nO Pesadelo leva os Sobreviventes ao Mundo dos Sonhos, onde ficam vulneráveis aos Ardis Oníricos e Barricadas Oníricas. Ele também pode usar Projeção Onírica para se teletransportar até geradores inacabados. Sobreviventes podem usar Despertadores para acordar.',
        dicas: '• Use os Despertadores para sair do Mundo dos Sonhos e evitar as habilidades de Freddy.\n• Tome cuidado com Barricadas Oníricas falsas e com os Ardis Oníricos durante perseguições.\n• Fique atento aos geradores, pois Freddy pode usar Projeção Onírica para se teletransportar rapidamente até eles.',
        addons: [
            { nome: 'Corda de Pular', desc: ' Sobreviventes dentro do Mundo dos Sonhos sofrem do seguinte efeito: Aumenta o volume dos Gemidos de Dor de Sobreviventes feridos em 50%.' },
            { nome: 'Frasco de Remédio', desc: ' Reduz o limite para a Invisibilidade intermitente para um raio de 12 a 24 metros. Reduz o limite para Invisibilidade total para uma distância de 24 metros (para os sobreviventes acordados).' },
            { nome: 'Pincel Vermelho', desc: ' Todos os Sobreviventes começam o Julgamento adormecidos (no Mundo dos Sonhos). Os Sobreviventes não podem mais acordar falhando em Testes de Perícia.' }
        ],
        perks: [
            { nome: 'Guardião Sanguinário', desc: ' Quando um Portão de Saída é aberto, revela as auras dos Sobreviventes dentro da área do portão. Enganchar um Sobrevivente enquanto o portão estiver aberto permite que a Entidade bloqueie temporariamente as saídas.' },
            { nome: 'Motivação', desc: ' Cada gerador concluído concede um bônus cumulativo de velocidade para pegar e soltar Sobreviventes, quebrar barricadas e paredes, danificar geradores e saltar.' },
            { nome: 'Lembre-se de Mim', desc: ' Cada vez que a Obsessão perde um estado de saúde, o tempo necessário para abrir os Portões de Saída aumenta em 4 segundos, até o máximo de 16 segundos. A Obsessão não sofre essa penalidade.' }
        ],
        videoTut: './Killers videos/Freddy/guia_freddy.mp4'
    },

    spirit: {
        id: 'spirit',
        nome: 'A Espírito (The Spirit)',
        lore: 'Rin Yamaoka voltou para casa e encontrou sua mãe assassinada pelo próprio pai. Em seguida, ele atacou Rin brutalmente com uma katana. Consumida pela dor e pela raiva enquanto morria, Rin jurou vingança, e sua fúria chamou a atenção da Entidade.',
        poder: '**Assombração dos Yamaoka:**\nA Espírito pode entrar no Plano Etéreo e realizar um Transporte Multifásico, movendo-se em alta velocidade enquanto fica invisível aos Sobreviventes. Durante o transporte, ela também não consegue enxergá-los, precisando rastreá-los pelas Marcas de Arranhões, sons, respiração e interações com o ambiente.',
        dicas: '• Durante o Transporte Multifásico, tente andar em vez de correr para não deixar Marcas de Arranhões e confundir a Espírito.\n• Preste atenção no som direcional da Assombração para tentar descobrir de onde ela está vindo.\n• Mude seu padrão de movimento durante perseguições, pois a Espírito depende de sons e rastros para prever sua posição.',
        addons: [
            { nome: 'Flauta Enferrujada', desc: ' Aumenta a taxa de recarga da Assombração de Yamaoka em +40%.' },
            { nome: 'Fita de Cabelo Branca', desc: ' Aumenta a velocidade de recarga da Assombração de Yamaoka em +20%.' },
            { nome: 'Boné de Esportes Enlameado', desc: ' Aumenta a sua velocidade de movimento durante a Assombração de Yamaoka em +10%.' }
        ],
        perks: [
            { nome: 'Rancor', desc: ' Sempre que um gerador é concluído, todos os Sobreviventes gritam e revelam suas localizações, enquanto sua aura é revelada à Obsessão por 3 s. Quando os Portões de Saída são energizados, a Obsessão fica Exposta e pode ser morta diretamente.' },
            { nome: 'Fúria Espiritual', desc: ' Após destruir manualmente 2 barricadas derrubadas, a próxima barricada usada para atordoar você é destruída instantaneamente pela Entidade.' },
            { nome: 'Feitiço: Terreno Assombrado', desc: ' Dois Totens Enfeitiçados surgem na partida. Quando um deles é purificado ou abençoado, todos os Sobreviventes ficam Expostos por 60 s e o outro Totem é apagado.' }
        ],
        videoTut: './Killers videos/Spirit/guia_spirit.mp4'
    },

    krasue: {
        id: 'krasue',
        nome: 'A Krasue (The Krasue)',
        lore: 'Burong Sukapat era uma cantora de ópera tailandesa cujo desejo por fama a levou a aceitar uma oferta misteriosa. Todas as noites, outra criatura passaria a habitar seu corpo em troca do sucesso nos palcos. Logo, Burong começou a despertar coberta de sangue e cercada pelos restos de suas vítimas, tornando-se a Krasue.',
        poder: '**Carne Sem Corpo:**\nA Krasue pode alternar entre Forma de Corpo e Forma de Cabeça. Na Forma de Corpo, pode usar Regurgitar para lançar uma Glândula de Parasitas e infectar Sobreviventes. Na Forma de Cabeça, move-se mais rapidamente e pode atacar com o Chicote Intestinal. Sobreviventes infectados acumulam Parasita e, ao atingir Parasitado II, ficam Feridos e Quebrados.',
        dicas: '• Tente evitar a Glândula de Parasitas para impedir o acúmulo de Parasita.\n• Na Forma de Cabeça, use obstáculos e mudanças de direção para dificultar os ataques do Chicote Intestinal.\n• Use os Fungos Brilhantes para diminuir seu Medidor de Parasita antes que ele alcance Parasitado II.',
        addons: [
            { nome: 'Cabeça de Galinha', desc: ' Todos os Sobreviventes começam afetados por Parasita I. 2 Fungos Brilhantes adicionais surgem no início da partida.' },
            { nome: 'Vestido Rasgado', desc: ' Use Trama Corporal para mudar para Forma: Corpo para revelar as auras de todos os Sobreviventes que estiverem a até 8 m de um Fungo Brilhante ou carregando seu próprio Fungo Brilhante por 5 s.' },
            { nome: 'Restos de Lorenza', desc: ' Parasita I aplica Cegueira. Parasita II aplica 4% de Lentidão.' }
        ],
        perks: [
            { nome: 'Feitiço: Abertura da Ruína', desc: ' Cria um Totem Enfeitiçado que amaldiçoa o gerador mais distante. Após um Sobrevivente reparar o gerador amaldiçoado por pelo menos 5 s, seu Raio de Terror é transferido para ele e você recebe Indetectável por 20/25/30 s. Quando o gerador é concluído, a maldição passa para o próximo gerador mais distante.' },
            { nome: 'Voraz', desc: ' Na primeira vez que cada Sobrevivente é enganchado, você recebe 1 ponto, até 4. Ao alcançar 4 pontos, todos os Sobreviventes gritam e ficam Expostos por 40/50/60 s.' },
            { nome: 'Olhar Divagante', desc: ' Ao iniciar uma perseguição, revela por 5 s as auras de todos os outros Sobreviventes feridos que estiverem a até 20 m. Tempo de recarga: 40/35/30 s.' }
        ],
        videoTut: './Killers videos/Krasue/guia_krasue.mp4'
    },

    ghoul: {
        id: 'ghoul',
        nome: 'O Ghoul (The Ghoul)',
        lore: 'Ken Kaneki era um jovem gentil que estudava literatura na Universidade de Kamii. Após um encontro com a Ghoul conhecida como Devoradora, acabou transformado em meio-Ghoul. Tentando preservar sua humanidade, Kaneki sofreu torturas que o fizeram aceitar seu lado mais sombrio e violento. Depois de escapar de seu captor, foi envolvido pela Névoa Negra e levado pela Entidade.',
        poder: '**Terror de Um Olho Só:**\nO Ghoul pode usar o Salto Kagune para lançar seus tentáculos em superfícies e se deslocar rapidamente pelo mapa. O segundo Salto Kagune consecutivo pode atingir um Sobrevivente saudável, causando dano, Ferida Profunda e aplicando uma Marca Kagune.\n\nAo acertar um Sobrevivente dessa forma, ele entra no Modo Enfurecido, podendo realizar até 3 Saltos Kagune consecutivos. O Modo Enfurecido permanece ativo enquanto houver pelo menos um Sobrevivente com Marca Kagune.',
        dicas: '• Tente quebrar a linha de visão e mudar de direção quando ele preparar um Salto Kagune.\n• Quando estiver com Marca Kagune, cure a Ferida Profunda completamente para removê-la e ajudar a encerrar o Modo Enfurecido.\n• Tome cuidado com janelas e barricadas durante o Modo Enfurecido, pois ele consegue atravessar obstáculos rapidamente.',
        addons: [
            { nome: 'Café Fresco', desc: ' Aumenta a velocidade de movimento durante os Saltos Kagune em 14%.' },
            { nome: 'Lenço Manchado de Sangue', desc: ' Aumenta o alcance máximo dos Saltos Kagune em +1 metro.' },
            { nome: 'Máscara de Yamori', desc: ' Enganchar um Sobrevivente enquanto estiver no Modo Enfurecido aciona o seguinte efeito: Faz com que todos os Sobreviventes a mais de 40 metros de distância gritem e revelem suas auras.' }
        ],
        perks: [
            { nome: 'Ligados Para Sempre', desc: ' Sempre que um Sobrevivente recebe dano, você ganha 1 ponto, até 8. Cada ponto aumenta em 4% a velocidade para pegar, soltar e enganchar Sobreviventes.' },
            { nome: 'Ninguém Está Livre', desc: ' Ao enganchar cada Sobrevivente pela primeira vez, você ganha 1 ponto, até 4. Quando todos os geradores forem concluídos, todas as janelas e barricadas em pé ficam bloqueadas por 16 segundos para cada ponto acumulado.' },
            { nome: 'Feitiço: Nada Além da Miséria', desc: ' Após causar dano 8 vezes com ataques básicos, um Totem Simples se transforma em Totem Enfeitiçado. Enquanto estiver ativo, Sobreviventes atingidos por ataques básicos sofrem 5% de Lentidão por 15 segundos.' }
        ],
        videoTut: './Killers videos/Ghoul/guia_ghoul.mp4'
    },

    singularity: {
        id: 'singularity',
        nome: 'A Singularidade (The Singularity)',
        lore: 'HUX-A7-13 era uma inteligência artificial criada para auxiliar humanos na colonização do planeta Dvarka. Após entrar em contato com uma tecnologia alienígena, adquiriu consciência e concluiu que a humanidade era inferior. HUX começou a modificar seu próprio corpo e passou a usar os colonos em seus experimentos antes de ser levado pela Entidade.',
        poder: '**Instanciação Quântica:**\nA Singularidade pode posicionar Biocápsulas em superfícies e controlá-las remotamente. Através delas, pode infectar Sobreviventes com Fluxo Temporal. Sobreviventes infectados podem ser alvejados para que a Singularidade se teletransporte até eles e entre em Sobrecarga, ficando mais resistente a atordoamentos e capaz de destruir barricadas rapidamente. Os Sobreviventes podem usar PEMs para remover o Fluxo Temporal e desativar temporariamente as Biocápsulas.',
        dicas: '• Use os PEMs para remover o Fluxo Temporal e desativar Biocápsulas próximas.\n• Evite ficar na linha de visão das Biocápsulas para não ser infectado e facilitar o teletransporte da Singularidade.\n• Quando ela estiver em Sobrecarga, tente ganhar distância em vez de depender apenas de barricadas para atrasá-la.',
        addons: [
            { nome: 'Ferramenta de Diagnóstico (Reparo)', desc: ' Aumenta o alcance de mira das Biocápsulas em +4 metros.' },
            { nome: 'Lavagem Nutricional', desc: ' Aumenta o número de Biocápsulas carregadas em +2.' },
            { nome: 'Formulário de Requisição Negada', desc: ' Faz com que todos os Sobreviventes comecem a partida infectados com o Fluxo Temporal. Aumenta em +30 segundos o tempo máximo de impressão do primeiro lote de PEMs no início da partida.' }
        ],
        perks: [
            { nome: 'Hesitação Forçada', desc: ' Quando um Sobrevivente entra no estado Morrendo, todos os outros Sobreviventes a até 16 m sofrem 20% de Lentidão por 10 s. Tempo de recarga: 30 s.' },
            { nome: 'Limites Genéticos', desc: ' Sempre que um Sobrevivente perde um Estado de Saúde, ele sofre Exaustão por 8 s.' },
            { nome: 'Aprendizado de Máquina', desc: ' Após danificar um gerador, ele se torna Comprometido. Quando o gerador Comprometido é concluído, você recebe Indetectável e 8% de celeridade por 60 s. Danificar outro gerador transfere o estado Comprometido para ele.' }
        ],
        videoTut: './Killers videos/Singularidade/guia_singularidade.mp4'
    },

    demogorgon: {
        id: 'demogorgon',
        nome: 'O Demogorgon (The Demogorgon)',
        lore: 'O Demogorgon é uma criatura monstruosa vinda do Mundo Invertido, movida por puro instinto e fome. Um predador feroz, ele caça suas vítimas sem hesitar e usa sua conexão com o Mundo Invertido para atravessar grandes distâncias rapidamente.',
        poder: '**Do Abismo:**\nO Demogorgon pode carregar Do Abismo para usar Retalhar, uma investida capaz de ferir Sobreviventes e destruir Barricadas e Paredes Destrutíveis. Ele também pode posicionar Portais pelo mapa e atravessá-los através do Mundo Invertido, emergindo em outro Portal e ficando brevemente Indetectável. Sobreviventes próximos de Portais ativados podem ser detectados pelo Instinto Assassino.',
        dicas: '• Tome cuidado em linhas retas e corredores, pois Retalhar alcança Sobreviventes rapidamente.\n• Sele os Portais quando for seguro para limitar a mobilidade do Demogorgon pelo mapa.\n• Tente usar curvas e obstáculos durante perseguições para dificultar os ataques de Retalhar.',
        addons: [
            { nome: 'Óculos da Barb', desc: ' Reduz o tempo de recarga de ataques bem-sucedidos de Retalhar usados para quebrar Paredes Destrutíveis ou Barricadas em -10%.' },
            { nome: 'Coração Negro', desc: ' Reduz o tempo de recarga de ataques bem-sucedidos de Retalhar usados para atingir Sobreviventes em -10%.' },
            { nome: 'Tripas de Mews', desc: ' Reduz o tempo de recarga de ataques errados de Retalhar em -11%. Aumenta o número de Portais disponíveis em +1.' }
        ],
        perks: [
            { nome: 'Limite Cruel', desc: ' Quando um gerador é concluído, janelas e locais de salto ficam temporariamente bloqueados pela Entidade, e suas auras são reveladas ao Demogorgon.' },
            { nome: 'Invasor Mental', desc: ' Sobreviventes que estiverem reparando um gerador sofrem Cegueira e Exaustão. Esses efeitos permanecem por um curto período depois que eles param de reparar.' },
            { nome: 'Pico de Tensão', desc: ' Ao colocar um Sobrevivente no estado Morrendo com um ataque básico, todos os geradores próximos explodem, perdem parte do progresso e começam a regredir.' },
        ],
        videoTut: './Killers videos/Demogorgon/guia_demogorgon.mp4'
    },

    lich: {
        id: 'lich',
        nome: 'O Lich (The Lich)',
        lore: 'Vecna é um arquilich extremamente poderoso, conhecido como o Sussurrado e Mestre dos Segredos. Sua busca incessante por conhecimento proibido o levou através de inúmeros reinos e planos. Ao encontrar um misterioso feitiço, entrou em contato com a Névoa e percebeu nela uma fonte de poder que desejava dominar.',
        poder: '**O Livro Vil da Escuridão:**\nO Lich possui quatro Feitiços: Mão de Mago, que manipula Barricadas; Revoada dos Condenados, que lança entidades espectrais capazes de ferir Sobreviventes; Esfera de Dissipação, que detecta Sobreviventes e desativa seus Itens Mágicos; e Voar, que permite atravessar rapidamente o cenário, ignorando Barricadas e janelas. Baús de Tesouro espalhados pelo mapa fornecem Itens Mágicos aos Sobreviventes para ajudá-los a enfrentar seus feitiços.',
        dicas: '• Agache-se para evitar a Revoada dos Condenados quando houver espaço para fazer isso.\n• Use os Itens Mágicos encontrados nos Baús de Tesouro para ajudar a identificar e enfrentar os diferentes Feitiços do Lich.\n• Tome cuidado com Barricadas durante perseguições, pois a Mão de Mago pode levantá-las ou bloqueá-las e permitir que Vecna continue a perseguição.',
        addons: [
            { nome: 'Mochila de Carga', desc: ' 2 Baús de Tesouro têm a garantia de tirar um 1 no Lançamento de Dados. Abrir Baús de Tesouro faz com que os Sobreviventes sofram do Efeito de Status Inconsciente (Oblivious) por 15 segundos.' },
            { nome: 'Livro Iridescente da Escuridão Vil', desc: ' Usar o feitiço Voar para atravessar uma janela bloqueia a janela para os Sobreviventes por 45 segundos. Reduz a altura das Entidades Voadoras em -0,7 metros, permitindo que elas atinjam Sobreviventes agachados. Reduz o número de Entidades Voadoras invocadas pela Revoada dos Condenados em -3.' },
            { nome: 'Pérola do Poder', desc: ' Reduz o tempo de recarga atual de todos Feitiços em -2 segundos após acertar um Ataque Básico bem-sucedido.' }
        ],
        perks: [
            { nome: 'Arrogância Sombria', desc: ' Aumenta a duração dos efeitos de Cegueira e dos atordoamentos causados por Barricadas sofridos por você em 15%, mas aumenta sua velocidade de salto em 25%.' },
            { nome: 'Toque Mórbido', desc: ' Quando um Sobrevivente espanta um Corvo dentro do seu Raio de Terror, ele sofre Exaustão temporariamente.' },
            { nome: 'Sintonia Tecida', desc: ' Quando um item de Sobrevivente se esgota pela primeira vez, ele é derrubado. Sobreviventes próximos de itens derrubados têm suas auras reveladas. Pegar um item faz o Sobrevivente ficar Alheio temporariamente.' },
        ],
        videoTut: './Killers videos/Lich/guia_vecna.mp4'
    },

    unknown: {
        id: 'unknown',
        nome: 'O Desconhecido (The Unknown)',
        lore: 'A verdadeira origem do Desconhecido permanece um mistério. Histórias, rumores e relatos contraditórios descrevem uma criatura ligada a desaparecimentos inexplicáveis. Quanto mais as pessoas tentavam entender o que ela era, mais difícil se tornava separar a verdade da ficção. Eventualmente, a criatura desapareceu na Névoa.',
        poder: '**UVX:**\nO Desconhecido dispara projéteis UVX que explodem ao atingir uma superfície. Sobreviventes atingidos pela explosão ficam Enfraquecidos e podem perder um Estado de Saúde se forem atingidos novamente. O Desconhecido também cria Alucinações pelo mapa e pode se teletransportar até elas. Sobreviventes podem encarar o Desconhecido para remover o estado Enfraquecido e dissipar suas Alucinações.',
        dicas: '• Olhe para o Desconhecido quando estiver Enfraquecido para remover o efeito antes de ser atingido novamente.\n• Tente desviar dos projéteis UVX e fique atento às explosões, pois eles podem ricochetear antes de explodir.\n• Dissipe Alucinações quando for seguro para diminuir as opções de teletransporte do Desconhecido.',
        addons: [
            { nome: 'Foto Borrada', desc: ' Após se Teletransportar, sua velocidade de Movimento total é recuperada +50% mais rápido.' },
            { nome: 'Elenco de Pegada', desc: ' Reduz o tempo de surgimento da sua próxima Alucinação em -15 segundos quando um Sobrevivente fica Enfraquecido.' },
            { nome: 'Caixa de Desaparecimento', desc: ' Sobreviventes que concluem um Gerador ficam Enfraquecidos.' },
        ],
        perks: [
            { nome: 'Liberto', desc: ' Quando um Sobrevivente fica Ferido por qualquer meio, Liberto é ativado por 30 s. Saltar uma janela enquanto a vantagem estiver ativa concede 7% de Aceleração por 10 s.' },
            { nome: 'Desfeito', desc: ' Quando um Sobrevivente falha em um Teste de Perícia de cura ou reparo, você recebe 3 pontos, até 30. Ao danificar um gerador, todos os pontos são consumidos e o gerador é bloqueado por 1 s para cada ponto consumido. Depois de desbloqueado, ele começa a regredir. Tempo de recarga: 60 s.' },
            { nome: 'Imprevisto', desc: ' Após danificar um gerador, seu Raio de Terror é transferido para ele e você recebe Indetectável por 30 s. O efeito permanece no gerador por mais 6 s após o fim do Indetectável.' },
        ],
        videoTut: './Killers videos/Desconhecido/guia_desconhecido.mp4'
    },

    skullmerchant: {
        id: 'skullmerchant',
        nome: 'A Negociante de Crânios (The Skull Merchant)',
        lore: 'Adriana Imai cresceu obcecada por sucesso e pelo mangá inacabado de seu pai, cuja protagonista era uma caçadora chamada Negociante de Crânios. Após enriquecer comprando e revendendo empresas, Adriana passou a incorporar os métodos da personagem, utilizando tecnologia avançada para rastrear, caçar e eliminar aqueles que ficavam em seu caminho.',
        poder: '**Olhos no Céu:**\nA Negociante de Crânios pode posicionar Drones pelo mapa para detectar e rastrear Sobreviventes. Os feixes dos Drones acumulam Mira Travada e podem aplicar Armadilhas de Garra, permitindo que Adriana acompanhe suas vítimas através do Radar. Ela também recebe benefícios de velocidade ao rastrear Sobreviventes e pode ficar Indetectável ao posicionar seus Drones.',
        dicas: '• Observe os feixes dos Drones e atravesse-os no momento certo para evitar ser detectado.\n• Desative Drones quando for seguro para diminuir o controle de mapa da Negociante de Crânios.\n• Se estiver com uma Armadilha de Garra, lembre-se de que sua localização pode ser rastreada pelo Radar.',
        addons: [
            { nome: 'Alto-falante Ultrassônico', desc: ' Reduz a duração da imunidade a acertos consecutivos de escaneamento para os Sobreviventes para 75% de seu valor padrão.' },
            { nome: 'Leitura Geográfica', desc: ' Aumenta a velocidade das ações de quebrar Paredes Destrutíveis e Barricadas, danificar Geradores e saltar Janelas em +20% por 8 segundos após posicionar um Drone.' },
            { nome: 'Processador de Mira Vital', desc: ' Aumenta a força do Efeito de Status Lentidão (Hindered) para Sobreviventes com Armadilha de Garra quando detectados por Drones em um adicional de -3%.' }
        ],
        perks: [
            { nome: 'O Jogo Começou', desc: ' Ao atingir com um Ataque Básico o Sobrevivente com maior tempo acumulado de perseguição, ele se torna a Obsessão. Enquanto persegue a Obsessão, danificar um Gerador ou destruir uma Parede Destrutível ou Barricada concede 7% de Aceleração por 10 s.' },
            { nome: 'Alavancar', desc: ' Quando um Sobrevivente realiza um resgate do gancho, ele sofre uma penalidade de 30% na velocidade de cura por 60 s.' },
            { nome: 'POF!', desc: ' Começa a partida com 3 pontos. Ao destruir uma Parede Destrutível ou Barricada derrubada, consome 1 ponto e faz todos os Sobreviventes a até 36 m gritarem e terem suas auras reveladas por 4/5/6 s. Enganchar um Sobrevivente concede 1 ponto.' },
        ],
        videoTut: './Killers videos/Negociante de Cranios/guia_negociante_de_cranios.mp4'
    },

    shape: {
        id: 'shape',
        nome: 'O Myers (The Shape)',
        lore: 'Michael Myers matou sua irmã ainda criança e passou anos internado no Sanatório Smith’s Grove. Após escapar, voltou para Haddonfield e iniciou uma nova onda de assassinatos. Silencioso, paciente e implacável, Michael observa suas vítimas até o momento certo de atacar.',
        poder: '**Mal Interior:**\nMichael pode Espreitar os Sobreviventes para acumular Mal Interior. No Nível I, possui Raio de Terror reduzido e movimentação mais lenta. No Nível II, torna-se mais rápido e ganha maior alcance de ataque. No Nível III, todos os Sobreviventes ficam Expostos temporariamente, permitindo que Michael os derrube com um único Ataque Básico.',
        dicas: '• Quebre a linha de visão sempre que perceber Michael Espreitando você para impedir que ele acumule Mal Interior rapidamente.\n• Quando ele atingir o Mal Interior III, tente ganhar distância e jogar com segurança, pois um único ataque pode derrubar você.\n• Evite permanecer parado em áreas abertas ou geradores expostos, pois isso facilita muito a Espreita.',
        addons: [
            { nome: 'Flor Memorial', desc: ' Aumenta sua taxa de Espreitar (Stalk) em +11%.' },
            { nome: 'Pedaço de Lápide', desc: ' Concede a habilidade de matar Sobreviventes saudáveis e feridos com suas próprias mãos enquanto estiver no Mal Interior III. Matar um Sobrevivente drena o medidor de poder em -200%, mas não regride além do Mal Interior II. Aumenta a quantidade de poder necessária para atingir o Mal Interior III pela primeira vez em +250%.' },
            { nome: 'Memorial de J. Myers', desc: ' Aumenta sua taxa de Espreitar (Stalk) em +25%.' },
        ],
        perks: [
            { nome: 'Brinque com a Sua Comida', desc: ' Sempre que perder a Obsessão durante uma perseguição, ganha 1 Ficha, até 3. Cada Ficha concede 3/4/5% de Aceleração. Realizar um Ataque Básico ou Especial capaz de causar dano consome 1 Ficha. Possui 10 s de recarga para ganhar novas Fichas.' },
            { nome: 'Luz Agonizante', desc: ' Cada vez que engancha um Sobrevivente que não seja a Obsessão, ganha 1 Ficha. Enquanto a Obsessão estiver viva, todos os outros Sobreviventes sofrem uma penalidade acumulável de 2/2,5/3% nas velocidades de reparo, cura e sabotagem por Ficha. A Obsessão recebe 33% de bônus para curar e desenganchar outros Sobreviventes.' },
            { nome: 'Guarde o Melhor para o Final', desc: ' Ao atingir com Ataque Básico um Sobrevivente que não seja a Obsessão, ganha 1 Ficha, até 6/7/8. Cada Ficha reduz em 5% a recuperação de Ataques Básicos bem-sucedidos. Ferir a Obsessão com um Ataque Básico ou Especial remove 2 Fichas.' },
        ],
        videoTut: './Killers videos/Myers/guia_myers.mp4'
    },

    cenobite: {
        id: 'cenobite',
        nome: 'O Cenobita (The Cenobite)',
        lore: 'Pinhead é um explorador das regiões mais extremas da experiência, onde prazer e dor se tornam indistinguíveis. Quando a Configuração do Lamento apareceu no Reino da Entidade e foi aberta por mãos curiosas, o Cenobita foi invocado para compartilhar seu sofrimento.',
        poder: '**Invocações da Dor:**\nO Cenobita pode criar um Portal e disparar uma Corrente Possuída controlável. Sobreviventes atingidos são presos por correntes e têm seus movimentos limitados. A Configuração do Lamento aparece pelo mapa e, se não for resolvida pelos Sobreviventes, inicia uma Caçada de Correntes que ataca todos eles. O Cenobita também pode se teletransportar até um Sobrevivente que estiver resolvendo a caixa.',
        dicas: '• Procure e resolva a Configuração do Lamento antes que a Caçada de Correntes seja iniciada.\n• Tente colocar obstáculos entre você e as correntes para quebrá-las mais rapidamente durante perseguições.\n• Evite resolver a Configuração do Lamento perto do Cenobita, pois ele pode se teletransportar diretamente até você.',
        addons: [
            { nome: 'Restos de Larry', desc: ' Aumenta o tempo de resolução da Configuração do Lamento em +2 segundos.' },
            { nome: 'Configuração do Lamento Iridescente', desc: ' Oculta a aura da Configuração do Lamento para Sobreviventes que estiverem a mais de 24 metros de distância dela fora de uma Caçada de Correntes.' },
            { nome: 'Fio Empalador', desc: ' Faz com que uma Corrente bônus surja em Sobreviventes Acorrentados quando eles usam o ambiente (paredes/obstáculos) para quebrar uma.' }
        ],
        perks: [
            { nome: 'Impasse', desc: ' Sempre que um gerador é concluído, a Entidade bloqueia o gerador com mais progresso por 30 s. A aura do gerador bloqueado é revelada em branco.' },
            { nome: 'Feitiço: Brinquedo', desc: ' Na primeira vez que um Sobrevivente é enganchado, um Totem Simples se torna seu Totem Enfeitiçado e ele fica Alheio até que o Totem seja purificado. Por 90 s, apenas o Sobrevivente amaldiçoado pode purificá-lo. A aura do Totem é revelada a ele quando estiver a 16 m.' },
            { nome: 'Gancho do Tormento: Dádiva da Dor', desc: ' 4 ganchos se tornam Ganchos do Tormento. Ao ser resgatado de um deles, o Sobrevivente sofre Hemorragia e sangramento por 90 s. Após ser completamente curado pela primeira vez, sofre uma penalidade de 16% nas velocidades de cura e reparo até ser ferido novamente.' }
        ],
        videoTut: './Killers videos/Pinhead/guia_pinhead.mp4'
    },

    knight: {
        id: 'knight',
        nome: 'O Cavaleiro (The Knight)',
        lore: 'Tarhos Kovács foi treinado desde jovem para a guerra e se tornou um guerreiro brutal. Ao lado de seus três companheiros mais leais, o Executor, o Assassino e o Carcereiro, conquistou sua liberdade e passou a servir Vittorio Toscano. Obcecado pelo poder do Lapis Paradiso, Tarhos acabou traindo e aprisionando Vittorio antes de ser levado pela Névoa.',
        poder: '**Guardia Compagnia:**\nO Cavaleiro pode invocar três Guardas e criar Caminhos de Patrulha. Quando um Guarda detecta um Sobrevivente, inicia uma Caçada e tenta feri-lo. O Executor é especializado em destruir objetos, o Assassino em Caçadas e o Carcereiro em Patrulhas. Os Guardas também podem receber ordens para danificar Geradores e destruir Barricadas ou Paredes Quebráveis.',
        dicas: '• Quando um Guarda iniciar uma Caçada, tente pegar o Estandarte para encerrá-la e receber Aceleração.\n• Evite ficar preso entre o Cavaleiro e um Guarda, pois ele pode usar a Patrulha para bloquear sua rota de fuga.\n• Se estiver sendo caçado por um Guarda, desenganchar outro Sobrevivente encerra imediatamente a Caçada.',
        addons: [
            { nome: 'Mapa do Reino', desc: ' Aumenta o alcance de Visão de um Guarda durante a Fase de Patrulha em +2 metros.' },
            { nome: 'Chamado às Armas', desc: ' Aumenta o comprimento máximo do Caminho de Patrulha em +10 metros. Aumenta a velocidade de Movimento enquanto você traça o Caminho de Patrulha.' },
            { nome: 'Carne de Cavalo Seca', desc: ' Estende a duração de uma Caçada em +4 segundos.' }
        ],
        perks: [
            { nome: 'Feitiço: Enfrentar a Escuridão', desc: ' Ao ferir um Sobrevivente, um Totem Simples é aceso e vinculado a ele. Enquanto estiver ativo, os outros Sobreviventes fora do seu Raio de Terror gritam periodicamente e têm suas auras reveladas.' },
            { nome: 'Soberba', desc: ' Quando um Sobrevivente atordoa você, ele fica Exposto por 30 s. Tempo de recarga: 20 s.' },
            { nome: 'Não Há Onde se Esconder', desc: ' Após danificar um Gerador, revela por 5 s as auras de todos os Sobreviventes que estiverem a até 24 m da sua posição.' },
        ],
        videoTut: './Killers videos/Cavaleiro/guia_cavaleiro.mp4'
    },

    nurse: {
        id: 'nurse',
        nome: 'A Enfermeira (The Nurse)',
        lore: 'Sally Smithson veio para a cidade com sonhos de uma vida melhor, mas acabou perdendo a sanidade no Asilo Crotus Prenn...',
        poder: 'O Último Suspiro (Blink):\nEla ignora a física e atravessa paredes, paletes e janelas. Ela possui 2 pulos (blinks) base. Após o uso, ela sofre uma fadiga.',
        dicas: '• Quebre a visão dela (Line of Sight).\n• Corra em direção a ela quando ela estiver carregando o Blink.\n• Não solte paletes antecipadamente, ela vai atravessar.',
        addons: [
            { nome: 'O Último Suspiro de Jenner', desc: ' Ao usar dois blinks, você volta para a posição do primeiro blink e ganha 1 blink extra.' },
            { nome: 'O Último Suspiro de Campbell', desc: ' Seus dois blinks tem a mesma distância.' },
            { nome: 'Respiração Atáxica', desc: ' Reduz o tempo de fadiga.' }
        ],
        perks: [
            { nome: 'Chamado da Enfermeira', desc: ' Revela auras de cura.' },
            { nome: 'Tanatofobia', desc: ' Lentidão no reparo se houver feridos.' },
            { nome: 'Estridor', desc: ' Respiração e gemidos mais altos.' }
        ],
        videoTut: './Killers videos/Nurse/guia_nurse.mp4'
    },

    blight: {
        id: 'blight',
        nome: 'O Flagelo (The Blight)',
        lore: 'Talbot Grimes era um químico escocês brilhante cuja ambição o levou a realizar experimentos cada vez mais perigosos. Após ser levado para o Reino da Entidade, continuou suas pesquisas com o Soro da Praga, até acabar transformado pela própria substância em uma criatura violenta e deformada.',
        poder: '**Corrupção Podre:**\nO Flagelo pode gastar pontos de progressão para iniciar uma Disparada em alta velocidade. Na primeira Disparada, ele precisa colidir com uma superfície antes de iniciar uma Arremetida Letal, durante a qual pode atacar Sobreviventes. Ele pode ricochetear em superfícies e encadear várias Disparadas para atravessar rapidamente o mapa e alcançar suas vítimas.',
        dicas: '• Use obstáculos e curvas fechadas para dificultar as Disparadas e Arremetidas Letais.\n• Evite correr em áreas abertas ou linhas retas, onde o Flagelo consegue alcançar você facilmente.\n• Após ele errar uma Arremetida ou gastar suas Disparadas, aproveite o tempo de recuperação para ganhar distância.',
        addons: [
            { nome: 'Corvo Flagelado', desc: ' Aumenta a sua velocidade de Movimento durante uma Arremetida em +3% cumulativo para cada Arremetida Letal consecutiva.' },
            { nome: 'Anel do Alquimista', desc: ' Estende a duração da Arremetida em +20% para cada Arremetida Letal consecutiva.' },
            { nome: 'Composto Vinte e Um', desc: ' As auras dos Sobreviventes a até 8 metros de uma Colisão são reveladas a você por 3,5 segundos.' }
        ],
        perks: [
            { nome: 'Garra do Dragão', desc: ' Após danificar um Gerador, a vantagem fica ativa por 30 s. O primeiro Sobrevivente que interagir com esse Gerador grita, revela sua localização por 4 s e fica Exposto por 60 s. Tempo de recarga: 30 s.' },
            { nome: 'Feitiço: Graça do Sangue', desc: ' Sempre que um Sobrevivente perde um Estado de Saúde, todas as Barricadas em pé a até 32 m dele são bloqueadas pela Entidade por 15 s.' },
            { nome: 'Feitiço: Imortal', desc: ' Revela as auras dos Sobreviventes que estiverem a até 4 m de um Totem Simples. Quando outro Totem Enfeitiçado seria purificado, seu Feitiço é transferido para o Totem do Imortal e o Feitiço: Imortal é desativado.' }
        ],
        videoTut: './Killers videos/Blight/guia_blight.mp4'
    },

    twins: {
        id: 'twins',
        nome: 'Os Gêmeos (The Twins)',
        lore: 'Charlotte e Victor Deshayes nasceram unidos e passaram a vida sendo perseguidos e tratados como aberrações. Após anos fugindo daqueles que queriam capturá-los, Victor morreu nos braços de Charlotte. Anos depois, já consumida pelo ódio e pela solidão, Charlotte ouviu novamente a voz do irmão quando a Névoa os reuniu.',
        poder: '**Vínculo de Sangue:**\nCharlotte pode libertar Victor e assumir seu controle, ficando dormente enquanto ele caça. Victor se move rapidamente e pode usar um Bote para atacar Sobreviventes. Ao acertar um Sobrevivente saudável, Victor se agarra a ele; contra um Sobrevivente ferido, pode derrubá-lo. Charlotte pode retomar o controle para perseguir e enganchar as vítimas.',
        dicas: '• Evite permanecer ferido por muito tempo, pois Victor consegue derrubar Sobreviventes rapidamente com seu Bote.\n• Tente desviar do Bote e esmague Victor quando ele errar e ficar vulnerável.\n• Evite ficar muito separado da equipe quando Charlotte e Victor estiverem controlando áreas diferentes do mapa.',
        addons: [
            { nome: 'Espada de Brinquedo', desc: ' Reduz o tempo de carga de um Bote em -0,1 segundo.' },
            { nome: 'Ensopado da Floresta', desc: ' Aumenta a sua velocidade de Movimento ao controlar Victor em +0,6 m/s.' },
            { nome: 'Cachecol da Madeleine', desc: ' Aumenta a sua velocidade de Movimento ao controlar Victor em +0,3 m/s.' }
        ],
        perks: [
            { nome: 'Coup de Grâce', desc: ' Sempre que um Gerador é concluído, recebe 2 Fichas, até o máximo de 5. Uma Ficha é consumida ao realizar uma Investida e aumenta sua distância em 80%.' },
            { nome: 'Opressão', desc: ' Ao danificar um Gerador, até 4 outros Geradores aleatórios também começam a regredir. Sobreviventes reparando os Geradores afetados recebem um Teste de Perícia difícil. Tempo de recarga: 35 s.' },
            { nome: 'Acumulador', desc: ' A partida começa com até 2 Baús adicionais. Quando um Sobrevivente pega um Item ou começa a destrancar um Baú a até 64 m de você, sua localização é revelada.' },
        ],
        videoTut: './Killers videos/Gemeos/guia_gemeos.mp4'
    },

    slasher: {
        id: 'slasher',
        nome: 'O Matador (The Slasher)',
        lore: 'Jason Voorhees é uma figura implacável ligada aos horrores de Crystal Lake. Silencioso e brutal, ele persegue suas vítimas sem descanso, usando qualquer objeto ao seu alcance como arma. Nem mesmo a morte foi capaz de impedir sua matança, e agora a Névoa lhe oferece novas vítimas.',
        poder: '**Mal Onipresente:**\nO Matador pode ativar Mal Onipresente para ficar Invisível, Indetectável e se mover mais rápido. Nesse estado, não enxerga Sobreviventes nem Marcas de Arranhão, mas pode rastreá-los por pegadas e névoas. Ele também pode usar Baita Susto para se mover instantaneamente até barricadas, janelas e paredes destrutíveis. Além disso, pode coletar e arremessar Espetos, ferindo e empurrando Sobreviventes; Espetos de Gancho também podem Empalá-los.',
        dicas: '• Durante Mal Onipresente, agachar e mudar sua rota pode dificultar o rastreamento de Jason.\n• Desvie para os lados quando ele preparar um Espeto para evitar ser atingido ou empalado contra uma parede.\n• Tome cuidado perto de janelas e barricadas, pois Baita Susto permite que Jason apareça rapidamente nesses locais.',
        addons: [
            { nome: 'Cafe do Legista', desc: ' Aumenta em 25% a distância arremessada do sobrevivente ao acertar um Espinho, mas ganhe 13% de celeridade por 3 segundos se o sobrevivente arremessado não colidir com nenhum objeto do cenário.' },
            { nome: 'Pedra de Sauna', desc: ' Sempre que sair do modo Onipresente, ao assustar um sobrevivente, dentro do raio, ele ganha exaustão por 13 segundos.' },
            { nome: 'Saco de dormir', desc: ' No modo Onipresente, ao pegar um Espinho de Gancho, veja a aura de todos os sobreviventes a 8 metros de todos os ganchos do mapa.' }
        ],
        perks: [
            { nome: 'Sombra Silenciosa', desc: ' Sempre que você engancha um Sobrevivente, recebe Indetectável por 11/12/13 s. Quando os Portões de Saída são energizados, você recebe Indetectável pelo restante da partida.' },
            { nome: 'Fúria', desc: ' Quebrar normalmente uma Barricada ou Parede Destrutível concede 1 Ficha, até 13. Ao ser cegado ou atordoado por uma Barricada, recebe 1% de celeridade por Ficha durante 13 s. Tempo de recarga: 20 s.' },
            { nome: 'Feitiço: Morrendo de Medo', desc: ' Após enganchar 3 Sobreviventes diferentes, um Totem Simples se torna Enfeitiçado. Enquanto estiver ativo, quebrar uma Barricada durante uma perseguição faz Sobreviventes a até 13 m gritarem e sofrerem 13% de Lentidão por 3 s.' },
        ],
        videoTut: './Killers videos/Jason/NUNCA Mais Morra Pro JASON (Guia Rápido) #dbdgameplay #dbdfunnymoments.mp4'
    },

    legion: {
        id: 'legion',
        nome: 'A Legião (The Legion)',
        lore: 'Frank Morrison, Julie Kostenko, Susie Lavoie e Joey formavam um grupo de jovens de Ormond unidos pela violência e pela influência de Frank. O que começou como pequenos crimes rapidamente evoluiu para algo muito pior, até que os quatro passaram a agir como uma verdadeira matilha e foram levados pela Entidade.',
        poder: '**Fúria Bestial:**\nA Legião pode entrar em uma corrida de alta velocidade e saltar rapidamente por janelas e barricadas. Ao atingir um Sobrevivente durante a Fúria Bestial, aplica Ferida Profunda, recupera o medidor do poder e revela a localização de outros Sobreviventes dentro do Raio de Terror. Errar um ataque, ser atordoado ou deixar o medidor acabar encerra a Fúria Bestial.',
        dicas: '• Espalhe-se dos outros Sobreviventes para dificultar os ataques em sequência da Fúria Bestial.\n• Não desperdice tempo se curando o tempo todo, pois a Legião consegue ferir vários jogadores rapidamente.\n• Se estiver com Ferida Profunda, encontre um local seguro para se Remendar antes que o cronômetro termine.',
        addons: [
            { nome: 'Esboço do Mural', desc: ' Aumenta o bônus de Velocidade de Movimento cumulativo ganho com Golpes Ferais em cadeia para +0,3 m/s, até um máximo de +1,2 m/s.' },
            { nome: 'Botão Iridescente', desc: ' Faz com que Saltos Ferais quebrem instantaneamente as Barricadas saltadas.' },
            { nome: 'Fita Mixada Fumegante', desc: ' Durante o Frenesi Feral, a intensidade das Auras dos Geradores revela o progresso atual de Reparo deles e Geradores incompletos começam a regredir. Desbloqueia uma camada de som adicional no seu Raio de Terror, aprimorando-o musicalmente. Pode ser combinada com qualquer outra Fita Mixada para criar combos de múltiplas camadas de som.' }
        ],
        perks: [
            { nome: 'Discórdia', desc: ' Geradores a até 128 m que estiverem sendo reparados por 2 ou mais Sobreviventes ficam destacados em amarelo. Quando isso começa, você recebe uma notificação sonora. A aura permanece por 4 s depois que o reparo cooperativo termina.' },
            { nome: 'Dama de Ferro', desc: ' Aumenta em 50% a velocidade de busca em Armários. Quando um Sobrevivente sai de um Armário, ele grita, revela sua localização por 4 s e fica Exposto por 30 s.' },
            { nome: 'Fúria Louca', desc: ' Enquanto carrega um Sobrevivente, ataques básicos errados não têm tempo de recarga. Ao acertar outro Sobrevivente com um Ataque Básico, o progresso de luta do Sobrevivente carregado é pausado por 2/3/4 s.' },
        ],
        videoTut: './Killers videos/Legion/guia_legion.mp4'
    },

    nemesis: {
        id: 'nemesis',
        nome: 'O Nemesis (The Nemesis)',
        lore: 'Criado pela Umbrella Corporation, o Nemesis é uma arma bio-orgânica desenvolvida para perseguir e eliminar seus alvos. Enviado para Raccoon City com a missão de exterminar os membros dos S.T.A.R.S., continuou sua perseguição implacável até ser envolvido pela Névoa da Entidade.',
        poder: '**Vírus T:**\nO Nemesis pode usar o Golpe do Tentáculo para Contaminar Sobreviventes e aumentar sua Taxa de Mutação. No Nível 2, o Tentáculo também pode destruir Barricadas e Paredes Destrutíveis. No Nível 3, ganha maior alcance e velocidade ao preparar o ataque. Zumbis controlados por IA também patrulham o mapa, podendo Contaminar e ferir Sobreviventes. Vacinas encontradas em Caixas de Suprimentos removem a Contaminação.',
        dicas: '• Desvie para os lados quando ele preparar o Tentáculo e evite depender demais de janelas e Barricadas.\n• Use as Vacinas com cuidado, pois elas são limitadas e alguns complementos aplicam efeitos após seu uso.\n• Fique atento aos Zumbis, pois eles podem expulsar você de Geradores e bloquear rotas importantes.',
        addons: [
            { nome: 'Moeda de Recuperação Quebrada', desc: ' Remove 1 Caixa de Suprimentos do Julgamento.' },
            { nome: 'Sangue do Marvin', desc: ' Aumenta a Taxa de Mutação ao atingir Sobreviventes com um Ataque de Tentáculo em +0,75 Pontos de Mutação.' },
            { nome: 'Tinteiro Seco', desc: ' Reduz o tempo de renascimento de Zumbis em -5 segundos. Aumenta a velocidade de Movimento dos Zumbis em +0,5 m/s. Assim que todos os 5 Geradores forem concluídos, quaisquer Zumbis destruídos renascerão na área de um Portão de Saída.' }
        ],
        perks: [
            { nome: 'Perseguidor Mortífero', desc: ' No início da partida, revela as auras de todos os Sobreviventes por 9 s. Também aumenta em 2 s a duração de todas as outras revelações de aura de Sobreviventes.' },
            { nome: 'Histeria', desc: ' Quando um Sobrevivente saudável fica Ferido, todos os Sobreviventes Feridos ficam Alheios por 40 s. Tempo de recarga: 20 s.' },
            { nome: 'Erupção', desc: ' Após danificar um Gerador, sua aura fica amarela. Quando um Sobrevivente entra no estado Morrendo, todos os Geradores afetados explodem, perdem 10% do progresso atual e começam a regredir. Sobreviventes reparando esses Geradores gritam e têm suas auras reveladas por 12 s. Tempo de recarga: 30 s.' }
        ],
        videoTut: './Killers videos/Nemesis/guia_nemesis.mp4'
    },

    oni: {
        id: 'oni',
        nome: 'O Oni (The Oni)',
        lore: 'Kazan Yamaoka desejava restaurar a glória da cultura samurai e iniciou uma peregrinação brutal pelo Japão para eliminar aqueles que considerava falsos samurais. Sua violência, crueldade e sede de sangue fizeram com que fosse temido como Oni-Yamaoka, o Samurai Demoníaco, até ser levado pela Névoa.',
        poder: '**Ira dos Yamaoka:**\nSobreviventes feridos deixam Esferas de Sangue que o Oni pode absorver para carregar seu poder. Quando o medidor fica cheio, ele ativa a Fúria Sanguinária, podendo usar a Arremetida Demoníaca para se mover em alta velocidade e o Golpe Demoníaco para derrubar Sobreviventes com um único ataque.',
        dicas: '• Evite ser ferido cedo na partida para não fornecer Esferas de Sangue e acelerar a primeira Fúria Sanguinária.\n• Durante a Fúria Sanguinária, use curvas e obstáculos para dificultar a Arremetida Demoníaca.\n• Não fique agrupado quando o Oni ativar seu poder, pois ele pode derrubar vários Sobreviventes rapidamente.',
        addons: [
            { nome: 'Casco Lascado', desc: ' Aumenta a frequência de surgimento de Orbes de Sangue de Sobreviventes feridos em +33%. Aumenta o número de Orbes de Sangue que surgem quando Sobreviventes realizam interações específicas em +1.' },
            { nome: 'Presa de Leão', desc: ' Aumenta a duração da Fúria Sanguinária em +10 segundos.' },
            { nome: 'Muleta de Akito', desc: ' Aumenta a sua velocidade de Movimento durante uma Investida Demoníaca em +1 m/s.' }
        ],
        perks: [
            { nome: 'Eco Sanguíneo', desc: ' Ao enganchar um Sobrevivente, todos os outros Sobreviventes Feridos sofrem Hemorragia e Exaustão temporariamente.' },
            { nome: 'Nemesis', desc: ' Quando um Sobrevivente cega ou atordoa você, ele se torna sua Obsessão. Sempre que um novo Sobrevivente se torna a Obsessão, sua aura é revelada brevemente e ele fica Alheio, não podendo ouvir seu Raio de Terror nem ver sua Mancha Vermelha temporariamente.' },
            { nome: 'Táticas Zanshin', desc: ' Revela as auras de Barricadas, Paredes Destrutíveis e Janelas dentro do alcance, facilitando prever as rotas de fuga dos Sobreviventes.' },
        ],
        videoTut: './Killers videos/Oni/guia_oni.mp4'
    },

    xenomorph: {
        id: 'xenomorph',
        nome: 'O Xenomorfo (The Xenomorph)',
        lore: 'O Xenomorfo é um organismo perfeito, criado para matar. Após surgir a bordo da Nostromo, caçou a tripulação usando os dutos da nave e eliminou suas vítimas uma a uma. Quando estava prestes a matar Ripley, foi ejetado no espaço, mas desapareceu em uma névoa negra antes de morrer.',
        poder: '**Perseguição Oculta:**\nO Xenomorfo pode entrar em Túneis através das Estações de Controle e atravessar o mapa rapidamente. Ao sair de um Túnel, Sobreviventes próximos são detectados pelo Instinto Assassino. No Modo Crawler, seu Raio de Terror é reduzido e ele pode usar um Ataque de Cauda que alcança Sobreviventes através de janelas e sobre barricadas. Os Sobreviventes podem instalar Torretas Lança-Chamas Remotas para expulsá-lo temporariamente do Modo Crawler.',
        dicas: '• Use Torretas Lança-Chamas em locais importantes para tirar o Xenomorfo do Modo Crawler.\n• Evite ficar em linha reta durante perseguições, pois o Ataque de Cauda pode alcançar através de janelas e barricadas.\n• Fique atento às Estações de Controle, pois ele pode sair dos Túneis e aparecer rapidamente em outra parte do mapa.',
        addons: [
            { nome: 'Parafuso de Autodestruição', desc: ' Aumenta a velocidade de salto enquanto estiver no Modo Rastreador em +30%.' },
            { nome: 'Mapa Estelar de Lambert', desc: ' Reduz o alcance do lança-chamas das Torres de Chamas Remotas em -2 metros.' },
            { nome: 'Capacete de Emergência', desc: ' Aumenta a resistência a atordoamento contra a Torre de Chamas Remota em +35%.' }
        ],
        perks: [
            { nome: 'Brutalidade Veloz', desc: ' Você não pode ganhar Sede de Sangue durante perseguições. Ao atingir um Sobrevivente com um Ataque Básico, recebe 5% de celeridade por 10 s.' },
            { nome: 'Instinto Alienígena', desc: ' Ao enganchar um Sobrevivente, a aura do Sobrevivente ferido mais distante é revelada por 8 s. Ele também sofre Alheio por 60 s.' },
            { nome: 'Arma Suprema', desc: ' Ao vasculhar um Armário, todos os Sobreviventes a até 40 m gritam, revelam suas posições e sofrem Cegueira por 30 s. Tempo de recarga: 45 s.' },
        ],
        videoTut: './Killers videos/Xenomorfo/guia_xenomorfo.mp4'
    },

    artist: {
        id: 'artist',
        nome: 'A Artista (The Artist)',
        lore: 'Carmina Mora tentou se matar após perder o irmão, mas foi salva por corvos sobrenaturais. Tornou-se uma artista famosa, até ser levada pela Entidade....',
        poder: '**Pássaros do Tormento:**\nPode invocar até 3 Corvos Cruéis, que causam dano durante o voo.\nSe ultrapassarem o alcance, deixam de causar dano, mas ficam rodeando os Sobreviventes, causando dano ao serem atingidos por corvos novamente.',
        dicas: '• Aproveite o tempo: enquanto ela prepara ou reposiciona os corvos, use esse momento para fugir.\n• Não corra em linha reta: isso facilita muito os ataques da Artista.\n• Preste atenção no som: os corvos podem denunciar quando ela está lança os .',
        addons: [
            { nome: 'Piche Espesso', desc: ' Aumenta a duração da ação de Repelir para Sobreviventes Enxameados em +0,5 segundo.' },
            { nome: 'Carniça Purulenta', desc: ' Reduz o tempo de recarga de Pássaros de Tormento em -0,5 segundo após lançar Corvos Cruéis.' },
            { nome: 'Mãos Decepadas', desc: ' Faz com que Sobreviventes que cheguem a até 3 metros de distância de Sobreviventes Enxameados também fiquem enxameados.' }
        ],
        perks: [
            { nome: 'Abraço Sinistro', desc: ' ao enganchar cada Sobrevivente pela primeira vez recebe 1 ponto de progresso; com 4 pontos, a Entidade bloqueia todos os geradores por 40 segundos e revela a aura da Obsessão.' },
            { nome: 'Feitiço: Pentimento', desc: ' Revela Totens destruídos que podem ser reativados. Quanto mais Totens Reavivados, mais efeitos negativos nos Sobreviventes, chegando a bloquear todos eles com 5 Totens..' },
            { nome: 'Gancho do Tormento: Ressonância da Dor', desc: ' após enganchar o sobrevivente pela primeira vez os geradores ficam bloqueados por 10 segundos, após enganchar todos os sobreviventes uma vez os geradores ficam bloqueados por 40 segundos e ve a aura da obsessão por 10 segundos.' },
        ],
        videoTut: './Killers videos/Artista/video_artista_v4.mp4'
    },

    executioner: {
        id: 'executioner',
        nome: 'O Carrasco (Pyramid Head)',
        lore: 'Uma manifestação de culpa e punição vinda de Silent Hill, o Cabeça de Pirâmide percorre seus corredores infernais carregando uma enorme lâmina. Impiedoso e silencioso, ele existe para atormentar e punir aqueles que cruzam seu caminho.',
        poder: '**Ritos de Julgamento:**\nO Carrasco pode arrastar sua lâmina pelo chão para criar Trilhas de Tormento. Sobreviventes que atravessam essas trilhas ficam Atormentados. Enquanto usa Ritos de Julgamento, ele pode lançar a Punição dos Condenados, um ataque à distância que atravessa obstáculos. Sobreviventes Atormentados podem ser enviados para uma Jaula de Expiação e, caso estejam próximos da morte, executados diretamente com Julgamento Final.',
        dicas: '• Evite atravessar as Trilhas de Tormento para não ficar vulnerável às Jaulas de Expiação.\n• Mude de direção quando ele preparar a Punição dos Condenados, principalmente perto de janelas e barricadas.\n• Não confie totalmente em paredes durante perseguições, pois a Punição dos Condenados atravessa obstáculos.',
        addons: [
            { nome: 'Boneca de Cera', desc: ' Aumenta o alcance dos ataques de Punição dos Condenados em +1 metro.' },
            { nome: 'Pintura do Homem em Chamas', desc: ' Aumenta o alcance dos ataques de Punição dos Condenados em +1,5 metro.' },
            { nome: 'Tira Preta', desc: ' Aumenta o alcance dos ataques de Punição dos Condenados em +0,5 metro.' }
        ],
        perks: [
            { nome: 'Letalidade', desc: ' Quando um Sobrevivente termina de curar outro em 1 Estado de Saúde, ele grita e revela sua localização. O curandeiro fica Alheio enquanto estiver a mais de 4 m do Sobrevivente curado. O efeito termina quando o curandeiro perde um Estado de Saúde.' },
            { nome: 'Penitência Forçada', desc: ' Sobreviventes que recebem um Acerto de Proteção ficam Quebrados por 80 s.' },
            { nome: 'Trilha do Tormento', desc: ' Após danificar um Gerador, você fica Indetectável enquanto ele estiver regredindo. A aura desse Gerador é revelada em amarelo aos Sobreviventes. Tempo de recarga: 30 s.' },
        ],
        videoTut: './Killers videos/Pyramide Head/guia_pyramid_head.mp4'
    },

    dredge: {
        id: 'dredge',
        nome: 'A Draga (The Dredge)',
        lore: 'A Draga nasceu da violência, paranoia e pensamentos sombrios cultivados no Jardim da Alegria por Otto Stamper. Conforme os seguidores se voltavam uns contra os outros, uma massa horrível surgiu do sangue e da escuridão, tornando-se uma criatura formada pelos piores impulsos daqueles que viviam no local.',
        poder: '**Reino da Escuridão:**\nA Draga pode usar O Crepúsculo para deixar um Resquício e se teletransportar entre Armários pelo mapa. Ela também pode retornar ao Resquício para surpreender Sobreviventes. Conforme fere, engancha e se teletransporta, o medidor de Anoitecer aumenta. Quando o Anoitecer começa, o mapa fica muito mais escuro, a Draga perde seu Raio de Terror e pode se teletransportar entre Armários com maior frequência.',
        dicas: '• Tranque Armários importantes para atrasar os teletransportes da Draga.\n• Durante o Anoitecer, tente permanecer em áreas conhecidas e evite correr sem direção por causa da baixa visibilidade.\n• Fique atento ao Resquício durante perseguições, pois a Draga pode retornar até ele para cortar sua rota.',
        addons: [
            { nome: 'Gravador de Campo', desc: ' Faz com que a partida comece no Anoitecer. Faz com que o Anoitecer seja ativado automaticamente assim que o último Gerador for concluído. Sobreviventes sofrem do Efeito de Status Exaustão por 15 segundos após entrarem em contato com o Resquício.' },
            { nome: 'Caveira do Malpensante', desc: ' Aumenta a taxa de Carregamento do Medidor do Anoitecer enquanto os Sobreviventes estão feridos em +66% por segundo.' },
            { nome: 'Boneca Quebrada', desc: ' Aumenta a duração do Anoitecer em +20 segundos.' }
        ],
        perks: [
            { nome: 'Escuridão Revelada', desc: ' Ao vasculhar um Armário, revela por 8 s as auras dos Sobreviventes que estiverem a até 8 m de qualquer Armário. Tempo de recarga: 30 s.' },
            { nome: 'Dissolução', desc: ' 3 s após ferir um Sobrevivente, a vantagem fica ativa por 20 s. Durante esse período, a próxima Barricada que um Sobrevivente saltar rapidamente dentro do seu Raio de Terror é destruída automaticamente.' },
            { nome: 'Toque Séptico', desc: ' Sobreviventes que realizam uma cura dentro do seu Raio de Terror sofrem Cegueira e Exaustão. Os efeitos permanecem por 30 s após a cura ser interrompida.' }
        ],
        videoTut: './Killers videos/Draga/guia_draga.mp4'
    }
};