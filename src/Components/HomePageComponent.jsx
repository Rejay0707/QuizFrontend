import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Typography, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  backgroundImage: {
    backgroundImage:
      "url(https://t3.ftcdn.net/jpg/07/15/23/68/360_F_715236810_kDGrtaSmkNp1WTZFx0vlzS7GKzfVH1yQ.jpg)",
    backgroundSize: "cover",
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  cardContainer: {
    maxWidth: 400,
    height: 250,
    margin: "auto",
  },
}));

const WelcomeCard = ({ onGetStarted }) => {
  const classes = useStyles();

  return (
    <div className={classes.backgroundImage}>
      <Card className={classes.cardContainer}>
        <CardContent>
          <Typography variant="h5" component="h2">
            Welcome to Quiz Game !
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            style={{ paddingTop: 40 }}
          >
            Start you quiz journey now !
          </Typography>
          <Button
            variant="contained"
            color="primary"
            style={{ float: "right", marginTop: 100 }}
            onClick={onGetStarted}
          >
            Get started now
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default WelcomeCard;
