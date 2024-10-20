export default function handler(req, res) {
  const questions = [
    {
      id: 1,
      question: "Here is the first question: What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      correctAnswer: "Paris"
    },
    {
      id: 2,
      question: "Which is the largest planet in our solar system?",
      options: ["Earth", "Jupiter", "Saturn", "Mars"],
      correctAnswer: "Jupiter"
    },
    {
      id: 3,
      question: "What is the capital city of India?",
      options: ["Mumbai", "Delhi", "Bangalore", "Chennai"],
      correctAnswer: "Delhi"
  },
  {
      id: 4,
      question: "Who is the author of the famous novel 'Pride and Prejudice'?",
      options: ["Jane Austen", "Emily Bronte", "Charlotte Bronte", "Virginia Woolf"],
      correctAnswer: "Jane Austen"
  },
  {
      id: 5,
      question: "What is the chemical symbol for gold?",
      options: ["Ag", "Au", "Cu", "Fe"],
      correctAnswer: "Au"
  },
  {
      id: 6,
      question: "Which gas is essential for human life?",
      options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
      correctAnswer: "Oxygen"
  },
  {
      id: 7,
      question: "What is the largest ocean on Earth?",
      options: ["Atlantic Ocean", "Pacific Ocean", "Indian Ocean", "Arctic Ocean"],
      correctAnswer: "Pacific Ocean"
  },
  {
      id: 8,
      question: "Which animal is known as the 'King of the Jungle'?",
      options: ["Lion", "Tiger", "Elephant", "Giraffe"],
      correctAnswer: "Lion"
  },
  {
      id: 9,
      question: "What is the chemical formula for water?",
      options: ["H2O", "CO2", "NaCl", "NH3"],
      correctAnswer: "H2O"
  },
  {
      id: 10,
      question: "Which planet is closest to the Sun?",
      options: ["Mercury", "Venus", "Earth", "Mars"],
      correctAnswer: "Mercury"
  }
  ];

  res.setHeader('Content-Type', 'application/json');
  res.status(200).json({ questions });
}
