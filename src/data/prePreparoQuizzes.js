export const prePreparoQuizzes = [
  // PERGUNTAS DE COMPLETAR INGREDIENTES
  {
    id: 1,
    type: "fill-in",
    recipe: "Tiras de Frango",
    question: "As Tiras de Frango são feitas com peito de frango, vinho, pesto, sal, pimenta do reino, sálvia e qual outro ingrediente?",
    correctAnswer: "Alecrim",
    explanation: "O alecrim é o sétimo ingrediente das Tiras de Frango, que adiciona aroma característico.",
    hints: ["Começa com A", "É uma erva aromática", "Tem 7 letras"]
  },
  {
    id: 2,
    type: "fill-in",
    recipe: "Filé de Frango",
    question: "O Filé de Frango é marinado com sal, vinho branco, pesto, alecrim, açúcar e qual outro ingrediente?",
    correctAnswer: "Alho CRU",
    explanation: "O alho CRU (não assado) é um ingrediente importante do Filé de Frango, adicionado cru ao marinado.",
    hints: ["É um tempero", "Começa com A", "Deve ser CRU, não assado"]
  },
  {
    id: 3,
    type: "fill-in",
    recipe: "Escalope/Tiras de Carne",
    question: "O Escalope/Tiras de Carne é feito com coração da alcatra ou filé mignon, óleo, vinho tinto, sal, molho pesto e qual outro ingrediente?",
    correctAnswer: "Pimenta preta em pó",
    explanation: "A pimenta preta em pó é o sexto ingrediente, que adiciona sabor característico à carne.",
    hints: ["É um tempero", "É preta", "Começa com P"]
  },
  {
    id: 4,
    type: "fill-in",
    recipe: "Camarão Marinado",
    question: "O Camarão Marinado é feito com camarão, vinho branco, pesto, alho assado e qual outro ingrediente?",
    correctAnswer: "Sal",
    explanation: "O sal é o quinto ingrediente do Camarão Marinado, essencial para o tempero.",
    hints: ["É um tempero básico", "Tem 3 letras", "Realça o sabor"]
  },
  {
    id: 5,
    type: "fill-in",
    recipe: "Mix de Vegetais",
    question: "O Mix de Vegetais é feito com abobrinha, berinjelas, azeite de bagaço, sal, pesto e qual outro ingrediente?",
    correctAnswer: "Alho assado",
    explanation: "O alho assado é o sexto ingrediente, que adiciona sabor ao mix de vegetais.",
    hints: ["É alho", "Começa com A", "Deve ser assado"]
  },
  {
    id: 6,
    type: "fill-in",
    recipe: "Tomate Assado",
    question: "O Tomate Assado é feito com tomate cortado, azeite de bagaço, açúcar, sal, alho assado e qual outro ingrediente?",
    correctAnswer: "Manjericão",
    explanation: "O manjericão é o sexto ingrediente, que adiciona aroma fresco ao tomate assado.",
    hints: ["É uma erva", "Tem 10 letras", "Tem sabor fresco"]
  },
  {
    id: 7,
    type: "fill-in",
    recipe: "Ricota Temperada",
    question: "A Ricota Temperada é feita com ricota, pimenta calabresa, oregano, salsa e qual outro ingrediente?",
    correctAnswer: "Sal",
    explanation: "O sal é o quinto ingrediente, essencial para temperar a ricota.",
    hints: ["É um tempero", "Tem 3 letras", "Básico"]
  },
  {
    id: 8,
    type: "fill-in",
    recipe: "Pesto de Azeitona",
    question: "O Pesto de Azeitona é feito com azeitona preta, azeite de bagaço, mix de erva e qual outro ingrediente?",
    correctAnswer: "Alho assado",
    explanation: "O alho assado é o quarto ingrediente, que adiciona sabor ao pesto.",
    hints: ["É alho", "Começa com A", "Deve ser assado"]
  },
  {
    id: 9,
    type: "fill-in",
    recipe: "Cebola Caramelizada",
    question: "A Cebola Caramelizada é feita com cebola roxa, azeite bagaço, açúcar, sal e qual outro ingrediente?",
    correctAnswer: "Vinho tinto",
    explanation: "O vinho tinto é o quinto ingrediente, que adiciona profundidade de sabor à cebola caramelizada.",
    hints: ["É uma bebida", "Começa com V", "É tinto"]
  },
  {
    id: 10,
    type: "fill-in",
    recipe: "Frango Desfiado",
    question: "O Frango Desfiado é feito com frango desfiado, azeite de bagaço e qual outro ingrediente?",
    correctAnswer: "Pimenta do reino",
    explanation: "A pimenta do reino é o terceiro ingrediente, que adiciona sabor ao frango desfiado.",
    hints: ["É um tempero", "Começa com P", "É uma pimenta"]
  },

  // PERGUNTAS DE MÚLTIPLA ESCOLHA - FORMA DE PREPARO
  {
    id: 11,
    type: "multiple-choice",
    recipe: "Tiras de Frango",
    question: "Como as Tiras de Frango são finalizadas?",
    options: ["Forno", "Panela/Frigideira", "Cru"],
    correctAnswer: "Panela/Frigideira",
    explanation: "As Tiras de Frango são finalizadas na panela ou frigideira, onde ficam crocantes por fora e macias por dentro."
  },
  {
    id: 12,
    type: "multiple-choice",
    recipe: "Filé de Frango",
    question: "Como o Filé de Frango é finalizado?",
    options: ["Forno", "Panela", "Cru"],
    correctAnswer: "Forno",
    explanation: "O Filé de Frango é finalizado no forno, onde fica macio e suculento."
  },
  {
    id: 13,
    type: "multiple-choice",
    recipe: "Escalope/Tiras de Carne",
    question: "Como o Escalope/Tiras de Carne é finalizado?",
    options: ["Apenas Forno", "Apenas Panela", "Panela (tiras) e Forno (escalope)"],
    correctAnswer: "Panela (tiras) e Forno (escalope)",
    explanation: "As tiras de carne vão na panela, enquanto o escalope vai no forno."
  },
  {
    id: 14,
    type: "multiple-choice",
    recipe: "Camarão Marinado",
    question: "Como o Camarão Marinado é preparado no pré-preparo?",
    options: ["Pré-assado no forno", "Finalizado na hora", "Ambas as opções"],
    correctAnswer: "Ambas as opções",
    explanation: "O Camarão Marinado pode ser pré-assado no forno ou finalizado na hora, conforme necessário."
  },
  {
    id: 15,
    type: "multiple-choice",
    recipe: "Mix de Vegetais",
    question: "Como o Mix de Vegetais é preparado?",
    options: ["Forno", "Fogão", "Forno ou Fogão"],
    correctAnswer: "Forno ou Fogão",
    explanation: "O Mix de Vegetais pode ser preparado no forno ou fogão, conforme a preferência."
  },
  {
    id: 16,
    type: "multiple-choice",
    recipe: "Tomate Assado",
    question: "Como o Tomate Assado é preparado?",
    options: ["Forno", "Panela", "Cru"],
    correctAnswer: "Forno",
    explanation: "O Tomate Assado é preparado no forno, onde adquire sabor concentrado."
  },
  {
    id: 17,
    type: "multiple-choice",
    recipe: "Ricota Temperada",
    question: "Como a Ricota Temperada é preparada?",
    options: ["Forno", "Panela", "Cru"],
    correctAnswer: "Cru",
    explanation: "A Ricota Temperada é preparada crua, apenas misturando os temperos."
  },
  {
    id: 18,
    type: "multiple-choice",
    recipe: "Pesto de Azeitona",
    question: "Como o Pesto de Azeitona é preparado?",
    options: ["Forno", "Panela", "Cru"],
    correctAnswer: "Cru",
    explanation: "O Pesto de Azeitona é preparado cru, batendo os ingredientes."
  },
  {
    id: 19,
    type: "multiple-choice",
    recipe: "Cebola Caramelizada",
    question: "Como a Cebola Caramelizada é preparada?",
    options: ["Forno", "Fogão", "Forno ou Fogão"],
    correctAnswer: "Forno ou Fogão",
    explanation: "A Cebola Caramelizada pode ser preparada no forno ou fogão."
  },
  {
    id: 20,
    type: "multiple-choice",
    recipe: "Frango Desfiado",
    question: "Como o Frango Desfiado é preparado no pré-preparo?",
    options: ["Forno", "Panela", "Cru"],
    correctAnswer: "Forno",
    explanation: "O Frango Desfiado é pré-cozido no forno como pré-preparo."
  },
  {
    id: 21,
    type: "multiple-choice",
    recipe: "Alho Poró",
    question: "Como o Alho Poró é preparado?",
    options: ["Forno", "Fogão", "Forno ou Fogão"],
    correctAnswer: "Forno ou Fogão",
    explanation: "O Alho Poró pode ser preparado no forno ou fogão."
  },
  {
    id: 22,
    type: "multiple-choice",
    recipe: "Brócolis",
    question: "Como o Brócolis é preparado?",
    options: ["Forno", "Fogão", "Forno ou Fogão"],
    correctAnswer: "Forno ou Fogão",
    explanation: "O Brócolis pode ser preparado no forno ou fogão."
  },
  {
    id: 23,
    type: "multiple-choice",
    recipe: "Cebola Refogada",
    question: "Como a Cebola Refogada é preparada?",
    options: ["Forno", "Fogão", "Forno ou Fogão"],
    correctAnswer: "Forno ou Fogão",
    explanation: "A Cebola Refogada pode ser preparada no forno ou fogão."
  },
  {
    id: 24,
    type: "multiple-choice",
    recipe: "Alho Assado",
    question: "Como o Alho Assado é preparado?",
    options: ["Forno", "Fogão", "Cru"],
    correctAnswer: "Forno",
    explanation: "O Alho Assado é preparado no forno, onde fica macio e doce."
  },
  {
    id: 25,
    type: "multiple-choice",
    recipe: "Risotto",
    question: "Como o Risotto é preparado?",
    options: ["Forno", "Panela elétrica", "Forno ou Panela elétrica"],
    correctAnswer: "Forno ou Panela elétrica",
    explanation: "O Risotto pode ser preparado no forno ou em panela elétrica."
  },
  {
    id: 26,
    type: "multiple-choice",
    recipe: "Ovo em Pó",
    question: "Como o Ovo em Pó é preparado?",
    options: ["Forno", "Panela", "Cru"],
    correctAnswer: "Cru",
    explanation: "O Ovo em Pó é preparado cru, apenas hidratando com água filtrada."
  },
  {
    id: 27,
    type: "multiple-choice",
    recipe: "Farofa de Torradas",
    question: "Como a Farofa de Torradas é preparada?",
    options: ["Forno", "Panela", "Cru"],
    correctAnswer: "Cru",
    explanation: "A Farofa de Torradas é preparada crua, batendo no mixer."
  }
];
