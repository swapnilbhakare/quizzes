import React from "react";
import { Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Provider } from "react-redux";
import store from "./store/store";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Quiz from "./Components/Quiz";
import Leaderboard from "./Components/Leaderboard";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="bg-dark text-white py-3">
          <Header />
        </header>
        <Container className="mt-2">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz/:quizName" element={<Quiz />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
          </Routes>
        </Container>
      </div>
    </Provider>
  );
}

export default App;
