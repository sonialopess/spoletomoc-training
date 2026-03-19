import React, { useState } from 'react';
import '../styles/HomePage.css';

export default function HomePage({ onStartDashboard, onStartRecipes, onStartModules, onStartTraining, onStartQuiz, onStartPrePreparo }) {
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [selectedMenu, setSelectedMenu] = useState(null);

  const handleSelectMenu = (menu) => {
    if (name.trim()) {
      setError('');
      setSelectedMenu(menu);
    } else {
      setError('Por favor, digite seu nome para continuar');
    }
  };

  const handleStartRecipes = () => {
    onStartRecipes(name);
    setSelectedMenu(null);
  };

  const handleStartModules = () => {
    onStartModules(name);
    setSelectedMenu(null);
  };

  const handleStartTraining = () => {
    onStartTraining(name);
    setSelectedMenu(null);
  };

  const handleStartQuiz = () => {
    onStartQuiz(name);
    setSelectedMenu(null);
  };

  const handleStartPrePreparo = () => {
    onStartPrePreparo(name);
    setSelectedMenu(null);
  };

  const handleBack = () => {
    setSelectedMenu(null);
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
                onKeyPress={(e) => e.key === 'Enter' && handleSelectMenu('recipes')}
                placeholder="Digite seu nome aqui"
                className="input-field"
              />
              {error && <p className="error-message">{error}</p>}
            </div>

            {!selectedMenu ? (
              <div className="main-menu-section">
                <p className="menu-label">Escolha o tipo de treinamento:</p>
                <div className="main-menu-buttons">
                  <button
                    onClick={() => handleSelectMenu('recipes')}
                    className="btn btn-menu-main"
                  >
                    🍽️ Receitas Fechadas
                  </button>
                  <button
                    onClick={() => handleSelectMenu('preparo')}
                    className="btn btn-menu-main"
                  >
                    🥘 Pré-Preparo
                  </button>
                </div>
              </div>
            ) : (
              <div className="submenu-section">
                <div className="submenu-header">
                  <button onClick={handleBack} className="btn-back-submenu">← Voltar</button>
                  <h2 className="submenu-title">
                    {selectedMenu === 'recipes' ? '🍽️ Receitas Fechadas' : '🥘 Pré-Preparo'}
                  </h2>
                </div>

                <div className="submenu-buttons">
                  <button
                    onClick={selectedMenu === 'recipes' ? handleStartRecipes : handleStartPrePreparo}
                    className="btn btn-submenu btn-submenu-primary"
                  >
                    📚 Estudar Receitas
                  </button>
                  <button
                    onClick={selectedMenu === 'recipes' ? handleStartModules : handleStartModules}
                    className="btn btn-submenu btn-submenu-secondary"
                  >
                    💡 Saiba Mais
                  </button>
                  {selectedMenu === 'recipes' && (
                    <>
                      <button
                        onClick={handleStartTraining}
                        className="btn btn-submenu btn-submenu-tertiary"
                      >
                        📖 Ver Todas as Receitas
                      </button>
                      <button
                        onClick={handleStartQuiz}
                        className="btn btn-submenu btn-submenu-quaternary"
                      >
                        🎯 Quiz Aleatório
                      </button>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>

          {!selectedMenu && (
            <div className="info-section">
              <p className="info-text">
                Bem-vindo ao sistema de treinamento de receitas do Spoleto! 
                Escolha entre treinar receitas fechadas (pratos completos) ou pré-preparo (ingredientes e preparações).
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
