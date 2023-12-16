import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quizzes: {
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
    ],
  },

  userName: localStorage.getItem("userName") || "",
  leaderboard: JSON.parse(localStorage.getItem("leaderboard")) || [],
  totalScore: parseInt(localStorage.getItem("totalScore")) || 0,
};
const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setUserName: (state, action) => {
      state.userName = action.payload;
      state.totalScore = 0;
      localStorage.setItem("userName", action.payload);
    },
    addAnswer: (state, action) => {
      const { quiz, student, questionId, answer } = action.payload;

      const question = state.quizzes[quiz][questionId - 1];
      const isCorrect = question.correctAnswer === answer;

      state.quizzes[quiz][questionId - 1] = {
        ...question,
        answer,
        student,
        isCorrect,
      };

      if (isCorrect) {
        state.totalScore += 1;
      }

      const allUserData = JSON.parse(localStorage.getItem("allUserData")) || {};

      if (allUserData[student]) {
        allUserData[student].score += isCorrect ? 1 : 0;
      } else {
        allUserData[student] = { score: isCorrect ? 1 : 0 };
      }

      localStorage.setItem("totalScore", state.totalScore);
      localStorage.setItem("leaderboard", JSON.stringify(allUserData));
      localStorage.setItem("allUserData", JSON.stringify(allUserData));
    },

    updateLeaderboard: (state) => {
      const storedLeaderboard =
        JSON.parse(localStorage.getItem("leaderboard")) || [];

      const allUserData = JSON.parse(localStorage.getItem("allUserData")) || {};

      const updatedLeaderboard = Object.keys(allUserData).map((student) => ({
        student,
        score: allUserData[student].score,
      }));

      updatedLeaderboard.sort((a, b) => b.score - a.score);
      localStorage.setItem("leaderboard", JSON.stringify(updatedLeaderboard));

      return {
        ...state,
        leaderboard: updatedLeaderboard,
      };
    },
  },
});

export const { addAnswer, updateLeaderboard, setUserName } = quizSlice.actions;

export const selectUserName = (state) => state.quiz.userName;
export const selectQuestions = (state, quizName) =>
  state.quiz.quizzes[quizName] || [];
export const selectLeaderboard = (state) => state.quiz.leaderboard;
export const selectTotalScore = (state) => state.quiz.totalScore;
export default quizSlice.reducer;
