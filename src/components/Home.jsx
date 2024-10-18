import { useNavigate } from 'react-router-dom';
import mainlogo from '../assets/logo.png';
import '../styles.css'; 

const Home = () => {
  const navigate = useNavigate();

  const startQuiz = () => {
    navigate('/quiz');
  };

  return (
    <div className="home-container">
      <img 
        src={mainlogo} // Use the imported image here
        alt="Logo" 
        className="mainlogo" 
      />
      <h1>Quiz Trivia</h1>
      <button onClick={startQuiz}>Start</button>
    </div>
  );
};

export default Home;
