import React from "react";

const GoogleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18">
    <path
      d="M17.64 8.2c0-.63-.06-1.25-.16-1.84H9v3.47h4.84c-.21 1.12-.84 2.07-1.8 2.71v2.24h2.91c1.71-1.58 2.69-3.91 2.69-6.58z"
      fill="#4285f4"
    />
    <path
      d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.91-2.24c-.8.54-1.84.87-3.05.87-2.34 0-4.33-1.58-5.03-3.71H.95v2.3C2.43 15.89 5.5 18 9 18z"
      fill="#34a853"
    />
    <path
      d="M3.97 10.74c-.18-.54-.28-1.12-.28-1.74s.1-1.2.28-1.74V4.96H.95A8.977 8.977 0 0 0 0 9c0 1.45.35 2.82.95 4.04l3.02-2.3z"
      fill="#fbbc05"
    />
    <path
      d="M9 3.58c1.32 0 2.5.45 3.44 1.35L15.02 2.3C13.46.86 11.43 0 9 0 5.5 0 2.43 2.11.95 5.04l3.02 2.3c.7-2.13 2.69-3.76 5.03-3.76z"
      fill="#ea4335"
    />
  </svg>
);

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

export const SocialLoginGroup = ({ type }) => (
  <div className="social-login-group">
    <button className="social-btn google-btn">
      <GoogleIcon /> {type === "up" ? "Sign up" : "Sign in"} with Google
    </button>
    <button className="social-btn fb-btn">
      <FacebookIcon /> {type === "up" ? "Sign up" : "Sign in"} with Facebook
    </button>
  </div>
);
