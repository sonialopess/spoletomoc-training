import React, { useState, useEffect } from 'react';
import { getRandomRecipeQuizzes } from '../data/recipeQuizzes';
import { recordQuizResult } from '../utils/progressStorage';
import '../styles/RecipeQuizPage.css';

export default function RecipeQuizPage({ userName, onBack }) {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const quizzes = getRandomRecipeQuizzes(10);
    setQuestions(quizzes);
  }, []);

  if (questions.length === 0) {
    return <div className="loading">Carregando quiz...</div>;
  }

  const currentQuestion = questions[currentQuestionIndex];
  const isAnswered = answers[currentQuestionIndex] !== undefined;

  const handleAnswer = (selectedIndex) => {
    setAnswers({
      ...answers,
      [currentQuestionIndex]: selectedIndex,
    });
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      window.scrollTo(0, 0);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      window.scrollTo(0, 0);
    }
  };

  const handleFinish = () => {
    let correctAnswers = 0;
    questions.forEach((question, index) => {
      if (answers[index] === question.correctAnswer) {
        correctAnswers++;
      }
    });
    setScore(correctAnswers);
    recordQuizResult(userName, 'Quiz de Receitas', correctAnswers, questions.length);
    setShowResults(true);
    window.scrollTo(0, 0);
  };

  if (showResults) {
    return (
      <RecipeResultsPage
        userName={userName}
        score={score}
        totalQuestions={questions.length}
        onBack={onBack}
        onRetry={() => {
          setCurrentQuestionIndex(0);
          setAnswers({});
          setShowResults(false);
          const newQuizzes = getRandomRecipeQuizzes(10);
          setQuestions(newQuizzes);
        }}
        questions={questions}
        userAnswers={answers}
      />
    );
  }

  const percentage = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <div className="recipe-quiz-page">
      <div className="container">
        <div className="quiz-header">
          <button onClick={onBack} className="btn-back">← Voltar</button>
          <h1>Quiz de Receitas</h1>
          <p className="user-greeting">{userName}</p>
        </div>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>

        <div className="question-counter">
          Pergunta {currentQuestionIndex + 1} de {questions.length}
        </div>

        <div className="question-card">
          <div className="recipe-name">
            <strong>Receita:</strong> {currentQuestion.recipeName}
          </div>
          <h2 className="question-text">{currentQuestion.question}</h2>

          <div className="options-container">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                className={`option-button ${
                  answers[currentQuestionIndex] === index ? 'selected' : ''
                }`}
              >
                <span className="option-letter">
                  {String.fromCharCode(65 + index)}
                </span>
                <span className="option-text">{option}</span>
              </button>
            ))}
          </div>

          <div className="quiz-navigation">
            <button
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0}
              className="btn btn-nav"
            >
              ← Anterior
            </button>

            {currentQuestionIndex === questions.length - 1 ? (
              <button
                onClick={handleFinish}
                disabled={!isAnswered}
                className="btn btn-finish"
              >
                Finalizar Quiz ✓
              </button>
            ) : (
              <button
                onClick={handleNext}
                disabled={!isAnswered}
                className="btn btn-nav"
              >
                Próxima →
              </button>
            )}
          </div>

          <div className="unanswered-warning">
            {!isAnswered && (
              <p>⚠️ Por favor, selecione uma resposta para continuar</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function RecipeResultsPage({ userName, score, totalQuestions, onBack, onRetry, questions, userAnswers }) {
  const percentage = Math.round((score / totalQuestions) * 100);
  const isPassed = percentage >= 70;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="recipe-results-page">
      <div className="container">
        <div className="results-card">
          <div className={`results-header ${isPassed ? 'passed' : 'failed'}`}>
            <h1>Quiz Finalizado!</h1>
            {isPassed ? (
              <p className="celebration">🎉 Parabéns!</p>
            ) : (
              <p className="encouragement">💪 Continue treinando!</p>
            )}
          </div>

          <div className="results-content">
            <div className="result-item">
              <span className="label">Nome:</span>
              <span className="value">{userName}</span>
            </div>

            <div className="result-item">
              <span className="label">Acertos:</span>
              <span className="value">{score}/{totalQuestions}</span>
            </div>

            <div className="result-item">
              <span className="label">Percentual:</span>
              <span className={`value percentage ${isPassed ? 'passed' : 'failed'}`}>
                {percentage}%
              </span>
            </div>

            <div className="score-circle">
              <svg viewBox="0 0 100 100" className="circle-svg">
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  className={isPassed ? 'circle-passed' : 'circle-failed'}
                />
              </svg>
              <div className="score-text">
                <span className="score-number">{percentage}%</span>
              </div>
            </div>

            {isPassed && (
              <div className="message-box success">
                <p>✓ Excelente desempenho! Você domina as receitas!</p>
              </div>
            )}

            {!isPassed && percentage >= 50 && (
              <div className="message-box warning">
                <p>⚠️ Bom esforço! Revise as receitas e tente novamente.</p>
              </div>
            )}

            {percentage < 50 && (
              <div className="message-box error">
                <p>❌ Estude mais as receitas e tente novamente!</p>
              </div>
            )}

            <div className="review-section">
              <h3>Revisão das Respostas:</h3>
              <div className="review-list">
                {questions.map((question, index) => (
                  <div
                    key={index}
                    className={`review-item ${
                      userAnswers[index] === question.correctAnswer ? 'correct' : 'incorrect'
                    }`}
                  >
                    <div className="review-question">
                      <span className="review-number">Pergunta {index + 1}:</span>
                      <span className="review-status">
                        {userAnswers[index] === question.correctAnswer ? '✓ Correto' : '✗ Incorreto'}
                      </span>
                    </div>
                    <p className="review-recipe">
                      <strong>Receita:</strong> {question.recipeName}
                    </p>
                    <p className="review-text">{question.question}</p>
                    <div className="review-answer-section">
                      <div className="review-answer">
                        <strong>Sua resposta:</strong>
                        <span className={userAnswers[index] === question.correctAnswer ? 'answer-correct' : 'answer-incorrect'}>
                          {question.options[userAnswers[index]]}
                        </span>
                      </div>
                      {userAnswers[index] !== question.correctAnswer && (
                        <div className="review-correct">
                          <strong>Resposta correta:</strong>
                          <span className="answer-correct">
                            {question.options[question.correctAnswer]}
                          </span>
                        </div>
                      )}
                    </div>
                    <p className="review-explanation">
                      <strong>💡 Explicação:</strong> {question.explanation}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="results-actions">
            <button onClick={handlePrint} className="btn btn-print">
              🖨️ Imprimir Resultado
            </button>
            <button onClick={onRetry} className="btn btn-retry">
              🔄 Fazer Novo Quiz
            </button>
            <button onClick={onBack} className="btn btn-home">
              🏠 Voltar ao Início
            </button>
          </div>

          <div className="print-note">
            <p>💡 Dica: Use o botão "Imprimir Resultado" para gerar um screenshot ou PDF do seu resultado!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
