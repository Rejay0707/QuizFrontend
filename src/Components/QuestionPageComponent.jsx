import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import axios from "axios";
import { BASE_URL } from "../Constants.js";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setPlayerOneScore } from "../Slices/Player1ScoreSlice.js";
import { setPlayerTwoScore } from "../Slices/Player2ScoreSlice.js";

const QuestionCard = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const player1Name = useSelector((state) => state.playerName.playerName);
  const player2Name = useSelector((state) => state.player2Name.player2Name);
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [isPlayer1Turn, setIsPlayer1Turn] = useState(true);
  const categoryId = useSelector((state) => state.id.id);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionsDisabled, setOptionsDisabled] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchQuestions = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${BASE_URL}/api/quizQuestion`);
        const filteredQuestions = response.data.filter(
          (question) => question.categoryId._id === categoryId
        );
        setQuestions(filteredQuestions);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchQuestions();
  }, [categoryId]);

  const handleAnswer = (option) => {
    setSelectedOption(option);
    setOptionsDisabled(true);
    setShowCorrectAnswer(true);

    const difficultyLevel = questions[currentQuestion].difficultyLevelId.level;
    let points = 0;
    if (difficultyLevel === "Easy") {
      points = 10;
    } else if (difficultyLevel === "Medium") {
      points = 20;
    } else if (difficultyLevel === "Hard") {
      points = 30;
    }

    if (option === questions[currentQuestion].correctAnswer) {
      if (isPlayer1Turn) {
        const newPlayer1Score = player1Score + points;
        setPlayer1Score(newPlayer1Score);
        dispatch(setPlayerOneScore(newPlayer1Score));
      } else {
        const newPlayer2Score = player2Score + points;
        setPlayer2Score(newPlayer2Score);
        dispatch(setPlayerTwoScore(newPlayer2Score));
      }
    }
  };

  const handleSubmit = () => {
    if (currentQuestion === questions.length - 1) {
      setIsQuizCompleted(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
      setOptionsDisabled(false);
      setSelectedOption(null);
      setShowCorrectAnswer(false);
      setIsPlayer1Turn(!isPlayer1Turn);
    }
  };

  const goToCategoryPage = () => {
    navigate("/category");
  };

  const endGame = () => {
    navigate("/result");
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const currentPlayer = isPlayer1Turn ? player1Name : player2Name;
  const currentScore = isPlayer1Turn ? player1Score : player2Score;
  const difficultyLevel =
    questions.length > 0
      ? questions[currentQuestion].difficultyLevelId.level
      : "Medium";

  const getOptionClass = (option) => {
    if (!showCorrectAnswer) return {};

    if (option === questions[currentQuestion].correctAnswer) {
      return { backgroundColor: "lightgreen" };
    }

    if (
      selectedOption === option &&
      option !== questions[currentQuestion].correctAnswer
    ) {
      return { backgroundColor: "lightcoral" };
    }

    return {};
  };

  if (isQuizCompleted) {
    return (
      <div
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/34225/spider-web-with-water-beads-network-dewdrop.jpg?cs=srgb&dl=pexels-pixabay-34225.jpg&fm=jpg)",
          backgroundSize: "cover",
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card sx={{ width: 500, height: 280, margin: "auto" }}>
          <CardContent>
            <Typography variant="h6" component="p">
              Quiz Completed!
            </Typography>
            <br /> <br />
            <Button
              variant="contained"
              color="primary"
              onClick={goToCategoryPage}
            >
              Go to Category Page
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={endGame}
              sx={{ marginLeft: "10px" }}
            >
              End Game
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/34225/spider-web-with-water-beads-network-dewdrop.jpg?cs=srgb&dl=pexels-pixabay-34225.jpg&fm=jpg)",
        backgroundSize: "cover",
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{
          position: "absolute",
          top: 20,
          left: 20,
          color: "white",
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        {currentPlayer}
      </Typography>

      <Typography
        sx={{
          position: "absolute",
          top: 20,
          right: 20,
          color: "white",
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        Score: {currentScore}
      </Typography>

      <Typography
        sx={{
          position: "absolute",
          top: 20,
          left: "50%",
          transform: "translateX(-50%)",
          color: "white",
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        Difficulty: {difficultyLevel}
      </Typography>

      <Card sx={{ width: 500, height: 280, margin: "auto" }}>
        <CardContent>
          {questions.length > 0 && (
            <div key={questions[currentQuestion]._id}>
              <Typography variant="body1" component="p">
                {questions[currentQuestion].question}
              </Typography>
              <br />
              <br />
              <div>
                {questions[currentQuestion].options.map((option, index) => (
                  <div key={index} style={getOptionClass(option)}>
                    <label>
                      <input
                        type="checkbox"
                        value={option}
                        onChange={() => handleAnswer(option)}
                        disabled={optionsDisabled}
                      />
                      <span>{option}</span>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}
          <br />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            disabled={!optionsDisabled}
          >
            Submit
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuestionCard;
