import React, { useState } from "react";
import { Container, Form, Button, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserName } from "../store/quizSlice";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");

  const availableQuizzes = ["quiz1", "quiz2", "quiz3"];

  const handleStartQuiz = () => {
    if (name.trim() !== "") {
      const randomQuizIndex = Math.floor(
        Math.random() * availableQuizzes.length
      );
      dispatch(setUserName(name));
      const randomQuiz = availableQuizzes[randomQuizIndex];
      navigate(`/quiz/${randomQuiz}`);
    }
  };

  return (
    <Container className="mt-4">
      <Form className="d-flex flex-column align-items-center">
        <Form.Label className="text-neutral-800 font-bold text-sm mb-2">
          Enter Name:
        </Form.Label>
        <Col xs="12" sm="8" md="6" lg="4" xl="3">
          <Form.Control
            id="cardName"
            type="text"
            placeholder="Enter your name"
            className="h-10 rounded-md border-2 bg-background px-4 py-1.5 text-lg ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-purple-600 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 undefined"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Col>
        <Button
          variant="info"
          className="mt-2"
          type="button"
          onClick={handleStartQuiz}
        >
          Start Quiz
        </Button>
      </Form>
    </Container>
  );
};

export default Home;
