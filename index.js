
import { useState, useEffect } from 'react';

// Load questions
import questions from '../questions';

export default function Home() {
  const [stage, setStage] = useState('start');
  const [module, setModule] = useState(null);
  const [results, setResults] = useState(null);

  return (
    <div style={{ padding: '20px' }}>
      {stage === 'start' && (
        <>
          <h1>Select Module</h1>
          {[1,2,3,4,5,6].map(m => (
            <button key={m} onClick={() => {setModule(m); setStage('exam')}} style={{ margin: 5 }}>
              Module {m}
            </button>
          ))}
        </>
      )}
      {stage === 'exam' && <Exam module={module} onFinish={res => {setResults(res); setStage('result')}}/>}
      {stage === 'result' && <Result res={results} />}
    </div>
  );
}

function Exam({ module, onFinish }) {
  const qlist = questions.filter(q => q.module === module);
  const [idx, setIdx] = useState(0);
  const [ans, setAns] = useState({});
  const [time, setTime] = useState(3600);
  useEffect(() => {
    const t = setInterval(() => {
      setTime(t0 => {
        if (t0<=1) { clearInterval(t); finish(); return 0; }
        return t0-1;
      });
    },1000);
    return ()=>clearInterval(t);
  },[]);
  const finish = ()=>{
    const score = qlist.reduce((sum,q) => sum + (ans[q.id]===q.answer?1:0),0);
    onFinish({score,total:qlist.length});
  };
  const q = qlist[idx];
  return (
    <div>
      <div>Time: {Math.floor(time/60)}:{(time%60).toString().padStart(2,'0')}</div>
      <h2>{idx+1}. {q.question}</h2>
      {q.options.map((opt,i)=>(
        <div key={i}>
          <input type="radio" checked={ans[q.id]===i} onChange={()=>setAns({...ans,[q.id]:i})} /> {opt}
        </div>
      ))}
      <button disabled={idx===0} onClick={()=>setIdx(idx-1)}>Prev</button>
      <button disabled={idx===qlist.length-1} onClick={()=>setIdx(idx+1)}>Next</button>
      <button onClick={finish}>Submit</button>
    </div>
  );
}

function Result({ res }) {
  return (
    <div>
      <h2>Score: {res.score}/{res.total}</h2>
      <h3>Accuracy: {(res.score/res.total*100).toFixed(2)}%</h3>
    </div>
  );
}
