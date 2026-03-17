export const modules = [
  {
    id: 1,
    title: "Tipos de Massa",
    description: "Aprenda os diferentes tipos de massa utilizados",
    category: "massas",
    lessons: [
      {
        id: 1,
        title: "Fettuccine",
        content: "Massa larga e achatada, perfeita para molhos cremosos",
        recipes: ["Fettuccine Allegro", "Fettuccine Alfredo com Tiras de Frango", "Fettuccine Alfredo com Tiras de Carnes", "Fettuccine Molho Branco com Tiras de Frango", "Fettuccine Marinara e Parmegiana", "Fettuccine Marinara e Milanesa", "Fettuccine Marinara com Parmegiana", "Fettuccine Gorgonzola e Parmegiana", "Fettuccine Gorgonzola e Milanesa", "Fettuccine Alfredo e Escalope", "Fettuccine ao Molho Queijos, Gnocchi Bolognesa Clássico"],
        image: "🍝"
      },
      {
        id: 2,
        title: "Penne",
        content: "Massa em formato de tubo cortado na diagonal, ideal para molhos que penetram",
        recipes: ["Penne Frango e Bacon", "Penne Bolognesa e Bacon", "Penne ao Pomodoro, Manjericão"],
        image: "🍝"
      },
      {
        id: 3,
        title: "Spaghetti",
        content: "Massa comprida e fina, clássica e versátil",
        recipes: ["Spaghetti ao Pomodoro e Escalope", "Spaghetti com Tiras de Frango", "Spaghetti com Filé de Frango", "Spaghetti Pomodoro e Filé de Frango", "Spaghetti Bolognesa e Bacon"],
        image: "🍝"
      },
      {
        id: 4,
        title: "Farfalle",
        content: "Massa em formato de gravata-borboleta, divertida e prática",
        recipes: ["Salada de Massa e Filé de Frango", "Farfalle ao Molho Branco, Presunto e Alho Poró"],
        image: "🍝"
      },
      {
        id: 5,
        title: "Gnocchi",
        content: "Massa macia feita com batata, mais pesada e reconfortante",
        recipes: ["Fettuccine ao Molho Queijos, Gnocchi Bolognesa Clássico"],
        image: "🍝"
      }
    ]
  },
  {
    id: 2,
    title: "Tipos de Molho",
    description: "Conheça os molhos principais e suas características",
    category: "molhos",
    lessons: [
      {
        id: 1,
        title: "Molho Alfredo",
        content: "Molho cremoso à base de creme de leite e queijo parmesão. Sabor rico e suave.",
        recipes: ["Fettuccine Alfredo com Tiras de Frango", "Fettuccine Alfredo com Tiras de Carnes", "Fettuccine Alfredo e Escalope", "Massa Alfredo"],
        characteristics: ["Cremoso", "Suave", "Rico em queijo", "Ideal para frango e carnes"],
        image: "🧈"
      },
      {
        id: 2,
        title: "Molho Pomodoro",
        content: "Molho à base de tomate fresco, simples e clássico. Sabor natural e leve.",
        recipes: ["Fettuccine Marinara e Parmegiana", "Spaghetti ao Pomodoro e Escalope", "Spaghetti Marinara e Milanesa", "Spaghetti Pomodoro e Filé de Frango", "Penne ao Pomodoro, Manjericão", "Massa com Polpettone"],
        characteristics: ["Leve", "Fresco", "À base de tomate", "Ideal para carnes"],
        image: "🍅"
      },
      {
        id: 3,
        title: "Molho Branco",
        content: "Molho cremoso à base de creme de leite e manteiga. Delicado e elegante.",
        recipes: ["Fettuccine Molho Branco com Tiras de Frango", "Spaghetti com Filé de Frango", "Farfalle ao Molho Branco, Presunto e Alho Poró"],
        characteristics: ["Cremoso", "Delicado", "À base de creme", "Ideal para frango"],
        image: "🥛"
      },
      {
        id: 4,
        title: "Molho Bolognesa",
        content: "Molho à base de carne moída, tomate e especiarias. Sabor intenso e satisfatório.",
        recipes: ["Penne Bolognesa e Bacon", "Spaghetti Bolognesa e Bacon", "Fettuccine ao Molho Queijos, Gnocchi Bolognesa Clássico", "Massa com Polpettone"],
        characteristics: ["À base de carne", "Intenso", "Com tomate", "Ideal para acompanhar"],
        image: "🍖"
      },
      {
        id: 5,
        title: "Molho de Queijos",
        content: "Molho cremoso com mistura de queijos. Sabor forte e marcante.",
        recipes: ["Fettuccine Allegro", "Spaghetti com Tiras de Frango", "Spaghetti com Filé de Frango", "Penne Frango e Bacon", "Fettuccine ao Molho Queijos, Gnocchi Bolognesa Clássico", "Fettuccine Gorgonzola e Parmegiana", "Fettuccine Gorgonzola e Milanesa"],
        characteristics: ["Cremoso", "Forte", "Múltiplos queijos", "Ideal para frango"],
        image: "🧀"
      },
      {
        id: 6,
        title: "Molho Carbonara",
        content: "Molho à base de ovos, bacon e queijo. Cremoso sem creme de leite.",
        recipes: ["Massa Carbonara"],
        characteristics: ["Cremoso", "Com bacon", "À base de ovo", "Clássico italiano"],
        image: "🥓"
      },
      {
        id: 7,
        title: "Molho Al Mare",
        content: "Molho à base de frutos do mar, leve e sofisticado.",
        recipes: ["Massa Al Mare"],
        characteristics: ["Leve", "Sofisticado", "Com frutos do mar", "Ideal para camarão"],
        image: "🦐"
      }
    ]
  },
  {
    id: 3,
    title: "Carnes e Proteínas",
    description: "Conheça os diferentes tipos de carnes e proteínas",
    category: "proteinas",
    lessons: [
      {
        id: 1,
        title: "Tiras de Frango",
        content: "Frango cortado em tiras, macio e versátil. Combina bem com molhos cremosos.",
        recipes: ["Fettuccine Alfredo com Tiras de Frango", "Spaghetti com Tiras de Frango", "Penne Frango e Bacon", "Salada Caesar e Tiras de Frango"],
        image: "🍗"
      },
      {
        id: 2,
        title: "Filé de Frango",
        content: "Peça inteira de frango, macia e nobre. Ideal para pratos especiais.",
        recipes: ["Spaghetti com Filé de Frango", "Spaghetti Pomodoro e Filé de Frango", "Salada de Massa e Filé de Frango"],
        image: "🍗"
      },
      {
        id: 3,
        title: "Escalope de Carne",
        content: "Carne bovina fina e macia, batida. Sabor intenso e elegante.",
        recipes: ["Fettuccine Alfredo e Escalope", "Spaghetti ao Pomodoro e Escalope"],
        image: "🥩"
      },
      {
        id: 4,
        title: "Carne/Frango Parmegiana",
        content: "Carne ou frango empanado e frito. Crocante por fora, macio por dentro.",
        recipes: ["Fettuccine Marinara e Parmegiana", "Fettuccine Gorgonzola e Parmegiana", "Fettuccine Marinara com Parmegiana"],
        image: "🥩"
      },
      {
        id: 5,
        title: "Carne/Frango Milanesa",
        content: "Carne ou frango empanado e frito. Similar à parmegiana, muito crocante.",
        recipes: ["Fettuccine Marinara e Milanesa", "Fettuccine Gorgonzola e Milanesa"],
        image: "🥩"
      },
      {
        id: 6,
        title: "Tiras de Carnes",
        content: "Mistura de carnes vermelhas cortadas em tiras. Sabor forte e marcante.",
        recipes: ["Fettuccine Alfredo com Tiras de Carnes"],
        image: "🥩"
      },
      {
        id: 7,
        title: "Camarão",
        content: "Fruto do mar delicado e sofisticado. Combina bem com molhos leves.",
        recipes: ["Massa Al Mare"],
        image: "🦐"
      },
      {
        id: 8,
        title: "Polpettone",
        content: "Bolinha de carne moída com temperos. Macia e saborosa.",
        recipes: ["Massa com Polpettone"],
        image: "🍖"
      }
    ]
  },
  {
    id: 4,
    title: "Ingredientes Especiais",
    description: "Conheça os ingredientes que fazem a diferença",
    category: "ingredientes",
    lessons: [
      {
        id: 1,
        title: "Queijos",
        content: "Parmesão, Gorgonzola, Mozzarela e Ricota. Cada um com seu sabor único.",
        recipes: ["Múltiplas receitas"],
        types: ["Parmesão - forte e seco", "Gorgonzola - azul e intenso", "Mozzarela - macio e suave", "Ricota - leve e cremosa"],
        image: "🧀"
      },
      {
        id: 2,
        title: "Bacon",
        content: "Carne de porco defumada. Adiciona sabor intenso e crocância.",
        recipes: ["Fettuccine Allegro", "Penne Frango e Bacon", "Penne Bolognesa e Bacon", "Spaghetti Pomodoro e Filé de Frango", "Massa Carbonara", "Spaghetti Bolognesa e Bacon"],
        image: "🥓"
      },
      {
        id: 3,
        title: "Calabresa",
        content: "Embutido defumado. Adiciona sabor marcante e picância.",
        recipes: ["Fettuccine Allegro", "Spaghetti com Filé de Frango", "Spaghetti Bolognesa e Bacon", "Fettuccine ao Molho Queijos, Gnocchi Bolognesa Clássico"],
        image: "🌶️"
      },
      {
        id: 4,
        title: "Ovo de Codorna",
        content: "Ovo pequeno e delicado. Adiciona cremosidade e riqueza.",
        recipes: ["Fettuccine Allegro", "Penne Bolognesa e Bacon", "Farfalle ao Molho Branco, Presunto e Alho Poró"],
        image: "🥚"
      },
      {
        id: 5,
        title: "Cogumelo Trufado",
        content: "Cogumelo com aroma de trufa. Ingrediente nobre e sofisticado.",
        recipes: ["Fettuccine ao Molho Queijos, Gnocchi Bolognesa Clássico"],
        image: "🍄"
      },
      {
        id: 6,
        title: "Presunto",
        content: "Carne de porco curada. Adiciona sabor salgado e elegância.",
        recipes: ["Farfalle ao Molho Branco, Presunto e Alho Poró"],
        image: "🍖"
      },
      {
        id: 7,
        title: "Manjericão",
        content: "Erva aromática fresca. Sabor delicado e perfumado.",
        recipes: ["Fettuccine Molho Branco com Tiras de Frango", "Spaghetti Pomodoro e Filé de Frango", "Penne ao Pomodoro, Manjericão"],
        image: "🌿"
      },
      {
        id: 8,
        title: "Alho Poró",
        content: "Vegetal com sabor suave de alho. Adiciona sofisticação.",
        recipes: ["Fettuccine Allegro", "Spaghetti com Filé de Frango", "Farfalle ao Molho Branco, Presunto e Alho Poró", "Pizza Alho Poró e Gorgonzola"],
        image: "🧅"
      }
    ]
  },
  {
    id: 5,
    title: "Receitas Completas",
    description: "Estude receitas completas agora que conhece os componentes",
    category: "receitas",
    lessons: [
      {
        id: 1,
        title: "Receitas com Molho Alfredo",
        content: "Receitas que usam molho cremoso e suave",
        recipes: ["Fettuccine Alfredo com Tiras de Frango", "Fettuccine Alfredo com Tiras de Carnes", "Fettuccine Alfredo e Escalope", "Massa Alfredo"],
        image: "🧈"
      },
      {
        id: 2,
        title: "Receitas com Molho Pomodoro",
        content: "Receitas que usam molho de tomate fresco",
        recipes: ["Fettuccine Marinara e Parmegiana", "Spaghetti ao Pomodoro e Escalope", "Spaghetti Marinara e Milanesa", "Spaghetti Pomodoro e Filé de Frango", "Penne ao Pomodoro, Manjericão", "Massa com Polpettone"],
        image: "🍅"
      },
      {
        id: 3,
        title: "Receitas com Molho Branco",
        content: "Receitas que usam molho cremoso e delicado",
        recipes: ["Fettuccine Molho Branco com Tiras de Frango", "Spaghetti com Filé de Frango", "Farfalle ao Molho Branco, Presunto e Alho Poró"],
        image: "🥛"
      },
      {
        id: 4,
        title: "Receitas com Molho Bolognesa",
        content: "Receitas que usam molho de carne",
        recipes: ["Penne Bolognesa e Bacon", "Spaghetti Bolognesa e Bacon", "Fettuccine ao Molho Queijos, Gnocchi Bolognesa Clássico"],
        image: "🍖"
      },
      {
        id: 5,
        title: "Receitas com Molho de Queijos",
        content: "Receitas que usam molho cremoso com múltiplos queijos",
        recipes: ["Fettuccine Allegro", "Spaghetti com Tiras de Frango", "Spaghetti com Filé de Frango", "Penne Frango e Bacon"],
        image: "🧀"
      }
    ]
  }
];

export const getModuleProgress = () => {
  return {
    totalModules: modules.length,
    completedModules: 0,
    totalLessons: modules.reduce((sum, mod) => sum + mod.lessons.length, 0)
  };
};
