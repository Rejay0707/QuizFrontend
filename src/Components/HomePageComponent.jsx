import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";

const BackgroundImage = styled("div")({
  backgroundImage:
    "url(https://t3.ftcdn.net/jpg/07/15/23/68/360_F_715236810_kDGrtaSmkNp1WTZFx0vlzS7GKzfVH1yQ.jpg)",
  backgroundSize: "cover",
  height: "100vh",
  width: "100vw",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const CardContainer = styled(Card)({
  maxWidth: 400,
  height: 250,
  margin: "auto",
});

const WelcomeCard = ({ onGetStarted }) => {
  return (
    <BackgroundImage>
      <CardContainer>
        <CardContent>
          <Typography variant="h5" component="h2">
            Welcome to Quiz Game!
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            style={{ paddingTop: 40 }}
          >
            Start your quiz journey now!
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
      </CardContainer>
    </BackgroundImage>
  );
};

export default WelcomeCard;
