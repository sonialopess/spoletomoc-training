import React, { useState } from 'react';
import { modules } from '../data/modules';
import '../styles/ModulesPage.css';

export default function ModulesPage({ userName, onBack, onStartModuleQuiz }) {
  const [selectedModule, setSelectedModule] = useState(null);
  const [selectedLesson, setSelectedLesson] = useState(null);

  if (selectedLesson && selectedModule) {
    const lesson = selectedModule.lessons.find(l => l.id === selectedLesson);
    return (
      <div className="lesson-view">
        <div className="container">
          <div className="lesson-header">
            <button onClick={() => setSelectedLesson(null)} className="btn-back">← Voltar</button>
            <h1>{lesson.title}</h1>
          </div>

          <div className="lesson-card">
            <div className="lesson-emoji">{lesson.image}</div>
            <p className="lesson-content">{lesson.content}</p>

            {lesson.characteristics && (
              <div className="characteristics">
                <h3>Características:</h3>
                <ul>
                  {lesson.characteristics.map((char, idx) => (
                    <li key={idx}>{char}</li>
                  ))}
                </ul>
              </div>
            )}

            {lesson.types && (
              <div className="types">
                <h3>Tipos:</h3>
                <ul>
                  {lesson.types.map((type, idx) => (
                    <li key={idx}>{type}</li>
                  ))}
                </ul>
              </div>
            )}

            {lesson.recipes && lesson.recipes.length > 0 && (
              <div className="recipes-section">
                <h3>Receitas que usam este ingrediente:</h3>
                <div className="recipes-grid">
                  {lesson.recipes.map((recipe, idx) => (
                    <div key={idx} className="recipe-tag">
                      {recipe}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <button
              onClick={() => onStartModuleQuiz(selectedModule.id, selectedModule.category)}
              className="btn btn-quiz"
            >
              Fazer Quiz deste Módulo (5 perguntas) →
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (selectedModule) {
    return (
      <div className="module-view">
        <div className="container">
          <div className="module-header">
            <button onClick={() => setSelectedModule(null)} className="btn-back">← Voltar</button>
            <h1>{selectedModule.title}</h1>
            <p className="module-description">{selectedModule.description}</p>
          </div>

          <div className="lessons-grid">
            {selectedModule.lessons.map((lesson) => (
              <div
                key={lesson.id}
                onClick={() => setSelectedLesson(lesson.id)}
                className="lesson-card-small"
              >
                <div className="lesson-emoji-small">{lesson.image}</div>
                <h3>{lesson.title}</h3>
                <p>{lesson.content.substring(0, 60)}...</p>
              </div>
            ))}
          </div>

          <div className="module-footer">
            <button
              onClick={() => onStartModuleQuiz(selectedModule.id, selectedModule.category)}
              className="btn btn-primary-large"
            >
              🎯 Fazer Quiz deste Módulo (5 perguntas)
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="modules-page">
      <div className="container">
        <div className="header">
          <button onClick={onBack} className="btn-back">← Voltar</button>
          <h1>Módulos de Aprendizado</h1>
          <p className="user-greeting">Bem-vindo, {userName}!</p>
        </div>

        <div className="intro-section">
          <div className="intro-card">
            <h2>📚 Aprenda com Microlearning</h2>
            <p>
              Estude módulos pequenos e focados, um tema por vez. Cada módulo tem lições curtas 
              e um quiz de 5 perguntas para testar seu conhecimento. Sem confusão entre massas, 
              molhos e ingredientes!
            </p>
          </div>
        </div>

        <div className="modules-grid">
          {modules.map((module) => (
            <div
              key={module.id}
              onClick={() => setSelectedModule(module)}
              className="module-card"
            >
              <div className="module-number">{module.id}</div>
              <h3>{module.title}</h3>
              <p>{module.description}</p>
              <div className="module-info">
                <span className="lesson-count">📖 {module.lessons.length} lições</span>
              </div>
              <button className="btn-explore">Explorar →</button>
            </div>
          ))}
        </div>

        <div className="learning-tips">
          <h3>💡 Dicas de Aprendizado:</h3>
          <ul>
            <li><strong>Comece pelo Módulo 1:</strong> Aprenda os tipos de massa primeiro</li>
            <li><strong>Depois o Módulo 2:</strong> Conheça os molhos e suas características</li>
            <li><strong>Depois o Módulo 3:</strong> Estude as carnes e proteínas</li>
            <li><strong>Depois o Módulo 4:</strong> Aprenda os ingredientes especiais</li>
            <li><strong>Por fim o Módulo 5:</strong> Estude receitas completas</li>
            <li><strong>Faça os quizzes:</strong> 5 perguntas por módulo para fixar o aprendizado</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
