import React, { useState, useEffect } from 'react';
import { prePreparoQuizzes } from '../data/prePreparoQuizzes';
import '../styles/PrePreparoQuizPage.css';

export default function PrePreparoQuizPage({ userName, onBack }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [quizQuestions, setQuizQuestions] = useState([]);

  useEffect(() => {
    // Shuffle and select 10 random questions
    const shuffled = [...prePreparoQuizzes].sort(() => Math.random() - 0.5);
    setQuizQuestions(shuffled.slice(0, 10));
  }, []);

  const currentQuestion = quizQuestions[currentQuestionIndex];

  const handleAnswerChange = (value) => {
    setAnswers({
      ...answers,
      [currentQuestionIndex]: value
    });
  };

  const handleNext = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleFinish = () => {
    let correctCount = 0;
    quizQuestions.forEach((q, idx) => {
      const userAnswer = answers[idx];
      if (q.type === 'fill-in') {
        if (Array.isArray(q.correctAnswer)) {
          if (userAnswer && q.correctAnswer.some(ans => userAnswer.toLowerCase().includes(ans.toLowerCase()))) {
            correctCount++;
          }
        } else {
          if (userAnswer && userAnswer.toLowerCase().includes(q.correctAnswer.toLowerCase())) {
            correctCount++;
          }
        }
      } else if (q.type === 'multiple-choice') {
        if (userAnswer === q.correctAnswer) {
          correctCount++;
        }
      }
    });
    setScore(correctCount);
    setShowResults(true);

    // Save result
    const results = JSON.parse(localStorage.getItem(`prePreparoQuizResults_${userName}`) || '[]');
    results.push({
      date: new Date().toLocaleString(),
      score: correctCount,
      total: quizQuestions.length,
      percentage: Math.round((correctCount / quizQuestions.length) * 100),
      answers: answers
    });
    localStorage.setItem(`prePreparoQuizResults_${userName}`, JSON.stringify(results));
  };

  const handleRetry = () => {
    setCurrentQuestionIndex(0);
    setAnswers({});
    setShowResults(false);
    setScore(0);
    const shuffled = [...prePreparoQuizzes].sort(() => Math.random() - 0.5);
    setQuizQuestions(shuffled.slice(0, 10));
  };

  if (!currentQuestion) {
    return <div className="loading">Carregando quiz...</div>;
  }

  if (showResults) {
    const percentage = Math.round((score / quizQuestions.length) * 100);
    const passed = percentage >= 70;

    return (
      <div className="pre-preparo-results-page">
        <div className="results-card">
          <div className="results-header">
            <h1>{passed ? '🎉 Parabéns!' : '💪 Quase lá!'}</h1>
            <p className="user-name">{userName}</p>
          </div>

          <div className="score-circle">
            <div className="score-number">{score}/{quizQuestions.length}</div>
            <div className="score-percentage">{percentage}%</div>
          </div>

          <div className="message-box" style={{ background: passed ? '#d4edda' : '#fff3cd' }}>
            <p>
              {passed
                ? 'Excelente desempenho! Você demonstrou bom conhecimento sobre as receitas de pré-preparo.'
                : 'Você pode melhorar! Revise as receitas e tente novamente.'}
            </p>
          </div>

          <div className="review-section">
            <h3>📋 Revisão das Respostas</h3>
            <div className="review-list">
              {quizQuestions.map((q, idx) => {
                const userAnswer = answers[idx];
                let isCorrect = false;

                if (q.type === 'fill-in') {
                  if (Array.isArray(q.correctAnswer)) {
                    isCorrect = userAnswer && q.correctAnswer.some(ans => userAnswer.toLowerCase().includes(ans.toLowerCase()));
                  } else {
                    isCorrect = userAnswer && userAnswer.toLowerCase().includes(q.correctAnswer.toLowerCase());
                  }
                } else if (q.type === 'multiple-choice') {
                  isCorrect = userAnswer === q.correctAnswer;
                }

                return (
                  <div key={idx} className={`review-item ${isCorrect ? 'correct' : 'incorrect'}`}>
                    <div className="review-question">
                      <span className="review-number">Pergunta {idx + 1}</span>
                      <span className="review-status">{isCorrect ? '✓ Correto' : '✗ Incorreto'}</span>
                    </div>
                    <p className="review-recipe"><strong>Receita:</strong> {q.recipe}</p>
                    <p className="review-text"><strong>Pergunta:</strong> {q.question}</p>
                    <div className="review-answer-section">
                      <div className="review-answer">
                        <strong>Sua resposta:</strong>
                        <span className={isCorrect ? 'answer-correct' : 'answer-incorrect'}>
                          {userAnswer || '(em branco)'}
                        </span>
                      </div>
                      {!isCorrect && (
                        <div className="review-correct">
                          <strong>Resposta correta:</strong>
                          <span className="answer-correct">
                            {Array.isArray(q.correctAnswer) ? q.correctAnswer.join(', ') : q.correctAnswer}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="review-explanation">
                      💡 <strong>Explicação:</strong> {q.explanation}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="results-actions">
            <button className="btn-retry" onClick={handleRetry}>
              🔄 Fazer Novo Quiz
            </button>
            <button className="btn-home" onClick={onBack}>
              ← Voltar ao Menu
            </button>
          </div>

          <div className="print-note">
            <p>💡 Dica: Use a função de imprimir (Ctrl+P ou Cmd+P) para salvar seus resultados como PDF!</p>
          </div>
        </div>
      </div>
    );
  }

  const isAnswered = answers[currentQuestionIndex] !== undefined;
  const progress = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;

  return (
    <div className="pre-preparo-quiz-page">
      <div className="quiz-header">
        <button onClick={onBack} className="btn-back">← Voltar</button>
        <h1>🎯 Quiz de Pré-Preparo</h1>
        <p className="user-greeting">Olá, {userName}!</p>
      </div>

      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }}></div>
      </div>

      <div className="question-counter">
        Pergunta {currentQuestionIndex + 1} de {quizQuestions.length}
      </div>

      <div className="question-card">
        <div className="recipe-name">
          🥘 {currentQuestion.recipe}
        </div>

        <h2 className="question-text">{currentQuestion.question}</h2>

        <div className="options-container">
          {currentQuestion.type === 'fill-in' ? (
            <input
              type="text"
              className="fill-in-input"
              placeholder="Digite sua resposta aqui..."
              value={answers[currentQuestionIndex] || ''}
              onChange={(e) => handleAnswerChange(e.target.value)}
            />
          ) : (
            currentQuestion.options.map((option, idx) => (
              <label key={idx} className="option-button">
                <input
                  type="radio"
                  name={`question-${currentQuestionIndex}`}
                  value={option}
                  checked={answers[currentQuestionIndex] === option}
                  onChange={(e) => handleAnswerChange(e.target.value)}
                />
                <span className="option-letter">{String.fromCharCode(65 + idx)}</span>
                <span className="option-text">{option}</span>
              </label>
            ))
          )}
        </div>

        <div className="unanswered-warning">
          {!isAnswered && '⚠️ Responda a pergunta para continuar'}
        </div>
      </div>

      <div className="quiz-navigation">
        <button
          className="btn-nav"
          onClick={handlePrevious}
          disabled={currentQuestionIndex === 0}
        >
          ← Anterior
        </button>

        {currentQuestionIndex < quizQuestions.length - 1 ? (
          <button
            className="btn-nav"
            onClick={handleNext}
            disabled={!isAnswered}
          >
            Próxima →
          </button>
        ) : (
          <button
            className="btn-finish"
            onClick={handleFinish}
            disabled={!isAnswered}
          >
            ✓ Finalizar Quiz
          </button>
        )}
      </div>
    </div>
  );
}
