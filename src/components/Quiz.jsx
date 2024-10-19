import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressBar from './ProgressBar';
import '../styles.css'; 

const Quiz = () => {
  const [questions, setQuestions] = useState([]);  
  const [currentQuestion, setCurrentQuestion] = useState(0); 
  const [progress, setProgress] = useState(0);  
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);  
  const [timeLeft, setTimeLeft] = useState(30);
  const [userAnswers, setUserAnswers] = useState([]); 
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await fetch('/questions.json');  // Fetch from the local JSON file
        if (!res.ok) throw new Error('Failed to fetch questions');
        const data = await res.json();
        setQuestions(data || []);  
        setUserAnswers(Array(data.length).fill(null)); 
        setLoading(false);  
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  // Timer countdown
  useEffect(() => {
    if (timeLeft === 0) {
      handleAnswerSubmit();  
    }
    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const handleAnswerSelect = (answer) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestion] = answer;
    setUserAnswers(updatedAnswers); 

    handleAnswerSubmit(); // Automatically move to next question upon selection
  };

  const handleAnswerSubmit = () => {
    const nextQuestion = currentQuestion + 1;

    // Move to the next question or finish the quiz
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);  
      setTimeLeft(30);  // Reset timer
      setProgress(((nextQuestion) / questions.length) * 100);  
    } else {
      const finalScore = calculateScore(); 
      navigate(`/result?score=${finalScore}`);  
    }
  };

  const calculateScore = () => {
    return userAnswers.reduce((score, answer, index) => {
      return score + (answer === questions[index].correctAnswer ? 1 : 0);
    }, 0);
  };

  if (loading) {
    return <p>Loading...</p>;  
  }

  if (error) {
    return <p>Error: {error}</p>;  
  }

  
  if (!questions || questions.length === 0) {
    return <p>No questions available. Please try again later.</p>;
  }

  const question = questions[currentQuestion];  

  return (
    <div className="quiz-container">
      <h1>Quiz Time!</h1>
      <ProgressBar progress={progress} />
      <h2>{question.question}</h2>
      <p>Time Left: {timeLeft} seconds</p> {/* Countdown Timer */}
      <div className="options">
        {question.options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => handleAnswerSelect(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
