// Funções para gerenciar o armazenamento de progresso das colaboradoras

const STORAGE_KEY = 'spoleto_progress';

export const getProgress = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : {};
  } catch (error) {
    console.error('Erro ao ler progresso:', error);
    return {};
  }
};

export const saveUserProgress = (userName, progressData) => {
  try {
    const allProgress = getProgress();
    allProgress[userName] = {
      ...allProgress[userName],
      ...progressData,
      lastUpdated: new Date().toISOString()
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(allProgress));
  } catch (error) {
    console.error('Erro ao salvar progresso:', error);
  }
};

export const getUserProgress = (userName) => {
  const allProgress = getProgress();
  return allProgress[userName] || null;
};

export const recordRecipesStudied = (userName, recipesStudied) => {
  saveUserProgress(userName, {
    recipesStudied: recipesStudied,
    recipesStudiedCount: recipesStudied.length,
    recipesStudiedDate: new Date().toISOString()
  });
};

export const recordQuizResult = (userName, quizType, score, totalQuestions) => {
  const userProgress = getUserProgress(userName) || {};
  const quizzes = userProgress.quizzes || [];
  
  const newQuiz = {
    type: quizType,
    score: score,
    totalQuestions: totalQuestions,
    percentage: Math.round((score / totalQuestions) * 100),
    date: new Date().toISOString()
  };
  
  quizzes.push(newQuiz);
  
  saveUserProgress(userName, {
    quizzes: quizzes,
    lastQuizDate: new Date().toISOString(),
    lastQuizScore: score,
    lastQuizPercentage: newQuiz.percentage
  });
};

export const getAllUsersProgress = () => {
  const allProgress = getProgress();
  return Object.entries(allProgress).map(([userName, data]) => ({
    userName,
    ...data
  }));
};

export const deleteUserProgress = (userName) => {
  try {
    const allProgress = getProgress();
    delete allProgress[userName];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(allProgress));
  } catch (error) {
    console.error('Erro ao deletar progresso:', error);
  }
};

export const exportProgressAsCSV = () => {
  const allProgress = getAllUsersProgress();
  
  if (allProgress.length === 0) {
    return 'Nenhum dado de progresso disponível';
  }

  let csv = 'Nome,Receitas Estudadas,Quiz Feitos,Último Quiz,Última Nota (%),Data Última Atualização\n';
  
  allProgress.forEach(user => {
    const recipesCount = user.recipesStudiedCount || 0;
    const quizzesCount = user.quizzes ? user.quizzes.length : 0;
    const lastQuizPercentage = user.lastQuizPercentage || '-';
    const lastUpdated = user.lastUpdated ? new Date(user.lastUpdated).toLocaleString('pt-BR') : '-';
    
    csv += `"${user.userName}",${recipesCount},${quizzesCount},${lastQuizPercentage}%,${lastUpdated}\n`;
  });
  
  return csv;
};

export const downloadProgressCSV = () => {
  const csv = exportProgressAsCSV();
  const element = document.createElement('a');
  element.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(csv));
  element.setAttribute('download', `spoleto_progresso_${new Date().toISOString().split('T')[0]}.csv`);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
};
