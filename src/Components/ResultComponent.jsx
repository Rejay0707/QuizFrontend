import { makeStyles } from "@material-ui/core";
import { Card, CardContent, Typography, Button } from "@material-ui/core";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  backgroundImage: {
    backgroundImage:
      "url(https://www.shutterstock.com/image-vector/falling-bright-shiny-silver-confetti-260nw-1664817490.jpg)",
    backgroundSize: "cover",
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  cardContainer: {
    width: 500,
    height: 320,
    margin: "auto",
  },
}));

const ResultCard = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const player1Name = useSelector((state) => state.playerName.playerName);
  const player2Name = useSelector((state) => state.player2Name.player2Name);
  const player1Score = useSelector((state) => state.player1Score.player1Score);
  const player2Score = useSelector((state) => state.player2Score.player2Score);

  let winnerMessage;
  if (player1Score > player2Score) {
    winnerMessage = `${player1Name} is the winner!`;
  } else if (player2Score > player1Score) {
    winnerMessage = `${player2Name} is the winner!`;
  } else {
    winnerMessage = "Both players are winners!";
  }

  const goToHomePage = () => {
    navigate("/"); 
  };

  return (
    <div className={classes.backgroundImage}>
      <Card className={classes.cardContainer}>
        <CardContent>
          <Typography variant="h5" component="h2">
            Congratulations to both players!
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            style={{ paddingTop: 20 }}
          >
            {player1Name}'s Score: {player1Score}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            style={{ paddingTop: 10 }}
          >
            {player2Name}'s Score: {player2Score}
          </Typography>
          <Typography
            variant="h6"
            color="textPrimary"
            component="p"
            style={{ paddingTop: 20, fontWeight: "bold" }}
          >
            {winnerMessage}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            style={{ float: "right", marginTop: 20 }}
            onClick={goToHomePage}
          >
            Go to Home Page
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ResultCard;
