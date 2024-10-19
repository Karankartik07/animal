import React from "react";
import Navbar from "./component/navbar";
// import Background from './Component/Background'
// import Foreground from './Component/Foreground'
// import Stylemake from './Component/Stylemake'

function App() {
  const myStyle = {
    backgroundImage:
      "url('https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg')",
    height: "100vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <>
      <div className=" w-full  min-h-screen ">
        <div style={myStyle}>
          <Navbar />
        </div>
        {/* <Background/>
    <Stylemake/>

    <Foreground/> */}
      </div>
    </>
  );
}

export default App;
