export const recipeQuizzes = {
  receitas: [
    // PERGUNTAS DE COMPLETAR (ESCREVER)
    {
      id: 1,
      type: "fill-in",
      recipeName: "Fettuccine Allegro",
      question: "Fettuccine Allegro é feita com Molho de Queijos, Alho Poró, Bacon, Ovo de Codorna e o que mais?",
      correctAnswer: "Calabresa",
      explanation: "Fettuccine Allegro tem Calabresa como ingrediente adicional que dá sabor e cor ao prato.",
      hints: ["Começa com C", "É uma carne processada", "Tem sabor defumado"]
    },
    // PERGUNTA DE MÚLTIPLA ESCOLHA
    {
      id: 2,
      type: "multiple-choice",
      recipeName: "Fettuccine Alfredo com Tiras de Frango",
      question: "Quais são os ingredientes principais da Fettuccine Alfredo com Tiras de Frango além da massa e molho?",
      options: ["Bacon e Calabresa", "Apenas Tiras de Frango", "Ovo de Codorna e Presunto", "Camarão e Cogumelo"],
      correctAnswer: 1,
      explanation: "A receita é simples e elegante: Fettuccine, Molho Alfredo e Tiras de Frango."
    },
    // COMPLETAR (ESCREVER)
    {
      id: 3,
      type: "fill-in",
      recipeName: "Fettuccine Molho Branco com Tiras de Frango",
      question: "Fettuccine Molho Branco com Tiras de Frango leva Pesto, Queijo Parmesão, Tomate em Cubos e o que mais?",
      correctAnswer: "Manjericão",
      explanation: "Manjericão é o ingrediente aromático que complementa esta receita com sabor fresco.",
      hints: ["É uma erva", "Começa com M", "Tem sabor fresco e aromático"]
    },
    // MÚLTIPLA ESCOLHA
    {
      id: 4,
      type: "multiple-choice",
      recipeName: "Fettuccine Marinara e Parmegiana",
      question: "Quais ingredientes complementam a Fettuccine Marinara e Parmegiana além da massa e molho?",
      options: ["Alho, Orégano e Carne/Frango Parmegiana", "Bacon, Calabresa e Ovo", "Camarão, Presunto e Ricota", "Brócolis, Cenoura e Alho Poró"],
      correctAnswer: 0,
      explanation: "Alho, Orégano e Carne/Frango Parmegiana são os complementos principais que dão sabor italiano."
    },
    // COMPLETAR (ESCREVER)
    {
      id: 5,
      type: "fill-in",
      recipeName: "Fettuccine Gorgonzola e Parmegiana",
      question: "Fettuccine Gorgonzola e Parmegiana leva Queijo Gorgonzola, Carne/Frango Parmegiana e qual outro ingrediente?",
      correctAnswer: "Nenhum",
      explanation: "Fettuccine Gorgonzola e Parmegiana tem apenas Queijo Gorgonzola e Carne/Frango Parmegiana como complementos.",
      hints: ["Responda: Nenhum", "É uma receita simples", "Apenas 2 ingredientes além da massa"]
    },
    // MÚLTIPLA ESCOLHA
    {
      id: 6,
      type: "multiple-choice",
      recipeName: "Penne Frango e Bacon",
      question: "Penne Frango e Bacon é feita com Bacon, Frango Desfiado, Tomate em Cubos e o que mais?",
      options: ["Calabresa", "Ovo de Codorna", "Presunto", "Camarão"],
      correctAnswer: 0,
      explanation: "Calabresa é o ingrediente que completa a Penne Frango e Bacon com sabor defumado."
    },
    // COMPLETAR (ESCREVER)
    {
      id: 7,
      type: "fill-in",
      recipeName: "Penne Bolognesa e Bacon",
      question: "Penne Bolognesa e Bacon é feita com massa penne, cebola, alho, bacon e o que mais?",
      correctAnswer: "Molho Bolognesa",
      explanation: "O Molho Bolognesa é o principal componente que dá sabor à receita.",
      hints: ["É um molho", "Começa com M", "Tem carne moída"]
    },
    // MÚLTIPLA ESCOLHA
    {
      id: 8,
      type: "multiple-choice",
      recipeName: "Penne Frango Assado",
      question: "Quais ingredientes tem a Penne Frango Assado?",
      options: ["Penne, Frango Assado, Tomate em Cubos, Alho Poró", "Penne, Bacon, Calabresa, Ovo", "Penne, Camarão, Presunto, Ricota", "Penne, Brócolis, Cenoura, Cebola"],
      correctAnswer: 0,
      explanation: "Penne Frango Assado tem Penne, Frango Assado, Tomate em Cubos e Alho Poró."
    },
    // COMPLETAR (ESCREVER)
    {
      id: 9,
      type: "fill-in",
      recipeName: "Spaghetti Bolognesa",
      question: "Spaghetti Bolognesa é feita com Spaghetti, Molho Bolognesa, Cebola, Alho e o que mais?",
      correctAnswer: "Queijo Parmesão",
      explanation: "Queijo Parmesão é o complemento que finaliza a receita com sabor.",
      hints: ["É um queijo", "Começa com Q", "É ralado"]
    },
    // MÚLTIPLA ESCOLHA
    {
      id: 10,
      type: "multiple-choice",
      recipeName: "Spaghetti Carbonara",
      question: "Quais são os ingredientes principais da Spaghetti Carbonara?",
      options: ["Spaghetti, Bacon, Ovo, Queijo Parmesão", "Spaghetti, Tomate, Alho, Cebola", "Spaghetti, Camarão, Presunto, Ricota", "Spaghetti, Brócolis, Cenoura, Alho Poró"],
      correctAnswer: 0,
      explanation: "Spaghetti Carbonara é feita com Spaghetti, Bacon, Ovo e Queijo Parmesão."
    },
    // COMPLETAR (ESCREVER)
    {
      id: 11,
      type: "fill-in",
      recipeName: "Farfalle Frango e Cogumelo",
      question: "Farfalle Frango e Cogumelo é feita com Farfalle, Frango, Cogumelo Trufado e o que mais?",
      correctAnswer: "Molho Branco",
      explanation: "O Molho Branco é o que une todos os ingredientes nesta receita elegante.",
      hints: ["É um molho", "Começa com M", "É cremoso"]
    },
    // MÚLTIPLA ESCOLHA
    {
      id: 12,
      type: "multiple-choice",
      recipeName: "Gnocchi Bolognesa",
      question: "Quais ingredientes tem o Gnocchi Bolognesa?",
      options: ["Gnocchi, Molho Bolognesa, Alho Assado, Cebola Refogada", "Gnocchi, Bacon, Calabresa, Ovo", "Gnocchi, Camarão, Presunto, Ricota", "Gnocchi, Brócolis, Cenoura, Alho Poró"],
      correctAnswer: 0,
      explanation: "Gnocchi Bolognesa tem Gnocchi, Molho Bolognesa, Alho Assado e Cebola Refogada."
    },
    // COMPLETAR (ESCREVER)
    {
      id: 13,
      type: "fill-in",
      recipeName: "Massa Alfredo",
      question: "Massa Alfredo é feita com Fettuccine, Molho Alfredo, Queijo Parmesão Limpo e o que mais?",
      correctAnswer: "Alho Assado",
      explanation: "Alho Assado é o complemento que adiciona sabor à receita clássica.",
      hints: ["É alho", "Começa com A", "Deve ser assado"]
    },
    // MÚLTIPLA ESCOLHA
    {
      id: 14,
      type: "multiple-choice",
      recipeName: "Escalope à Milanesa",
      question: "Quais ingredientes tem o Escalope à Milanesa?",
      options: ["Escalope, Ovo, Farinha de Trigo, Óleo", "Escalope, Bacon, Calabresa, Queijo", "Escalope, Camarão, Presunto, Ricota", "Escalope, Brócolis, Cenoura, Cebola"],
      correctAnswer: 0,
      explanation: "Escalope à Milanesa é empanado com Ovo e Farinha de Trigo, depois frito em óleo."
    },
    // COMPLETAR (ESCREVER)
    {
      id: 15,
      type: "fill-in",
      recipeName: "Frango Parmegiana",
      question: "Frango Parmegiana é feito com Filé de Frango, Molho Pomodoro, Queijo Mozzarela e o que mais?",
      correctAnswer: "Queijo Parmesão",
      explanation: "Queijo Parmesão é o complemento que finaliza o Frango Parmegiana com sabor.",
      hints: ["É um queijo", "Começa com Q", "É ralado"]
    },
    // MÚLTIPLA ESCOLHA
    {
      id: 16,
      type: "multiple-choice",
      recipeName: "Camarão ao Molho",
      question: "Quais ingredientes tem o Camarão ao Molho?",
      options: ["Camarão, Molho Branco, Alho Assado, Cebolinha", "Camarão, Bacon, Calabresa, Ovo", "Camarão, Presunto, Ricota, Tomate", "Camarão, Brócolis, Cenoura, Alho Poró"],
      correctAnswer: 0,
      explanation: "Camarão ao Molho é feito com Camarão, Molho Branco, Alho Assado e Cebolinha."
    },
    // COMPLETAR (ESCREVER)
    {
      id: 17,
      type: "fill-in",
      recipeName: "Pizza Margherita",
      question: "Pizza Margherita é feita com Massa de Pizza, Molho Pomodoro, Queijo Mozzarela e o que mais?",
      correctAnswer: "Manjericão",
      explanation: "Manjericão fresco é o complemento que finaliza a Pizza Margherita com sabor italiano.",
      hints: ["É uma erva", "Começa com M", "É fresco"]
    },
    // MÚLTIPLA ESCOLHA
    {
      id: 18,
      type: "multiple-choice",
      recipeName: "Pizza Calabresa",
      question: "Quais ingredientes tem a Pizza Calabresa?",
      options: ["Massa, Molho Pomodoro, Calabresa, Queijo Mozzarela", "Massa, Bacon, Presunto, Queijo", "Massa, Camarão, Ricota, Tomate", "Massa, Brócolis, Cenoura, Cebola"],
      correctAnswer: 0,
      explanation: "Pizza Calabresa tem Massa, Molho Pomodoro, Calabresa e Queijo Mozzarela."
    },
    // COMPLETAR (ESCREVER)
    {
      id: 19,
      type: "fill-in",
      recipeName: "Risotto de Frango",
      question: "Risotto de Frango é feito com Arroz, Caldo de Carne, Cebola, Vinho Branco e o que mais?",
      correctAnswer: "Frango",
      explanation: "Frango é o ingrediente principal que dá sabor e proteína ao risotto.",
      hints: ["É uma proteína", "Começa com F", "É a proteína principal"]
    },
    // MÚLTIPLA ESCOLHA
    {
      id: 20,
      type: "multiple-choice",
      recipeName: "Tilápia Grelhada",
      question: "Quais ingredientes tem a Tilápia Grelhada?",
      options: ["Tilápia, Azeite, Limão, Sal e Pimenta", "Tilápia, Bacon, Calabresa, Queijo", "Tilápia, Camarão, Presunto, Ricota", "Tilápia, Brócolis, Cenoura, Cebola"],
      correctAnswer: 0,
      explanation: "Tilápia Grelhada é simples: Tilápia, Azeite, Limão, Sal e Pimenta."
    }
  ]
};

export function getRandomRecipeQuizzes(count = 20) {
  const fillInQuestions = recipeQuizzes.receitas.filter(q => q.type === 'fill-in');
  const multipleChoiceQuestions = recipeQuizzes.receitas.filter(q => q.type === 'multiple-choice');
  
  // Garantir que pelo menos 10 sejam de completar ingredientes
  const minFillIn = Math.max(10, Math.ceil(count * 0.6));
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
