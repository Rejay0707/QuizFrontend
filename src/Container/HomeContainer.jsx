import React from "react";
import { useNavigate } from "react-router-dom";
import WelcomeCard from "../Components/HomePageComponent.jsx";

const BackgroundImage = () => {
  const navigate = useNavigate();

  const onGetStarted = () => {
    navigate("/playersDetails");
  };

  return (
    <div>
      <WelcomeCard onGetStarted={onGetStarted} />
    </div>
  );
};

export default BackgroundImage;
