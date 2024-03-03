// Create a simple quiz game using JavaScript. Here are the steps to guide you:

// 1. Define an array of objects, where each object represents a quiz question. Include properties like the question itself, options, and the correct answer.

// 2. Display the first question to the user along with multiple-choice options. You can use the prompt function for simplicity, or create a basic HTML page for a better user interface.

// 3. Allow the user to input their answer. Check if the answer is correct and provide feedback.

//4.  Move to the next question and repeat the process until all questions have been answered.

// 5. Keep track of the user's score and display it at the end of the quiz.

const quizQuestions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correctAnswer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    correctAnswer: "Mars",
  },
  {
    question: "What is the largest mammal in the world?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    correctAnswer: "Blue Whale",
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: [
      "Charles Dickens",
      "Jane Austen",
      "William Shakespeare",
      "Mark Twain",
    ],
    correctAnswer: "William Shakespeare",
  },
  {
    question: "What is the capital of Japan?",
    options: ["Beijing", "Seoul", "Tokyo", "Bangkok"],
    correctAnswer: "Tokyo",
  },
  {
    question: "Which programming language is often used for web development?",
    options: ["Java", "Python", "C++", "JavaScript"],
    correctAnswer: "JavaScript",
  },
  {
    question: "In which year did World War II end?",
    options: ["1945", "1939", "1941", "1950"],
    correctAnswer: "1945",
  },
  {
    question: "What is the largest ocean on Earth?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Southern Ocean",
      "Pacific Ocean",
    ],
    correctAnswer: "Pacific Ocean",
  },
  {
    question: "Who painted the Mona Lisa?",
    options: [
      "Vincent van Gogh",
      "Leonardo da Vinci",
      "Pablo Picasso",
      "Claude Monet",
    ],
    correctAnswer: "Leonardo da Vinci",
  },
  {
    question: "What is the capital of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Perth"],
    correctAnswer: "Canberra",
  },
];

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askQuestion(index) {
  const quiz = quizQuestions[index];

  console.log(quiz.question);

  for (let opt = 0; opt < quiz.options.length; opt++) {
    console.log(`${opt + 1}. ${quiz.options[opt]}`);
  }

  let correctAnswers = 0;

  rl.question("Your Answer: ", (ans) => {
    if (ans.toLowerCase() === quiz.correctAnswer.toLowerCase()) {
      console.log("Correct!!");
      correctAnswers += 1;
    } else {
      console.log(`Wrong!! The correct answer is: ${quiz.correctAnswer}`);
    }

    if (index === quizQuestions.length - 1) {
      console.log("Quiz Completed!");

      console.log(`${correctAnswers} answer${correctAnswers === 1 ? '' : 's'} were correct`);
      rl.close();
    } else {
      console.log("\nNext Question:");
      askQuestion(index + 1);
    }
  });
}

askQuestion(0);
