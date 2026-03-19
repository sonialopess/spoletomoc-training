import React from 'react';
import '../styles/PrePreparoSelectionPage.css';

export default function PrePreparoSelectionPage({ userName, onSelectMode, onBack }) {
  return (
    <div className="pre-preparo-selection-page">
      <div className="container">
        <div className="header">
          <button onClick={onBack} className="btn-back">← Voltar</button>
          <h1>🥘 Receitas de Pré-Preparo</h1>
          <p className="user-greeting">Olá, {userName}!</p>
        </div>

        <div className="selection-grid">
          <div className="selection-card" onClick={() => onSelectMode('pre-preparo-recipes')}>
            <div className="card-icon">📚</div>
            <h2>Estudar Receitas</h2>
            <p>Aprenda cada receita de pré-preparo individualmente com todos os ingredientes e modo de preparo.</p>
            <span className="card-action">Começar →</span>
          </div>

          <div className="selection-card" onClick={() => onSelectMode('pre-preparo-microlearning')}>
            <div className="card-icon">🧠</div>
            <h2>Microlearning</h2>
            <p>Aprenda em módulos pequenos e focados: proteínas, legumes, ingredientes assados, queijos e complementos.</p>
            <span className="card-action">Começar →</span>
          </div>

          <div className="selection-card" onClick={() => onSelectMode('pre-preparo-quiz')}>
            <div className="card-icon">🎯</div>
            <h2>Quiz</h2>
            <p>Teste seus conhecimentos com perguntas sobre ingredientes e formas de preparo. Perguntas de completar e múltipla escolha.</p>
            <span className="card-action">Começar →</span>
          </div>
        </div>

        <div className="info-box">
          <h3>💡 Dica</h3>
          <p>Recomendamos começar estudando todas as receitas antes de fazer o quiz. Assim você terá melhor aproveitamento!</p>
        </div>
      </div>
    </div>
  );
}
