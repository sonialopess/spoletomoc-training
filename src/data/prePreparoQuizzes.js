export const prePreparoQuizzes = [
  // PERGUNTAS DE COMPLETAR INGREDIENTES
  {
    id: 1,
    type: "fill-in",
    recipe: "Mix de Legumes (Abobrinha e Berinjela)",
    question: "O Mix de Legumes (Abobrinha e Berinjela) é feito com abobrinha, berinjela, sal, pesto, alho assado e qual outro ingrediente?",
    correctAnswer: "Cebola Refogada",
    explanation: "O sexto ingrediente do Mix de Legumes é a Cebola Refogada, que adiciona sabor e textura ao preparo.",
    hints: ["Começa com C", "É um vegetal refogado", "Adiciona doçura ao mix"]
  },
  {
    id: 2,
    type: "fill-in",
    recipe: "Filé de Frango Marinado",
    question: "Quais são os ingredientes principais do Filé de Frango Marinado? Mencione pelo menos 3.",
    correctAnswer: ["Açúcar", "Alho", "Vinho branco", "Molho pesto", "Sal"],
    explanation: "O Filé de Frango Marinado contém açúcar, alho, alecrim, vinho branco, molho pesto e sal como ingredientes principais.",
    hints: ["Um é um tempero aromático", "Um é uma bebida", "Um é um condimento doce"]
  },
  {
    id: 3,
    type: "fill-in",
    recipe: "Camarão Marinado (Finalização Frigideira)",
    question: "Quais são os 5 ingredientes do Camarão Marinado para finalização na frigideira?",
    correctAnswer: ["Camarão", "Alho", "Sal", "Azeite", "Pimenta"],
    explanation: "O Camarão Marinado contém camarão, alho, sal, azeite e pimenta.",
    hints: ["Um é um tempero branco", "Um é uma gordura", "Um é um tempero quente"]
  },
  {
    id: 4,
    type: "fill-in",
    recipe: "Cebola Refogada",
    question: "A Cebola Refogada é feita com cebola, azeite e qual outro ingrediente?",
    correctAnswer: "Sal",
    explanation: "A Cebola Refogada é preparada com cebola em tiras finas, refogada em azeite quente e temperada com sal.",
    hints: ["É um tempero", "Tem 3 letras", "Realça o sabor"]
  },
  {
    id: 5,
    type: "fill-in",
    recipe: "Cogumelos Assado Forno",
    question: "Os Cogumelos Assado Forno são temperados com azeite, alho, sal e qual outro ingrediente?",
    correctAnswer: "Nenhum / Apenas esses",
    explanation: "Os Cogumelos Assado Forno são temperados apenas com azeite, alho e sal. Esses três ingredientes são suficientes.",
    hints: ["Pode ser nenhum", "Apenas temperos básicos", "Deixa o sabor natural do cogumelo"]
  },
  {
    id: 6,
    type: "fill-in",
    recipe: "Bacon Assado",
    question: "Qual é o único ingrediente do Bacon Assado?",
    correctAnswer: "Bacon",
    explanation: "O Bacon Assado é preparado apenas com bacon, sem outros ingredientes. Ele é assado no forno até ficar crocante.",
    hints: ["É o próprio ingrediente", "Não precisa de tempero", "Já tem sabor próprio"]
  },
  {
    id: 7,
    type: "fill-in",
    recipe: "Tomate Assado",
    question: "O Tomate Assado é feito com tomate, azeite, alho, sal e qual outro ingrediente?",
    correctAnswer: "Nenhum / Apenas esses",
    explanation: "O Tomate Assado é preparado com tomate, azeite, alho e sal. Esses ingredientes são suficientes.",
    hints: ["Pode ser nenhum", "Apenas temperos básicos", "Realça o sabor natural"]
  },
  {
    id: 8,
    type: "fill-in",
    recipe: "Alho Assado",
    question: "O Alho Assado é feito com alho, azeite e qual outro ingrediente?",
    correctAnswer: "Sal",
    explanation: "O Alho Assado é preparado com alho descascado, temperado com azeite e sal, depois assado no forno.",
    hints: ["É um tempero", "Tem 3 letras", "Realça o sabor"]
  },
  {
    id: 9,
    type: "fill-in",
    recipe: "Ricota Temperada",
    question: "A Ricota Temperada é feita com ricota, sal, pimenta e qual outro ingrediente?",
    correctAnswer: "Manjericão",
    explanation: "A Ricota Temperada é preparada com ricota misturada com sal, pimenta e manjericão, que adiciona um sabor fresco e aromático.",
    hints: ["É uma erva", "Tem 10 letras", "Tem sabor fresco"]
  },
  {
    id: 10,
    type: "fill-in",
    recipe: "Pesto de Azeitona Preta",
    question: "O Pesto de Azeitona Preta é feito com azeitona preta, azeite, alho e qual outro ingrediente?",
    correctAnswer: "Sal",
    explanation: "O Pesto de Azeitona Preta é preparado batendo azeitona preta com azeite, alho e sal até formar uma pasta.",
    hints: ["É um tempero", "Tem 3 letras", "Realça o sabor"]
  },

  // PERGUNTAS DE MÚLTIPLA ESCOLHA - FORMA DE PREPARO
  {
    id: 11,
    type: "multiple-choice",
    recipe: "Filé de Frango Marinado",
    question: "Como o Filé de Frango Marinado é finalizado?",
    options: ["Forno", "Panela", "Cru"],
    correctAnswer: "Forno",
    explanation: "O Filé de Frango Marinado é finalizado no forno, onde fica macio e suculento."
  },
  {
    id: 12,
    type: "multiple-choice",
    recipe: "Filé de Peito Marinado",
    question: "Como o Filé de Peito Marinado é finalizado?",
    options: ["Forno", "Panela", "Cru"],
    correctAnswer: "Panela",
    explanation: "O Filé de Peito Marinado é finalizado na panela/frigideira, onde fica crocante por fora e macio por dentro."
  },
  {
    id: 13,
    type: "multiple-choice",
    recipe: "Frango Desfiado",
    question: "Como o Frango Desfiado é finalizado?",
    options: ["Forno", "Panela", "Cru"],
    correctAnswer: "Cru",
    explanation: "O Frango Desfiado é pré-cozido e desfiado, sendo servido cru (já cozido) ou aquecido conforme necessário."
  },
  {
    id: 14,
    type: "multiple-choice",
    recipe: "Frango à Milanesa (Pré-assado)",
    question: "Como o Frango à Milanesa é finalizado?",
    options: ["Forno", "Panela", "Cru"],
    correctAnswer: "Forno",
    explanation: "O Frango à Milanesa é pré-assado no forno, ficando crocante e pronto para servir."
  },
  {
    id: 15,
    type: "multiple-choice",
    recipe: "Coração da Alcatra",
    question: "Como o Coração da Alcatra é finalizado?",
    options: ["Forno", "Panela", "Cru"],
    correctAnswer: "Panela",
    explanation: "O Coração da Alcatra é finalizado na panela/frigideira, onde fica macio e suculento."
  },
  {
    id: 16,
    type: "multiple-choice",
    recipe: "Carne à Milanesa",
    question: "Como a Carne à Milanesa é finalizada?",
    options: ["Forno", "Panela", "Cru"],
    correctAnswer: "Forno",
    explanation: "A Carne à Milanesa é assada no forno, ficando crocante e pronta para servir."
  },
  {
    id: 17,
    type: "multiple-choice",
    recipe: "Camarão Marinado (Finalização Frigideira)",
    question: "Como o Camarão Marinado é finalizado neste caso?",
    options: ["Forno", "Panela", "Cru"],
    correctAnswer: "Panela",
    explanation: "Este Camarão Marinado é finalizado na frigideira, onde fica crocante por fora e macio por dentro."
  },
  {
    id: 18,
    type: "multiple-choice",
    recipe: "Camarão Marinado (Finalização Forno)",
    question: "Como o Camarão Marinado é finalizado neste caso?",
    options: ["Forno", "Panela", "Cru"],
    correctAnswer: "Forno",
    explanation: "Este Camarão Marinado é finalizado no forno, onde fica macio e suculento."
  },
  {
    id: 19,
    type: "multiple-choice",
    recipe: "Mix de Legumes (Abobrinha e Berinjela)",
    question: "Como o Mix de Legumes é finalizado?",
    options: ["Forno", "Panela", "Cru"],
    correctAnswer: "Cru",
    explanation: "O Mix de Legumes é servido cru, mantendo a textura fresca e crocante dos vegetais."
  },
  {
    id: 20,
    type: "multiple-choice",
    recipe: "Cogumelos Assado Forno",
    question: "Como os Cogumelos Assado Forno são preparados?",
    options: ["Forno", "Panela", "Cru"],
    correctAnswer: "Forno",
    explanation: "Os Cogumelos Assado Forno são assados no forno a 180°C por 15 minutos."
  },
  {
    id: 21,
    type: "multiple-choice",
    recipe: "Bacon Assado",
    question: "Como o Bacon Assado é preparado?",
    options: ["Forno", "Panela", "Cru"],
    correctAnswer: "Forno",
    explanation: "O Bacon Assado é assado no forno a 200°C até ficar crocante."
  },
  {
    id: 22,
    type: "multiple-choice",
    recipe: "Calabresa Assada",
    question: "Como a Calabresa Assada é preparada?",
    options: ["Forno", "Panela", "Cru"],
    correctAnswer: "Forno",
    explanation: "A Calabresa Assada é assada no forno a 180°C por 10 minutos."
  },
  {
    id: 23,
    type: "multiple-choice",
    recipe: "Tomate Assado",
    question: "Como o Tomate Assado é preparado?",
    options: ["Forno", "Panela", "Cru"],
    correctAnswer: "Forno",
    explanation: "O Tomate Assado é assado no forno a 180°C por 20 minutos."
  },
  {
    id: 24,
    type: "multiple-choice",
    recipe: "Alho Assado",
    question: "Como o Alho Assado é preparado?",
    options: ["Forno", "Panela", "Cru"],
    correctAnswer: "Forno",
    explanation: "O Alho Assado é assado no forno a 180°C por 30 minutos."
  },
  {
    id: 25,
    type: "multiple-choice",
    recipe: "Cebola Refogada",
    question: "Como a Cebola Refogada é preparada?",
    options: ["Forno", "Panela", "Cru"],
    correctAnswer: "Panela",
    explanation: "A Cebola Refogada é refogada em azeite quente na panela até ficar macia e levemente dourada."
  },
  {
    id: 26,
    type: "multiple-choice",
    recipe: "Gorgonzola",
    question: "Como o Gorgonzola é preparado?",
    options: ["Forno", "Panela", "Cru"],
    correctAnswer: "Cru",
    explanation: "O Gorgonzola é servido cru, apenas cortado em cubos pequenos."
  },
  {
    id: 27,
    type: "multiple-choice",
    recipe: "Ricota Temperada",
    question: "Como a Ricota Temperada é preparada?",
    options: ["Forno", "Panela", "Cru"],
    correctAnswer: "Cru",
    explanation: "A Ricota Temperada é preparada crua, apenas misturando com os temperos."
  },
  {
    id: 28,
    type: "multiple-choice",
    recipe: "Ovo de Codorna",
    question: "Como o Ovo de Codorna é preparado?",
    options: ["Forno", "Panela", "Cru"],
    correctAnswer: "Panela",
    explanation: "O Ovo de Codorna é cozido em água fervente na panela por 3 minutos."
  },
  {
    id: 29,
    type: "multiple-choice",
    recipe: "Pesto de Azeitona Preta",
    question: "Como o Pesto de Azeitona Preta é preparado?",
    options: ["Forno", "Panela", "Cru"],
    correctAnswer: "Cru",
    explanation: "O Pesto de Azeitona Preta é preparado cru, batendo os ingredientes em um processador ou liquidificador."
  },
  {
    id: 30,
    type: "multiple-choice",
    recipe: "Espinafre",
    question: "Como o Espinafre é preparado?",
    options: ["Forno", "Panela", "Cru"],
    correctAnswer: "Cru",
    explanation: "O Espinafre é servido cru, apenas lavado, picado e temperado com sal."
  }
];
