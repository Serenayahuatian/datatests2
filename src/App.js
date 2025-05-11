import { useState, useEffect } from 'react';
import questions from './questions';

export default function App() {
  const [stage, setStage] = useState('start'); // start → exam → result
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(3600); // 1h

  useEffect(() => {
    if(stage === 'exam') {
      const t = setInterval(() => {
        setTimeLeft(t0 => {
          if (t0 <= 1) {
            clearInterval(t);
            setStage('result');
            return 0;
          }
          return t0 - 1;
        });
      }, 1000);
      return () => clearInterval(t);
    }
  }, [stage]);

  const submit = () => setStage('result');

  const score = questions.reduce(
    (sum, q) => sum + (answers[q.id] === q.answer ? 1 : 0),
    0
  );

  if (stage === 'start') {
    return (
      <div style={{ textAlign: 'center', marginTop: 100 }}>
        <h1>Welcome to the Timed Online Exam</h1>
        <button onClick={() => setStage('exam')} style={{ padding: '10px 20px', fontSize: 16 }}>
          Start Exam (1h)
        </button>
      </div>
    );
  }

  if (stage === 'result') {
    return (
      <div style={{ textAlign: 'center', marginTop: 100 }}>
        <h2>Time's up or Submitted!</h2>
        <p>Your score: <b>{score} / {questions.length}</b></p>
        <p>Accuracy: <b>{((score / questions.length)*100).toFixed(2)}%</b></p>
      </div>
    );
  }

  // stage === 'exam'
  return (
    <div style={{ maxWidth: 600, margin: '20px auto' }}>
      <div>Time left: {Math.floor(timeLeft/60)}:{String(timeLeft%60).padStart(2,'0')}</div>
      {questions.map((q, idx) => (
        <div key={q.id} style={{ margin: '20px 0' }}>
          <p><b>{idx+1}. {q.question}</b></p>
          {q.options.map((opt, i) => (
            <div key={i}>
              <label>
                <input
                  type="radio"
                  name={q.id}
                  value={i}
                  checked={answers[q.id] === i}
                  onChange={() => setAnswers(a => ({ ...a, [q.id]: i }))}
                /> {opt}
              </label>
            </div>
          ))}
        </div>
      ))}
      <div style={{ textAlign: 'center', margin: '30px 0' }}>
        <button onClick={submit} style={{ padding: '8px 16px', fontSize: 16 }}>
          Submit Exam
        </button>
      </div>
    </div>
  );
}
