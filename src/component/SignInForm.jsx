import React from "react";
import { SocialLoginGroup } from "./SocialButtons";

export const SignInForm = () => (
  <div className="form-wrapper sign-in-box">
    <form onSubmit={(e) => e.preventDefault()}>
      <h2>Sign In</h2>
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Password" required />
      <SocialLoginGroup type="in" />
      <p className="forgot-text">Forgot your password?</p>
      <button type="submit" className="action-btn">
        Sign In
      </button>
    </form>
  </div>
);

export const SignUpForm = () => (
  <div className="form-wrapper sign-up-box">
    <form onSubmit={(e) => e.preventDefault()}>
      <h2>Create Account</h2>
      <input type="text" placeholder="Name" required />
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Password" required />
      <SocialLoginGroup type="up" />
      <button type="submit" className="action-btn">
        Sign Up
      </button>
    </form>
  </div>
);
export default SignInForm;
