import React, { useState } from 'react';
import { recipes } from '../data/recipes';
import '../styles/TrainingPage.css';

export default function TrainingPage({ userName, onBack }) {
  const [currentRecipeIndex, setCurrentRecipeIndex] = useState(0);
  const currentRecipe = recipes[currentRecipeIndex];

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

  return (
    <div className="training-page">
      <div className="container">
        <div className="header">
          <button onClick={onBack} className="btn-back">← Voltar</button>
          <h1>Treinamento de Receitas</h1>
          <p className="user-greeting">Bem-vindo, {userName}!</p>
        </div>

        <div className="recipe-card">
          <div className="recipe-header">
            <h2>{currentRecipe.name}</h2>
            <span className="recipe-counter">
              Receita {currentRecipeIndex + 1} de {recipes.length}
            </span>
          </div>

          <div className="ingredients-section">
            <h3>Ingredientes:</h3>
            <ul className="ingredients-list">
              {currentRecipe.ingredients.map((ingredient, index) => (
                <li key={index} className="ingredient-item">
                  <span className="quantity">{ingredient.quantity}</span>
                  <span className="item">{ingredient.item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{
                width: `${((currentRecipeIndex + 1) / recipes.length) * 100}%`,
              }}
            ></div>
          </div>

          <div className="navigation-buttons">
            <button
              onClick={handlePrevious}
              disabled={currentRecipeIndex === 0}
              className="btn btn-nav"
            >
              ← Anterior
            </button>
            <span className="progress-text">
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

        <div className="tips-section">
          <h3>💡 Dicas:</h3>
          <ul>
            <li>Leia com atenção cada ingrediente e sua quantidade</li>
            <li>Memorize as combinações de ingredientes</li>
            <li>Preste atenção nos molhos utilizados em cada receita</li>
            <li>Quando estiver pronto, faça o quiz para testar seu conhecimento!</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
