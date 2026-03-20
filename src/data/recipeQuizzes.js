const recipeQuizzes = {
  receitas: [
    // PERGUNTAS DE COMPLETAR (ESCREVER) - 50 PERGUNTAS
    {
      id: 1,
      type: "fill-in",
      recipeName: "Fettuccine Allegro",
      question: "Fettuccine Allegro é feita com Molho de Queijos, Alho Poró, Bacon, Ovo de Codorna e o que mais?",
      correctAnswer: "Calabresa",
      explanation: "Fettuccine Allegro tem Calabresa como ingrediente adicional que dá sabor e cor ao prato.",
      hints: ["Começa com C", "É uma carne processada", "Tem sabor defumado"]
    },
    {
      id: 2,
      type: "fill-in",
      recipeName: "Fettuccine Alfredo com Tiras de Frango",
      question: "Quantas gramas de Tiras de Frango são usadas na receita?",
      correctAnswer: "75",
      explanation: "Tiras de Frango pesam 75 gramas quando preparadas.",
      hints: ["Número entre 50 e 100", "Começa com 7"]
    },
    {
      id: 3,
      type: "fill-in",
      recipeName: "Fettuccine Alfredo com Tiras de Carnes",
      question: "Quantas gramas de Tiras de Carne são usadas por pacote?",
      correctAnswer: "60",
      explanation: "Cada pacote de Tiras de Carne pesa 60 gramas.",
      hints: ["Número redondo", "Começa com 6"]
    },
    {
      id: 4,
      type: "fill-in",
      recipeName: "Fettuccine Alfredo e Escalope",
      question: "Quantos escalopes de 40 gramas cada são usados (total 120gr)?",
      correctAnswer: "3",
      explanation: "São 3 escalopes de 40 gramas cada, totalizando 120 gramas.",
      hints: ["Número pequeno", "Número primo"]
    },
    {
      id: 5,
      type: "fill-in",
      recipeName: "Fettuccine Molho Branco com Tiras de Frango",
      question: "Fettuccine Molho Branco com Tiras de Frango leva Pesto, Queijo Parmesão, Tomate em Cubos e o que mais?",
      correctAnswer: "Manjericão",
      explanation: "Manjericão é o ingrediente aromático que complementa esta receita com sabor fresco.",
      hints: ["É uma erva", "Começa com M", "Tem sabor fresco e aromático"]
    },
    {
      id: 6,
      type: "fill-in",
      recipeName: "Fettuccine Marinara e Parmegiana",
      question: "Fettuccine Marinara e Parmegiana leva qual proteína como complemento?",
      correctAnswer: "Carne/Frango Parmegiana",
      explanation: "Carne ou Frango à Parmegiana é o complemento proteico desta receita.",
      hints: ["É uma proteína", "Tem cobertura de queijo"]
    },
    {
      id: 7,
      type: "fill-in",
      recipeName: "Fettuccine Gorgonzola e Parmegiana",
      question: "Fettuccine Gorgonzola e Parmegiana leva qual proteína como complemento?",
      correctAnswer: "Carne/Frango Parmegiana",
      explanation: "Carne ou Frango à Parmegiana é o complemento proteico desta receita.",
      hints: ["É uma proteína", "Tem cobertura de queijo"]
    },
    {
      id: 8,
      type: "fill-in",
      recipeName: "Fettuccine Alfredo com Cogumelo",
      question: "Fettuccine Alfredo com Cogumelo leva qual ingrediente especial?",
      correctAnswer: "Cogumelo Trufado",
      explanation: "Cogumelo Trufado é o ingrediente que dá o toque especial a esta receita.",
      hints: ["É um cogumelo", "Tem sabor sofisticado"]
    },
    {
      id: 9,
      type: "fill-in",
      recipeName: "Fettuccine ao Molho Queijos, Calabresa, Cogumelo",
      question: "Fettuccine ao Molho Queijos, Calabresa, Cogumelo leva quantas pegadas de Calabresa?",
      correctAnswer: "2",
      explanation: "São 2 pegadas de Calabresa nesta receita.",
      hints: ["Número par", "Número pequeno"]
    },
    {
      id: 10,
      type: "fill-in",
      recipeName: "Penne Bolognesa e Bacon",
      question: "Penne Bolognesa e Bacon é feita com Cebola, Alho, Bacon e o que mais?",
      correctAnswer: "Calabresa",
      explanation: "Calabresa é o complemento que dá sabor defumado a esta receita.",
      hints: ["Começa com C", "É uma carne processada"]
    },
    {
      id: 11,
      type: "fill-in",
      recipeName: "Penne Frango e Bacon",
      question: "Penne Frango e Bacon é feita com Bacon, Frango Desfiado, Tomate em Cubos e o que mais?",
      correctAnswer: "Calabresa",
      explanation: "Calabresa complementa os sabores de frango e bacon.",
      hints: ["Começa com C", "É uma carne processada"]
    },
    {
      id: 12,
      type: "fill-in",
      recipeName: "Penne Frango Assado",
      question: "Penne Frango Assado é feita com Frango Assado, Tomate em Cubos e o que mais?",
      correctAnswer: "Alho Poró",
      explanation: "Alho Poró adiciona sabor e textura a esta receita.",
      hints: ["É um legume", "Começa com A"]
    },
    {
      id: 13,
      type: "fill-in",
      recipeName: "Penne ao Pomodoro, Manjericão",
      question: "Penne ao Pomodoro, Manjericão leva Queijo Parmesão, Alho Assado, Cebola Refogada, Manjericão, Molho Pomodoro, Queijo Mozzarela Ralada e o que mais?",
      correctAnswer: "Tomate em Cubos",
      explanation: "Tomate em Cubos complementa o molho pomodoro com textura fresca.",
      hints: ["É um tomate", "Começa com T"]
    },
    {
      id: 14,
      type: "fill-in",
      recipeName: "Spaghetti Carbonara",
      question: "Spaghetti Carbonara é feita com Bacon, Ovo e o que mais?",
      correctAnswer: "Queijo Parmesão",
      explanation: "Queijo Parmesão é essencial para criar o molho cremoso da Carbonara.",
      hints: ["É um queijo", "Começa com Q"]
    },
    {
      id: 15,
      type: "fill-in",
      recipeName: "Spaghetti Bolognesa e Bacon",
      question: "Spaghetti Bolognesa e Bacon é feita com Cebola, Alho, Bacon, Molho Bolognesa e o que mais?",
      correctAnswer: "Milho",
      explanation: "Milho adiciona doçura e textura a esta receita.",
      hints: ["É um legume", "Começa com M"]
    },
    {
      id: 16,
      type: "fill-in",
      recipeName: "Farfalle Frango e Cogumelo",
      question: "Farfalle Frango e Cogumelo é feita com Frango e qual outro ingrediente especial?",
      correctAnswer: "Cogumelo Trufado",
      explanation: "Cogumelo Trufado dá sofisticação a esta receita.",
      hints: ["É um cogumelo", "Tem sabor especial"]
    },
    {
      id: 17,
      type: "fill-in",
      recipeName: "Farfalle ao Molho Branco, Presunto e Alho Poró",
      question: "Farfalle ao Molho Branco, Presunto e Alho Poró leva Alho Poró, Alho Assado, Cebola Refogada, Ovo de Codorna, Molho Branco e o que mais?",
      correctAnswer: "Presunto",
      explanation: "Presunto é o complemento proteico que dá sabor a esta receita.",
      hints: ["É uma proteína", "Começa com P"]
    },
    {
      id: 18,
      type: "fill-in",
      recipeName: "Farfalle ao Molho Branco, Presunto e Alho Poró",
      question: "Quantas pegadas de Ovo de Codorna são usadas nesta receita?",
      correctAnswer: "2",
      explanation: "São 2 pegadas de Ovo de Codorna.",
      hints: ["Número par", "Número pequeno"]
    },
    {
      id: 19,
      type: "fill-in",
      recipeName: "Gnocchi Bolognesa Clássico",
      question: "Gnocchi Bolognesa Clássico é uma receita simples com Gnocchi e qual outro ingrediente?",
      correctAnswer: "Molho Bolognesa",
      explanation: "Apenas Gnocchi e Molho Bolognesa formam esta receita clássica.",
      hints: ["É um molho", "Começa com M"]
    },
    {
      id: 20,
      type: "fill-in",
      recipeName: "Pizza Alho Poró e Gorgonzola",
      question: "Pizza Alho Poró e Gorgonzola leva Pizza Mozzarela, Parmesão, Alho Poró, Cebola, Gorgonzola e o que mais?",
      correctAnswer: "Ricota",
      explanation: "Ricota adiciona cremosidade e sabor a esta pizza.",
      hints: ["É um queijo", "Começa com R"]
    },
    {
      id: 21,
      type: "fill-in",
      recipeName: "Pizza Alho Poró e Gorgonzola",
      question: "Quantas pegadas de Alho Poró são usadas nesta pizza?",
      correctAnswer: "2",
      explanation: "São 2 pegadas de Alho Poró.",
      hints: ["Número par", "Número pequeno"]
    },
    {
      id: 22,
      type: "fill-in",
      recipeName: "Escalope à Milanesa",
      question: "Escalope à Milanesa é empanado com Ovo e qual outro ingrediente?",
      correctAnswer: "Farinha de Trigo",
      explanation: "Farinha de Trigo é essencial para criar a cobertura crocante.",
      hints: ["É uma farinha", "Começa com F"]
    },
    {
      id: 23,
      type: "fill-in",
      recipeName: "Escalope à Milanesa",
      question: "Quantos gramas tem cada escalope?",
      correctAnswer: "40",
      explanation: "Cada escalope pesa 40 gramas.",
      hints: ["Número redondo", "Começa com 4"]
    },
    {
      id: 24,
      type: "fill-in",
      recipeName: "Frango Parmegiana",
      question: "Frango Parmegiana é feito com Molho Pomodoro, Queijo Mozzarela e qual outro ingrediente?",
      correctAnswer: "Queijo Parmesão",
      explanation: "Queijo Parmesão complementa o Mozzarela para criar a cobertura perfeita.",
      hints: ["É um queijo", "Começa com Q"]
    },
    {
      id: 25,
      type: "fill-in",
      recipeName: "Camarão ao Molho",
      question: "Camarão ao Molho é feito com Alho Assado e qual outro ingrediente?",
      correctAnswer: "Cebolinha",
      explanation: "Cebolinha adiciona sabor fresco e aromático.",
      hints: ["É uma erva", "Começa com C"]
    },
    {
      id: 26,
      type: "fill-in",
      recipeName: "Tilápia Grelhada",
      question: "Tilápia Grelhada é feita com Azeite, Limão e qual outro ingrediente?",
      correctAnswer: "Sal e Pimenta",
      explanation: "Sal e Pimenta são os temperos essenciais para realçar o sabor do peixe.",
      hints: ["São temperos", "Começa com S"]
    },
    {
      id: 27,
      type: "fill-in",
      recipeName: "Risotto de Frango",
      question: "Risotto de Frango é feito com Arroz, Caldo de Carne, Cebola, Vinho Branco e qual outro ingrediente?",
      correctAnswer: "Frango",
      explanation: "Frango é a proteína que dá nome e sabor a este prato.",
      hints: ["É uma proteína", "Começa com F"]
    },
    {
      id: 28,
      type: "fill-in",
      recipeName: "Pizza Margherita",
      question: "Pizza Margherita é feita com Queijo Mozzarela e qual outro ingrediente?",
      correctAnswer: "Manjericão",
      explanation: "Manjericão é essencial para a autêntica Pizza Margherita.",
      hints: ["É uma erva", "Começa com M"]
    },
    {
      id: 29,
      type: "fill-in",
      recipeName: "Pizza Calabresa",
      question: "Pizza Calabresa é feita com Calabresa e qual outro ingrediente?",
      correctAnswer: "Queijo Mozzarela",
      explanation: "Queijo Mozzarela é o complemento perfeito para a calabresa.",
      hints: ["É um queijo", "Começa com Q"]
    },
    {
      id: 30,
      type: "fill-in",
      recipeName: "Filé de Frango",
      question: "Quantas gramas pesa um Filé de Frango?",
      correctAnswer: "120",
      explanation: "Filé de Frango pesa 120 gramas quando preparado.",
      hints: ["Número entre 100 e 150", "Começa com 1"]
    },
    {
      id: 31,
      type: "fill-in",
      recipeName: "Mix de Folhas",
      question: "Quantas gramas tem uma porção de Mix de Folhas?",
      correctAnswer: "90",
      explanation: "Mix de Folhas pesa 90 gramas por porção.",
      hints: ["Número entre 80 e 100", "Começa com 9"]
    },
    {
      id: 32,
      type: "fill-in",
      recipeName: "Escalope",
      question: "Quantos gramas tem o total de 3 escalopes de 40gr cada?",
      correctAnswer: "120",
      explanation: "3 escalopes de 40 gramas cada totalizam 120 gramas.",
      hints: ["Número entre 100 e 150", "Começa com 1"]
    },
    {
      id: 33,
      type: "fill-in",
      recipeName: "Tiras de Carne",
      question: "Quantas gramas tem cada pacote de Tiras de Carne?",
      correctAnswer: "60",
      explanation: "Cada pacote de Tiras de Carne pesa 60 gramas.",
      hints: ["Número redondo", "Começa com 6"]
    },
    {
      id: 34,
      type: "fill-in",
      recipeName: "Tiras de Frango",
      question: "Quantas gramas pesam as Tiras de Frango?",
      correctAnswer: "75",
      explanation: "Tiras de Frango pesam 75 gramas.",
      hints: ["Número entre 70 e 80", "Começa com 7"]
    },
    {
      id: 35,
      type: "fill-in",
      recipeName: "Fettuccine Allegro",
      question: "Quantas pegadas de Ovo de Codorna são usadas?",
      correctAnswer: "1",
      explanation: "Uma pegada de Ovo de Codorna é usada nesta receita.",
      hints: ["Número pequeno", "Número primo"]
    },
    {
      id: 36,
      type: "fill-in",
      recipeName: "Penne Bolognesa e Bacon",
      question: "Quantas pegadas de Bacon são usadas?",
      correctAnswer: "1",
      explanation: "Uma pegada de Bacon complementa a receita.",
      hints: ["Número pequeno", "Número primo"]
    },
    {
      id: 37,
      type: "fill-in",
      recipeName: "Spaghetti Bolognesa e Bacon",
      question: "Quantas pegadas de Bacon são usadas?",
      correctAnswer: "1",
      explanation: "Uma pegada de Bacon complementa a receita.",
      hints: ["Número pequeno", "Número primo"]
    },
    {
      id: 38,
      type: "fill-in",
      recipeName: "Fettuccine Marinara e Parmegiana",
      question: "Fettuccine Marinara e Parmegiana leva qual molho?",
      correctAnswer: "Molho Marinara",
      explanation: "Molho Marinara é a base desta receita italiana.",
      hints: ["É um molho", "Começa com M"]
    },
    {
      id: 39,
      type: "fill-in",
      recipeName: "Fettuccine Gorgonzola e Parmegiana",
      question: "Fettuccine Gorgonzola e Parmegiana leva qual queijo especial?",
      correctAnswer: "Gorgonzola",
      explanation: "Gorgonzola é o queijo azul que dá sabor único a esta receita.",
      hints: ["É um queijo", "Começa com G"]
    },
    {
      id: 40,
      type: "fill-in",
      recipeName: "Penne Frango Assado",
      question: "Quantas pegadas de Tomate em Cubos são usadas?",
      correctAnswer: "1",
      explanation: "Uma pegada de Tomate em Cubos complementa a receita.",
      hints: ["Número pequeno", "Número primo"]
    },
    {
      id: 41,
      type: "fill-in",
      recipeName: "Farfalle Bolognesa",
      question: "Farfalle Bolognesa leva qual tipo de molho?",
      correctAnswer: "Molho Bolognesa",
      explanation: "Molho Bolognesa é a base desta receita clássica.",
      hints: ["É um molho", "Começa com M"]
    },
    {
      id: 42,
      type: "fill-in",
      recipeName: "Gnocchi Molho Branco",
      question: "Gnocchi Molho Branco leva qual tipo de molho?",
      correctAnswer: "Molho Branco",
      explanation: "Molho Branco é a base desta receita cremosa.",
      hints: ["É um molho", "Começa com M"]
    },
    {
      id: 43,
      type: "fill-in",
      recipeName: "Gnocchi Gorgonzola",
      question: "Gnocchi Gorgonzola leva qual queijo especial?",
      correctAnswer: "Gorgonzola",
      explanation: "Gorgonzola é o queijo azul que dá sabor único.",
      hints: ["É um queijo", "Começa com G"]
    },
    {
      id: 44,
      type: "fill-in",
      recipeName: "Gnocchi Molho Queijos",
      question: "Gnocchi Molho Queijos leva qual tipo de molho?",
      correctAnswer: "Molho Queijos",
      explanation: "Molho Queijos é a base desta receita cremosa e saborosa.",
      hints: ["É um molho", "Começa com M"]
    },
    {
      id: 45,
      type: "fill-in",
      recipeName: "Rigatoni Bolognesa",
      question: "Rigatoni Bolognesa leva qual tipo de molho?",
      correctAnswer: "Molho Bolognesa",
      explanation: "Molho Bolognesa é a base desta receita.",
      hints: ["É um molho", "Começa com M"]
    },
    {
      id: 46,
      type: "fill-in",
      recipeName: "Frango Molho Branco",
      question: "Frango Molho Branco leva qual tipo de molho?",
      correctAnswer: "Molho Branco",
      explanation: "Molho Branco é a base desta receita cremosa.",
      hints: ["É um molho", "Começa com M"]
    },
    {
      id: 47,
      type: "fill-in",
      recipeName: "Frango Gorgonzola",
      question: "Frango Gorgonzola leva qual queijo especial?",
      correctAnswer: "Gorgonzola",
      explanation: "Gorgonzola é o queijo azul que dá sabor único.",
      hints: ["É um queijo", "Começa com G"]
    },
    {
      id: 48,
      type: "fill-in",
      recipeName: "Tilápia Molho Branco",
      question: "Tilápia Molho Branco leva qual tipo de molho?",
      correctAnswer: "Molho Branco",
      explanation: "Molho Branco é a base desta receita cremosa.",
      hints: ["É um molho", "Começa com M"]
    },
    {
      id: 49,
      type: "fill-in",
      recipeName: "Penne com Camarão",
      question: "Penne com Camarão leva qual proteína?",
      correctAnswer: "Camarão",
      explanation: "Camarão é a proteína principal desta receita.",
      hints: ["É um fruto do mar", "Começa com C"]
    },
    {
      id: 50,
      type: "fill-in",
      recipeName: "Penne Frango Marinado",
      question: "Penne Frango Marinado leva qual tipo de frango?",
      correctAnswer: "Frango Marinado",
      explanation: "Frango Marinado é a proteína que dá sabor especial.",
      hints: ["É um frango", "Começa com F"]
    },

    // PERGUNTAS DE MÚLTIPLA ESCOLHA - 20 PERGUNTAS
    {
      id: 51,
      type: "multiple-choice",
      recipeName: "Fettuccine Alfredo com Tiras de Frango",
      question: "Quais são os ingredientes principais da Fettuccine Alfredo com Tiras de Frango além da massa?",
      options: ["Bacon e Calabresa", "Tiras de Frango", "Ovo de Codorna e Presunto", "Camarão e Cogumelo"],
      correctAnswer: 1,
      explanation: "A receita é simples e elegante: Fettuccine, Molho Alfredo e Tiras de Frango."
    },
    {
      id: 52,
      type: "multiple-choice",
      recipeName: "Fettuccine ao Molho Queijos, Calabresa, Cogumelo",
      question: "Quais ingredientes complementam a Fettuccine ao Molho Queijos?",
      options: ["Cogumelo Trufado e Calabresa", "Bacon e Presunto", "Camarão e Ricota", "Brócolis e Cenoura"],
      correctAnswer: 0,
      explanation: "Cogumelo Trufado e Calabresa são os complementos principais."
    },
    {
      id: 53,
      type: "multiple-choice",
      recipeName: "Penne ao Pomodoro, Manjericão",
      question: "Quais ingredientes complementam a Penne ao Pomodoro?",
      options: ["Manjericão e Tomate em Cubos", "Bacon e Calabresa", "Camarão e Presunto", "Brócolis e Alho Poró"],
      correctAnswer: 0,
      explanation: "Manjericão e Tomate em Cubos complementam o molho pomodoro."
    },
    {
      id: 54,
      type: "multiple-choice",
      recipeName: "Spaghetti Bolognesa e Bacon",
      question: "Quais ingredientes complementam a Spaghetti Bolognesa e Bacon?",
      options: ["Bacon e Milho", "Frango e Tomate", "Camarão e Presunto", "Brócolis e Cenoura"],
      correctAnswer: 0,
      explanation: "Bacon e Milho complementam o molho bolognesa."
    },
    {
      id: 55,
      type: "multiple-choice",
      recipeName: "Farfalle ao Molho Branco, Presunto e Alho Poró",
      question: "Quais ingredientes complementam a Farfalle ao Molho Branco?",
      options: ["Presunto e Alho Poró", "Bacon e Calabresa", "Camarão e Cogumelo", "Brócolis e Cenoura"],
      correctAnswer: 0,
      explanation: "Presunto e Alho Poró são os complementos principais."
    },
    {
      id: 56,
      type: "multiple-choice",
      recipeName: "Pizza Alho Poró e Gorgonzola",
      question: "Quais ingredientes complementam a Pizza Alho Poró e Gorgonzola?",
      options: ["Alho Poró, Gorgonzola e Ricota", "Bacon e Calabresa", "Camarão e Presunto", "Brócolis e Cenoura"],
      correctAnswer: 0,
      explanation: "Alho Poró, Gorgonzola e Ricota são os complementos principais."
    },
    {
      id: 57,
      type: "multiple-choice",
      recipeName: "Escalope à Milanesa",
      question: "Como o Escalope à Milanesa é preparado?",
      options: ["Empanado com Ovo e Farinha de Trigo", "Marinado e assado", "Cozido em molho", "Grelhado com limão"],
      correctAnswer: 0,
      explanation: "Escalope à Milanesa é empanado com Ovo e Farinha de Trigo."
    },
    {
      id: 58,
      type: "multiple-choice",
      recipeName: "Frango Parmegiana",
      question: "Qual é a composição da Frango Parmegiana?",
      options: ["Frango, Molho Pomodoro, Queijo Mozzarela e Parmesão", "Frango, Molho Alfredo e Bacon", "Frango, Molho Branco e Cogumelo", "Frango, Azeite e Limão"],
      correctAnswer: 0,
      explanation: "Frango Parmegiana tem Molho Pomodoro e Queijos como base."
    },
    {
      id: 59,
      type: "multiple-choice",
      recipeName: "Camarão ao Molho",
      question: "Quais ingredientes complementam o Camarão ao Molho?",
      options: ["Alho Assado e Cebolinha", "Bacon e Calabresa", "Presunto e Ricota", "Brócolis e Cenoura"],
      correctAnswer: 0,
      explanation: "Alho Assado e Cebolinha complementam o camarão."
    },
    {
      id: 60,
      type: "multiple-choice",
      recipeName: "Tilápia Grelhada",
      question: "Quais ingredientes tem a Tilápia Grelhada?",
      options: ["Tilápia, Azeite, Limão, Sal e Pimenta", "Tilápia, Molho Branco e Cogumelo", "Tilápia, Molho Pomodoro e Tomate", "Tilápia, Bacon e Calabresa"],
      correctAnswer: 0,
      explanation: "Tilápia Grelhada é simples: Tilápia, Azeite, Limão, Sal e Pimenta."
    },
    {
      id: 61,
      type: "multiple-choice",
      recipeName: "Risotto de Frango",
      question: "Qual é a composição básica do Risotto de Frango?",
      options: ["Arroz, Caldo de Carne, Cebola, Vinho Branco e Frango", "Arroz, Caldo de Frango, Bacon e Tomate", "Arroz, Caldo de Carne, Molho Pomodoro", "Arroz, Azeite e Limão"],
      correctAnswer: 0,
      explanation: "Risotto de Frango tem Arroz, Caldo, Cebola, Vinho e Frango."
    },
    {
      id: 62,
      type: "multiple-choice",
      recipeName: "Pizza Margherita",
      question: "Quais ingredientes tem a Pizza Margherita?",
      options: ["Massa, Queijo Mozzarela e Manjericão", "Massa, Molho Alfredo e Bacon", "Massa, Molho Branco e Frango", "Massa, Calabresa e Queijo"],
      correctAnswer: 0,
      explanation: "Pizza Margherita tem Massa, Queijo Mozzarela e Manjericão."
    },
    {
      id: 63,
      type: "multiple-choice",
      recipeName: "Pizza Calabresa",
      question: "Quais ingredientes tem a Pizza Calabresa?",
      options: ["Calabresa e Queijo Mozzarela", "Bacon e Presunto", "Camarão e Cogumelo", "Brócolis e Cenoura"],
      correctAnswer: 0,
      explanation: "Pizza Calabresa tem Calabresa e Queijo Mozzarela."
    },
    {
      id: 64,
      type: "multiple-choice",
      recipeName: "Fettuccine Allegro",
      question: "Qual tipo de ingrediente é o Ovo de Codorna?",
      options: ["Proteína", "Legume", "Erva", "Molho"],
      correctAnswer: 0,
      explanation: "Ovo de Codorna é uma proteína."
    },
    {
      id: 65,
      type: "multiple-choice",
      recipeName: "Penne Frango e Bacon",
      question: "Quais proteínas tem a Penne Frango e Bacon?",
      options: ["Bacon, Frango Desfiado e Calabresa", "Camarão, Presunto e Ricota", "Tilápia, Escalope e Ovo", "Presunto, Cogumelo e Cebolinha"],
      correctAnswer: 0,
      explanation: "Bacon, Frango Desfiado e Calabresa são as proteínas."
    },
    {
      id: 66,
      type: "multiple-choice",
      recipeName: "Farfalle Frango e Cogumelo",
      question: "Quais ingredientes complementam a Farfalle Frango e Cogumelo?",
      options: ["Frango e Cogumelo Trufado", "Bacon e Calabresa", "Camarão e Presunto", "Brócolis e Cenoura"],
      correctAnswer: 0,
      explanation: "Frango e Cogumelo Trufado são os complementos."
    },
    {
      id: 67,
      type: "multiple-choice",
      recipeName: "Gnocchi Bolognesa Clássico",
      question: "O Gnocchi Bolognesa Clássico é uma receita simples com quais ingredientes?",
      options: ["Gnocchi e Molho Bolognesa", "Gnocchi, Bacon e Calabresa", "Gnocchi, Camarão e Presunto", "Gnocchi, Brócolis e Cenoura"],
      correctAnswer: 0,
      explanation: "Gnocchi Bolognesa Clássico tem apenas Gnocchi e Molho Bolognesa."
    },
    {
      id: 68,
      type: "multiple-choice",
      recipeName: "Fettuccine Molho Branco com Tiras de Frango",
      question: "Quais ingredientes complementam a Fettuccine Molho Branco?",
      options: ["Pesto, Queijo Parmesão, Tomate em Cubos e Manjericão", "Bacon, Calabresa e Ovo", "Camarão, Presunto e Ricota", "Brócolis, Cenoura e Alho Poró"],
      correctAnswer: 0,
      explanation: "Pesto, Queijo Parmesão, Tomate em Cubos e Manjericão complementam."
    },
    {
      id: 69,
      type: "multiple-choice",
      recipeName: "Fettuccine Alfredo com Cogumelo",
      question: "Qual ingrediente especial tem a Fettuccine Alfredo com Cogumelo?",
      options: ["Cogumelo Trufado", "Bacon", "Camarão", "Presunto"],
      correctAnswer: 0,
      explanation: "Cogumelo Trufado é o ingrediente especial."
    },
    {
      id: 70,
      type: "multiple-choice",
      recipeName: "Penne com Camarão",
      question: "Qual proteína tem a Penne com Camarão?",
      options: ["Camarão", "Frango", "Bacon", "Presunto"],
      correctAnswer: 0,
      explanation: "Camarão é a proteína principal desta receita."
    }
  ]
};

