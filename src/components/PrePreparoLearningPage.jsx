import React, { useState, useEffect } from 'react';
import { prePreparoRecipes } from '../data/prePreparoRecipes';
import '../styles/PrePreparoLearningPage.css';

export default function PrePreparoLearningPage({ userName, onBack }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [studiedRecipes, setStudiedRecipes] = useState(new Set());
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem(`prePreparoStudied_${userName}`);
    if (saved) {
      setStudiedRecipes(new Set(JSON.parse(saved)));
    }
  }, [userName]);

  useEffect(() => {
    const newProgress = (studiedRecipes.size / prePreparoRecipes.length) * 100;
    setProgress(newProgress);
    localStorage.setItem(`prePreparoStudied_${userName}`, JSON.stringify([...studiedRecipes]));
  }, [studiedRecipes, userName]);

  const currentRecipe = prePreparoRecipes[currentIndex];
  const isStudied = studiedRecipes.has(currentRecipe.id);

  const handleStudied = () => {
    const newStudied = new Set(studiedRecipes);
    newStudied.add(currentRecipe.id);
    setStudiedRecipes(newStudied);
  };

  const handleNext = () => {
    if (currentIndex < prePreparoRecipes.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleGoToRecipe = (id) => {
    const index = prePreparoRecipes.findIndex(r => r.id === id);
    if (index !== -1) {
      setCurrentIndex(index);
    }
  };

  return (
    <div className="pre-preparo-learning-page">
      <div className="container">
        <div className="header">
          <button onClick={onBack} className="btn-back">← Voltar</button>
          <h1>📚 Estudar Receitas de Pré-Preparo</h1>
          <p className="user-greeting">Olá, {userName}!</p>
        </div>

        <div className="progress-section">
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%` }}></div>
          </div>
          <p className="progress-text">{studiedRecipes.size} de {prePreparoRecipes.length} receitas estudadas ({Math.round(progress)}%)</p>
        </div>

        <div className="recipe-card">
          <div className="recipe-header">
            <div>
              <h2>{currentRecipe.name}</h2>
              <p className="recipe-category">{currentRecipe.category} - {currentRecipe.subcategory}</p>
              {currentRecipe.description && <p className="recipe-description">{currentRecipe.description}</p>}
            </div>
            <span className="recipe-counter">Receita {currentIndex + 1} de {prePreparoRecipes.length}</span>
          </div>

          <div className="recipe-content">
            <div className="ingredients-section">
              <h3>📋 Ingredientes:</h3>
              <ul className="ingredients-list">
                {currentRecipe.ingredients.map((ing, idx) => (
                  <li key={idx} className="ingredient-item">
                    <span className="quantity">{ing.quantity}</span>
                    <span className="item">{ing.item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {currentRecipe.preparationMethod && (
              <div className="preparation-section">
                <h3>👨‍🍳 Modo de Preparo:</h3>
                <p className="preparation-text">{currentRecipe.preparationMethod}</p>
              </div>
            )}

            <div className="cooking-info">
              <div className="info-box">
                <strong>Forma de Cozimento:</strong>
                <span className={`cooking-method ${currentRecipe.cookingMethod.toLowerCase()}`}>
                  {currentRecipe.cookingMethod === 'Forno' && '🔥'}
                  {currentRecipe.cookingMethod === 'Panela' && '🍳'}
                  {currentRecipe.cookingMethod === 'Cru' && '❄️'}
                  {' ' + currentRecipe.cookingMethod}
                </span>
              </div>
              <div className="info-box">
                <strong>Validade:</strong>
                <span>{currentRecipe.validity}</span>
              </div>
              <div className="info-box">
                <strong>Armazenamento:</strong>
                <span>{currentRecipe.storage}</span>
              </div>
            </div>
          </div>

          <div className="study-actions">
            {!isStudied ? (
              <button className="btn-studied" onClick={handleStudied}>
                ✓ Estudei esta receita
              </button>
            ) : (
              <div className="studied-badge">✓ Receita estudada!</div>
            )}
          </div>
        </div>

        <div className="navigation-buttons">
          <button
            className="btn-nav"
            onClick={handlePrevious}
            disabled={currentIndex === 0}
          >
            ← Anterior
          </button>
          <span className="progress-text-nav">{currentIndex + 1} / {prePreparoRecipes.length}</span>
          <button
            className="btn-nav"
            onClick={handleNext}
            disabled={currentIndex === prePreparoRecipes.length - 1}
          >
            Próxima →
          </button>
        </div>

        <div className="recipes-list-section">
          <h3>📖 Todas as Receitas</h3>
          <div className="recipes-grid">
            {prePreparoRecipes.map((recipe) => (
              <button
                key={recipe.id}
                className={`recipe-link ${studiedRecipes.has(recipe.id) ? 'studied' : ''} ${recipe.id === currentRecipe.id ? 'active' : ''}`}
                onClick={() => handleGoToRecipe(recipe.id)}
              >
                {studiedRecipes.has(recipe.id) && '✓ '}
                {recipe.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
