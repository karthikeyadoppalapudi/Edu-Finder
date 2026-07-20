import React from "react";
import "./MainPage.css";

import Hero from "../midcontainer/Hero";
import ExploreStates from "../midcontainer/ExploreStates";
import WhyChoose from "./WhyChoose";
import ReadySection from "./ReadySection";

export default function MainPage() {
  return (
    <div className="mainpage-container">
      <Hero />
      <ExploreStates />
      <WhyChoose />
      <ReadySection />
    </div>
  );
}
