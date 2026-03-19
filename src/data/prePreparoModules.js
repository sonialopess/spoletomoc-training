export const prePreparoModules = [
  {
    id: 1,
    name: "Proteínas Marinadas",
    icon: "🍗",
    description: "Aprenda sobre as diferentes proteínas marinadas: frango, carne e camarão",
    lessons: [
      {
        id: 1,
        title: "Filé de Frango Marinado",
        content: "Base para grelhado, parmegiana e milanesa. Preparado com açúcar, alho, alecrim, vinho branco, molho pesto e sal. Marinado por no mínimo 3 horas.",
        cookingMethod: "Forno",
        recipeIds: [1]
      },
      {
        id: 2,
        title: "Filé de Peito Marinado",
        content: "Para frango em tiras. Mesmo tempero do filé de frango, mas em filés de peito. Finalizado na panela.",
        cookingMethod: "Panela",
        recipeIds: [2]
      },
      {
        id: 3,
        title: "Coração da Alcatra",
        content: "Carne de qualidade para tiras e escalope. Temperada com sal e pimenta. Finalizada na panela.",
        cookingMethod: "Panela",
        recipeIds: [5]
      },
      {
        id: 4,
        title: "Camarão Marinado",
        content: "Duas opções: finalização na frigideira ou no forno. Marinado com alho, sal, azeite e pimenta.",
        cookingMethod: "Panela/Forno",
        recipeIds: [8, 9]
      }
    ]
  },
  {
    id: 2,
    name: "Legumes Crus",
    icon: "🥬",
    description: "Legumes frescos e crus para complementar os pratos",
    lessons: [
      {
        id: 1,
        title: "Mix de Legumes",
        content: "Abobrinha e berinjela cortadas em cubos, misturadas com sal, pesto, alho assado e cebola refogada. Servido cru.",
        cookingMethod: "Cru",
        recipeIds: [10]
      },
      {
        id: 2,
        title: "Cenoura Ralada",
        content: "Cenoura fresca ralada e temperada com sal. Simples e nutritivo.",
        cookingMethod: "Cru",
        recipeIds: [11]
      },
      {
        id: 3,
        title: "Alho Poró",
        content: "Alho poró cortado em rodelas finas e temperado com sal. Adiciona sabor suave.",
        cookingMethod: "Cru",
        recipeIds: [12]
      },
      {
        id: 4,
        title: "Brócolis",
        content: "Brócolis cortado em florets pequenos e temperado com sal. Crocante e saudável.",
        cookingMethod: "Cru",
        recipeIds: [13]
      },
      {
        id: 5,
        title: "Tomate em Cubos",
        content: "Tomate fresco cortado em cubos pequenos e temperado com sal. Deve ser usado no mesmo dia.",
        cookingMethod: "Cru",
        recipeIds: [14]
      }
    ]
  },
  {
    id: 3,
    name: "Ingredientes Assados",
    icon: "🔥",
    description: "Ingredientes preparados no forno com sabor intenso",
    lessons: [
      {
        id: 1,
        title: "Cogumelos Assado Forno",
        content: "Cogumelos cortados em fatias, temperados com azeite, alho e sal. Assados a 180°C por 15 minutos.",
        cookingMethod: "Forno",
        recipeIds: [16]
      },
      {
        id: 2,
        title: "Bacon Assado",
        content: "Bacon crocante assado no forno a 200°C até ficar bem crocante (aproximadamente 15 minutos).",
        cookingMethod: "Forno",
        recipeIds: [17]
      },
      {
        id: 3,
        title: "Calabresa Assada",
        content: "Calabresa cortada em rodelas e assada no forno a 180°C por 10 minutos. Fica crocante e saborosa.",
        cookingMethod: "Forno",
        recipeIds: [18]
      },
      {
        id: 4,
        title: "Tomate Assado",
        content: "Tomate cortado ao meio, temperado com azeite, alho e sal. Assado a 180°C por 20 minutos.",
        cookingMethod: "Forno",
        recipeIds: [19]
      },
      {
        id: 5,
        title: "Alho Assado",
        content: "Alho descascado, temperado com azeite e sal. Assado a 180°C por 30 minutos. Fica macio e doce.",
        cookingMethod: "Forno",
        recipeIds: [20]
      },
      {
        id: 6,
        title: "Cebola Refogada",
        content: "Cebola em tiras finas, refogada em azeite quente até ficar macia e levemente dourada.",
        cookingMethod: "Panela",
        recipeIds: [21]
      }
    ]
  },
  {
    id: 4,
    name: "Queijos e Laticínios",
    icon: "🧀",
    description: "Diferentes tipos de queijos e laticínios para enriquecer os pratos",
    lessons: [
      {
        id: 1,
        title: "Gorgonzola",
        content: "Queijo gorgonzola cortado em cubos pequenos. Sabor forte e característico. Servido cru.",
        cookingMethod: "Cru",
        recipeIds: [22]
      },
      {
        id: 2,
        title: "Ricota Temperada",
        content: "Ricota misturada com sal, pimenta e manjericão. Fresco e leve.",
        cookingMethod: "Cru",
        recipeIds: [23]
      },
      {
        id: 3,
        title: "Mussarela",
        content: "Mussarela cortada em cubos pequenos. Suave e versátil.",
        cookingMethod: "Cru",
        recipeIds: [24]
      },
      {
        id: 4,
        title: "Ovo de Codorna",
        content: "Ovo de codorna cozido em água fervente por 3 minutos, depois descascado. Pequeno e delicado.",
        cookingMethod: "Panela",
        recipeIds: [25]
      },
      {
        id: 5,
        title: "Mozzarella de Búfula",
        content: "Mozzarella de búfula fresca, servida em temperatura ambiente. Cremosa e delicada.",
        cookingMethod: "Cru",
        recipeIds: [26]
      }
    ]
  },
  {
    id: 5,
    name: "Complementos e Extras",
    icon: "✨",
    description: "Ingredientes complementares que enriquecem os pratos",
    lessons: [
      {
        id: 1,
        title: "Presunto Ralado",
        content: "Presunto ralado em ralador fino. Adiciona sabor salgado e textura.",
        cookingMethod: "Cru",
        recipeIds: [27]
      },
      {
        id: 2,
        title: "Peito de Peru",
        content: "Peito de peru fatiado em fatias finas. Leve e saudável.",
        cookingMethod: "Cru",
        recipeIds: [28]
      },
      {
        id: 3,
        title: "Pesto de Azeitona Preta",
        content: "Pesto feito com azeitona preta, azeite, alho e sal. Sabor intenso e marcante.",
        cookingMethod: "Cru",
        recipeIds: [29]
      },
      {
        id: 4,
        title: "Espinafre",
        content: "Espinafre fresco, lavado, picado e temperado com sal. Nutritivo e saudável.",
        cookingMethod: "Cru",
        recipeIds: [30]
      },
      {
        id: 5,
        title: "Frango Desfiado",
        content: "Frango pré-cozido e desfiado. Pode ser aquecido ou servido cru conforme necessário.",
        cookingMethod: "Cru",
        recipeIds: [3]
      }
    ]
  },
  {
    id: 6,
    name: "Formas de Preparo",
    icon: "👨‍🍳",
    description: "Aprenda os diferentes métodos de cozimento",
    lessons: [
      {
        id: 1,
        title: "Preparos no Forno",
        content: "Ingredientes assados no forno: cogumelos, bacon, calabresa, tomate, alho, frango à milanesa, carne à milanesa, camarão (algumas variações). Temperatura geralmente entre 180°C e 200°C.",
        cookingMethod: "Forno",
        recipeIds: [1, 4, 6, 9, 16, 17, 18, 19, 20]
      },
      {
        id: 2,
        title: "Preparos na Panela",
        content: "Ingredientes refogados ou cozidos na panela: cebola refogada, ovo de codorna, filé de peito marinado, coração da alcatra, camarão (algumas variações).",
        cookingMethod: "Panela",
        recipeIds: [2, 5, 8, 21, 25]
      },
      {
        id: 3,
        title: "Preparos Crus",
        content: "Ingredientes servidos crus: mix de legumes, cenoura ralada, alho poró, brócolis, tomate em cubos, uvas passas, gorgonzola, ricota, mussarela, mozzarella, presunto, peito de peru, pesto, espinafre, frango desfiado.",
        cookingMethod: "Cru",
        recipeIds: [3, 10, 11, 12, 13, 14, 15, 22, 23, 24, 26, 27, 28, 29, 30]
      }
    ]
  }
];
