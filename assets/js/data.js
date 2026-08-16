/* =========================================================
   Ashling — Bíblia da Saga · dados
   Transcrito da Bíblia da História (Biblia_Ashling) e dos
   manuscritos de progresso do Livro 1 e Livro 2.
   ========================================================= */

const SITE_DATA = {

  saga: {
    title: `Herdeira das Cinzas`,
    subtitle: `Ashling`,
    tagline: `Personagens · Sistema de Magia · Mundo · Progresso`,
    booksPlanned: 4,
    description: `Saga de fantasia sombria em quatro livros. Ashling, assassina foragida de Valdris, descobre que carrega as duas linhagens de conjuração mais fortes que já existiram — e que isso a torna, ao mesmo tempo, a maior esperança de um povo quase extinto e o alvo mais perigoso do reino.`
  },

  /* =========================================================
     PERSONAGENS
     category: "Principal" | "Secundário" | "Adicional"
     ========================================================= */
  characters: [
    // ---------- PRINCIPAIS ----------
    {
      id: 'ashling',
      name: 'Ashling',
      category: 'Principal',
      role: `Protagonista · Assassina foragida · Herdeira Ashkari`,
      factions: ['Ashkari', 'Thornecrest', 'Protagonistas'],
      books: [1, 2],
      age: `20 anos`,
      height: `1,70m`,
      lineage: `Casa Thornecrest (pai) + Ashkari (mãe) — combinação rara, a mais forte que existe`,
      fera: `Nyx (pantera negra) · depois Hemera (pantera branca) — única pessoa capaz de vincular duas feras`,
      appearance: `Pele muito branca, cabelo ruivo longo (sempre preso em coque), olhos azuis muito claros, quase cinza — marca do sangue Ashkari, herdados da mãe.`,
      marks: `Cicatrizes nas costas e nos pulsos, resultado de tortura.`,
      bio: [
        `Demônio: Nyx — fraco no início, cresce em poder conforme ela evolui. Motivação inicial: sobrevivência. Motivação posterior: vingança.`,
        `Personalidade fechada e traumatizada pela vida, mas guarda, no fundo do coração, uma crença silenciosa no amor — mesmo sem admitir isso facilmente.`,
        `Não tem medos evidentes: já perdeu tudo o que podia perder. Sobreviveu à invasão do próprio vilarejo quando criança (fuga pelo rio, morte da mãe) e, mais tarde, à captura e tortura pela coroa de Valdris — momento em que seu poder desperta pela primeira vez.`,
        `Não sabe, no início da história, nada sobre sua linhagem: nem que é filha bastarda do rei falecido, nem que carrega o sangue Ashkari, tido como extinto.`,
        `Por que é a mais forte: é filha do rei (Casa Thornecrest) com Elowen (Ashkari, a linhagem mais antiga e forte). Carrega as duas linhagens altas ao mesmo tempo e é única nisso — o que explica estruturalmente por que supera até Dain.`,
        `Desfecho do triângulo amoroso (cânone fechado 2026-08-09): fica com Kael no final da saga, não com Rowan.`
      ],
      tags: ['Protagonista', 'Ashkari', 'Conjuradora', 'Assassina']
    },
    {
      id: 'theon',
      name: 'Theon',
      category: 'Principal',
      role: `Príncipe herdeiro de Valdris · Meio-irmão de Ashling · Conjurador`,
      factions: ['Thornecrest', 'Ceridwen', 'Coroa de Valdris'],
      books: [1, 2],
      age: `23 anos`,
      height: `1,90m`,
      lineage: `Casa Thornecrest (pai) + Casa Ceridwen (mãe) — poderoso, porém geneticamente mais fraco que Ashling`,
      fera: `Helios, leopardo dourado (macho) — dom é CALOR, não sombra`,
      appearance: `Cabelo liso e preto, olhos claros — NÃO são a marca Ashkari. Os olhos acinzentados/prateados de Ashling e Dain vêm da mãe dela, Elowen, e são exclusivos do sangue Ashkari. Theon pode ter olhos claros de outro tipo, mas nunca a marca.`,
      bio: [
        `Distinção importante: os olhos de Ashling provam a mãe; o segredo de duas décadas prova o pai.`,
        `Papel na trama: governante preso num sistema cruel que não escolheu. Fundamentalmente um bom homem, mas de vontade fraca diante da própria mãe, a rainha Selwyn — é facilmente manipulado por ela.`,
        `Amava o pai, ainda que o pai fosse duro e violento com ele (surras frequentes). Essa relação provavelmente explica sua submissão a figuras de autoridade, inclusive à mãe.`,
        `Tem um conselho real para governar, mas na prática acata quase tudo que Selwyn decide. No fundo, nunca quis ser rei. É príncipe herdeiro, não rei — Selwyn é quem reina.`,
        `Sabe que existe uma irmã em algum lugar — Selwyn lhe entregou relatórios com avistamentos e rumores, mas até a batalha de Harrowgate não tinha um rosto para pôr nela.`,
        `Despertar do dom (arco planejado, 4 etapas): 1) reação física estranha no encontro da praça (Cap.17 do Livro 2), que atribui a nervosismo; 2) conta à Selwyn o que sentiu; 3) é treinado por pessoas de dentro da coroa; 4) confronto direto com Ashling usando o poder desperto.`,
        `Conta à Selwyn por carta (Cap.24), antes da batalha — não por ingenuidade, por ser filho. Sente alívio "absurdo e infantil" ao lacrar a carta. Quando volta derrotado (Cap.31), os instrutores da coroa já estão no castelo.`,
        `Assina a interdição da estrada baixa (Cap.24) sabendo exatamente o que significa — fome para quatro vilarejos e os refugiados de Correnbrook — e exige: "Que fique registrado que fui eu."`,
        `Misdirection deliberada: a suspeita do grupo de Ashling e do leitor deve recair sobre Theon (rosto público da coroa) ao longo do Livro 2, embora a vilã real seja Selwyn.`
      ],
      tags: ['Príncipe', 'Conjurador', 'Coroa', 'Antagonista aparente']
    },
    {
      id: 'rowan',
      name: 'Rowan',
      category: 'Principal',
      role: `Mentor e interesse amoroso · Povo Fenn`,
      factions: ['Fenn', 'Protagonistas'],
      books: [1, 2],
      age: `25 anos`,
      height: `1,90m, forte`,
      lineage: `Povo Fenn — povo da floresta, guerreiros`,
      fera: `Kova, urso branco (montaria de combate, com ele desde os doze anos)`,
      appearance: `Cabelo liso e preto, grande; pele parda, bronzeada; olhos verdes; tatuagem no peito; corpo malhado.`,
      bio: [
        `Personalidade boa, porém fechada e séria; histórico de estar sempre sozinho. É conjurador — nunca tratar conjuração como algo alheio a ele.`,
        `Encontra Ashling desmaiada na floresta durante a fuga dela e a carrega para casa, salvando sua vida. Vê algo nela que o intriga — vira amizade antes de evoluir para romance.`,
        `Como mentor de treinamento, é duro com ela, às vezes até grosseiro — não facilita nada.`,
        `Medo expresso no Cap.3 do Livro 2: "sem saber o que a gente é pra eu poder chamar de meu."`,
        `Desfecho (cânone fechado): a relação com Ashling precisa de um motivo real de ruptura — os dois percebem juntos que o que têm é mais parecido com companheirismo seguro do que a intensidade que ela sente por Kael. Na véspera de Harrowgate (Cap.25), recusa fazer "a pergunta" a Ashling: "Quero a que você me daria numa terça-feira qualquer, com a gente velho e entediado." A pergunta fica pendente como gancho de ruptura.`,
        `Diretriz de tom do triângulo: Ashling + Rowan é "fofo e intenso" — ternura, cuidado, o amor que acolhe (em contraste com o fogo de Ashling + Kael).`
      ],
      tags: ['Mentor', 'Fenn', 'Conjurador', 'Interesse amoroso']
    },

    // ---------- SECUNDÁRIOS ----------
    {
      id: 'elowen',
      name: 'Elowen',
      category: 'Secundário',
      role: `Mãe de Ashling · Última princesa Ashkari`,
      factions: ['Ashkari'],
      books: [1, 2],
      status: `Morta (Rivermoor, ~15 anos antes do Livro 1)`,
      lineage: `Filha da rainha Ashkari Isolde`,
      appearance: `Pele muito branca, bonita, magra pela vida difícil; cabelo ruivo (herdado por Ashling); vestia-se de forma humilde.`,
      bio: [
        `Origem: filha da antiga rainha Ashkari; sobrevivente do massacre de seu povo aos 5 anos — salva quando a própria babá a escondeu num cesto. Criada como órfã, cresceu e trabalhou como criada no castelo do rei.`,
        `Cânone (Livro 2): o rei e Elowen se amavam de verdade — o relacionamento era genuíno, não abuso de poder. O casamento do rei com Selwyn já estava selado por acordo político anterior a esse amor. Selwyn sabia que o marido amava Elowen e não a ela, e nunca perdoou.`,
        `Engravidou do rei. Fugiu, escondendo tanto a gravidez quanto a própria identidade Ashkari, para proteger a filha do mesmo destino que teve seu povo. O rei nunca soube que Ashling existia.`,
        `Objeto-chave: deu a Ashling um colar que pertenceu à antiga rainha Ashkari (avó de Ashling).`,
        `Personalidade calorosa e protetora, porém com uma distância marcada pelo medo constante — nunca se sentiu segura o bastante para ser plenamente vulnerável, nem com a própria filha.`,
        `Morta por soldados a mando de Selwyn na invasão a Rivermoor, quando Ashling era criança. Guardou por vinte anos cartas nunca enviadas ao rei — entregues a Ashling por Tomas no Livro 2.`
      ],
      tags: ['Ashkari', 'Falecida', 'Mãe de Ashling']
    },
    {
      id: 'selwyn',
      name: 'Rainha Selwyn',
      category: 'Secundário',
      role: `Antagonista · Mãe de Theon · Casa Ceridwen`,
      factions: ['Ceridwen', 'Coroa de Valdris', 'Antagonistas'],
      books: [1, 2],
      age: `~50 anos`,
      lineage: `Casa Ceridwen — linhagem conjuradora reconhecida, mas Selwyn não recebeu o dom`,
      bio: [
        `Odeia pobres e o que considera "raças inferiores" — incluindo os Ashkari, linhagem da própria enteada. Manipula Theon através da culpa, do medo e da lealdade dele à memória do pai.`,
        `NÃO é conjuradora (cânone cravado). Casou com um rei conjurador, pariu um filho conjurador, governa um reino cuja casa real guarda a tradição — e está permanentemente de fora. Essa impotência pessoal é a raiz psicológica da perseguição aos conjuradores: ela tenta destruir/controlar o que nunca poderá ter.`,
        `Sabe de tudo (cânone cravado): sabe que os Ashkari são a linhagem da própria enteada e que Ashling carrega as duas linhagens altas — o motivo real por trás de tudo. Isso vaza apenas em micro-sinais (tensão dos dedos contra o trono, um lampejo de medo que só Theon percebe).`,
        `Origem do ódio: conheceu Elowen na corte antes de se casar com o rei; sabia que o marido amava Elowen e não a ela, e nunca perdoou. Suspeitava do caso e da gravidez, e guardou por vinte anos uma carta interceptada de Elowen ao rei.`,
        `Ordenou o ataque a Rivermoor (~15 anos atrás) para eliminar Elowen e a filha bastarda do rei, disfarçado de "purga anti-Ashkari" — Draven executou a ordem. Presumiu que Ashling morrera ali.`,
        `Caso com Draven começou DURANTE o casamento com o rei — nasceu como consolo mútuo enquanto ela vivia à sombra do amor do rei por Elowen.`,
        `Fio no bolso (não confirmado): possibilidade narrativa de Theon ser filho biológico de Draven, não do rei — carta guardada para Livro 3 ou 4.`,
        `Revelado a Theon no Cap.1 do Livro 2. Misdirection deliberada: a suspeita do leitor deve recair sobre Theon ao longo do Livro 2 — a revelação de Selwyn como mente por trás de tudo deve ser uma reviravolta genuína.`
      ],
      tags: ['Vilã', 'Ceridwen', 'Coroa', 'Não-conjuradora']
    },
    {
      id: 'draven',
      name: 'General Draven',
      category: 'Secundário',
      role: `Antagonista · Braço executor da Rainha Selwyn`,
      factions: ['Coroa de Valdris', 'Círculo de Cinzas', 'Antagonistas'],
      books: [1, 2],
      status: `Capturado (fim do Livro 1) — sob custódia da Cidade Celestial`,
      bio: [
        `Comanda a caçada a Ashling e está por trás do assassinato forjado que a incrimina no início da trama. Presente na captura e tortura dela.`,
        `Leal à rainha Selwyn; amante dela desde durante o casamento dela com o rei. Executou pessoalmente a ordem de Rivermoor.`,
        `É quem compra Kael para eliminar Ashling. Revelado no fim do Livro 1: é o líder pessoal do Círculo de Cinzas, facção responsável pelos ataques em Duskhollow e pelo assalto à Cidade Celestial (cap. 51). Com o tempo, seu ódio aos Ashkari radicalizou-se além do controle de Selwyn.`,
        `Derrotado em duelo por Vessa no desfiladeiro de Kelmoor e capturado vivo. Gancho ativo do Livro 2: Selwyn agora tem motivo pessoal (não só político) para decidir o destino dele — resgatá-lo, silenciá-lo ou sacrificá-lo publicamente. Virada planejada para a metade do Livro 2.`
      ],
      tags: ['Vilão', 'Círculo de Cinzas', 'Capturado']
    },
    {
      id: 'maeve',
      name: 'Maeve',
      category: 'Secundário',
      role: `Líder do povo Fenn`,
      factions: ['Fenn'],
      books: [1, 2],
      bio: [
        `Não é família biológica de Rowan, mas foi quem o criou depois que os pais dele — guerreiros do povo Fenn — morreram muito cedo.`,
        `Receptiva e acolhedora; trata Ashling como filha, chamando-a sempre de "criança". Dá a Ashling conselhos importantes ao longo do tempo em que ela vive entre os Fenn.`,
        `Comando estratégico da coalizão no Livro 2, ao lado de Ilyandor e Ashling, retendo a escolha de terreno: "onde a gente luta, quem escolhe sou eu." Confronta a palavra "hierarquia": "Vocês chegaram aqui há dois meses. Estas são as nossas terras, os nossos mortos."`,
        `Escolhe o terreno de Harrowgate justamente pela garganta de pedra, onde a superioridade numérica de Valdris vale metade.`
      ],
      tags: ['Fenn', 'Liderança', 'Aliada']
    },
    {
      id: 'kael',
      name: 'Kael',
      category: 'Secundário',
      role: `Parceiro do passado de Ashling · Assassino · Interesse amoroso`,
      factions: ['Protagonistas'],
      books: [1, 2],
      appearance: `Loiro, olhos amarelados. Cabelo raspado nos dois lados e na nuca, com o comprimento do alto preso num rabo de cavalo. Forte, porém ágil — estilo urbano. No Livro 2 o visual muda gradualmente: barba cheia estilo nórdico (referência: Bjorn Ironside), corpo mais largo, tranças.`,
      bio: [
        `Personalidade extremamente charmosa, sarcástica, bem mais leve que Ashling — contraponto de alívio cômico. É o único que viveu a vida inteira ao lado de Ashling: cresceram juntos nas ruas depois que ela perdeu tudo, aprenderam juntos a sobreviver e a matar na mesma organização de assassinos.`,
        `Extremamente próximo dela — está apaixonado por ela, não fraternalmente (diretriz: nunca deve ser enquadrado como "irmão" pela Ashling — mataria a tensão).`,
        `É comprado pelo General Draven para eliminá-la, mas, ao encontrá-la, não consegue completar o trabalho — o amor pesa mais que o contrato.`,
        `Funciona como ponta de um triângulo emocional com Rowan: diretriz de tom — Ashling + Kael é FOGO (atrito, provocação, brigas, coisas ditas com raiva que são medo; o amor que queima).`,
        `Livro 2: parte para recrutar antigos assassinos (missão própria, resposta ao pedido dele no Cap.14 de descobrir quem é além de apaixonado por Ashling). Traz de volta uma guerreira com quem se envolve — Ashling vê o beijo e fica furiosa sem entender por quê (ciúme revelador).`,
        `Padrão de personagem: recusa prometer o que não sabe se cumpre ("Peça outra coisa e eu prometo... eu não minto pra você"). Desobedece ordens de Ashling para salvar a vida dela, sem se desculpar: "Pode me odiar. Prefiro você viva me odiando."`,
        `Parte uma semana após Harrowgate (Cap.32) por "meses, provavelmente"; deixa Bregan, Sorcha e Halbrand como substitutos permanentes no comando de treinamento. Retorna ainda no Livro 2, por volta do Cap.40.`,
        `Desfecho (cânone fechado 2026-08-09): Ashling fica com Kael no final da saga.`
      ],
      tags: ['Assassino', 'Interesse amoroso', 'Alívio cômico']
    },
    {
      id: 'ilyandor',
      name: 'Ilyandor',
      category: 'Secundário',
      role: `Guardião da Cidade Celestial`,
      factions: ['Cidade Celestial', 'Conselho de Guardiões'],
      books: [1, 2],
      appearance: `Idoso, mas com vitalidade que desmente a fragilidade aparente; cabelos brancos longos presos numa trança simples; olhos de um azul muito claro, quase brilhante.`,
      bio: [
        `Um dos guardiões da Cidade Celestial, recebe Ashling e Rowan na chegada, junto ao arco de pedra branca na entrada. Sabia da aproximação de Ashling antes mesmo dela chegar — a cidade "sente" sangue Ashkari se aproximando.`,
        `Trata Ashling com reverência por ela ser herdeira Ashkari, linhagem que os guardiões acreditavam extinta. Hesita, de forma notável, ao ser perguntado se existem outros Ashkari além dela.`,
        `No Conselho, defende cautela: deixar Ashling estudar e se curar primeiro, sem revelar ainda o objetivo final de restauração do povo Ashkari — em oposição a Perrin, que queria revelar tudo já.`,
        `Livro 2: comando estratégico da coalizão ao lado de Ashling e Maeve.`
      ],
      tags: ['Cidade Celestial', 'Mentor', 'Conselho']
    },
    {
      id: 'sorel',
      name: 'Sorel',
      category: 'Secundário',
      role: `Conselheira da Cidade Celestial`,
      factions: ['Cidade Celestial', 'Conselho de Guardiões'],
      books: [1],
      bio: [
        `Conselheira de cabelos prateados e olhar penetrante. Defende cautela — não quer pressionar Ashling antes que ela esteja emocionalmente pronta, mas insiste que ela precisa eventualmente saber o tamanho completo do que a restauração significaria.`,
        `Revela ao Conselho (cap. 32 do Livro 1) que uma guerra se forma nas fronteiras de Valdris, adicionando urgência política às decisões do grupo.`
      ],
      tags: ['Cidade Celestial', 'Conselho']
    },
    {
      id: 'perrin',
      name: 'Perrin',
      category: 'Secundário',
      role: `Guardião do Conselho da Cidade Celestial`,
      factions: ['Cidade Celestial', 'Conselho de Guardiões'],
      books: [1, 2],
      bio: [
        `O mais jovem dos sete conselheiros, impaciente, quer acelerar o processo rumo à restauração do poder Ashkari — gerações esperando um sinal, e ele não quer desperdiçar a oportunidade.`,
        `Propõe secretamente, sem revelar a Ashling, um futuro casamento político entre ela e o sobrevivente Ashkari (Dain), para consolidar a restauração do povo. Ashling e Dain descobrem o plano no cap. 49 do Livro 1; o Conselho encerra formalmente a proposta.`,
        `Defende abertamente esse plano de união no Livro 2 (cap. 47) como estratégia política; Ilyandor promete que nada será decidido sem o consentimento de ambos.`
      ],
      tags: ['Cidade Celestial', 'Conselho', 'Fio de tensão']
    },
    {
      id: 'tamsin',
      name: 'Tamsin',
      category: 'Secundário',
      role: `Jovem guia da Cidade Celestial`,
      factions: ['Cidade Celestial'],
      books: [1],
      bio: [
        `Rapaz de sorriso fácil que acompanha Ashling e Rowan pela cidade e até os arquivos. Personagem secundário leve, possível ponto de vista "comum" da cidade para contrastar com a gravidade de Ilyandor e do Conselho.`
      ],
      tags: ['Cidade Celestial', 'Alívio']
    },
    {
      id: 'yseult',
      name: 'Yseult',
      category: 'Secundário',
      role: `Treinadora de Ashling na Cidade Celestial`,
      factions: ['Cidade Celestial'],
      books: [1, 2],
      bio: [
        `Guardiã responsável pelo treinamento intensivo de Ashling após a chegada à Cidade Celestial. Rígida, exigente, não facilita nada — cobra disciplina e foco constantes.`,
        `Percebe quando Ashling está distraída ou emocionalmente desconectada do treino. Permanece a maior autoridade viva em conjuração conhecida por Ashling — reinserida no Livro 2 como memória de treino durante a batalha ("vínculo instável se acalma com repetição consciente, não com força bruta") e como destinatária de uma carta após o despertar de Hemera.`
      ],
      tags: ['Cidade Celestial', 'Mentora', 'Treinamento']
    },
    {
      id: 'vessa',
      name: 'Vessa',
      category: 'Secundário',
      role: `Conselheira · Mentora de guardiões celestiais`,
      factions: ['Cidade Celestial', 'Conselho de Guardiões'],
      books: [1],
      bio: [
        `Membro do Conselho que sugere o envio de Cassian a Duskhollow no lugar de Ashling. Treinou Cassian, referência de habilidade e perigo mesmo à distância.`,
        `Derrota e captura o General Draven em duelo, no desfiladeiro de Kelmoor (cap. 51 do Livro 1).`
      ],
      tags: ['Cidade Celestial', 'Guerreira', 'Conselho']
    },
    {
      id: 'cassian',
      name: 'Cassian',
      category: 'Secundário',
      role: `Guarda celestial · Enviado a Duskhollow`,
      factions: ['Cidade Celestial'],
      books: [1],
      bio: [
        `Enviado ao lado de Rowan pelo Conselho para investigar o sobrevivente Ashkari em Duskhollow, no lugar de Ashling. Treinado por Vessa; habilidoso, calculado, calmo mesmo sob ameaça.`,
        `Enfrenta e fere no antebraço a figura encapuzada que ataca a vila (cap. 41); vê brevemente a tatuagem do atacante — um círculo partido ao meio com chamas saindo da fenda. Assume o interrogatório do segundo invasor capturado (cap. 42).`
      ],
      tags: ['Cidade Celestial', 'Guarda']
    },
    {
      id: 'dain',
      name: 'Dain',
      category: 'Secundário',
      role: `Sobrevivente Ashkari · Ferreiro de Duskhollow`,
      factions: ['Ashkari'],
      books: [1, 2],
      age: `23 anos`,
      lineage: `Filho do general Ashkari Bren Corvane e de Elisabeth`,
      fera: `Fenrik, lobo cinzento (macho) — forma definida, fala muito pouco`,
      appearance: `Ferreiro de constituição pesada, braços e ombros de quem trabalha com martelo. Cabelo escuro curto e desalinhado. Olhos acinzentados com o mesmo brilho frio incomum de Ashling — marca Ashkari.`,
      bio: [
        `Criado desde bebê por Ines (ex-criada da casa de Bren) como se fosse filho biológico, disfarçado por vinte anos como ferreiro comum em Duskhollow. Bren sabia do filho e o confiou a Ines no massacre.`,
        `Aos 12 anos teve um episódio de quase afogamento que revelou, em retrospecto, um despertar latente do poder Ashkari. Descobre sua origem completa nos caps. 38-39 do Livro 1, através de Ines.`,
        `Cap. 41: durante um ataque à própria casa, seu poder desperta plenamente pela primeira vez sob trauma real — olhos tornam-se prateados, deixa a mãe adotiva protegida. Decide deixar Duskhollow rumo à Cidade Celestial.`,
        `Após a revelação, passa a chamar Ines por "Ines" (nome próprio), não "minha mãe", para não confundir com a mãe biológica.`,
        `Ouve o nome da mãe biológica, Elisabeth, pela primeira vez aos 23 anos, da boca de Aldric (Livro 2, cap. 23): "Eu sempre achei que a lacuna era acidente. Agora eu sei que teve uma pessoa que decidiu."`,
        `Formulação de worldbuilding (Cap.30 do Livro 2): "Então a perseguição nunca foi sobre conjuração. Foi sobre conjuração que não fosse deles."`
      ],
      tags: ['Ashkari', 'Ferreiro', 'Conjurador']
    },
    {
      id: 'ines',
      name: 'Ines',
      category: 'Secundário',
      role: `Mãe adotiva de Dain · Ex-criada da casa de Bren Corvane`,
      factions: ['Ashkari (aliada)'],
      books: [1, 2],
      bio: [
        `Serviu à casa do general Bren Corvane antes do massacre Ashkari; fugiu com Dain recém-nascido e o criou sozinha em Duskhollow, escondendo a origem dele por vinte anos.`,
        `Também serviu na corte, próxima à rainha Selwyn (dama de companhia), antes do massacre — e nunca contou isso a Dain. Gancho: por que escondeu? O que viu?`,
        `Reconhece (cap. 42 do Livro 1) o símbolo tatuado do atacante como pertencente a facções antigas dentro da própria coroa de Valdris. Decide acompanhar Dain à Cidade Celestial, encerrando vinte anos de disfarce.`,
        `Livro 2 (Cap.19): recebe duas cartas de Dain pedindo informação sobre a corte. Responde em três linhas evasivas, sem uma palavra sobre a corte — "Isso é uma resposta", diz Maeve.`
      ],
      tags: ['Ashkari (aliada)', 'Mãe adotiva']
    },
    {
      id: 'tobin',
      name: 'Tobin',
      category: 'Secundário',
      role: `Amigo de infância de Kael e Ashling`,
      factions: ['Protagonistas'],
      books: [1, 2],
      bio: [
        `Sem qualquer ligação com a traição de Renner Voss no cap. 3 do Livro 1. Acompanha Kael na busca por Ashling a partir do cap. 29, substituindo Renner em todas as cenas subsequentes.`,
        `Livro 2: está em Correnbrook com a coalizão. Luta na ala esquerda em Harrowgate e sai com a perna quebrada — por um cavalo já morto, o que considera humilhante. Seis semanas de cama; ofereceu-se duas vezes, de muletas, para ir com Kael atrás dos assassinos.`
      ],
      tags: ['Amigo de infância', 'Coalizão']
    },

    // ---------- ADICIONAIS ----------
    {
      id: 'bren-corvane',
      name: 'Bren Corvane',
      category: 'Adicional',
      role: `General Ashkari · Pai de Dain · Morto há 20 anos`,
      factions: ['Ashkari'],
      books: [2],
      status: `Morto (massacre há 20 anos) — só aparece em memória`,
      fera: `Lobo cinzento enorme, que chegava a assustar os próprios homens`,
      bio: [
        `Comandava a única unidade de conjuradores fora do controle da coroa — todos os veteranos que serviram sob ele têm criaturas próprias. Recusava ordens que considerava erradas, mesmo quando custava caro.`,
        `Massacrado por ordem de Selwyn há vinte anos — ato de desarmamento estratégico, não perseguição étnica: a coroa destruiu a única força conjurada organizada fora do seu controle.`,
        `Aparece apenas em memória, nas falas de Halric e Aldric.`
      ],
      tags: ['Ashkari', 'Falecido', 'Memória']
    },
    {
      id: 'elisabeth',
      name: 'Elisabeth',
      category: 'Adicional',
      role: `Mãe biológica de Dain · Morta no parto`,
      factions: ['Ashkari'],
      books: [2],
      status: `Morta (parto de Dain) — só aparece em memória`,
      bio: [
        `Esposa de Bren Corvane. Ficava na retaguarda com os feridos; costurava melhor que o cirurgião e sabia disso. Brigava com Bren em público — coisa que mais ninguém tinha coragem de fazer — e ele adorava.`,
        `Dain ouve o nome dela pela primeira vez aos 23 anos, da boca de Aldric (Livro 2, cap. 23).`
      ],
      tags: ['Ashkari', 'Falecida', 'Memória']
    },
    {
      id: 'halric',
      name: 'Halric',
      category: 'Adicional',
      role: `Veterano da unidade de Bren Corvane`,
      factions: ['Ashkari (aliado)'],
      books: [2],
      bio: [
        `Primeiro veterano que Dain encontra. Parou de ser soldado no dia em que Bren Corvane morreu. Confirma a existência da unidade e o orgulho que Bren tinha do filho pequeno.`,
        `Marca de tom: examina o rosto de Dain "como quem confere uma conta que nunca fechou".`
      ],
      tags: ['Veterano', 'Livro 2']
    },
    {
      id: 'aldric',
      name: 'Aldric',
      category: 'Adicional',
      role: `Veterano idoso · Guarda a memória da casa de Bren`,
      factions: ['Ashkari (aliado)'],
      books: [2],
      bio: [
        `Reconhece em Fenrik o mesmo cinza do lobo de Bren. É quem revela a Dain o nome da mãe biológica, Elisabeth. Conhecia Ines antes de ela servir na casa de Bren.`,
        `Traço físico: idoso, anda de bengala, apoia as duas mãos nela ao falar. Rosto duro, voz que embarga sem aviso.`
      ],
      tags: ['Veterano', 'Livro 2']
    },
    {
      id: 'cedric',
      name: 'Cedric',
      category: 'Adicional',
      role: `Veterano · Voz de liderança entre os homens de Dain`,
      factions: ['Ashkari (aliado)'],
      books: [2],
      bio: [
        `Robusto, prático, pensa em estrutura de comando e posições de retirada. Traz contatos e rumores antigos sobre conjuradores a serviço secreto da coroa.`,
        `Marca de tom: leva um corte de Maeve na primeira reunião e tem o bom senso de fechar a boca.`
      ],
      tags: ['Veterano', 'Livro 2']
    },
    {
      id: 'garrick',
      name: 'Garrick',
      category: 'Adicional',
      role: `Homem de confiança de Theon`,
      factions: ['Coroa de Valdris'],
      books: [2],
      bio: [
        `Conselheiro e única pessoa a quem Theon nunca mentira — até negar o calor na encosta (cap. 24), quando os dois percebem a mentira ao mesmo tempo.`,
        `Marca de tom: oferece honestidade crua em vez de conforto falso. Promete apoiar o que Theon decidir, seja o que for.`
      ],
      tags: ['Coroa', 'Livro 2']
    },
    {
      id: 'tomas',
      name: 'Tomas',
      category: 'Adicional',
      role: `Morador de Rivermoor · Guardião das cartas de Elowen`,
      factions: ['Rivermoor'],
      books: [2],
      bio: [
        `Vive no vilarejo reconstruído. Guardou por quinze anos as cartas que Elowen escreveu ao rei e as entrega a Ashling — é ali que ela descobre o parentesco com Theon.`
      ],
      tags: ['Rivermoor', 'Livro 2']
    },
    {
      id: 'sorcha',
      name: 'Sorcha',
      category: 'Adicional',
      role: `Comandante Fenn · Linha de frente`,
      factions: ['Fenn'],
      books: [2],
      bio: [
        `Uma dos três substitutos permanentes de Kael no comando de treinamento (Livro 2, cap. 32). Segundo Kael, "é melhor que eu com a linha de frente e todo mundo sabe, menos ela".`
      ],
      tags: ['Fenn', 'Comandante']
    },
    {
      id: 'bregan',
      name: 'Bregan',
      category: 'Adicional',
      role: `Comandante Fenn · Arqueiros`,
      factions: ['Fenn'],
      books: [1, 2],
      bio: [
        `Nomeado por Kael para comandar os arqueiros, primeiro em caráter temporário (cap. 19) e depois de forma permanente (cap. 32).`
      ],
      tags: ['Fenn', 'Comandante']
    },
    {
      id: 'halbrand',
      name: 'Halbrand',
      category: 'Adicional',
      role: `Comandante Fenn · Grupos novos`,
      factions: ['Fenn'],
      books: [2],
      bio: [
        `Responsável pela formação dos voluntários e recrutas recentes. Terceiro dos substitutos permanentes de Kael.`
      ],
      tags: ['Fenn', 'Comandante']
    },
    {
      id: 'renner-voss',
      name: 'Renner Voss',
      category: 'Adicional',
      role: `Traidor · Contato antigo de Ashling em Ravenscar`,
      factions: ['Submundo de Ravenscar'],
      books: [1],
      bio: [
        `Quinze anos de confiança com Ashling antes da traição do cap. 3 do Livro 1. Não reaparece no Livro 2.`
      ],
      tags: ['Traidor', 'Livro 1']
    },
    {
      id: 'reneth',
      name: 'Reneth',
      category: 'Adicional',
      role: `Batedor · Guia de Kael e Tobin`,
      factions: ['Fenn'],
      books: [1],
      bio: [
        `Guia Kael e Tobin até o avistamento do exército do Círculo de Cinzas (cap. 50 do Livro 1).`
      ],
      tags: ['Fenn', 'Batedor']
    }
  ],

  /* =========================================================
     FERAS / CRIATURAS INVOCADAS
     ========================================================= */
  creatures: [
    {
      id: 'nyx',
      name: 'Nyx',
      owner: 'Ashling',
      species: 'Pantera negra',
      gender: 'Macho',
      born: `Nascido na Torre Cinza, durante o Livro 1, da dor de Ashling — tem meses, não anos.`,
      description: `Primeiro demônio invocado por Ashling, sob tortura, à beira da morte. Fraco no início, cresce em poder e em definição conforme ela evolui emocionalmente. Tem personalidade própria e conversa com Ashling — leal a ela, o vínculo mais constante e incondicional que ela tem no início da jornada.`,
      power: `Regra das formas de Nyx (cânone cravado 2026-08-16): alterna entre forma sólida (pantera negra corpórea) e forma de sombra — e isso é um poder, não inconsistência. A forma sólida custa: Ashling sente uma tração constante atrás do esterno enquanto a sustenta; quando se esgota, Nyx desfaz-se em sombra sozinha. A forma de Nyx é um medidor visível do poder de Ashling. Regra estabelecida em cena no Cap.27 do Livro 2 e paga no Cap.29.`,
      quote: `"O seu igual ressurgiu."`
    },
    {
      id: 'hemera',
      name: 'Hemera',
      owner: 'Ashling',
      species: 'Pantera branca',
      gender: 'Fêmea',
      born: `Desperta durante a batalha de Harrowgate, no mesmo instante que Helios, em pontos opostos do campo.`,
      description: `Segunda fera de Ashling — pantera branca imponente, olhos claros como gelo. Presença cálida, oposta à frieza sombria de Nyx. Ashling é a única pessoa capaz de vincular duas feras, por carregar as duas linhagens altas.`,
      power: `Nyx e Hemera podem unir forças em momentos de poder máximo.`
    },
    {
      id: 'helios',
      name: 'Helios',
      owner: 'Theon',
      species: 'Leopardo dourado',
      gender: 'Macho',
      born: `Desperta ao lado de Theon diante de dois exércitos, no mesmo instante que Hemera.`,
      description: `Pelagem dourada capturando cada raio de sol, rosetas escuras espalhadas como constelações. Voz grave e quente, com autoridade. Fala pouco e sem gentileza.`,
      power: `Dom de Theon é CALOR, não sombra — linhagem real de Valdris, sem marca Ashkari. Manifestações pequenas e sempre negáveis antes do despertar: calor seco abaixo do esterno, metal esquentando ao toque, ausência de sensação de frio. Gatilho: proximidade de Ashling.`,
      quote: `"Você sabe. Sabe desde que era menino. Só nunca perguntou a ninguém em voz alta."`
    },
    {
      id: 'fenrik',
      name: 'Fenrik',
      owner: 'Dain',
      species: 'Lobo cinzento',
      gender: 'Macho',
      born: `Desperta na estrada, quando Dain retorna com os veteranos (Livro 2, cap. 23).`,
      description: `Grande demais para ser lobo — cernelha na altura do peito de Dain, pelo cinza fosco de pedra molhada, denso como se cada fio tivesse peso próprio. Não se derrama como Nyx — firma-se. Fala apenas duas vezes no Livro 2.`,
      power: `Diferença essencial em relação a Nyx: Nyx é sombra fluida; Fenrik tem corpo reconhecível e silhueta clara, e fala muito pouco — frases curtas e raras, o oposto da conversa constante de Nyx.`,
      quote: `"Você é como ele descreveu. Forte. Como o pai dele." (Cap.26, manhã da batalha)`
    },
    {
      id: 'kova',
      name: 'Kova',
      owner: 'Rowan',
      species: 'Urso branco',
      gender: 'Macho',
      born: `Com Rowan desde os doze anos.`,
      description: `Montaria de combate. Referência de escala: Ashling passou meses achando que Kova fosse o limite superior do que uma fera podia ser, até ver as duzentas feras dos veteranos de Bren.`,
      power: `Marca de tom: resfolega devagar antes da batalha, como se fosse mais um dia comprido de trabalho. Posiciona-se sozinho entre Ashling e a borda da encosta.`
    }
  ],

  /* =========================================================
     SISTEMA DE MAGIA — INVOCAÇÃO
     ========================================================= */
  magic: {
    intro: `Os conjuradores invocam demônios vindos de A Fenda, um plano paralelo — não espíritos, não criaturas de "outro plano genérico". Os demônios têm personalidade própria, memórias e, em alguns casos, agendas ocultas.`,
    rules: [
      { title: `Origem dos demônios`, text: `A Fenda.` },
      { title: `Regra central`, text: `Só quem carrega sangue de uma linhagem conjuradora reconhecida pode invocar.` },
      { title: `Força do vínculo`, text: `Determinada pela linhagem de sangue — quanto mais antiga e pura a linhagem, mais poderosos os demônios que podem ser invocados.` },
      { title: `Manifestação e custo`, text: `Uma vez formado o vínculo, o demônio pode permanecer manifestado por longos períodos (viagens, combates, convivência diária) sem drenar o conjurador — não é um feitiço sustentado por vontade contínua, e sim uma presença ligada ao vínculo em si. O gasto de energia real só aparece em feitos avançados que vão além da manifestação comum, como a projeção de percepção de Ashling através de Nyx sob orientação de Yseult (cap. 30 do Livro 1).` },
      { title: `Caso de Ashling`, text: `Poder desperta sob trauma extremo, sem treino prévio — por isso começa fraco (Nyx) e cresce com o tempo, à medida que ela também evolui emocionalmente.` },
      { title: `Tema central do sistema`, text: `O poder de Ashling está ligado não só a treino técnico, mas à sua relação com a própria identidade — quanto mais ela se reconecta com quem é (aceita o passado, a dor, a herança Ashkari), mais forte se torna.` }
    ],
    hierarchy: [
      { title: `Linhagem alta`, text: `Ashling e Dain — sangue nobre e antigo, carrega a marca dos olhos, dom muito mais forte.` },
      { title: `Conjuradores comuns`, text: `Veteranos de Bren, alguns Fenn, conjuradores da coroa — têm dom e criaturas, mas sem sangue alto: poder menor, feras menores, sem a marca dos olhos. São soldados que conjuram, não herdeiros de linhagem.` },
      { title: `Duas linhagens altas`, text: `(A) Ashkari — Elowen, Bren Corvane, Dain — carrega a marca dos olhos. (B) Linhagem real da coroa de Valdris — o falecido rei, e por herança, Theon — sangue alto distinto, sem a marca Ashkari.` },
      { title: `Por que Ashling é a mais forte`, text: `É a única pessoa a carregar as DUAS linhagens altas simultaneamente (Thornecrest + Ashkari) — o que explica estruturalmente por que supera até Dain. Theon carrega só a linhagem B: formidável, adversário à altura, mas nunca a iguala.` },
      { title: `A marca dos olhos Ashkari`, text: `Olho acinzentado / azul muito claro quase cinza, em estado normal, é a marca do sangue Ashkari. Olho PRATEADO BRILHANTE é estado momentâneo de poder desperto em ação, não linhagem. Rei e Theon podem ter olhos claros, mas de outro tipo — nunca a marca.` },
      { title: `Hipocrisia da perseguição`, text: `A coroa tem conjuradores próprios, treinados em segredo. O que ela combate não é o dom — é o dom que ela não controla. A unidade de Bren Corvane era uma unidade inteira de conjuradores; o massacre de vinte anos atrás foi um ato estratégico de desarmamento, não apenas perseguição étnica.` }
    ]
  },

  /* =========================================================
     GENEALOGIA / CASAS
     ========================================================= */
  houses: [
    {
      id: 'thornecrest',
      name: 'Casa Thornecrest',
      text: `Linhagem real do rei falecido, pai de Ashling e Theon.`
    },
    {
      id: 'ceridwen',
      name: 'Casa Ceridwen',
      text: `Linhagem da Rainha Selwyn, nobre, reconhecida, porém mais fraca que a Ashkari.`
    },
    {
      id: 'ashkari',
      name: 'Ashkari',
      text: `Linhagem da mãe de Ashling (Elowen), a mais antiga e forte de todas — dada como extinta após a rebelião de outros povos que tomou o poder. Última rainha reconhecida: Isolde (avó de Ashling), morta no massacre ao esconder a filha bebê Elowen antes que os soldados chegassem.`
    }
  ],
  genealogyNotes: [
    `Ashling: Thornecrest + Ashkari → combinação rara, sangue mais forte que existe.`,
    `Theon: Thornecrest + Ceridwen → poderoso e treinado, porém geneticamente mais fraco que a irmã que nem sabe que existe.`,
    `O rei não tem relação de sangue com os Ashkari — sua linhagem (Thornecrest) é totalmente separada, reforçando que existem várias linhagens conjuradoras distintas no mundo, sendo a Ashkari apenas a mais antiga e poderosa de todas.`,
    `O rei não sabia que Ashling existia. Elowen sabia das duas linhagens altas que a filha carregaria.`
  ],

  /* =========================================================
     POVOS E REINO
     ========================================================= */
  peoples: [
    {
      id: 'valdris',
      name: 'Reino de Valdris',
      text: `Reino atual, governado pela Casa Thornecrest. Foi responsável, gerações atrás, por subjugar os Ashkari junto a outros povos rebeldes.`
    },
    {
      id: 'povo-ashkari',
      name: 'Povo Ashkari',
      text: `Povo originário, antigos donos das terras que hoje formam Valdris. Quase exterminados numa rebelião de outros povos que buscavam tomar o poder. Linhagem conjuradora mais antiga e forte que existe, hoje considerada extinta.`
    },
    {
      id: 'povo-fenn',
      name: 'Povo Fenn',
      text: `Povo da floresta, de cultura própria e conexão profunda com a natureza. Recebe Ashling após o resgate por Rowan; é onde ela aprende a controlar e desenvolver seu poder de invocação. São um povo de GUERREIROS, não fazendeiros ou caçadores — batedores, escoltas, emboscam patrulhas. O desprezo de Selwyn e inimigos ("camponeses armados com foices") é subestimação arrogante deliberada.`
    }
  ],

  /* =========================================================
     LUGARES
     ========================================================= */
  places: [
    {
      id: 'ravenscar',
      name: 'Ravenscar',
      region: 'Valdris — capital',
      text: `Capital de Valdris, sede da Casa Thornecrest e do trono. Cidade murada, coração político do reino — abriga o castelo real, o conselho, a corte e a vida noturna do submundo onde Ashling opera como assassina antes da queda. É onde ela é incriminada, caçada e, por fim, capturada.`
    },
    {
      id: 'rivermoor',
      name: 'Rivermoor',
      region: 'Valdris — vilarejo',
      text: `Pequeno vilarejo onde Elowen se escondeu para criar Ashling longe da corte e da própria origem Ashkari. Foi arrasado numa invasão de soldados quando Ashling era criança — o massacre que mata Elowen e força Ashling a fugir sozinha pelo rio que dá nome ao lugar. Hoje reconstruído, mas nunca inteiro.`
    },
    {
      id: 'emberfen',
      name: 'Bosque de Emberfen',
      region: 'Território Fenn',
      text: `Território florestal do povo Fenn, fora do alcance direto do controle de Valdris. Natureza densa, comunidade organizada em torno da liderança de Maeve. É onde Rowan leva Ashling após resgatá-la desmaiada, e onde ela passa a maior parte do Ato 2 do Livro 1 se recuperando, aprendendo a controlar a invocação e se reconectando com a própria humanidade.`
    },
    {
      id: 'torre-cinza',
      name: 'Torre Cinza',
      region: 'Ravenscar — castelo real',
      text: `Masmorra dentro do próprio castelo de Ravenscar, usada para prisioneiros de interesse da coroa. É onde Ashling é levada após a captura e onde sofre a tortura comandada pelo General Draven — sem que ninguém saiba que ela está sendo torturada sob o teto do próprio pai. Local do primeiro despertar de seu poder e da invocação de Nyx.`
    },
    {
      id: 'cidade-celestial',
      name: 'Cidade Celestial',
      region: 'Além do desfiladeiro de Kelmoor',
      text: `Cidade escondida num vale entre picos nas montanhas, distante das rotas comerciais, protegida por passagens que só quem já esteve lá consegue encontrar de novo — a própria cidade "escolhe" quem consegue chegar até ela. Torres brancas e douradas em espirais suaves, pontes que desafiam a lógica da construção, jardins entalhados na rocha. Abriga os sábios mais antigos que restam no mundo, guardiões de conhecimento de povos esquecidos — os Ashkari entre eles. Destino escolhido por Ashling, a conselho de Maeve, para buscar respostas sobre a própria origem.`
    },
    {
      id: 'duskhollow',
      name: 'Duskhollow',
      region: 'Fronteira',
      text: `Vila pequena de fronteira onde Dain vive disfarçado como ferreiro comum por vinte anos, protegido por Ines. Palco do ataque duplo do Círculo de Cinzas (caps. 40-41 do Livro 1) que revela plenamente o poder de Dain.`
    },
    {
      id: 'kelmoor',
      name: 'Desfiladeiro de Kelmoor',
      region: 'Rota para a Cidade Celestial',
      text: `Trilha marcada por pedras empilhadas em três, travessia que aproxima Ashling e Rowan. Palco da Batalha do Desfiladeiro de Kelmoor (cap. 51 do Livro 1): o Círculo de Cinzas ataca a Cidade Celestial em força (~300-400 soldados) comandado pessoalmente pelo General Draven. Derrotado em duelo por Vessa e capturado.`
    },
    {
      id: 'correnbrook',
      name: 'Correnbrook',
      region: 'Coalizão — Livro 2',
      text: `Vilarejo que se torna acampamento e sede da coalizão entre Cidade Celestial, Fenn e veteranos de Bren no Livro 2. Rowan fica no comando de Correnbrook, ao lado de Ilyandor, durante a viagem de Ashling e Kael a Rivermoor.`
    },
    {
      id: 'harrowgate',
      name: 'Desfiladeiro de Harrowgate',
      region: 'Fronteiras de Valdris — Livro 2',
      text: `Terreno escolhido por Maeve para a batalha decisiva do meio do Livro 2 (caps. 26-29), justamente porque na garganta de pedra a superioridade numérica de Valdris vale metade. Rota de retirada: trilhas de pastor a norte-nordeste. Perdas: 117 mortos, 79 deles Fenn — desequilíbrio que vira conflito político em aberto. É também onde Hemera e Helios despertam, em pontos opostos do campo.`
    }
  ],

  /* =========================================================
     LINHA DO TEMPO
     ========================================================= */
  timelineHookBook1: [
    `Ashling vive como assassina de sombras, sobrevivendo em Valdris.`,
    `Um contrato dá errado, ou alguém importante da corte é assassinado — e a culpa cai sobre ela.`,
    `Ela é caçada, capturada e torturada por ordem da coroa (Draven à frente).`,
    `À beira da morte: seus olhos mudam de cor e ela invoca seu primeiro demônio, Nyx — fraco, mas suficiente para escapar.`,
    `Foragida, carrega agora um segredo dentro do corpo que não compreende.`,
    `Desmaia na floresta e é encontrada por Rowan, que a leva para o povo Fenn.`,
    `Passa a treinar com Rowan, crescendo em poder e reconectando-se aos poucos com a própria história.`,
    `Fecho do livro 1: revelação parcial sobre sua origem e/ou primeiro contato indireto com Theon — sem que ela saiba, ainda, que ele é seu irmão.`
  ],
  chronology: [
    { event: `Extermínio Ashkari geral`, when: `Por ordem do avô de Theon, antes de Theon nascer.` },
    { event: `Elowen desaparece grávida da corte`, when: `Há 20 anos.` },
    { event: `Ashling nasce`, when: `Há ~20 anos.` },
    { event: `Massacre da unidade de conjuradores de Bren Corvane`, when: `Há 20 anos, por ordem de Selwyn (Dain tinha 3 anos; hoje tem 23).` },
    { event: `Rivermoor arrasada`, when: `Há 15 anos, por ordem de Selwyn, executada por Draven — Ashling tinha 5 anos; hoje tem ~20.` },
    { event: `São três eventos distintos`, when: `Auditoria 2026-08-16 — o texto agora diz isso explicitamente na fala de Selwyn no Cap.1 do Livro 2.` }
  ],

  /* =========================================================
     OUTLINE — LIVRO 1 (3 atos, 52 capítulos)
     ========================================================= */
  book1Outline: [
    {
      act: `Ato 1 — A Queda`,
      range: `caps. 1–8`,
      chapters: [
        `Ashling em ação num contrato — estabelece seu jeito de trabalhar, frieza, o coque, cicatrizes entrevistas.`,
        `Vida entre trabalhos — introduz Kael, a organização, a cumplicidade e o passado dos dois.`,
        `Novo contrato aceito — sementes do que vai dar errado; vislumbre distante de Theon/corte.`,
        `O assassinato que não foi dela — alguém importante morre, evidências plantadas por Draven.`,
        `A caçada começa — ela percebe que está marcada, tenta fugir de Ravenscar.`,
        `Traição ou cerco — ela é capturada.`,
        `Cárcere na Torre Cinza e tortura — aprofunda o trauma, paralelos com a infância.`,
        `O despertar — olhos mudam de cor, Nyx é invocado, fuga caótica.`
      ]
    },
    {
      act: `Ato 2 — A Refeita`,
      range: `caps. 9–20`,
      chapters: [
        `Fuga pela floresta, ferimentos, colapso.`,
        `Rowan a encontra e a leva para o Bosque de Emberfen.`,
        `Desconfiança inicial dos Fenn / recepção de Maeve.`,
        `Primeiros dias entre os Fenn — contraste cultural, dificuldade dela em confiar.`,
        `Rowan começa a treiná-la — duro, choque de personalidades.`,
        `Ela aprende mais sobre invocação — Nyx começa a "falar" mais, ganhar forma.`,
        `Flashback/revelação parcial — memória mais clara de Elowen, o colar ganha destaque.`,
        `Vínculo crescente com Rowan — amizade virando algo mais.`,
        `Notícias de Valdris chegam ao Bosque — menção ao "rei conjurador" (Theon).`,
        `Primeiro combate real lutando em conjunto com Nyx contra Rowan e Kova; ela vence.`,
        `Tensão interna — pesadelo recorrente da noite de Rivermoor; conversa noturna com Rowan.`,
        `Algo ameaça a paz do Bosque — patrulha de Valdris avistada; Maeve determina cautela.`
      ]
    },
    {
      act: `Ato 3 — A Virada`,
      range: `caps. 21–52 (expandido além da estimativa original de ~28)`,
      chapters: [
        `Ela decide agir — Maeve revela a Cidade Celestial; a viagem começa a ser planejada.`,
        `Jornada pelas montanhas — primeiro perigo real do caminho.`,
        `Travessia do desfiladeiro de Kelmoor; Ashling e Rowan assumem o que sentem um pelo outro.`,
        `Chegada à Cidade Celestial — recepção por Ilyandor, que confirma a linhagem Ashkari.`,
        `Ilyandor revela o nome da avó, rainha Isolde, e a existência de outro possível sobrevivente Ashkari.`,
        `Ilyandor explica a natureza mais profunda da invocação Ashkari.`,
        `(POV do Conselho) Perrin quer acelerar a restauração; Sorel pede cautela.`,
        `Ashling e Rowan vasculham os arquivos — encontram o nome general Ashkari Bren Corvane.`,
        `29. Reencontro com Kael — tensão, ciúme, ele revela ter sido comprado por Draven.`,
        `30. Confronto ou quase-confronto com forças de Draven.`,
        `31. Contato indireto com Theon — sem saber que é irmão.`,
        `32. Selwyn e Draven percebem que a ameaça é maior do que pensavam.`,
        `33. Fechamento — ela aceita, em parte, quem é; gancho para o Livro 2.`,
        `34-37. Despedida de Rowan e Ashling; treino intensivo com Yseult; jornada de Kael e Tobin até as terras Fenn.`,
        `38-39. Rowan e Cassian chegam a Duskhollow; primeiro contato com Dain; Ines revela a história completa.`,
        `40-41. Ataque duplo à noite; despertar pleno do poder de Dain protegendo a mãe.`,
        `42-43. Interrogatório do invasor capturado; Dain e Ines decidem partir para a Cidade Celestial.`,
        `44. Chegada de Dain e Ines à Cidade Celestial; primeiro encontro entre Ashling e Dain.`,
        `45. Conselho ouve o relato de Dain; nome "Círculo de Cinzas" surge pela primeira vez.`,
        `46. Kael prova lealdade a Maeve numa escolta perigosa às terras Fenn.`,
        `47. Guerra na fronteira confirmada; Perrin defende o plano de união entre Ashling e Dain.`,
        `48. Treino conjunto de Ashling e Dain revela sincronia rara entre Nyx e a fera ainda inominada de Dain.`,
        `49. Ashling e Dain descobrem o plano de Perrin; Conselho encerra formalmente a proposta.`,
        `50. Kael e Tobin avistam o exército do Círculo de Cinzas rumo a Kelmoor.`,
        `51. Batalha do desfiladeiro de Kelmoor: revelação de que Draven lidera o Círculo de Cinzas; Vessa o derrota e captura.`,
        `52. FECHAMENTO DO LIVRO 1: rescaldo da batalha; Conselho reconhece Ashling e Dain como membros plenos; gancho final — Selwyn recebe o relatório da derrota e decide contar a Theon sobre a meia-irmã.`
      ]
    }
  ],

  /* =========================================================
     OUTLINE — LIVRO 2 (4 atos, ~60-65 capítulos, em progresso)
     ========================================================= */
  book2Outline: {
    summary: `Rearranjo pós-Livro 1. Selwyn revela Ashling a Theon logo no Cap.1. A guerra escala contra povoados menores, uma coalizão entre Cidade Celestial, Fenn e veteranos de Bren se forma, e os triângulos amorosos (Ashling/Rowan/Kael, o despertar de Theon) avançam em paralelo à queda lenta da máscara de Selwyn.`,
    acts: [
      {
        act: `Ato 1 — Rearranjo`,
        range: `caps. 1–15`,
        text: `Selwyn revela Ashling a Theon (cap. 1, já escrito). Guerra escala contra povoados menores. Kael se estabelece como guerreiro na Cidade Celestial, tensão nova com Rowan nasce aqui. Dain é investigado como irmão adotivo de Ashling, puxa fio próprio sobre aliados de Bren Corvane.`
      },
      {
        act: `Ato 2 — O Custo`,
        range: `caps. 16–35`,
        text: `Ashling lidera defesas de povoados, vê o custo humano da guerra como líder. Triângulo Ashling/Rowan/Kael se intensifica. Theon em campanha sob ordens da mãe, quase-encontro com Ashling sem reconhecimento. Revisita a Rivermoor traz novas informações sobre Elowen e o rei. Ponto médio com uma baixa pessoal pesada.`
      },
      {
        act: `Ato 3 — A Virada`,
        range: `caps. 36–50`,
        text: `Confronto do triângulo amoroso. Ponto de virada: Selwyn precisa decidir o destino de Draven capturado (resgatar, silenciar ou sacrificar publicamente). Rachaduras na fé de Theon na narrativa da mãe se aprofundam. Revelação mais completa da origem de Ashling chega até ela.`
      },
      {
        act: `Ato 4 — Confronto`,
        range: `caps. 51–65`,
        text: `Confronto direto entre Ashling e Theon, reconhecimento mútuo. Theon dividido entre Selwyn e a própria consciência, sem resolução total (gancho pro Livro 3). Resolução parcial do triângulo amoroso. Gancho final pro Livro 3.`
      }
    ],
    chapterNotes: [
      { num: 1, note: `Selwyn revela a Theon a existência de Ashling e explica como sabe (a carta interceptada de Elowen, a suspeita antiga cruzada com os relatórios de Draven).` },
      { num: 3, note: `Rowan expressa o medo de definir o que ele e Ashling são: "sem saber o que a gente é pra eu poder chamar de meu."` },
      { num: 9, note: `Quase-"eu te amo" entre Ashling e Rowan (fica no caminho até a ruptura — não precisa ser reescrito).` },
      { num: 14, note: `Reconciliação Ashling/Rowan. Kael pede para descobrir quem é além de apaixonado por ela — semeia a missão de recrutamento.` },
      { num: 17, note: `Quase-encontro na praça entre Ashling e Theon — gatilho do despertar de Theon (calor, ar denso, zumbido) e de Nyx dizendo "O seu igual ressurgiu" a Ashling.` },
      { num: 19, note: `Estrutura de comando da coalizão definida (Ilyandor, Ashling, Maeve). Kael nomeia comandantes temporários. Gancho de Ines: cartas evasivas de Dain sobre a corte.` },
      { num: '19–22', note: `Viagem a Rivermoor — só Ashling e Kael, sem Rowan. Ela vai para descobrir, não por certeza prévia, quem ordenou o ataque.` },
      { num: 20, note: `Ashling lê as cartas de Elowen guardadas por Tomas — descobre o parentesco com Theon.` },
      { num: 23, note: `Chegada dos veteranos de Bren; Fenrik desperta e diz seu nome. Dain ouve o nome de Elisabeth pela primeira vez, de Aldric.` },
      { num: 24, note: `Theon assina a interdição da estrada baixa. Escreve a carta contando a Selwyn sobre o calor que sente perto de Ashling.` },
      { num: 25, note: `Véspera de Harrowgate: Ashling assume o erro de não consultar Rowan sobre a viagem a Rivermoor; Rowan recusa "a pergunta". Kael recusa prometer que segurará a ala esquerda.` },
      { num: '26–29', note: `Batalha do Desfiladeiro de Harrowgate. Hemera e Helios despertam em pontos opostos do campo. 117 mortos, 79 Fenn.` },
      { num: 27, note: `Regra das formas de Nyx estabelecida em cena (paga no Cap.29).` },
      { num: 30, note: `Reenquadramento do sistema de magia: o dom de Theon vem do rei, não de Elowen — "a perseguição nunca foi sobre conjuração, foi sobre conjuração que não fosse deles."` },
      { num: 31, note: `Theon volta derrotado; Selwyn já tem instrutores da coroa no castelo. Pergunta reveladora: "A que distância você estava dela?"` },
      { num: 32, note: `Kael parte para recrutar antigos assassinos; deixa Bregan, Sorcha e Halbrand como substitutos permanentes. Despedida: "Eu volto, Ash."` },
      { num: 33, note: `Marca sete semanas de ausência de Kael. Escrito até aqui (16/08/2026).` },
      { num: '~40', note: `Retorno planejado de Kael — com a guerreira que desperta o ciúme de Ashling.` }
    ]
  },

  /* =========================================================
     CÂNONE CRAVADO — decisões fechadas de worldbuilding/enredo
     ========================================================= */
  canon: [
    { topic: `Círculo de Cinzas`, date: `2026-08-09`, text: `Composto por extremistas dentro da guarda real/coroa de Valdris, leais a Draven, com objetivo de exterminar os Ashkari. Nunca é o alvo de busca das próprias tropas de Valdris. O pretexto oficial das invasões a vilarejos Fenn é a busca por "ameaça Ashkari", não pelo Círculo de Cinzas — o termo só é usado internamente pelos próprios vilões.` },
    { topic: `Ines não é mãe biológica de Dain`, date: `2026-08-09`, text: `Ines era criada da casa de Bren Corvane. Dain é filho de Bren com Elisabeth (morta no parto). Bren sabia do filho e o confiou a Ines no massacre. Após a revelação do Cap.7, Dain passa a chamá-la de "Ines", não "minha mãe". Halric sabia do filho — a cena de revelação é reencontro/luto se desfazendo, não descoberta de segredo.` },
    { topic: `Marca dos olhos Ashkari`, date: `2026-08-09`, text: `Qualidade própria (tom/brilho específico) que denuncia a linhagem antiga Ashkari, distinta de "olhos claros" comuns. Rei e Theon podem ter olhos claros, mas NUNCA descritos como marca Ashkari. Dain herda a marca do pai (Bren, Ashkari), não de Ines.` },
    { topic: `Duas linhagens altas de conjuração`, date: `2026-08-09`, text: `(A) Ashkari (Elowen, Bren Corvane, Dain) — carrega a marca dos olhos. (B) Linhagem real de Valdris (o rei, e por herança, Theon) — sangue alto distinto, sem marca Ashkari. Ashling é a única a carregar as duas simultaneamente.` },
    { topic: `Selwyn não é conjuradora`, date: `2026-08-09`, text: `Não tem dom, fera, nem sangue alto — raiz psicológica da perseguição aos conjuradores. Selwyn sabe, desde sempre, que Ashling carrega as duas linhagens altas — motivo real por trás de tudo. Deve permanecer oculto do leitor até revelação futura.` },
    { topic: `Misdirection Selwyn x Theon`, date: `2026-08-09`, text: `Selwyn é a vilã real, mas a suspeita do grupo e do leitor deve recair sobre Theon (rosto público/ativo da coroa em campo) ao longo do Livro 2. Evitar colocar Selwyn em evidência; a revelação deve ser uma reviravolta genuína.` },
    { topic: `Despertar de poder em Theon`, date: `2026-08-09`, text: `Arco em 4 etapas: encontro com Ashling na praça (Cap.17) como gatilho; ele conta a Selwyn; é treinado por gente da coroa; culminância em confronto direto contra Ashling.` },
    { topic: `Arco de Dain`, date: `2026-08-09`, text: `Desperta de vez durante a viagem de recrutamento (Caps.15-18). Ganha fera com FORMA DEFINIDA (Fenrik), ao contrário da sombra fluida de Nyx. A unidade de Bren Corvane era uma unidade de conjuradores — cada veterano tem fera própria.` },
    { topic: `Arco de Kael`, date: `2026-08-09`, text: `Muda fisicamente ao longo do Livro 2 (barba, corpo mais forte — referência: Bjorn Ironside, de Vikings). Missão própria: recrutar antigos assassinos. Traz de volta uma guerreira com quem se envolve — Ashling vê o beijo e sente ciúme revelador que não entende.` },
    { topic: `Kael desobedece Ashling para salvar a vida dela`, date: `2026-08-09`, text: `Referência: dinâmica Damon/Elena, The Vampire Diaries. Quando ela dá uma ordem que a coloca em risco, Kael a desobedece e a tira de lá, sem se desculpar. Contraste: Rowan iria junto (respeita a escolha dela); Kael a impede (escolhe a vida dela acima da vontade dela).` },
    { topic: `Kael não é "irmão"`, date: `2026-08-09`, text: `Ashling não deve enquadrar Kael como irmão/família de forma conclusiva — mataria a tensão. O que ela sente por ele é ambíguo, não catalogado.` },
    { topic: `Viagem a Rivermoor`, date: `2026-08-09`, text: `Caps.19-22 do Livro 2 são só de Ashling e Kael, sem Rowan. Rowan fica no comando de Correnbrook com Ilyandor. Ashling vai para descobrir, motivada por suspeita, não por certeza prévia.` },
    { topic: `Dom de conjuração não é exclusivo de Ashling`, date: `2026-08-09`, text: `Existem conjuradores comuns dispersos, mais fracos, sem sangue alto. Ashling continua sendo "a última Ashkari" (linhagem específica), mas não a única com o dom em geral. A guerra se decide mais pela força conjurada dos dois lados do que por número de espadas.` },
    { topic: `Nome da mãe biológica de Dain`, date: `2026-08-09`, text: `Elisabeth — esposa de Bren Corvane, morta no parto de Dain. Cena de revelação no Cap.23 do Livro 2.` },
    { topic: `Desfecho do triângulo amoroso`, date: `2026-08-09`, text: `Ashling fica com KAEL no final da saga, não com Rowan. Decisão definitiva. As cenas já escritas de Ashling/Rowan (quase-"eu te amo" do Cap.9, reconciliação do Cap.14, etc.) permanecem como estão — "quase certo, mas não era o certo". Kael nunca deve ser enquadrado como irmão.` },
    { topic: `Mecânica da ruptura com Rowan`, date: `2026-08-09`, text: `Sequência: (1) a guerreira que Kael traz desperta ciúme real em Ashling; (2) o ciúme revela que ela está se apaixonando por Kael; (3) Ashling e Kael se envolvem enquanto ela ainda está com Rowan; (4) Ashling termina com Rowan por consciência/integridade, não para ficar com Kael declaradamente; (5) só depois o caminho para o desfecho com Kael se abre. Ela deve carregar culpa genuína.` },
    { topic: `Os olhos — esclarecimento`, date: `Revisão Livro 2, caps. 1–19`, text: `A prova de que Ashling é filha do rei NÃO vem dos olhos: vem da carta interceptada, da gravidez de Elowen, da idade e do destino da fuga, que Selwyn guardava há duas décadas. Os olhos provam a mãe; o segredo antigo prova o pai.` },
    { topic: `Theon é príncipe herdeiro`, date: `Revisão Livro 2`, text: `Não é rei — Selwyn é quem reina. Theon lidera campanhas militares pessoalmente por ordem dela, o que o torna o rosto visível da guerra.` },
    { topic: `Fenn são guerreiros`, date: `Revisão Livro 2`, text: `Não fazendeiros ou caçadores. Batedores, escoltas, emboscam patrulhas. O que Kael treina são guerreiros já acostumados a lutar em pequenos grupos, convertidos em força coordenada para batalha aberta.` },
    { topic: `Regra das formas de Nyx`, date: `2026-08-16`, text: `Nyx alterna entre forma sólida (pantera negra corpórea, que custa uma tração constante atrás do esterno de Ashling) e forma de sombra (modo econômico). Antes era Nyx quem escolhia virar sombra; agora é Ashling quem sustenta. A forma de Nyx é um medidor visível do poder dela — reconcilia retroativamente todas as descrições de Nyx como "sombra fluida" nos Livros 1 e 2.` },
    { topic: `Origem e crescimento de Nyx`, date: `2026-08-16`, text: `Nasceu na Torre Cinza, durante o Livro 1, da dor de Ashling — tem meses, não anos. Cresceu junto com ela em clareza e definição, não apenas em poder bruto. A DEFINIÇÃO veio da cura dela; a ALTERNÂNCIA entre sólido e sombra é economia de esforço — as duas coisas convivem.` },
    { topic: `Feras de Dain e Bren`, date: `2026-08-16`, text: `Ambos têm/tinham LOBO como fera. A fera de Dain (Fenrik) fala muito pouco — contraste direto com Nyx, que conversa e ensina.` },
    { topic: `Nyx é macho`, date: `2026-08-16`, text: `Concordância masculina obrigatória em todos os livros. Hemera, a segunda fera de Ashling, é FÊMEA (pantera branca) — contraste de gênero intencional entre as duas.` },
    { topic: `Dados menores`, date: `2026-08-16`, text: `Dain tem 23 anos. Cedric é veterano da unidade de Bren, voz de liderança. Garrick é o homem de confiança de Theon. Aldric é o veterano idoso de bengala que reconhece o cinza do lobo de Bren em Fenrik.` },
    { topic: `Mecânica do dom de Theon`, date: `Livro 2`, text: `É calor, não sombra (linhagem real de Valdris, sem marca Ashkari). Gatilho: proximidade de Ashling — piora quanto mais perto ela está, cede quando ele se afasta. Fera: Helios, leopardo dourado.` },
    { topic: `Theon conta à Selwyn por carta`, date: `Livro 2, Cap.24`, text: `Decisão da autora: não por ingenuidade, por ser filho. A única pessoa a quem ele pode contar é exatamente aquela de quem deveria esconder.` },
    { topic: `Micro-sinais de Selwyn`, date: `Livro 2`, text: `Vazam sem entregar: pede que ele escreva "se sentir qualquer coisa fora do comum"; pergunta "a que distância você estava dela?" em vez de perguntar como foi o despertar; escorrega "vinte anos garantindo que vocês dois nunca ficassem no mesmo lugar"; exige relatório diário "principalmente perto dela".` },
    { topic: `A coroa tem linhagem própria`, date: `Livro 2, Cap.30`, text: `A perseguição nunca foi sobre conjuração — foi sobre conjuração que não fosse deles. Theon NÃO tem sangue Ashkari — atenção de continuidade a vigiar em revisões.` },
    { topic: `Batalha do Desfiladeiro de Harrowgate`, date: `Livro 2, Caps.26-29`, text: `Terreno escolhido por Maeve. Rota de retirada: trilhas de pastor a norte-nordeste. Perdas: 117 mortos, 79 deles Fenn — desequilíbrio que vira conflito político em aberto.` },
    { topic: `Estrutura de comando da coalizão`, date: `Livro 2, Cap.23`, text: `Dividida entre Ilyandor, Ashling e Maeve (retém a escolha de terreno). Rowan em operações táticas; Kael em treinamento e integração; Dain como elo com os veteranos.` },
    { topic: `Interdição da estrada baixa`, date: `Livro 2, Cap.24`, text: `Assinada por Theon. Corta os moinhos do vale; quatro vilarejos mais os refugiados de Correnbrook; cerca de três semanas de reserva, depois fome.` },
    { topic: `Elisabeth, dramatização`, date: `Livro 2, Caps.23 e 25`, text: `Dain ouve o nome pela primeira vez aos 23 anos, da boca de Aldric. Escreve o nome num retalho de couro com carvão e entra em batalha com ele contra o peito.` },
    { topic: `Fenrik fala duas vezes`, date: `Livro 2, Caps.23 e 26`, text: `Só duas vezes no Livro 2: o próprio nome (estreia) e "Você é como ele descreveu. Forte. Como o pai dele." na manhã da batalha. Gancho: Fenrik conheceu Bren Corvane.` },
    { topic: `Gancho da Ines`, date: `Livro 2, Cap.19`, text: `Dain escreve a Ines duas vezes pedindo informação sobre a corte. A segunda carta volta evasiva, sem uma palavra sobre a corte. "Isso é uma resposta", diz Maeve.` },
    { topic: `A pergunta não feita de Rowan`, date: `Livro 2, Cap.25`, text: `Rowan recusa perguntar "a pergunta" na véspera de Harrowgate: "Não quero a resposta que você me daria com medo de morrer amanhã... Então a gente sobrevive a isso primeiro. Depois eu pergunto." Continua pendente — gancho de ruptura.` },
    { topic: `Kael recusa promessas que não sabe se cumpre`, date: `Livro 2, Caps.25 e 32`, text: `"Peça outra coisa e eu prometo. Peça isso e eu minto pra você, e eu não minto pra você." Padrão de personagem a manter consistente.` },
    { topic: `Partida de Kael e substitutos permanentes`, date: `Livro 2, Cap.32`, text: `Parte uma semana após Harrowgate por "meses, provavelmente". Deixa formalizados Bregan (arqueiros), Sorcha (linha de frente) e Halbrand (grupos novos). Motivo emocional: não sai apesar do que sente, sai por causa disso.` },
    { topic: `Kael retorna ainda no Livro 2`, date: `2026-08-16`, text: `Não no Livro 3. Partida no Cap.32; retorno planejado por volta do Cap.40, com saltos de tempo marcados por cartas. Permite que o ciúme e a desobediência para salvar a vida dela aconteçam ainda neste livro. O Cap.33 marca sete semanas de ausência.` }
  ],

  /* =========================================================
     FIOS ABERTOS / PENDÊNCIAS
     ========================================================= */
  openThreads: [
    { title: `Destino de Draven capturado`, text: `Selwyn pode tentar resgatá-lo, mandar silenciá-lo, ou sacrificá-lo publicamente para proteger a coroa mesmo ainda o amando. Planejado como virada em torno da metade do Livro 2 — plantar reações emocionais desproporcionais dela antes da confirmação explícita.` },
    { title: `Legitimidade de Theon (fio no bolso)`, text: `Não confirmado, uso opcional: possibilidade de Theon ser filho biológico de Draven, não do rei. Carta guardada para Livro 3 ou 4. Não introduzir pistas sem decisão explícita.` },
    { title: `Personagem protetor de Rivermoor`, text: `Pode aparecer, em algum momento futuro, alguém que protegeu Ashling ativamente na época do ataque/fuga original. Sem identidade definida.` },
    { title: `Rivalidade Selwyn x Elowen`, text: `A natureza exata da rivalidade pessoal entre as duas na corte ainda não foi detalhada — fio em aberto para cena futura.` },
    { title: `A que ponto acontece a ruptura Ashling/Rowan`, text: `Provavelmente Ato 3 ou 4 do Livro 2 — a decidir quando chegar lá.` },
    { title: `Extensão da rede do Círculo de Cinzas`, text: `Quanto da rede dentro da coroa de Valdris ainda não foi exposto; se Selwyn tinha conhecimento pleno das ações de Draven.` },
    { title: `Promessa não cumprida de libertar Bram da Torre Cinza`, text: `Mencionada como fio aberto do Livro 1 a resolver.` },
    { title: `Espécie e nome da fera de Dain`, text: `Resolvido — Fenrik, lobo cinzento. (mantido aqui como registro do processo de decisão)` },
    { title: `Memória de Fenrik sobre Bren`, text: `A natureza da fala de Fenrik reconhecendo Ashling e mencionando Bren (fera herdada? mesma fera? memória de linhagem?) ainda não está decidida.` },
    { title: `O que Ines viu na corte`, text: `Ela circulou entre a corte de Selwyn e a casa do general Ashkari antes do massacre — o que ela sabe e por que escondeu de Dain é gancho pessoal em aberto.` },
    { title: `Grau de intensidade do envolvimento Ashling/Kael durante o relacionamento com Rowan`, text: `A decidir pela autora — nível exato da "traição/quase-traição".` }
  ],

  /* =========================================================
     GALERIA VISUAL — prompts para geração de imagem
     ========================================================= */
  gallery: {
    note: `Nunca citar atores, celebridades ou pessoas reais no prompt — os prompts abaixo já foram escritos para gerar personagens fictícios originais. Se a ferramenta recusar ou devolver rostos reconhecíveis, acrescentar ao final: "personagem fictício original, não baseado em nenhuma pessoa real". Referências visuais (como Bjorn Ironside para Kael) servem só para orientar a descrição escrita — nunca entram no prompt.`,
    styleCharacters: `arte conceitual de personagem, ilustração digital semirrealista, retrato de meio corpo, fundo neutro esfumaçado, iluminação lateral suave, paleta dessaturada de fantasia medieval sombria, personagem fictício original sem semelhança com qualquer pessoa real, sem texto, sem marca d'água`,
    stylePlaces: `arte conceitual de cenário, ilustração digital semirrealista, plano aberto, fantasia medieval sombria, iluminação atmosférica, paleta dessaturada com um acento de cor, sem pessoas em primeiro plano, sem texto, sem marca d'água, sem logotipo`,
    characters: [
      { name: `Ashling`, prompt: `Mulher de 20 anos, 1,70m, magra e forte, pele muito branca. Cabelo ruivo longo preso em coque apertado, alguns fios soltos. Olhos azuis muito claros, quase cinza, com um brilho frio incomum — a marca do sangue Ashkari. Rosto fechado, mandíbula tensa, olhar direto e desconfiado de quem passou a vida sendo caçada. Cicatrizes finas e antigas visíveis nos pulsos. Roupas de couro escuro gastas, capa de viagem esfarrapada, adaga curta no cinto. Postura de assassina: peso no pé de trás, ombros baixos, mãos livres.` },
      { name: `Ashling — poder desperto`, prompt: `Mesma mulher ruiva de 20 anos, pele muito branca, cabelo ruivo escapando do coque. Os olhos agora PRATEADOS e brilhando com luz própria, iluminando as maçãs do rosto de baixo para cima. Expressão de fúria contida. Sombra escura e densa se enroscando ao redor dos ombros e braços dela como fumaça viva. Cenário: campo de batalha noturno ao fundo, muito desfocado.` },
      { name: `Rowan`, prompt: `Homem de 25 anos, 1,90m, corpo musculoso de guerreiro. Pele parda bronzeada. Cabelo preto liso e comprido, preso para trás. Olhos verdes intensos, atentos, cautelosos. Tatuagem tribal escura no peito, parcialmente visível sob a túnica aberta. Barba curta bem aparada. Roupas de couro e lã em tons de verde-musgo e marrom, do povo da floresta. Expressão séria e reservada, de quem viveu sozinho muito tempo.` },
      { name: `Kael`, prompt: `Homem de vinte e poucos anos, loiro. Cabelo raspado bem rente nos DOIS lados da cabeça e também na nuca, deixando só o comprimento do alto, que está preso num RABO DE CAVALO um pouco torto. Olhos amarelados, incomuns, duros. Corpo forte porém ágil, de ladrão de rua que virou lutador: ombros largos, cintura enxuta. Barba loira curta, ainda irregular, começando a encher. Roupas escuras práticas de couro com várias fivelas, adagas curtas presas ao corpo em vários pontos. Cicatrizes pequenas nas mãos e uma cruzando a sobrancelha. Expressão irônica com alguma coisa mais dura por baixo.` },
      { name: `Kael — versão tardia (Livro 2/3)`, prompt: `Homem loiro de vinte e poucos anos, guerreiro nórdico. Cabelo raspado bem rente nos DOIS lados e na nuca, com o comprimento do alto agora bem mais longo e grosso, preso num RABO DE CAVALO alto e apertado que cai pelas costas. Barba loira CHEIA e comprida, encorpada, dividida em duas tranças curtas amarradas com tiras de couro e um anel de metal. Olhos amarelados, incomuns, duros e calmos. Corpo consideravelmente maior que antes: ombros muito largos, braços grossos de trabalho pesado, pescoço forte, peito amplo. Pele marcada de sol e de estrada. Cicatriz nova atravessando o antebraço. Roupas de campanha desgastadas em couro e lã escura, peles nos ombros, braçadeiras de couro cru, machado de mão preso ao cinto. Expressão mais calada e mais dura do que antes, sem perder o brilho irônico nos olhos. Postura de comandante de guerra, não mais de ladrão.` },
      { name: `Theon`, prompt: `Homem de 23 anos, 1,90m, porte aristocrático. Cabelo preto liso, curto e bem cortado. Olhos azuis frios e comuns, SEM brilho sobrenatural — importante: ele não tem a marca Ashkari nos olhos. Rosto bonito e cansado, olheiras fundas de quem não dorme há semanas. Armadura real de príncipe, placas escuras com detalhes dourados, capa de comandante. Expressão dividida: autoridade no queixo, dúvida nos olhos. Postura ereta demais, como quem foi ensinado a nunca vergar.` },
      { name: `Selwyn`, prompt: `Mulher de cerca de 50 anos, rainha. Alta, magra, absolutamente controlada. Cabelo escuro com fios grisalhos, preso num penteado elaborado e severo. Olhos frios e ilegíveis. Rosto bonito e endurecido, boca fina. Vestido de corte pesado em preto e vinho profundo, gola alta, bordado em fio de prata. Coroa discreta. Mãos cruzadas no colo com força excessiva. Expressão de quem calcula o tempo todo e nunca demonstra nada.` },
      { name: `Elowen`, prompt: `Mulher de cerca de 30 anos, pele muito branca, magra pela vida difícil. Cabelo ruivo longo e solto. Olhos azuis muito claros, quase cinza, marca Ashkari. Rosto bonito e cansado, expressão terna e assombrada. Roupas humildes de linho e lã em tons de terra, xale sobre os ombros, colar simples de família. Cenário: interior escuro de casa de vilarejo, luz de lareira ao fundo.` },
      { name: `Maeve`, prompt: `Mulher de meia-idade, líder guerreira do povo da floresta. Corpo compacto e forte, sem armadura pesada: couro endurecido e uma machadinha curta no cinto. Cabelo escuro grisalho preso em tranças presas junto à cabeça. Rosto marcado pelo sol e por cicatrizes finas. Olhos duros e calculistas. Expressão de quem está sempre em casa no próprio terreno e não pede licença para nada.` },
      { name: `Dain`, prompt: `Homem de 23 anos, ferreiro de constituição pesada, braços e ombros de quem trabalha com martelo. Cabelo escuro curto e desalinhado. Olhos acinzentados com o mesmo brilho frio incomum de Ashling — marca Ashkari. Avental de couro grosso sobre camisa de linho, mangas arregaçadas, queimaduras pequenas de forja nos antebraços. Expressão cautelosa, contida, de quem cresceu sendo escondido.` },
      { name: `Ines`, prompt: `Mulher de cerca de 50 anos, de vilarejo. Cabelo grisalho preso num coque simples e frouxo. Rosto gentil e marcado, olhos que guardam alguma coisa. Roupas modestas e limpas de tecido cru, avental. Postura cautelosa de quem passou vinte anos escondendo alguma coisa e nunca deixou de conferir a porta.` },
      { name: `Ilyandor`, prompt: `Homem idoso, guardião de ordem antiga. Alto e ereto, com vitalidade que desmente a idade. Cabelos brancos longos presos numa trança simples nas costas. Rosto muito enrugado, expressão gentil e grave. Túnica longa em branco e prata com bordados discretos, sem armadura. Segura um livro fino de capa escura com bordas douradas. Cenário: salão de biblioteca de torre branca ao fundo, muito desfocado.` },
      { name: `Yseult`, prompt: `Mulher madura, mestra de treinamento, rígida e exigente. Corpo enxuto e treinado. Cabelo preso com severidade, sem um fio fora do lugar. Rosto anguloso, expressão impaciente e avaliadora. Túnica de treino curta em cinza e branco, faixas nos antebraços. Braços cruzados. Cenário: pátio de pedra branca ao amanhecer.` },
      { name: `Vessa`, prompt: `Mulher de meia-idade, conselheira e mentora de guerreiros. Rosto severo, feições duras, olhar frio o bastante para causar arrepio. Cabelo escuro puxado para trás. Traje formal de conselho em branco e azul-acinzentado, com insígnia de guardiã no peito. Postura rígida e autoritária. Uma sombra de simpatia genuína quase escapando do canto da boca.` },
      { name: `Cassian`, prompt: `Homem jovem, guarda de elite. Corpo treinado e ágil. Cabelo curto e escuro, rosto atento, olhar de vigilância que nunca descansa completamente. Armadura leve de couro e placas claras com insígnia celestial. Espada às costas. Cenário: floresta em trilha, ao anoitecer.` },
      { name: `Tobin`, prompt: `Homem jovem, amigo de infância, de rua. Magro e nervoso, sempre olhando ao redor como quem espera ser observado. Cabelo castanho bagunçado, rosto expressivo e brincalhão mesmo tenso. Roupas simples e remendadas de viajante, faca no cinto. Expressão de humor teimoso que sobrevive a qualquer situação.` },
      { name: `Tamsin`, prompt: `Jovem guia, quase adolescente. Baixa, magra, cheia de energia. Cabelo claro preso de qualquer jeito, mechas soltas. Rosto redondo e curioso, sorriso fácil. Roupas leves e limpas em branco e azul-claro de cidade de torres. Expressão animada e prestativa.` },
      { name: `General Draven`, prompt: `Homem de meia-idade, general de campo. Grande, pesado, imponente. Cabelo escuro grisalho curto, barba aparada. Rosto duro, olhar sem qualquer hesitação. Armadura completa de placas escuras com o brasão real, capa vermelho-escura. Expressão de executor: alguém que cumpre ordens terríveis sem precisar acreditar nelas.` },
      { name: `Bren Corvane`, prompt: `Homem de cerca de 40 anos, general, retratado como memória. Alto e largo, presença de comandante querido. Cabelo escuro, barba cheia, rosto aberto e justo, riso quase visível nos olhos. Olhos acinzentados com brilho frio — marca Ashkari. Armadura de campanha desgastada, sem ostentação. Um lobo cinzento enorme parcialmente visível atrás dele. Imagem em tom de lembrança, levemente esmaecida nas bordas.` },
      { name: `Elisabeth`, prompt: `Mulher de cerca de 25 anos, retratada como memória. Cabelo escuro preso de forma prática. Rosto vivo e teimoso, expressão de quem discute em público e ganha. Roupas simples de campanha manchadas, avental de enfermaria, agulha e linha na mão. Cenário: tenda de feridos ao fundo. Imagem em tom de lembrança, levemente esmaecida nas bordas.` },
      { name: `Halric`, prompt: `Homem idoso, ex-soldado que largou a farda. Barba branca desalinhada, rosto pesado. Roupas civis gastas, nada militar. Olhos fixos em chamas de fogueira. Expressão de quem carrega uma conta que nunca fechou.` },
      { name: `Aldric`, prompt: `Homem muito idoso, veterano. Curvado sobre uma bengala, as duas mãos apoiadas nela. Cabelo branco ralo, rosto duro e sulcado. Olhos claros e atentos. Roupas simples de lã. Expressão dura que se desfaz sem aviso quando ele fala do passado.` },
      { name: `Cedric`, prompt: `Homem robusto de meia-idade, veterano de linha de frente. Ombros largos, pescoço grosso. Cabelo grisalho curto, barba cerrada. Rosto prático, sem drama. Couro de campanha e cota de malha simples. Expressão de quem pensa em retirada antes de pensar em glória.` },
      { name: `Garrick`, prompt: `Homem de cerca de 40 anos, conselheiro militar. Constituição sólida, postura de guarda-costas. Cabelo escuro grisalho curto, barba curta. Rosto honesto e preocupado. Armadura leve de oficial de Valdris, sem ostentação. Expressão de lealdade cansada.` },
      { name: `Tomas`, prompt: `Homem idoso de vilarejo. Magro, curvado, mãos grandes de trabalho. Cabelo branco ralo. Rosto bondoso e enrugado. Roupas simples e remendadas. Segura um maço de cartas antigas amareladas e quebradiças. Cenário: interior de casa pequena de vilarejo.` },
      { name: `Sorcha`, prompt: `Mulher guerreira do povo da floresta, comandante de linha de frente. Corpo forte e compacto. Cabelo escuro raspado nas laterais, preso no alto. Cicatriz cruzando a sobrancelha. Couro endurecido, escudo redondo nas costas, espada curta. Expressão concentrada, sem vaidade nenhuma.` },
      { name: `Bregan`, prompt: `Homem do povo da floresta, comandante de arqueiros. Magro e alto, postura relaxada de atirador. Cabelo castanho comprido preso. Arco longo e aljava às costas. Roupas de caça em verde e marrom. Olhar calmo e calculado, avaliando distância.` },
      { name: `Halbrand`, prompt: `Homem do povo da floresta, instrutor de recrutas. Meia-idade, corpo pesado. Barba grisalha. Rosto paciente. Couro simples, bastão de treino na mão. Expressão de quem já explicou a mesma coisa mil vezes e vai explicar de novo.` },
      { name: `Renner Voss`, prompt: `Homem de meia-idade, contato do submundo. Magro, rosto afiado e evasivo, olhos que não sustentam o olhar. Cabelo escuro engordurado. Roupas urbanas escuras de qualidade duvidosa, anéis baratos. Expressão de quem está calculando o próprio lucro no meio da frase.` },
      { name: `Perrin`, prompt: `Homem maduro, membro de conselho. Postura política, queixo erguido. Cabelo grisalho penteado, barba aparada. Túnica formal branca e dourada de guardião. Expressão convicta e levemente arrogante, de quem acredita estar certo.` },
      { name: `Reneth`, prompt: `Batedor, homem jovem e enxuto. Roupas de camuflagem em tons de terra, capuz. Rosto sujo de estrada, olhar rápido. Faca e mapa nas mãos. Expressão alerta.` },
      { name: `Nyx (macho)`, prompt: `Criatura invocada, pantera negra grande e sólida, macho. Pelagem preta que bebe a luz em vez de refleti-la. Olhos amarelos absolutamente firmes. Musculatura visível, cauda baixa, postura calma e atenta. Fiapos de sombra escura se desprendendo levemente das bordas do corpo, como se ele fosse feito de escuridão comprimida. Fundo escuro. Presença silenciosa e protetora, não agressiva.` },
      { name: `Nyx — forma de sombra`, prompt: `Mesma pantera negra, agora meio dissolvida: metade animal sólido, metade névoa escura sem forma definida. Contornos se desfazendo em fumaça. Apenas os olhos amarelos permanecem nítidos. Fundo escuro.` },
      { name: `Hemera (fêmea)`, prompt: `Criatura invocada, pantera branca imponente, fêmea. Pelagem branca luminosa. Olhos claros como gelo. Postura serena e majestosa, cabeça levemente inclinada. Leve brilho branco-prateado ao redor do corpo. Fundo claro e neutro. Presença cálida, oposta à frieza sombria da pantera negra.` },
      { name: `Nyx e Hemera juntos`, prompt: `Duas panteras lado a lado: uma preta absoluta com olhos amarelos, uma branca luminosa com olhos claros como gelo. Noite e dia. Enquadramento simétrico, as duas voltadas para o mesmo ponto. Fundo dividido entre escuridão e claridade. Imagem icônica, sem humanos.` },
      { name: `Helios (macho)`, prompt: `Criatura invocada, leopardo dourado grande, macho. Pelagem dourada que captura cada raio de sol, rosetas escuras espalhadas como constelações sobre o corpo. Olhos âmbar com autoridade. Postura régia. Luz dourada quente irradiando ao redor. Fundo de campo aberto ao meio-dia.` },
      { name: `Fenrik (macho)`, prompt: `Criatura invocada, lobo cinzento grande demais para ser lobo — cernelha na altura do peito de um homem adulto. Pelo cinza fosco de pedra molhada, denso, cada fio parecendo ter peso próprio. Olhos escuros e absolutamente atentos. Postura firme e imóvel, plantado no chão como se dali não saísse nem que o mundo viesse empurrar. Fundo de estrada de terra ao entardecer.` },
      { name: `Kova (macho)`, prompt: `Criatura invocada, urso branco enorme, macho, do tamanho de uma montaria de guerra. Pelo branco espesso sujo de barro até a altura do peito. Sela de combate simples nas costas. Olhos pequenos e pacientes. Postura tranquila, quase entediada, de quem já fez isso muitas vezes. Fundo de encosta rochosa.` }
    ],
    places: [
      { name: `Ravenscar — vista geral`, prompt: `Capital murada de um reino medieval sombrio, vista de uma colina ao entardecer. Muralha alta de pedra escura cercando um emaranhado denso de telhados de ardósia. No centro e ao fundo, um castelo real imponente de torres pontiagudas e negras. Fumaça de chaminés subindo em dezenas de fios finos. Céu carregado, luz baixa e alaranjada cortando as nuvens. Bandeiras escuras nas torres. Sensação de poder antigo e opressivo.` },
      { name: `Ravenscar — becos do submundo`, prompt: `Beco estreito e imundo de cidade medieval à noite. Paredes de pedra encardida muito próximas uma da outra, escadas irregulares, roupa pendurada em cordas atravessando o alto. Poças de água suja refletindo a luz fraca de uma única lanterna. Portas baixas de madeira apodrecida. Névoa rasteira. Atmosfera perigosa e claustrofóbica.` },
      { name: `Torre Cinza — exterior`, prompt: `Torre de pedra cinzenta maciça e sem janelas, anexa a um castelo, vista de baixo para cima sob chuva. Superfície lisa e úmida, manchada de limo escuro. Uma única porta de ferro reforçada na base. Nenhum ornamento, nenhuma beleza — construção puramente funcional. Céu de tempestade.` },
      { name: `Torre Cinza — interior da masmorra`, prompt: `Interior de masmorra medieval subterrânea. Paredes de pedra cinza rachada escorrendo umidade. Corrente e argolas de ferro presas à parede. Chão de terra batida com palha velha. Uma única tocha lançando luz laranja fraca que não alcança os cantos. Grade pesada ao fundo. Frio visível no ar.` },
      { name: `Rivermoor — o massacre (memória)`, prompt: `Vilarejo rural pequeno em chamas à noite, visto entre as tábuas de um esconderijo. Casas simples de madeira e palha ardendo, silhuetas de soldados de armadura entre o fogo, faíscas subindo. Fumaça densa. Enquadramento parcialmente bloqueado por ripas de madeira em primeiro plano. Vermelho e laranja violentos contra escuridão total.` },
      { name: `Rivermoor — hoje, reconstruído`, prompt: `Vilarejo rural pequeno e pobre, reconstruído sobre ruínas antigas, num fim de tarde nublado. Casas novas de madeira clara misturadas a fundações de pedra queimada que ninguém removeu. Rio estreito correndo ao lado. Cercas irregulares, hortas pequenas. Atmosfera melancólica e teimosa.` },
      { name: `Bosque de Emberfen`, prompt: `Floresta antiga e muito densa, luz do sol atravessando a copa em feixes verticais bem definidos. Troncos enormes cobertos de musgo, raízes grossas formando degraus naturais no chão. Neblina baixa entre as árvores. Trilha estreita descendo em direção ao som de água. Verde profundo e dourado.` },
      { name: `Aldeia Fenn no Bosque de Emberfen`, prompt: `Assentamento de povo da floresta construído entre árvores gigantes. Casas de madeira e couro erguidas parcialmente sobre plataformas nas raízes e nos troncos, ligadas por passarelas de corda. Fogueiras comunitárias, peles secando, arcos apoiados nas paredes. Fim de tarde, luz quente filtrada pela copa.` },
      { name: `Cidade Celestial`, prompt: `Cidade escondida num vale estreito entre picos altíssimos de montanha. Torres brancas esguias e pontes finas de pedra clara ligando penhascos, construídas na própria rocha. Cascatas caindo das encostas. Nuvens abaixo do nível da cidade em alguns pontos. Luz dourada e fria ao amanhecer refletida nas torres brancas.` },
      { name: `Cidade Celestial — pátio de treino`, prompt: `Pátio circular de pedra branca polida ao amanhecer, cercado por colunas simples. Chão marcado por círculos concêntricos gastos pelo uso. Armas de treino apoiadas num suporte de madeira. Vista aberta para picos de montanha ao fundo. Luz baixa e limpa, sombras longas.` },
      { name: `Duskhollow`, prompt: `Vila pequena de fronteira ao anoitecer, entre a floresta e o campo aberto. Ruas de terra, casas modestas de pedra baixa e madeira, telhados de palha. Uma forja no centro com a boca do forno acesa, lançando luz laranja na rua. Cerca de madeira, carroça parada, poço comunitário. Névoa fina chegando da floresta.` },
      { name: `Correnbrook — depois do ataque`, prompt: `Vilarejo grande parcialmente queimado, no dia seguinte a um ataque. Casas de pedra com telhados desabados e vigas carbonizadas ao lado de casas intactas. Tendas de campanha improvisadas erguidas entre as ruínas. Fumaça fina ainda subindo de alguns pontos. Céu cinzento de manhã.` },
      { name: `Correnbrook — acampamento da coalizão`, prompt: `Grande acampamento militar improvisado ao redor de um vilarejo, visto de uma elevação. Centenas de tendas de tecido cru em fileiras irregulares, agrupadas em três blocos visivelmente distintos entre si. Fogueiras espalhadas, cavalos amarrados, estandartes de três desenhos diferentes tremulando. Fim de tarde, poeira suspensa no ar dourado.` },
      { name: `Desfiladeiro de Harrowgate`, prompt: `Desfiladeiro estreito entre duas paredes de rocha altíssimas e verticais, vista de cima de uma das cristas. A garganta se afunila no meio e se abre num vale do outro lado. Chão pedregoso, sem vegetação. Céu estreito visível como uma faixa entre as paredes. Luz cinzenta de amanhecer de fim de outono.` },
      { name: `Harrowgate — a batalha`, prompt: `Batalha medieval dentro de um desfiladeiro de paredes de pedra verticais. Duas linhas de infantaria comprimidas na garganta estreita, estandartes, poeira e lanças. Arqueiros minúsculos posicionados no alto das duas cristas. Massa escura de soldados escorrendo pela abertura ao fundo como água num cano estreito. Plano muito aberto, figuras pequenas.` },
      { name: `Trilhas de pastor — rota de retirada`, prompt: `Trilhas estreitas e íngremes subindo uma encosta rochosa a norte de um vale. Caminhos de cabra serpenteando entre pedras soltas e arbustos secos. Vista de baixo, mostrando o quanto a subida é ruim. Céu nublado.` },
      { name: `Estrada baixa e os moinhos do vale`, prompt: `Estrada rural bloqueada num vale verde, ao entardecer. Barricada de madeira e uma bandeira militar escura marcando o fechamento. Ao fundo, moinhos de água parados junto a um rio e campos de trigo sem ninguém trabalhando. Carroças abandonadas na beira da estrada. Céu bonito em contraste com a cena.` },
      { name: `Salão do trono de Ravenscar`, prompt: `Salão do trono de castelo medieval, longo e frio. Colunas escuras, piso de pedra polida refletindo pouca luz. Trono elevado ao fundo sobre degraus, com um banco baixo e simples ao lado dele. Janelas altas e estreitas deixando entrar feixes pálidos. Estandartes escuros nas paredes. Vazio, silencioso, mais intimidador que grandioso.` },
      { name: `Tenda de comando da coalizão`, prompt: `Interior de tenda militar grande à noite. Mesa central de madeira tosca coberta por um mapa grande marcado com pedras e alfinetes. Lampiões pendurados lançando luz amarela irregular. Cadeiras desencontradas, armaduras apoiadas nos cantos, pilhas de pergaminhos. Lona vibrando levemente com o vento.` },
      { name: `Kelmoor — desfiladeiro da batalha do Livro 1`, prompt: `Desfiladeiro largo e rochoso entre montanhas, no rescaldo de uma batalha, sob céu de fim de tarde. Chão revirado, armas quebradas e escudos espalhados, poeira ainda no ar. Passagem estreita ao fundo levando a um vale. Corvos circulando alto. Atmosfera de silêncio depois do estrondo.` }
    ]
  }
};
