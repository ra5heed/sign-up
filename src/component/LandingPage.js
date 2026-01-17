import React, { useState, useEffect } from "react";
import { SignInForm, SignUpForm } from "./SignInForm";
import { AnimatedBackground } from "./AnimatedBackground";

const LandingPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      const hour = new Date().getHours();
      setIsDarkMode(hour >= 18 || hour < 6);
    };
    checkTheme();
    const interval = setInterval(checkTheme, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`page-wrapper ${isDarkMode ? "dark-theme" : "light-theme"}`}
    >
      <div className={`main-container ${isSignUp ? "active" : ""}`}>
        <SignUpForm />
        <SignInForm />

        <div className="overlay-section">
          <div className="overlay-bg">
            <AnimatedBackground />

            <div className="panel panel-left">
              <h1>Welcome Back!</h1>
              <p>Keep your account safe and updated.</p>
              <button className="ghost-btn" onClick={() => setIsSignUp(false)}>
                Sign In
              </button>
            </div>

            <div className="panel panel-right">
              <h1>Join Us!</h1>
              <p>Start your journey with us today.</p>
              <button className="ghost-btn" onClick={() => setIsSignUp(true)}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
