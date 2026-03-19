export const prePreparoRecipes = [
  {
    id: 1,
    category: "Proteínas",
    subcategory: "Frango",
    name: "Tiras de Frango",
    description: "Filé de peito marinado para finalização na frigideira",
    ingredients: [
      { quantity: "1kg", item: "Peito de frango" },
      { quantity: "25g", item: "Vinho" },
      { quantity: "50g", item: "Pesto" },
      { quantity: "10g", item: "Sal" },
      { quantity: "2g", item: "Pimenta do reino" },
      { quantity: "5g", item: "Sálvia" },
      { quantity: "5g", item: "Alecrim" }
    ],
    preparationMethod: "Misturar os temperos usando mixer separadamente. Depois misturar nos filés na GN de forma que todos fiquem cobertos e marinar por 12 horas. Assar com sonda.",
    cookingMethod: "Panela",
    storage: "Sob refrigeração: 0°C a 4°C",
    validity: "1 dia",
    finalWeight: "75gr"
  },
  {
    id: 2,
    category: "Proteínas",
    subcategory: "Frango",
    name: "Filé de Frango",
    description: "Filé inteiro marinado para finalização no forno",
    ingredients: [
      { quantity: "1 pacote", item: "Filé de frango (10 uni)" },
      { quantity: "20g", item: "Sal" },
      { quantity: "36g", item: "Vinho branco" },
      { quantity: "60g", item: "Pesto" },
      { quantity: "3g", item: "Alecrim" },
      { quantity: "24g", item: "Açúcar" },
      { quantity: "12g", item: "Alho CRU" }
    ],
    preparationMethod: "Misturar os temperos usando mixer e depois misturar nos filés na GN de forma que todos fiquem cobertos e depois transferir pra vazilha.",
    cookingMethod: "Forno",
    storage: "Sob refrigeração: 0°C a 4°C",
    validity: "1 dia"
  },
  {
    id: 3,
    category: "Proteínas",
    subcategory: "Carne",
    name: "Escalope/Tiras de Carne",
    description: "Coração da alcatra ou filé mignon marinado",
    ingredients: [
      { quantity: "1kg", item: "Coração da alcatra / Filé mignon" },
      { quantity: "20g", item: "Óleo" },
      { quantity: "60g", item: "Vinho tinto" },
      { quantity: "10g", item: "Sal" },
      { quantity: "10g", item: "Molho pesto" },
      { quantity: "2g", item: "Pimenta preta em pó" }
    ],
    preparationMethod: "Misturar os temperos usando mixer separadamente, e depois misturar na carne na GN. Marinar por 3 horas.",
    cookingMethod: "Panela/Forno",
    storage: "Sob refrigeração: 0°C a 4°C",
    validity: "1 dia",
    finalWeight: "60gr (tiras) / 40gr (escalope)"
  },
  {
    id: 4,
    category: "Proteínas",
    subcategory: "Camarão",
    name: "Camarão Marinado",
    description: "Camarão marinado para pré-assar no forno ou finalizar na hora",
    ingredients: [
      { quantity: "1kg", item: "Camarão" },
      { quantity: "60g", item: "Vinho branco" },
      { quantity: "50g", item: "Pesto" },
      { quantity: "10g", item: "Alho assado" },
      { quantity: "20g", item: "Sal" }
    ],
    preparationMethod: "Marinar por 3 horas. Pré assar no forno ou finalizar na hora.",
    cookingMethod: "Forno",
    storage: "Sob refrigeração: 0°C a 4°C",
    validity: "1 dia",
    finalWeight: "60gr"
  },
  {
    id: 5,
    category: "Proteínas",
    subcategory: "Frango",
    name: "Frango Desfiado",
    description: "Frango pré-cozido e desfiado",
    ingredients: [
      { quantity: "2kg", item: "Frango desfiado" },
      { quantity: "15g", item: "Azeite de bagaço" },
      { quantity: "3g", item: "Pimenta do reino" }
    ],
    preparationMethod: "Frango desfiado pré-cozido.",
    cookingMethod: "Forno",
    storage: "Sob refrigeração: 0°C a 4°C",
    validity: "2 dias"
  },

  // LEGUMES E VEGETAIS
  {
    id: 6,
    category: "Legumes",
    subcategory: "Vegetais",
    name: "Mix de Vegetais",
    description: "Abobrinha e berinjela cortadas",
    ingredients: [
      { quantity: "250g", item: "Abobrinha" },
      { quantity: "150g", item: "Berinjelas" },
      { quantity: "40g", item: "Azeite de bagaço" },
      { quantity: "3g", item: "Sal" },
      { quantity: "15g", item: "Pesto" },
      { quantity: "4g", item: "Alho assado" }
    ],
    preparationMethod: "Cortar abobrinha e berinjelas e misturar com os demais ingredientes.",
    cookingMethod: "Forno/Fogão",
    storage: "Sob refrigeração: 0°C a 4°C",
    validity: "1 dia"
  },
  {
    id: 7,
    category: "Legumes",
    subcategory: "Vegetais",
    name: "Alho Poró",
    description: "Alho poró cortado e temperado",
    ingredients: [
      { quantity: "1kg", item: "Alho poró" },
      { quantity: "20g", item: "Azeite bagaço" },
      { quantity: "5g", item: "Sal" }
    ],
    preparationMethod: "Cortar o alho poró e temperar com azeite e sal.",
    cookingMethod: "Fogão/Forno",
    storage: "Sob refrigeração: 0°C a 4°C",
    validity: "1 dia"
  },
  {
    id: 8,
    category: "Legumes",
    subcategory: "Vegetais",
    name: "Brócolis",
    description: "Brócolis cortado em florets",
    ingredients: [
      { quantity: "1kg", item: "Brócolis" },
      { quantity: "15g", item: "Azeite bagaço" },
      { quantity: "10g", item: "Sal (preparo na panela)" },
      { quantity: "5g", item: "Sal (finalização)" }
    ],
    preparationMethod: "Cortar o brócolis em florets e temperar com azeite e sal.",
    cookingMethod: "Forno/Fogão",
    storage: "Sob refrigeração: 0°C a 4°C",
    validity: "1 dia"
  },

  // MOLHOS E PREPAROS
  {
    id: 9,
    category: "Molhos",
    subcategory: "Molhos",
    name: "Tomate Assado",
    description: "Tomate cortado e assado no forno",
    ingredients: [
      { quantity: "1kg", item: "Tomate cortado" },
      { quantity: "50g", item: "Azeite de bagaço" },
      { quantity: "15g", item: "Açúcar" },
      { quantity: "10g", item: "Sal" },
      { quantity: "6g", item: "Alho assado" },
      { quantity: "10g", item: "Manjericão" }
    ],
    preparationMethod: "Cortar tomate e misturar com os demais ingredientes. Assar no forno.",
    cookingMethod: "Forno",
    storage: "Sob refrigeração: 0°C a 4°C",
    validity: "2 dias"
  },
  {
    id: 10,
    category: "Molhos",
    subcategory: "Molhos",
    name: "Ricota Temperada",
    description: "Ricota fresca com temperos",
    ingredients: [
      { quantity: "220g", item: "Ricota" },
      { quantity: "1g", item: "Pimenta calabresa" },
      { quantity: "2g", item: "Oregano" },
      { quantity: "8g", item: "Salsa" },
      { quantity: "2g", item: "Sal" }
    ],
    preparationMethod: "Misturar ricota com todos os temperos in natura.",
    cookingMethod: "Cru",
    storage: "Sob refrigeração: 0°C a 4°C",
    validity: "1 dia"
  },
  {
    id: 11,
    category: "Molhos",
    subcategory: "Molhos",
    name: "Pesto de Azeitona",
    description: "Pesto feito com azeitona preta",
    ingredients: [
      { quantity: "910g", item: "Azeitona preta" },
      { quantity: "7g", item: "Azeite de bagaço" },
      { quantity: "10g", item: "Mix de erva" },
      { quantity: "10g", item: "Alho assado" }
    ],
    preparationMethod: "Misturar 455g de azeitona até virar uma pasta e 455g cortar em pedaços.",
    cookingMethod: "Cru",
    storage: "Sob refrigeração: 0°C a 4°C",
    validity: "3 dias"
  },
  {
    id: 12,
    category: "Molhos",
    subcategory: "Molhos",
    name: "Cebola Caramelizada",
    description: "Cebola roxa caramelizada",
    ingredients: [
      { quantity: "1kg", item: "Cebola roxa" },
      { quantity: "70g", item: "Azeite bagaço" },
      { quantity: "100g", item: "Açúcar" },
      { quantity: "10g", item: "Sal" },
      { quantity: "50g", item: "Vinho tinto" }
    ],
    preparationMethod: "Caramelizar a cebola com azeite, açúcar, sal e vinho tinto.",
    cookingMethod: "Forno/Fogão",
    storage: "Sob refrigeração: 0°C a 4°C",
    validity: "2 dias"
  },
  {
    id: 13,
    category: "Molhos",
    subcategory: "Molhos",
    name: "Cebola Refogada",
    description: "Cebola branca refogada em azeite",
    ingredients: [
      { quantity: "1kg", item: "Cebola branca" },
      { quantity: "70g", item: "Azeite bagaço" },
      { quantity: "10g", item: "Sal" }
    ],
    preparationMethod: "Refogar a cebola em azeite até ficar macia.",
    cookingMethod: "Forno/Fogão",
    storage: "Sob refrigeração: 0°C a 4°C",
    validity: "2 dias"
  },
  {
    id: 14,
    category: "Molhos",
    subcategory: "Molhos",
    name: "Alho Assado",
    description: "Alho descascado e assado no forno",
    ingredients: [
      { quantity: "1kg", item: "Alho descascado" },
      { quantity: "50g", item: "Azeite bagaço" },
      { quantity: "10g", item: "Sal" }
    ],
    preparationMethod: "Assar o alho descascado com azeite e sal no forno.",
    cookingMethod: "Forno",
    storage: "Sob refrigeração: 0°C a 4°C",
    validity: "3 dias"
  },
  {
    id: 15,
    category: "Molhos",
    subcategory: "Molhos",
    name: "Farofa de Torradas",
    description: "Torradas batidas no mixer com pesto",
    ingredients: [
      { quantity: "1kg", item: "Torradas" },
      { quantity: "350g", item: "Pesto" }
    ],
    preparationMethod: "Bater as torradas no mixer com pesto.",
    cookingMethod: "Cru",
    storage: "Sob refrigeração: 0°C a 4°C",
    validity: "3 dias"
  },

  // PREPAROS ESPECIAIS
  {
    id: 16,
    category: "Preparos",
    subcategory: "Especiais",
    name: "Risotto",
    description: "Risotto preparado com arroz e caldo",
    ingredients: [
      { quantity: "1kg", item: "Arroz" },
      { quantity: "300g", item: "Vinho branco" },
      { quantity: "1,3kg", item: "Água" },
      { quantity: "100g", item: "Cebola" },
      { quantity: "60g", item: "Cenoura" },
      { quantity: "200g", item: "Sal" },
      { quantity: "4", item: "Galhos de cebolinha inteira" }
    ],
    preparationMethod: "Preparar risotto em forno ou panela elétrica.",
    cookingMethod: "Forno/Panela",
    storage: "Sob refrigeração: 0°C a 4°C",
    validity: "2 dias",
    finalWeight: "200gr"
  },
  {
    id: 17,
    category: "Preparos",
    subcategory: "Especiais",
    name: "Ovo em Pó",
    description: "Ovo em pó hidratado",
    ingredients: [
      { quantity: "50g", item: "Ovo em pó" },
      { quantity: "200g", item: "Água filtrada" }
    ],
    preparationMethod: "Misturar ovo em pó com água filtrada usando garfo ou mixer.",
    cookingMethod: "Cru",
    storage: "Sob refrigeração: 0°C a 4°C",
    validity: "1 dia"
  }
];
