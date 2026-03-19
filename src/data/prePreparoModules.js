export const prePreparoModules = [
  {
    id: 1,
    name: "Proteínas Marinadas",
    icon: "🍗",
    description: "Aprenda sobre as diferentes proteínas marinadas: frango, carne e camarão",
    lessons: [
      {
        id: 1,
        title: "Tiras de Frango",
        content: "Filé de peito marinado com vinho, pesto, sal, pimenta do reino, sálvia e alecrim. Misturar os temperos no mixer separadamente, depois misturar nos filés na GN. Marinar por 12 horas. Assar com sonda. Finalizado na frigideira.",
        cookingMethod: "Panela",
        recipeIds: [1]
      },
      {
        id: 2,
        title: "Filé de Frango",
        content: "Filé inteiro marinado com sal, vinho branco, pesto, alecrim, açúcar e alho CRU. Misturar os temperos no mixer e depois misturar nos filés na GN. Transferir para vazilha. Finalizado no forno.",
        cookingMethod: "Forno",
        recipeIds: [2]
      },
      {
        id: 3,
        title: "Escalope/Tiras de Carne",
        content: "Coração da alcatra ou filé mignon marinado com óleo, vinho tinto, sal, molho pesto e pimenta preta em pó. Misturar os temperos no mixer e depois misturar na carne. Marinar por 3 horas. Tiras na frigideira, escalope no forno.",
        cookingMethod: "Panela/Forno",
        recipeIds: [3]
      },
      {
        id: 4,
        title: "Camarão Marinado",
        content: "Camarão marinado com vinho branco, pesto, alho assado e sal. Marinar por 3 horas. Pode ser pré-assado no forno ou finalizado na hora.",
        cookingMethod: "Forno",
        recipeIds: [4]
      }
    ]
  },
  {
    id: 2,
    name: "Legumes e Vegetais",
    icon: "🥬",
    description: "Legumes frescos preparados para complementar os pratos",
    lessons: [
      {
        id: 1,
        title: "Mix de Vegetais",
        content: "Abobrinha e berinjelas cortadas, misturadas com azeite de bagaço, sal, pesto e alho assado. Preparado no forno ou fogão.",
        cookingMethod: "Forno/Fogão",
        recipeIds: [6]
      },
      {
        id: 2,
        title: "Alho Poró",
        content: "Alho poró cortado e temperado com azeite bagaço e sal. Preparado no fogão ou forno.",
        cookingMethod: "Fogão/Forno",
        recipeIds: [7]
      },
      {
        id: 3,
        title: "Brócolis",
        content: "Brócolis cortado em florets, temperado com azeite bagaço e sal. Preparado no forno ou fogão.",
        cookingMethod: "Forno/Fogão",
        recipeIds: [8]
      }
    ]
  },
  {
    id: 3,
    name: "Molhos e Preparos",
    icon: "🔥",
    description: "Molhos e preparos que enriquecem os pratos",
    lessons: [
      {
        id: 1,
        title: "Tomate Assado",
        content: "Tomate cortado, misturado com azeite de bagaço, açúcar, sal, alho assado e manjericão. Assado no forno.",
        cookingMethod: "Forno",
        recipeIds: [9]
      },
      {
        id: 2,
        title: "Ricota Temperada",
        content: "Ricota fresca misturada in natura com pimenta calabresa, oregano, salsa e sal.",
        cookingMethod: "Cru",
        recipeIds: [10]
      },
      {
        id: 3,
        title: "Pesto de Azeitona",
        content: "Azeitona preta (455g batida em pasta e 455g em pedaços), misturada com azeite de bagaço, mix de erva e alho assado.",
        cookingMethod: "Cru",
        recipeIds: [11]
      },
      {
        id: 4,
        title: "Cebola Caramelizada",
        content: "Cebola roxa caramelizada com azeite bagaço, açúcar, sal e vinho tinto. Preparada no forno ou fogão.",
        cookingMethod: "Forno/Fogão",
        recipeIds: [12]
      },
      {
        id: 5,
        title: "Cebola Refogada",
        content: "Cebola branca refogada em azeite bagaço com sal. Preparada no forno ou fogão.",
        cookingMethod: "Forno/Fogão",
        recipeIds: [13]
      },
      {
        id: 6,
        title: "Alho Assado",
        content: "Alho descascado assado no forno com azeite bagaço e sal. Fica macio e doce.",
        cookingMethod: "Forno",
        recipeIds: [14]
      },
      {
        id: 7,
        title: "Farofa de Torradas",
        content: "Torradas batidas no mixer com pesto, formando uma farofa crocante.",
        cookingMethod: "Cru",
        recipeIds: [15]
      }
    ]
  },
  {
    id: 4,
    name: "Preparos Especiais",
    icon: "👨‍🍳",
    description: "Preparos especiais e bases para pratos",
    lessons: [
      {
        id: 1,
        title: "Risotto",
        content: "Risotto preparado com arroz, vinho branco, água, cebola, cenoura, sal e cebolinha. Preparado no forno ou panela elétrica.",
        cookingMethod: "Forno/Panela",
        recipeIds: [16]
      },
      {
        id: 2,
        title: "Frango Desfiado",
        content: "Frango pré-cozido e desfiado, temperado com azeite de bagaço e pimenta do reino. Pré-preparo no forno.",
        cookingMethod: "Forno",
        recipeIds: [5]
      },
      {
        id: 3,
        title: "Ovo em Pó",
        content: "Ovo em pó hidratado com água filtrada, misturado com garfo ou mixer.",
        cookingMethod: "Cru",
        recipeIds: [17]
      }
    ]
  },
  {
    id: 5,
    name: "Formas de Preparo",
    icon: "🔄",
    description: "Aprenda os diferentes métodos de cozimento",
    lessons: [
      {
        id: 1,
        title: "Preparos no Forno",
        content: "Ingredientes assados no forno: Filé de Frango, Camarão Marinado, Frango Desfiado, Tomate Assado, Alho Assado, Mix de Vegetais, Brócolis, Alho Poró, Cebola Caramelizada, Cebola Refogada, Risotto. Temperatura geralmente entre 180°C e 200°C.",
        cookingMethod: "Forno",
        recipeIds: [2, 4, 5, 9, 14, 6, 8, 7, 12, 13, 16]
      },
      {
        id: 2,
        title: "Preparos na Panela/Frigideira",
        content: "Ingredientes finalizados na panela ou frigideira: Tiras de Frango, Escalope/Tiras de Carne. Estes ficam crocantes por fora e macios por dentro.",
        cookingMethod: "Panela",
        recipeIds: [1, 3]
      },
      {
        id: 3,
        title: "Preparos Crus",
        content: "Ingredientes preparados crus: Ricota Temperada, Pesto de Azeitona, Farofa de Torradas, Ovo em Pó. Estes mantêm suas características naturais e frescas.",
        cookingMethod: "Cru",
        recipeIds: [10, 11, 15, 17]
      }
    ]
  }
];
