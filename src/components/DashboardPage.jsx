import React, { useState, useEffect } from 'react';
import { getAllUsersProgress, downloadProgressCSV, deleteUserProgress } from '../utils/progressStorage';
import '../styles/DashboardPage.css';

export default function DashboardPage({ onBack }) {
  const [allProgress, setAllProgress] = useState([]);
  const [sortBy, setSortBy] = useState('name');
  const [filterType, setFilterType] = useState('all');
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    loadProgress();
    const interval = setInterval(loadProgress, 2000);
    return () => clearInterval(interval);
  }, []);

  const loadProgress = () => {
    const progress = getAllUsersProgress();
    setAllProgress(progress);
  };

  const handleDeleteUser = (userName) => {
    if (window.confirm(`Tem certeza que deseja deletar o progresso de ${userName}?`)) {
      deleteUserProgress(userName);
      loadProgress();
      setSelectedUser(null);
    }
  };

  const handleDownloadCSV = () => {
    downloadProgressCSV();
  };

  const getSortedAndFilteredUsers = () => {
    let filtered = [...allProgress];

    if (filterType === 'completed') {
      filtered = filtered.filter(user => user.recipesStudiedCount === 28);
    } else if (filterType === 'in-progress') {
      filtered = filtered.filter(user => user.recipesStudiedCount > 0 && user.recipesStudiedCount < 28);
    } else if (filterType === 'not-started') {
      filtered = filtered.filter(user => !user.recipesStudiedCount || user.recipesStudiedCount === 0);
    }

    filtered.sort((a, b) => {
      if (sortBy === 'name') {
        return a.userName.localeCompare(b.userName);
      } else if (sortBy === 'progress') {
        return (b.recipesStudiedCount || 0) - (a.recipesStudiedCount || 0);
      } else if (sortBy === 'quizzes') {
        const aQuizzes = a.quizzes ? a.quizzes.length : 0;
        const bQuizzes = b.quizzes ? b.quizzes.length : 0;
        return bQuizzes - aQuizzes;
      } else if (sortBy === 'score') {
        return (b.lastQuizPercentage || 0) - (a.lastQuizPercentage || 0);
      }
      return 0;
    });

    return filtered;
  };

  const sortedUsers = getSortedAndFilteredUsers();
  const totalUsers = allProgress.length;
  const completedUsers = allProgress.filter(u => u.recipesStudiedCount === 28).length;
  const totalQuizzes = allProgress.reduce((sum, u) => sum + (u.quizzes ? u.quizzes.length : 0), 0);

  return (
    <div className="dashboard-page">
      <div className="container">
        <div className="dashboard-header">
          <button onClick={onBack} className="btn-back">← Voltar</button>
          <h1>📊 Painel de Acompanhamento</h1>
          <button onClick={handleDownloadCSV} className="btn-download">
            📥 Exportar CSV
          </button>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-number">{totalUsers}</div>
            <div className="stat-label">Colaboradoras</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{completedUsers}</div>
            <div className="stat-label">Completaram Receitas</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{totalQuizzes}</div>
            <div className="stat-label">Quizzes Realizados</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">
              {totalUsers > 0 ? Math.round((completedUsers / totalUsers) * 100) : 0}%
            </div>
            <div className="stat-label">Taxa de Conclusão</div>
          </div>
        </div>

        <div className="controls-section">
          <div className="filter-group">
            <label>Filtrar por:</label>
            <select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
              <option value="all">Todas</option>
              <option value="completed">Completaram</option>
              <option value="in-progress">Em Progresso</option>
              <option value="not-started">Não Iniciaram</option>
            </select>
          </div>

          <div className="sort-group">
            <label>Ordenar por:</label>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="name">Nome</option>
              <option value="progress">Progresso de Receitas</option>
              <option value="quizzes">Quantidade de Quizzes</option>
              <option value="score">Última Nota</option>
            </select>
          </div>
        </div>

        <div className="users-section">
          {sortedUsers.length === 0 ? (
            <div className="no-data">
              <p>Nenhuma colaboradora encontrada com os filtros selecionados.</p>
            </div>
          ) : (
            <div className="users-grid">
              {sortedUsers.map((user) => (
                <div
                  key={user.userName}
                  className="user-card"
                  onClick={() => setSelectedUser(selectedUser === user.userName ? null : user.userName)}
                >
                  <div className="user-header">
                    <h3>{user.userName}</h3>
                    <span className="status-badge">
                      {user.recipesStudiedCount === 28 ? '✓ Completo' : `${user.recipesStudiedCount || 0}/28`}
                    </span>
                  </div>

                  <div className="progress-bar-container">
                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        style={{ width: `${((user.recipesStudiedCount || 0) / 28) * 100}%` }}
                      ></div>
                    </div>
                    <span className="progress-text">
                      {Math.round(((user.recipesStudiedCount || 0) / 28) * 100)}%
                    </span>
                  </div>

                  <div className="user-stats">
                    <div className="stat">
                      <span className="label">Receitas:</span>
                      <span className="value">{user.recipesStudiedCount || 0}/28</span>
                    </div>
                    <div className="stat">
                      <span className="label">Quizzes:</span>
                      <span className="value">{user.quizzes ? user.quizzes.length : 0}</span>
                    </div>
                    <div className="stat">
                      <span className="label">Última Nota:</span>
                      <span className="value">{user.lastQuizPercentage ? `${user.lastQuizPercentage}%` : '-'}</span>
                    </div>
                  </div>

                  {selectedUser === user.userName && (
                    <div className="user-details">
                      <div className="details-section">
                        <h4>Informações Gerais</h4>
                        <p><strong>Última Atualização:</strong> {user.lastUpdated ? new Date(user.lastUpdated).toLocaleString('pt-BR') : '-'}</p>
                        <p><strong>Última Data de Quiz:</strong> {user.lastQuizDate ? new Date(user.lastQuizDate).toLocaleString('pt-BR') : '-'}</p>
                      </div>

                      {user.quizzes && user.quizzes.length > 0 && (
                        <div className="details-section">
                          <h4>Histórico de Quizzes</h4>
                          <div className="quizzes-list">
                            {user.quizzes.map((quiz, index) => (
                              <div key={index} className="quiz-item">
                                <span className="quiz-type">{quiz.type}</span>
                                <span className="quiz-score">{quiz.score}/{quiz.totalQuestions}</span>
                                <span className={`quiz-percentage ${quiz.percentage >= 70 ? 'passed' : 'failed'}`}>
                                  {quiz.percentage}%
                                </span>
                                <span className="quiz-date">
                                  {new Date(quiz.date).toLocaleDateString('pt-BR')}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="details-actions">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDeleteUser(user.userName);
                          }}
                          className="btn-delete"
                        >
                          🗑️ Deletar Progresso
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="dashboard-info">
          <h3>ℹ️ Informações</h3>
          <ul>
            <li>O painel atualiza automaticamente a cada 2 segundos</li>
            <li>Clique em um cartão para ver detalhes completos</li>
            <li>Use os filtros para encontrar colaboradoras específicas</li>
            <li>Exporte os dados em CSV para análise em planilha</li>
            <li>Os dados são armazenados localmente no navegador de cada colaboradora</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
