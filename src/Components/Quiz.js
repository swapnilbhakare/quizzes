import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Card, Form, Modal } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { selectTotalScore } from "../store/quizSlice";

import {
  selectUserName,
  selectQuestions,
  addAnswer,
  updateLeaderboard,
} from "../store/quizSlice";

const Quiz = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { quizName } = useParams();
  const userName = useSelector(selectUserName);
  const totalScore = useSelector(selectTotalScore);

  const questions = useSelector((state) => selectQuestions(state, quizName));
  const [showModal, setShowModal] = useState(false);

  const [selectedAnswers, setSelectedAnswers] = useState({});

  const handleOptionChange = (questionId, option) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: option,
    });
  };

  const handleSubmitQuiz = () => {
    Object.entries(selectedAnswers).forEach(([questionId, answer]) => {
      dispatch(
        addAnswer({
          quiz: quizName,
          student: userName,
          questionId,
          answer,
        })
      );
    });

    dispatch(updateLeaderboard());
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    navigate("/");
  };
  const HandleGoToleaderboard = () => {
    setShowModal(false);
    navigate("/leaderboard");
  };
  return (
    <div className="py-8">
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
        <h2 className="text-2xl font-bold mb-4 mb-md-0">{quizName}</h2>
        <p>
          <strong>Student Name:</strong> {userName}
        </p>
      </div>

      {questions.map((question) => (
        <Card key={question.id} className="my-4 p-4 w-full md:w-1/2 lg:w-1/3">
          <Card.Title className="text-lg font-semibold">
            {question.question}
          </Card.Title>
          <Form>
            {question.options.map((option, index) => (
              <Form.Check
                key={index}
                type="radio"
                label={option}
                name={`question_${question.id}`}
                id={`option_${index}`}
                checked={selectedAnswers[question.id] === option}
                onChange={() => handleOptionChange(question.id, option)}
                className="my-2"
              />
            ))}
          </Form>
        </Card>
      ))}
      <Button
        variant="primary"
        onClick={handleSubmitQuiz}
        className="mt-4 py-2 px-4"
      >
        Submit Quiz
      </Button>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Quiz Result</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            {userName}'s Score:{totalScore}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={HandleGoToleaderboard}>
            Go To Leaderboard
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Quiz;
