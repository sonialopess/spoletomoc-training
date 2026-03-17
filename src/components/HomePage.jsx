import React, { useState } from 'react';
import '../styles/HomePage.css';

export default function HomePage({ onStartDashboard, onStartRecipes, onStartModules, onStartTraining, onStartQuiz }) {
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleStartRecipes = () => {
    if (name.trim()) {
      setError('');
      onStartRecipes(name);
    } else {
      setError('Por favor, digite seu nome para continuar');
    }
  };

  const handleStartModules = () => {
    if (name.trim()) {
      setError('');
      onStartModules(name);
    } else {
      setError('Por favor, digite seu nome para continuar');
    }
  };

  const handleStartTraining = () => {
    if (name.trim()) {
      setError('');
      onStartTraining(name);
    } else {
      setError('Por favor, digite seu nome para continuar');
    }
  };

  const handleStartQuiz = () => {
    if (name.trim()) {
      setError('');
      onStartQuiz(name);
    } else {
      setError('Por favor, digite seu nome para continuar');
    }
  };

  return (
    <div className="home-page">
      <div className="container">
        <div className="dashboard-button-container">
          <button onClick={onStartDashboard} className="btn-dashboard-header">
            📊 Painel de Acompanhamento
          </button>
        </div>

        <div className="content">
          <div className="logo-section">
            <h1 className="title">Spoleto</h1>
            <p className="subtitle">Treinamento de Receitas</p>
          </div>

          <div className="form-section">
            <div className="form-group">
              <label htmlFor="name">Qual é o seu nome?</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleStartRecipes()}
                placeholder="Digite seu nome aqui"
                className="input-field"
              />
              {error && <p className="error-message">{error}</p>}
            </div>

            <div className="buttons-section">
              <button
                onClick={handleStartRecipes}
                className="btn btn-primary"
              >
                📚 Estudar Receitas (Recomendado)
              </button>
              <button
                onClick={handleStartModules}
                className="btn btn-secondary"
              >
                🧠 Microlearning
              </button>
              <button
                onClick={handleStartTraining}
                className="btn btn-tertiary"
              >
                📖 Ver Todas as Receitas
              </button>
              <button
                onClick={handleStartQuiz}
                className="btn btn-quaternary"
              >
                🎯 Quiz Aleatório
              </button>
            </div>
          </div>

          <div className="info-section">
            <p className="info-text">
              Bem-vindo ao sistema de treinamento de receitas do Spoleto! 
              Escolha entre estudar receitas individuais (recomendado), microlearning, ver todas ou fazer um quiz.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
