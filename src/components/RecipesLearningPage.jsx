import React, { useState, useEffect } from 'react';
import { recipes } from '../data/recipes';
import { recordRecipesStudied, getUserProgress } from '../utils/progressStorage';
import '../styles/RecipesLearningPage.css';

export default function RecipesLearningPage({ userName, onBack, onStartRecipeQuiz }) {
  const [currentRecipeIndex, setCurrentRecipeIndex] = useState(0);
  const [studiedRecipes, setStudiedRecipes] = useState(new Set());

  useEffect(() => {
    const userProgress = getUserProgress(userName);
    if (userProgress && userProgress.recipesStudied) {
      setStudiedRecipes(new Set(userProgress.recipesStudied));
    }
  }, [userName]);

  const currentRecipe = recipes[currentRecipeIndex];
  const isCurrentStudied = studiedRecipes.has(currentRecipeIndex);

  const handleMarkAsStudied = () => {
    const newStudied = new Set(studiedRecipes);
    newStudied.add(currentRecipeIndex);
    setStudiedRecipes(newStudied);
    recordRecipesStudied(userName, Array.from(newStudied));
  };

  const handleNext = () => {
    if (currentRecipeIndex < recipes.length - 1) {
      setCurrentRecipeIndex(currentRecipeIndex + 1);
      window.scrollTo(0, 0);
    }
  };

  const handlePrevious = () => {
    if (currentRecipeIndex > 0) {
      setCurrentRecipeIndex(currentRecipeIndex - 1);
      window.scrollTo(0, 0);
    }
  };

  const allRecipesStudied = studiedRecipes.size === recipes.length;
  const progressPercentage = (studiedRecipes.size / recipes.length) * 100;

  return (
    <div className="recipes-learning-page">
      <div className="container">
        <div className="header">
          <button onClick={onBack} className="btn-back">← Voltar</button>
          <h1>Estude as Receitas</h1>
          <p className="user-greeting">Bem-vindo, {userName}!</p>
        </div>

        <div className="progress-section">
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          <p className="progress-text">
            Receitas estudadas: {studiedRecipes.size} de {recipes.length}
          </p>
        </div>

        <div className="recipe-card">
          <div className="recipe-header">
            <h2>{currentRecipe.name}</h2>
            <span className="recipe-counter">
              Receita {currentRecipeIndex + 1} de {recipes.length}
            </span>
          </div>

          <div className="ingredients-section">
            <h3>📋 Ingredientes:</h3>
            <div className="ingredients-list">
              {currentRecipe.ingredients.map((ingredient, index) => (
                <div key={index} className="ingredient-item">
                  <span className="quantity">{ingredient.quantity}</span>
                  <span className="item">{ingredient.item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="study-actions">
            {!isCurrentStudied ? (
              <button
                onClick={handleMarkAsStudied}
                className="btn btn-studied"
              >
                ✓ Estudei esta receita
              </button>
            ) : (
              <div className="studied-badge">
                ✓ Receita estudada
              </div>
            )}
          </div>

          <div className="navigation-buttons">
            <button
              onClick={handlePrevious}
              disabled={currentRecipeIndex === 0}
              className="btn btn-nav"
            >
              ← Anterior
            </button>
            <span className="progress-text-nav">
              {currentRecipeIndex + 1} / {recipes.length}
            </span>
            <button
              onClick={handleNext}
              disabled={currentRecipeIndex === recipes.length - 1}
              className="btn btn-nav"
            >
              Próxima →
            </button>
          </div>
        </div>

        {allRecipesStudied && (
          <div className="quiz-ready-section">
            <div className="quiz-ready-card">
              <h3>🎉 Parabéns!</h3>
              <p>Você estudou todas as {recipes.length} receitas!</p>
              <p className="quiz-ready-text">Agora você está pronto para fazer o quiz!</p>
              <button
                onClick={() => onStartRecipeQuiz()}
                className="btn btn-quiz-ready"
              >
                🎯 Fazer Quiz das Receitas (10 perguntas aleatórias)
              </button>
            </div>
          </div>
        )}

        {!allRecipesStudied && (
          <div className="quiz-locked-section">
            <p className="quiz-locked-text">
              🔒 Estude todas as receitas para desbloquear o quiz!
            </p>
          </div>
        )}

        <div className="tips-section">
          <h3>💡 Dicas de Estudo:</h3>
          <ul>
            <li>Leia com atenção cada ingrediente e sua quantidade</li>
            <li>Memorize os ingredientes principais de cada receita</li>
            <li>Preste atenção nos complementos e ingredientes especiais</li>
            <li>Marque como estudado quando tiver memorizado</li>
            <li>Quando estudar todas, o quiz será desbloqueado!</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
