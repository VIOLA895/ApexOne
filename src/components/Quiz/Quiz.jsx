import { useState } from "react";
import "./Quiz.css";

function Quiz({ question, options, correctAnswer, explanation }) {
  const [selected, setSelected] = useState(null);
  const [checked, setChecked] = useState(false);

  function handleCheck() {
    if (selected === null) return;
    setChecked(true);
  }

  function handleRestart() {
    setSelected(null);
    setChecked(false);
  }

  return (
    <div className="quiz">

      <h2>🧠 Quick Quiz</h2>

      <p className="quiz-question">{question}</p>

      <div className="quiz-options">

        {options.map((option) => {

          let className = "quiz-option";

          if (checked) {
            if (option === correctAnswer) {
              className += " correct";
            } else if (option === selected) {
              className += " wrong";
            }
          } else if (option === selected) {
            className += " selected";
          }

          return (
            <button
              key={option}
              className={className}
              onClick={() => !checked && setSelected(option)}
            >
              {option}
            </button>
          );
        })}

      </div>

      {!checked ? (
        <button
          className="check-btn"
          onClick={handleCheck}
          disabled={selected === null}
        >
          Check Answer
        </button>
      ) : (
        <>
          <div className="quiz-result">
            {selected === correctAnswer ? (
              <p className="success">✅ Correct!</p>
            ) : (
              <p className="error">❌ Not quite.</p>
            )}

            <p>{explanation}</p>
          </div>

          <button className="restart-btn" onClick={handleRestart}>
            Try Again
          </button>
        </>
      )}

    </div>
  );
}

export default Quiz;