export function getRandomRecipeQuizzes(count = 20) {
  const fillInQuestions = recipeQuizzes.receitas.filter(q => q.type === 'fill-in');
  const multipleChoiceQuestions = recipeQuizzes.receitas.filter(q => q.type === 'multiple-choice');
  
  // Garantir que pelo menos 12 sejam de completar ingredientes
  const minFillIn = Math.max(12, Math.ceil(count * 0.6));
  const maxMultipleChoice = count - minFillIn;
  
  const selectedFillIn = [];
  const selectedMultipleChoice = [];
  
  // Selecionar perguntas de completar
  for (let i = 0; i < minFillIn && fillInQuestions.length > 0; i++) {
    const randomIndex = Math.floor(Math.random() * fillInQuestions.length);
    selectedFillIn.push(fillInQuestions[randomIndex]);
    fillInQuestions.splice(randomIndex, 1);
  }
  
  // Selecionar perguntas de múltipla escolha
  for (let i = 0; i < maxMultipleChoice && multipleChoiceQuestions.length > 0; i++) {
    const randomIndex = Math.floor(Math.random() * multipleChoiceQuestions.length);
    selectedMultipleChoice.push(multipleChoiceQuestions[randomIndex]);
    multipleChoiceQuestions.splice(randomIndex, 1);
  }
  
  // Misturar as perguntas
  const allQuestions = [...selectedFillIn, ...selectedMultipleChoice];
  for (let i = allQuestions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [allQuestions[i], allQuestions[j]] = [allQuestions[j], allQuestions[i]];
  }
  
  return allQuestions.slice(0, count);
}
