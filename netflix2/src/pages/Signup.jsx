/* eslint-disable no-unused-vars */
import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";


const Signup = () => {
  return (
    <div className="relative">
      <BackgroundImage />
      <div className="absolute top-0 left-0 h-screen w-screen grid gridr">
      <Header />
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col">
          <h1>Unlimited movies, TV shows and more</h1>
          <h4>Watch anywhere. Cancel anytime.</h4>
          <h6>Ready to watch? Enter your email to create or restart membership</h6>
        </div>
      <div className="form">
        <input type="email" placeholder="Email Address" name="email" />
        <input type="password" placeholder="Email Password" name="password" />
        <button>GetStarted</button>
      </div>
      <button>Login</button>
      </div>
      </div>
    </div>
  )
}

export default Signup