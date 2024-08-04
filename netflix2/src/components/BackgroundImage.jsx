import background from "../assets/login.jpg"


const BackgroundImage = () => {
  return (
    <div className="h-screen">
      <img src={background} alt="background" className="w-screen h-screen"/>
    </div>
  )
}

export default BackgroundImage