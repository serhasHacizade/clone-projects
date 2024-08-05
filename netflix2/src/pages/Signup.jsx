/* eslint-disable no-unused-vars */
import { useState } from "react";
import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";
import "./css/Signup.css";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="relative">
      <BackgroundImage />
      <div className="absolute top-0 left-0 h-screen w-screen grid">
        <Header login />
        <div className="flex flex-col justify-center items-center text-center gap-4">
          <div className="flex flex-col gap-4">
            <h1 className="text-6xl py-0 px-96">
              Unlimited movies, TV shows and more
            </h1>
            <h4 className="text-4xl">Watch anywhere. Cancel anytime.</h4>
            <h6>
              Ready to watch? Enter your email to create or restart membership
            </h6>
          </div>
          <div className="form">
            <input type="email" placeholder="Email Address" name="email" />

            <input
              type="password"
              placeholder="Email Password"
              name="password"
            />

            <button className="button" onClick={() => setShowPassword(true)}>GetStarted</button>
          </div>
          <button className="button">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
