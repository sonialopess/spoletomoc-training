import React, { useState } from 'react';
import HomePage from './components/HomePage';
import DashboardPage from './components/DashboardPage';
import RecipesLearningPage from './components/RecipesLearningPage';
import RecipeQuizPage from './components/RecipeQuizPage';
import ModulesPage from './components/ModulesPage';
import ModuleQuizPage from './components/ModuleQuizPage';
import TrainingPage from './components/TrainingPage';
import QuizPage from './components/QuizPage';
import PrePreparoSelectionPage from './components/PrePreparoSelectionPage';
import PrePreparoLearningPage from './components/PrePreparoLearningPage';
import PrePreparoQuizPage from './components/PrePreparoQuizPage';
import PrePreparoMicrolearningPage from './components/PrePreparoMicrolearningPage';
import './App.css';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [userName, setUserName] = useState('');
  const [selectedModuleId, setSelectedModuleId] = useState(null);
  const [selectedModuleCategory, setSelectedModuleCategory] = useState(null);

  const handleStartDashboard = () => {
    setCurrentPage('dashboard');
  };

  const handleStartRecipes = (name) => {
    setUserName(name);
    setCurrentPage('recipes');
  };

  const handleStartModules = (name) => {
    setUserName(name);
    setCurrentPage('modules');
  };

  const handleStartTraining = (name) => {
    setUserName(name);
    setCurrentPage('training');
  };

  const handleStartQuiz = (name) => {
    setUserName(name);
    setCurrentPage('quiz');
  };

  const handleStartRecipeQuiz = () => {
    setCurrentPage('recipe-quiz');
  };

  const handleStartModuleQuiz = (moduleId, moduleCategory) => {
    setSelectedModuleId(moduleId);
    setSelectedModuleCategory(moduleCategory);
    setCurrentPage('module-quiz');
  };

  const handleBack = () => {
    setCurrentPage('home');
    setUserName('');
    setSelectedModuleId(null);
    setSelectedModuleCategory(null);
  };

  const handleBackToModules = () => {
    setCurrentPage('modules');
    setSelectedModuleId(null);
    setSelectedModuleCategory(null);
  };

  const handleBackToRecipes = () => {
    setCurrentPage('recipes');
  };

  const handleStartPrePreparo = (name) => {
    setUserName(name);
    setCurrentPage('pre-preparo-selection');
  };

  const handleSelectPrePreparoMode = (mode) => {
    setCurrentPage(mode);
  };

  const handleBackToPrePreparoSelection = () => {
    setCurrentPage('pre-preparo-selection');
  };

  return (
    <div className="app">
      {currentPage === 'home' && (
        <HomePage
          onStartDashboard={handleStartDashboard}
          onStartRecipes={handleStartRecipes}
          onStartModules={handleStartModules}
          onStartTraining={handleStartTraining}
          onStartQuiz={handleStartQuiz}
          onStartPrePreparo={handleStartPrePreparo}
        />
      )}
      {currentPage === 'dashboard' && (
        <DashboardPage onBack={handleBack} />
      )}
      {currentPage === 'recipes' && (
        <RecipesLearningPage
          userName={userName}
          onBack={handleBack}
          onStartRecipeQuiz={handleStartRecipeQuiz}
        />
      )}
      {currentPage === 'recipe-quiz' && (
        <RecipeQuizPage
          userName={userName}
          onBack={handleBackToRecipes}
        />
      )}
      {currentPage === 'modules' && (
        <ModulesPage
          userName={userName}
          onBack={handleBack}
          onStartModuleQuiz={handleStartModuleQuiz}
        />
      )}
      {currentPage === 'module-quiz' && (
        <ModuleQuizPage
          userName={userName}
          moduleId={selectedModuleId}
          moduleCategory={selectedModuleCategory}
          onBack={handleBackToModules}
        />
      )}
      {currentPage === 'training' && (
        <TrainingPage userName={userName} onBack={handleBack} />
      )}
      {currentPage === 'quiz' && (
        <QuizPage userName={userName} onBack={handleBack} />
      )}
      {currentPage === 'pre-preparo-selection' && (
        <PrePreparoSelectionPage
          userName={userName}
          onSelectMode={handleSelectPrePreparoMode}
          onBack={handleBack}
        />
      )}
      {currentPage === 'pre-preparo-recipes' && (
        <PrePreparoLearningPage
          userName={userName}
          onBack={handleBackToPrePreparoSelection}
        />
      )}
      {currentPage === 'pre-preparo-quiz' && (
        <PrePreparoQuizPage
          userName={userName}
          onBack={handleBackToPrePreparoSelection}
        />
      )}
      {currentPage === 'pre-preparo-microlearning' && (
        <PrePreparoMicrolearningPage
          userName={userName}
          onBack={handleBackToPrePreparoSelection}
        />
      )}
    </div>
  );
}
