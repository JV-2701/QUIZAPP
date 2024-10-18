import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Confetti from 'react-confetti'; 

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const score = parseInt(new URLSearchParams(location.search).get('score'), 10); 
  const totalQuestions = 10; 
  const [showConfetti, setShowConfetti] = useState(false); 

  
  useEffect(() => {
    if (score >= 3) {
      setShowConfetti(true);
      const timer = setTimeout(() => {
        setShowConfetti(false); 
      }, 5000); 

      return () => clearTimeout(timer); 
    }
  }, [score]);

  return (
    <div className="result-container">
      {showConfetti && <Confetti />} { }
      <h1>Your Result</h1>
      <div className="score">{score}/{totalQuestions}</div>
      <button onClick={() => navigate('/')}>Start Again</button>
    </div>
  );
};

export default Result;
