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
  return <header className="w-[100%] z-10 relative " style={bgHeaderStyle}>
    <Navbar/>
    <div className="headerSide relative w-full h-full z-0 " >
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-50 opacity-100 ">
        <h4 className="text-[18px] text-[#fff]  md:text-[34px] md:leading-[45px] sm:text-[25px] sm:leading[35px] font-['Montserrat'] uppercase font-normal leading-[35px] animate-marquee whitespace-nowrap  ">Unutulmaz bir tatilin kapılarını <br></br>
        <span className="text-[#b55b02] text-[24px] md:text-[35px] lg:text-[60px] leading-[35px] underline underline-offset-6 decoration-wavy decoration-[#fff] ">Club Wasa</span>'da aralayın</h4>
      </div>
    </div>
  </header>;
};

export default Header;
