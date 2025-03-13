import React from "react";
import LandingHeader from "./landing/LandingHeader";
import LandingPage from "./landing/LandingPage";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <LandingHeader />
      <LandingPage />
    </div>
  );
};

export default Home;
