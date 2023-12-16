import { createSlice } from "@reduxjs/toolkit";
import quizzes from "../quizzes";
const initialState = {
  quizzes,

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
