import React from "react";
import { useSelector } from "react-redux";
import { Container, ListGroup } from "react-bootstrap";
import { selectLeaderboard } from "../store/quizSlice";

const Leaderboard = () => {
  const leaderboard = useSelector(selectLeaderboard);

  const leaderboardArray = Object.values(leaderboard);

  return (
    <Container className="py-4">
      <h2 className="text-2xl font-bold mb-4">Leaderboard</h2>
      <ListGroup>
        {leaderboardArray.map((entry, index) => (
          <ListGroup.Item key={index} className="mb-2">
            <span className="font-bold">{`${entry.student}:`}</span>
            <span className="ml-2">{`${entry.score} points`}</span>
            <span className="ml-auto">{`Rank: ${index + 1}`}</span>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default Leaderboard;
