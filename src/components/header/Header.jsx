import React from "react";
import Navbar from "../navbar/Navbar";
const Header = () => {
const bgHeaderStyle={
  backgroundImage:"url(https://www.wasahotel.com/images/slides/slide-4.jpg)",
  backgroundPosition:"center",
  backgroundSize:"cover",
  backgroundRepeat:"no-repeat",
  height:"500px",
  width: "100%",
 
  
}
  return <header className="w-[100%] bg-blend-overlay  " style={bgHeaderStyle}>
    <Navbar/>
    <div className="headerSide" >
      <div ></div>
    </div>
  </header>;
};

export default Header;
