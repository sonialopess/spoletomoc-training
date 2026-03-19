export const prePreparoRecipes = [
  // PROTEÍNAS - FRANGO
  {
    id: 1,
    category: "Proteínas",
    subcategory: "Frango",
    name: "Filé de Frango Marinado",
    description: "Base para grelhado, parmegiana e milanesa",
    ingredients: [
      { quantity: "1,2 kg (10 un)", item: "Filé de frango gramaturado" },
      { quantity: "24g", item: "Açúcar" },
      { quantity: "12g", item: "Alho in natura" },
      { quantity: "3g", item: "Alecrim" },
      { quantity: "36g", item: "Vinho branco" },
      { quantity: "60g", item: "Molho pesto" },
      { quantity: "20g", item: "Sal" }
    ],
    preparationMethod: "Misturar todos os ingredientes utilizando um mixer até formar uma mistura homogênea. Despejar a mistura sobre 1 kg de peito de frango, envolvendo bem todos os filés. Transferir para um organizador com dreno, tampe e identifique com validade de 1 dia. Deixar marinar por no mínimo 3 horas.",
    cookingMethod: "Forno",
    storage: "Sob refrigeração: 0°C a 4°C",
    validity: "1 dia"
  },
  {
    id: 2,
    category: "Proteínas",
    subcategory: "Frango",
    name: "Filé de Peito Marinado",
    description: "Para frango em tiras",
    ingredients: [
      { quantity: "1,2 kg", item: "Filé de peito de frango" },
      { quantity: "24g", item: "Açúcar" },
      { quantity: "12g", item: "Alho in natura" },
      { quantity: "3g", item: "Alecrim" },
      { quantity: "36g", item: "Vinho branco" },
      { quantity: "60g", item: "Molho pesto" },
      { quantity: "20g", item: "Sal" }
    ],
    preparationMethod: "Misturar todos os ingredientes utilizando um mixer até formar uma mistura homogênea. Despejar a mistura sobre o filé de peito, envolvendo bem. Transferir para um organizador com dreno.",
    cookingMethod: "Panela",
    storage: "Sob refrigeração: 0°C a 4°C",
    validity: "1 dia"
  },
  {
    id: 3,
    category: "Proteínas",
    subcategory: "Frango",
    name: "Frango Desfiado",
    description: "Frango pré-cozido e desfiado",
    ingredients: [
      { quantity: "2 kg", item: "Peito de frango" },
      { quantity: "20g", item: "Sal" },
      { quantity: "10g", item: "Alho" }
    ],
    preparationMethod: "Cozinhar o frango em água com sal e alho até ficar macio. Deixar esfriar e desfilar com as mãos.",
    cookingMethod: "Cru",
    storage: "Sob refrigeração: 0°C a 4°C",
    validity: "2 dias"
  },
  {
    id: 4,
    category: "Proteínas",
    subcategory: "Frango",
    name: "Frango à Milanesa (Pré-assado)",
    description: "Para frango à milanesa e frango à parmegiana",
    ingredients: [
      { quantity: "1 kg", item: "Filé de frango" },
      { quantity: "200g", item: "Farinha de trigo" },
      { quantity: "3", item: "Ovos" },
      { quantity: "200g", item: "Pão ralado" },
      { quantity: "20g", item: "Sal" }
    ],
    preparationMethod: "Bater os filés, passar na farinha, depois no ovo e no pão ralado. Assar no forno até ficar crocante.",
    cookingMethod: "Forno",
    storage: "Sob refrigeração: 0°C a 4°C",
    validity: "1 dia"
  },

  // PROTEÍNAS - CARNE BOVINA
  {
    id: 5,
    category: "Proteínas",
    subcategory: "Carne Bovina",
    name: "Coração da Alcatra",
    description: "Para tiras e escalope",
    ingredients: [
      { quantity: "2 kg", item: "Coração da alcatra" },
      { quantity: "20g", item: "Sal" },
      { quantity: "10g", item: "Pimenta" }
    ],
    preparationMethod: "Cortar em tiras ou escalopes conforme necessário. Temperar com sal e pimenta.",
    cookingMethod: "Panela",
    storage: "Sob refrigeração: 0°C a 4°C",
    validity: "2 dias"
  },
  {
    id: 6,
    category: "Proteínas",
    subcategory: "Carne Bovina",
    name: "Contrafileto",
    description: "Carne de qualidade premium",
    ingredients: [
      { quantity: "2 kg", item: "Contrafileto" },
      { quantity: "20g", item: "Sal" },
      { quantity: "10g", item: "Alho" }
    ],
    preparationMethod: "Cortar em bifes ou tiras. Temperar com sal e alho.",
    cookingMethod: "Panela",
    storage: "Sob refrigeração: 0°C a 4°C",
    validity: "3 dias"
  },
  {
    id: 7,
    category: "Proteínas",
    subcategory: "Carne Bovina",
    name: "Carne à Milanesa",
    description: "Carne empanada",
    ingredients: [
      { quantity: "1 kg", item: "Carne" },
      { quantity: "200g", item: "Farinha de trigo" },
      { quantity: "3", item: "Ovos" },
      { quantity: "200g", item: "Pão ralado" },
      { quantity: "20g", item: "Sal" }
    ],
    preparationMethod: "Bater a carne, passar na farinha, depois no ovo e no pão ralado. Assar no forno.",
    cookingMethod: "Forno",
    storage: "Sob refrigeração: 0°C a 4°C",
    validity: "1 dia"
  },

  // PROTEÍNAS - CAMARÃO
  {
    id: 8,
    category: "Proteínas",
    subcategory: "Camarão",
    name: "Camarão Marinado (Finalização Frigideira)",
    description: "Camarão pré-marinado para finalizar na frigideira",
    ingredients: [
      { quantity: "1 kg", item: "Camarão" },
      { quantity: "30g", item: "Alho" },
      { quantity: "20g", item: "Sal" },
      { quantity: "50g", item: "Azeite" },
      { quantity: "10g", item: "Pimenta" }
    ],
    preparationMethod: "Misturar camarão com alho, sal, azeite e pimenta. Deixar marinar por 2 horas.",
    cookingMethod: "Panela",
    storage: "Sob refrigeração: 0°C a 4°C",
    validity: "1 dia"
  },
  {
    id: 9,
    category: "Proteínas",
    subcategory: "Camarão",
    name: "Camarão Marinado (Finalização Forno)",
    description: "Camarão pré-marinado para finalizar no forno",
    ingredients: [
      { quantity: "1 kg", item: "Camarão" },
      { quantity: "30g", item: "Alho" },
      { quantity: "20g", item: "Sal" },
      { quantity: "50g", item: "Azeite" },
      { quantity: "10g", item: "Pimenta" }
    ],
    preparationMethod: "Misturar camarão com alho, sal, azeite e pimenta. Deixar marinar por 2 horas.",
    cookingMethod: "Forno",
    storage: "Sob refrigeração: 0°C a 4°C",
    validity: "1 dia"
  },

  // PISTA FRIA - LEGUMES
  {
    id: 10,
    category: "Pista Fria",
    subcategory: "Legumes",
    name: "Mix de Legumes (Abobrinha e Berinjela)",
    description: "Legumes crus preparados",
    ingredients: [
      { quantity: "1 pegada", item: "Abobrinha" },
      { quantity: "1 pegada", item: "Berinjela" },
      { quantity: "1 pegada", item: "Sal" },
      { quantity: "1 pegada", item: "Pesto" },
      { quantity: "1 pegada", item: "Alho Assado" },
      { quantity: "1 pegada", item: "Cebola Refogada" }
    ],
    preparationMethod: "Cortar abobrinha e berinjela em cubos pequenos. Misturar com sal, pesto, alho assado e cebola refogada.",
    cookingMethod: "Cru",
    storage: "Sob refrigeração: 0°C a 4°C",
    validity: "1 dia"
  },
  {
    id: 11,
    category: "Pista Fria",
    subcategory: "Legumes",
    name: "Cenoura Ralada",
    description: "Cenoura ralada fresca",
    ingredients: [
      { quantity: "500g", item: "Cenoura" },
      { quantity: "5g", item: "Sal" }
    ],
    preparationMethod: "Ralar a cenoura e temperar com sal.",
    cookingMethod: "Cru",
    storage: "Sob refrigeração: 0°C a 4°C",
    validity: "2 dias"
  },
  {
    id: 12,
    category: "Pista Fria",
    subcategory: "Legumes",
    name: "Alho Poró",
    description: "Alho poró cortado",
    ingredients: [
      { quantity: "500g", item: "Alho Poró" },
      { quantity: "5g", item: "Sal" }
    ],
    preparationMethod: "Cortar o alho poró em rodelas finas e temperar com sal.",
    cookingMethod: "Cru",
    storage: "Sob refrigeração: 0°C a 4°C",
    validity: "2 dias"
  },
  {
    id: 13,
    category: "Pista Fria",
    subcategory: "Legumes",
    name: "Brócolis",
    description: "Brócolis cortado em florets",
    ingredients: [
      { quantity: "500g", item: "Brócolis" },
      { quantity: "5g", item: "Sal" }
    ],
    preparationMethod: "Cortar o brócolis em florets pequenos e temperar com sal.",
    cookingMethod: "Cru",
    storage: "Sob refrigeração: 0°C a 4°C",
    validity: "2 dias"
  },
  {
    id: 14,
    category: "Pista Fria",
    subcategory: "Legumes",
    name: "Tomate em Cubos",
    description: "Tomate fresco cortado em cubos",
    ingredients: [
      { quantity: "500g", item: "Tomate" },
      { quantity: "5g", item: "Sal" }
    ],
    preparationMethod: "Cortar o tomate em cubos pequenos e temperar com sal.",
    cookingMethod: "Cru",
    storage: "Sob refrigeração: 0°C a 4°C",
    validity: "1 dia"
  },
  {
    id: 15,
    category: "Pista Fria",
    subcategory: "Legumes",
    name: "Uvas Passas",
    description: "Uvas passas hidratadas",
    ingredients: [
      { quantity: "500g", item: "Uvas Passas" },
      { quantity: "200ml", item: "Água morna" }
    ],
    preparationMethod: "Deixar as uvas passas de molho em água morna por 30 minutos.",
    cookingMethod: "Cru",
    storage: "Sob refrigeração: 0°C a 4°C",
    validity: "3 dias"
  },

  // PISTA FRIA - INGREDIENTES ASSADOS
  {
    id: 16,
    category: "Pista Fria",
    subcategory: "Ingredientes Assados",
    name: "Cogumelos Assado Forno",
    description: "Cogumelos assados no forno",
    ingredients: [
      { quantity: "500g", item: "Cogumelos" },
      { quantity: "20g", item: "Azeite" },
      { quantity: "5g", item: "Alho" },
      { quantity: "5g", item: "Sal" }
    ],
    preparationMethod: "Limpar os cogumelos, cortar em fatias. Temperar com azeite, alho e sal. Assar no forno a 180°C por 15 minutos.",
    cookingMethod: "Forno",
    storage: "Sob refrigeração: 0°C a 4°C",
    validity: "2 dias"
  },
  {
    id: 17,
    category: "Pista Fria",
    subcategory: "Ingredientes Assados",
    name: "Bacon Assado",
    description: "Bacon crocante assado",
    ingredients: [
      { quantity: "500g", item: "Bacon" }
    ],
    preparationMethod: "Colocar o bacon em uma assadeira e assar no forno a 200°C até ficar crocante (aproximadamente 15 minutos).",
    cookingMethod: "Forno",
    storage: "Sob refrigeração: 0°C a 4°C",
    validity: "3 dias"
  },
  {
    id: 18,
    category: "Pista Fria",
    subcategory: "Ingredientes Assados",
    name: "Calabresa Assada",
    description: "Calabresa cortada e assada",
    ingredients: [
      { quantity: "500g", item: "Calabresa" }
    ],
    preparationMethod: "Cortar a calabresa em rodelas. Assar no forno a 180°C por 10 minutos.",
    cookingMethod: "Forno",
    storage: "Sob refrigeração: 0°C a 4°C",
    validity: "3 dias"
  },
  {
    id: 19,
    category: "Pista Fria",
    subcategory: "Ingredientes Assados",
    name: "Tomate Assado",
    description: "Tomate assado no forno",
    ingredients: [
      { quantity: "500g", item: "Tomate" },
      { quantity: "20g", item: "Azeite" },
      { quantity: "5g", item: "Alho" },
      { quantity: "5g", item: "Sal" }
    ],
    preparationMethod: "Cortar o tomate ao meio. Temperar com azeite, alho e sal. Assar no forno a 180°C por 20 minutos.",
    cookingMethod: "Forno",
    storage: "Sob refrigeração: 0°C a 4°C",
    validity: "2 dias"
  },
  {
    id: 20,
    category: "Pista Fria",
    subcategory: "Ingredientes Assados",
    name: "Alho Assado",
    description: "Alho assado no forno",
    ingredients: [
      { quantity: "200g", item: "Alho" },
      { quantity: "20g", item: "Azeite" },
      { quantity: "5g", item: "Sal" }
    ],
    preparationMethod: "Descascar o alho. Temperar com azeite e sal. Assar no forno a 180°C por 30 minutos.",
    cookingMethod: "Forno",
    storage: "Sob refrigeração: 0°C a 4°C",
    validity: "3 dias"
  },
  {
    id: 21,
    category: "Pista Fria",
    subcategory: "Ingredientes Assados",
    name: "Cebola Refogada",
    description: "Cebola refogada em azeite",
    ingredients: [
      { quantity: "500g", item: "Cebola" },
      { quantity: "30g", item: "Azeite" },
      { quantity: "5g", item: "Sal" }
    ],
    preparationMethod: "Cortar a cebola em tiras finas. Refogar em azeite quente até ficar macia e levemente dourada.",
    cookingMethod: "Panela",
    storage: "Sob refrigeração: 0°C a 4°C",
    validity: "2 dias"
  },

  // PISTA FRIA - QUEIJOS E LATICÍNIOS
  {
    id: 22,
    category: "Pista Fria",
    subcategory: "Queijos e Laticínios",
    name: "Gorgonzola",
    description: "Queijo gorgonzola em cubos",
    ingredients: [
      { quantity: "500g", item: "Gorgonzola" }
    ],
    preparationMethod: "Cortar o gorgonzola em cubos pequenos.",
    cookingMethod: "Cru",
    storage: "Sob refrigeração: 0°C a 4°C",
    validity: "5 dias"
  },
  {
    id: 23,
    category: "Pista Fria",
    subcategory: "Queijos e Laticínios",
    name: "Ricota Temperada",
    description: "Ricota temperada com ervas",
    ingredients: [
      { quantity: "500g", item: "Ricota" },
      { quantity: "10g", item: "Sal" },
      { quantity: "5g", item: "Pimenta" },
      { quantity: "5g", item: "Manjericão" }
    ],
    preparationMethod: "Misturar a ricota com sal, pimenta e manjericão.",
    cookingMethod: "Cru",
    storage: "Sob refrigeração: 0°C a 4°C",
    validity: "3 dias"
  },
  {
    id: 24,
    category: "Pista Fria",
    subcategory: "Queijos e Laticínios",
    name: "Mussarela",
    description: "Mussarela em cubos",
    ingredients: [
      { quantity: "500g", item: "Mussarela" }
    ],
    preparationMethod: "Cortar a mussarela em cubos pequenos.",
    cookingMethod: "Cru",
    storage: "Sob refrigeração: 0°C a 4°C",
    validity: "5 dias"
  },
  {
    id: 25,
    category: "Pista Fria",
    subcategory: "Queijos e Laticínios",
    name: "Ovo de Codorna",
    description: "Ovo de codorna cozido",
    ingredients: [
      { quantity: "12", item: "Ovos de Codorna" },
      { quantity: "5g", item: "Sal" }
    ],
    preparationMethod: "Cozinhar os ovos em água fervente por 3 minutos. Deixar esfriar e descascar.",
    cookingMethod: "Cru",
    storage: "Sob refrigeração: 0°C a 4°C",
    validity: "3 dias"
  },
  {
    id: 26,
    category: "Pista Fria",
    subcategory: "Queijos e Laticínios",
    name: "Mozzarella de Búfula",
    description: "Mozzarella de búfula fresca",
    ingredients: [
      { quantity: "500g", item: "Mozzarella de Búfula" }
    ],
    preparationMethod: "Manter em temperatura ambiente até o momento de usar.",
    cookingMethod: "Cru",
    storage: "Sob refrigeração: 4°C a 8°C",
    validity: "2 dias"
  },

  // PISTA FRIA - COMPLEMENTOS
  {
    id: 27,
    category: "Pista Fria",
    subcategory: "Complementos",
    name: "Presunto Ralado",
    description: "Presunto ralado fino",
    ingredients: [
      { quantity: "500g", item: "Presunto" }
    ],
    preparationMethod: "Ralar o presunto em ralador fino.",
    cookingMethod: "Cru",
    storage: "Sob refrigeração: 0°C a 4°C",
    validity: "3 dias"
  },
  {
    id: 28,
    category: "Pista Fria",
    subcategory: "Complementos",
    name: "Peito de Peru",
    description: "Peito de peru fatiado",
    ingredients: [
      { quantity: "500g", item: "Peito de Peru" }
    ],
    preparationMethod: "Fatiar o peito de peru em fatias finas.",
    cookingMethod: "Cru",
    storage: "Sob refrigeração: 0°C a 4°C",
    validity: "3 dias"
  },
  {
    id: 29,
    category: "Pista Fria",
    subcategory: "Complementos",
    name: "Pesto de Azeitona Preta",
    description: "Pesto feito com azeitona preta",
    ingredients: [
      { quantity: "300g", item: "Azeitona Preta" },
      { quantity: "100g", item: "Azeite" },
      { quantity: "50g", item: "Alho" },
      { quantity: "5g", item: "Sal" }
    ],
    preparationMethod: "Bater as azeitonas com azeite, alho e sal até formar uma pasta.",
    cookingMethod: "Cru",
    storage: "Sob refrigeração: 0°C a 4°C",
    validity: "5 dias"
  },
  {
    id: 30,
    category: "Pista Fria",
    subcategory: "Complementos",
    name: "Espinafre",
    description: "Espinafre fresco",
    ingredients: [
      { quantity: "500g", item: "Espinafre" },
      { quantity: "5g", item: "Sal" }
    ],
    preparationMethod: "Lavar e picar o espinafre. Temperar com sal.",
    cookingMethod: "Cru",
    storage: "Sob refrigeração: 0°C a 4°C",
    validity: "1 dia"
  }
];
