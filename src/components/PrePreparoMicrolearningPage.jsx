import React, { useState, useEffect } from 'react';
import { prePreparoModules } from '../data/prePreparoModules';
import { prePreparoRecipes } from '../data/prePreparoRecipes';
import '../styles/PrePreparoMicrolearningPage.css';

export default function PrePreparoMicrolearningPage({ userName, onBack }) {
  const [selectedModule, setSelectedModule] = useState(null);
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const [completedLessons, setCompletedLessons] = useState(new Set());

  useEffect(() => {
    const saved = localStorage.getItem(`prePreparoMicrolearning_${userName}`);
    if (saved) {
      setCompletedLessons(new Set(JSON.parse(saved)));
    }
  }, [userName]);

  useEffect(() => {
    localStorage.setItem(`prePreparoMicrolearning_${userName}`, JSON.stringify([...completedLessons]));
  }, [completedLessons, userName]);

  const handleSelectModule = (module) => {
    setSelectedModule(module);
    setCurrentLessonIndex(0);
  };

  const handleCompleteLesson = () => {
    const lessonKey = `${selectedModule.id}-${selectedModule.lessons[currentLessonIndex].id}`;
    const newCompleted = new Set(completedLessons);
    newCompleted.add(lessonKey);
    setCompletedLessons(newCompleted);
  };

  const handleNextLesson = () => {
    if (currentLessonIndex < selectedModule.lessons.length - 1) {
      setCurrentLessonIndex(currentLessonIndex + 1);
    }
  };

  const handlePreviousLesson = () => {
    if (currentLessonIndex > 0) {
      setCurrentLessonIndex(currentLessonIndex - 1);
    }
  };

  const handleBackToModules = () => {
    setSelectedModule(null);
    setCurrentLessonIndex(0);
  };

  if (selectedModule) {
    const currentLesson = selectedModule.lessons[currentLessonIndex];
    const lessonKey = `${selectedModule.id}-${currentLesson.id}`;
    const isCompleted = completedLessons.has(lessonKey);
    const progress = (completedLessons.size / prePreparoModules.reduce((acc, m) => acc + m.lessons.length, 0)) * 100;

    return (
      <div className="pre-preparo-microlearning-page">
        <div className="container">
          <div className="header">
            <button onClick={handleBackToModules} className="btn-back">← Voltar aos Módulos</button>
            <h1>{selectedModule.icon} {selectedModule.name}</h1>
            <p className="user-greeting">Olá, {userName}!</p>
          </div>

          <div className="progress-section">
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${progress}%` }}></div>
            </div>
            <p className="progress-text">{Math.round(completedLessons.size)} lições completadas ({Math.round(progress)}%)</p>
          </div>

          <div className="lesson-card">
            <div className="lesson-header">
              <h2>{currentLesson.title}</h2>
              <span className="lesson-counter">Lição {currentLessonIndex + 1} de {selectedModule.lessons.length}</span>
            </div>

            <div className="lesson-content">
              <p className="lesson-text">{currentLesson.content}</p>

              <div className="lesson-info">
                <div className="info-box">
                  <strong>👨‍🍳 Forma de Preparo:</strong>
                  <span className={`cooking-method ${currentLesson.cookingMethod.toLowerCase()}`}>
                    {currentLesson.cookingMethod === 'Forno' && '🔥'}
                    {currentLesson.cookingMethod === 'Panela' && '🍳'}
                    {currentLesson.cookingMethod === 'Cru' && '❄️'}
                    {currentLesson.cookingMethod === 'Panela/Forno' && '🔄'}
                    {' ' + currentLesson.cookingMethod}
                  </span>
                </div>
              </div>

              {currentLesson.recipeIds && currentLesson.recipeIds.length > 0 && (
                <div className="related-recipes">
                  <h3>📖 Receitas Relacionadas:</h3>
                  <div className="recipes-list">
                    {currentLesson.recipeIds.map(recipeId => {
                      const recipe = prePreparoRecipes.find(r => r.id === recipeId);
                      return recipe ? (
                        <div key={recipe.id} className="recipe-tag">
                          {recipe.name}
                        </div>
                      ) : null;
                    })}
                  </div>
                </div>
              )}
            </div>

            <div className="study-actions">
              {!isCompleted ? (
                <button className="btn-studied" onClick={handleCompleteLesson}>
                  ✓ Completei esta lição
                </button>
              ) : (
                <div className="studied-badge">✓ Lição completada!</div>
              )}
            </div>
          </div>

          <div className="navigation-buttons">
            <button
              className="btn-nav"
              onClick={handlePreviousLesson}
              disabled={currentLessonIndex === 0}
            >
              ← Anterior
            </button>
            <span className="progress-text-nav">{currentLessonIndex + 1} / {selectedModule.lessons.length}</span>
            <button
              className="btn-nav"
              onClick={handleNextLesson}
              disabled={currentLessonIndex === selectedModule.lessons.length - 1}
            >
              Próxima →
            </button>
          </div>

          <div className="lessons-list-section">
            <h3>📚 Lições do Módulo</h3>
            <div className="lessons-grid">
              {selectedModule.lessons.map((lesson, idx) => {
                const key = `${selectedModule.id}-${lesson.id}`;
                const done = completedLessons.has(key);
                return (
                  <button
                    key={lesson.id}
                    className={`lesson-link ${done ? 'studied' : ''} ${idx === currentLessonIndex ? 'active' : ''}`}
                    onClick={() => setCurrentLessonIndex(idx)}
                  >
                    {done && '✓ '}
                    {lesson.title}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pre-preparo-microlearning-page">
      <div className="container">
        <div className="header">
          <button onClick={onBack} className="btn-back">← Voltar</button>
          <h1>🧠 Microlearning - Pré-Preparo</h1>
          <p className="user-greeting">Olá, {userName}!</p>
        </div>

        <div className="modules-grid">
          {prePreparoModules.map((module) => {
            const completedInModule = [...completedLessons].filter(
              key => key.startsWith(`${module.id}-`)
            ).length;
            const progress = (completedInModule / module.lessons.length) * 100;

            return (
              <div
                key={module.id}
                className="module-card"
                onClick={() => handleSelectModule(module)}
              >
                <div className="module-icon">{module.icon}</div>
                <h2>{module.name}</h2>
                <p className="module-description">{module.description}</p>

                <div className="module-progress">
                  <div className="progress-bar-small">
                    <div className="progress-fill" style={{ width: `${progress}%` }}></div>
                  </div>
                  <span className="progress-text-small">
                    {completedInModule}/{module.lessons.length} lições
                  </span>
                </div>

                <span className="module-action">Começar →</span>
              </div>
            );
          })}
        </div>

        <div className="info-box">
          <h3>💡 Dica</h3>
          <p>
            O Microlearning oferece lições curtas e focadas sobre cada aspecto do pré-preparo.
            Complete as lições para rastrear seu progresso e aprender de forma eficiente!
          </p>
        </div>
      </div>
    </div>
  );
}
