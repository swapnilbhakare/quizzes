const quizzes = {
  quiz1: [
    {
      id: 1,
      question: "What is the virtual DOM in React?",
      options: [
        "A representation of the actual HTML elements in the browser",
        "A lightweight copy of the actual DOM",
        "A replacement for the actual DOM",
        "A virtual representation of the React components",
      ],
      correctAnswer: "A lightweight copy of the actual DOM",
      isCorrect: false,
    },
    {
      id: 2,
      question: "What is React used for?",
      options: [
        "Building databases",
        "Developing server-side applications",
        "Building user interfaces",
        "Creating machine learning models",
      ],
      correctAnswer: "Building user interfaces",
      isCorrect: false,
    },
    {
      id: 3,
      question: "What is JSX in React?",
      options: [
        "JavaScript XML",
        "JSON Exchange",
        "Java Standard Extension",
        "JavaScript Extension",
      ],
      correctAnswer: "JavaScript XML",
      isCorrect: false,
    },
    {
      id: 4,
      question: "What is the purpose of the 'setState' method in React?",
      options: [
        "To set the state of a component",
        "To declare a state variable",
        "To perform side effects",
        "To create a new component",
      ],
      correctAnswer: "To set the state of a component",
      isCorrect: false,
    },
    {
      id: 5,
      question: "What is the significance of React's virtual DOM?",
      options: [
        "Improves performance by reducing direct manipulation of the actual DOM",
        "Enables server-side rendering",
        "Allows direct manipulation of the actual DOM",
        "Is used for creating machine learning models",
      ],
      correctAnswer:
        "Improves performance by reducing direct manipulation of the actual DOM",
      isCorrect: false,
    },
  ],
  quiz2: [
    {
      id: 1,
      question: "What keyword is used to declare a variable in JavaScript?",
      options: ["let", "variable", "var", "const"],
      correctAnswer: "var",
      isCorrect: false,
    },
    {
      id: 2,
      question: "What is the purpose of the 'useEffect' hook in React?",
      options: [
        "To declare a state variable",
        "To perform side effects in function components",
        "To create a new component",
        "To define a lifecycle method",
      ],
      correctAnswer: "To perform side effects in function components",
      isCorrect: false,
    },
    {
      id: 3,
      question:
        "What is the difference between 'let' and 'const' in JavaScript?",
      options: [
        "'let' is used to declare variables with block scope, while 'const' is used for constants",
        "'let' is used for constants, while 'const' is used for variables",
        "There is no difference between 'let' and 'const'",
        "'const' is used to declare variables with block scope, while 'let' is used for constants",
      ],
      correctAnswer:
        "'let' is used to declare variables with block scope, while 'const' is used for constants",
      isCorrect: false,
    },
    {
      id: 4,
      question: "What is a closure in JavaScript?",
      options: [
        "A variable declared inside a function",
        "The process of closing a program",
        "A combination of a function and the lexical environment within which that function was declared",
        "A reserved word in JavaScript",
      ],
      correctAnswer:
        "A combination of a function and the lexical environment within which that function was declared",
      isCorrect: false,
    },
    {
      id: 5,
      question: "What is the purpose of the 'map' function in JavaScript?",
      options: [
        "To create a new array with the results of calling a provided function on every element in the array",
        "To iterate over the elements of an array",
        "To filter elements in an array",
        "To find the index of a particular element in an array",
      ],
      correctAnswer:
        "To create a new array with the results of calling a provided function on every element in the array",
      isCorrect: false,
    },
  ],
  quiz3: [
    {
      id: 1,
      question: 'What is the "this" keyword in JavaScript?',
      options: [
        "A variable that refers to the current function",
        "A reference to the object on which a method is invoked",
        "A keyword for creating new objects",
        "A reserved word for declaring variables",
      ],
      correctAnswer: "A reference to the object on which a method is invoked",
      isCorrect: false,
    },
    {
      id: 2,
      question: "What is JSX in React?",
      options: [
        "JavaScript XML",
        "JSON Exchange",
        "Java Standard Extension",
        "JavaScript Extension",
      ],
      correctAnswer: "JavaScript XML",
      isCorrect: false,
    },
    {
      id: 3,
      question: "What is the purpose of the 'useReducer' hook in React?",
      options: [
        "To declare a state variable",
        "To perform side effects in function components",
        "To manage complex state logic in functional components",
        "To create a new component",
      ],
      correctAnswer: "To manage complex state logic in functional components",
      isCorrect: false,
    },
    {
      id: 4,
      question: "What is the difference between '=='' and '===' in JavaScript?",
      options: [
        "'==' performs type coercion, while '===' does not",
        "'===' performs type coercion, while '==' does not",
        "There is no difference between '==' and '==='",
        "'==' and '===' are used interchangeably",
      ],
      correctAnswer: "'==' performs type coercion, while '===' does not",
      isCorrect: false,
    },
    {
      id: 5,
      question:
        "What is the purpose of the 'async/await' syntax in JavaScript?",
      options: [
        "To create asynchronous functions",
        "To declare a variable",
        "To perform synchronous operations",
        "To handle errors in a try-catch block",
      ],
      correctAnswer: "To create asynchronous functions",
      isCorrect: false,
    },
  ],
};
export default quizzes;
