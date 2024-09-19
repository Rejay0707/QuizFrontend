import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Card,
  CardContent,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setPlayerName } from "../Slices/PlayersNameSlice.js";
import { setPlayer2Name } from "../Slices/Player2NameSlice.js";

const BackgroundImage = styled("div")(({ theme }) => ({
  backgroundImage:
    "url(https://www.shutterstock.com/image-vector/pink-purple-luminous-beehive-background-260nw-2238492681.jpg)",
  backgroundSize: "cover",
  height: "100vh",
  width: "100vw",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const CardContainer = styled(Card)(({ theme }) => ({
  width: 500,
  height: 280,
  margin: "auto",
}));

const PlayersDetailsCard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [playerName1, setPlayerName1] = useState("");
  const [playerName2, setPlayerName2] = useState("");
  const [error, setError] = useState(null);

  const handleTextFieldChange = (event) => {
    if (event.target.id === "player1") {
      setPlayerName1(event.target.value);
      dispatch(setPlayerName(event.target.value));
      console.log(event.target.value);
    } else if (event.target.id === "player2") {
      setPlayerName2(event.target.value);
      dispatch(setPlayer2Name(event.target.value));
    }
  };

  const submitButton = (event) => {
    event.preventDefault();
    if (!playerName1 || !playerName2) {
      setError("Please enter both player names");
    } else {
      navigate("/category");
    }
  };

  return (
    <BackgroundImage>
      <CardContainer>
        <CardContent>
          <Typography variant="h5" component="h2">
            Players Details
          </Typography>
          <br />
          <TextField
            id="player1"
            label="Player 1 Name"
            variant="filled"
            onChange={handleTextFieldChange}
            fullWidth
          />
          <br />
          <br />
          <TextField
            id="player2"
            label="Player 2 Name"
            variant="filled"
            onChange={handleTextFieldChange}
            fullWidth
          />
          <br />
          <br />
          {error && (
            <Typography variant="body2" color="error">
              {error}
            </Typography>
          )}
          <Button variant="contained" color="primary" onClick={submitButton}>
            Submit
          </Button>
        </CardContent>
      </CardContainer>
    </BackgroundImage>
  );
};

export default PlayersDetailsCard;
