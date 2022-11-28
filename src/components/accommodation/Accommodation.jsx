import React, { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import Family from "../../assets/images/roomsImages/familyImages/aile.jpg";
import Standart from "../../assets/images/roomsImages/standartImages/standart.jpg";
import Datas from "../../rooms";
import { NavLink } from "react-router-dom";
import {AiOutlineLeft,AiOutlineRight} from "react-icons/ai";
import Footer from "../../components/footer/Footer"
const Accommodation = () => {
    const bgAccommodationStyle={
        backgroundImage:"url(https://www.wasahotel.com/images/slides/slide-4.jpg)",
        backgroundPosition:"center",
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat",
        height:"450px",
        width: "100%",       
      }


      const [currentIndex,setCurrentIndex] = useState(0);
        let count;
      const handleClickPrev = ()=>{


        count = currentIndex === 0 ? 2 : currentIndex -1
        setCurrentIndex(count)
      }
      const handleClickNext = ()=>{
        count = currentIndex === 2 ? 0 : currentIndex + 1
        setCurrentIndex(count)
      }

      


    useEffect(()=>{
        const auto = setInterval(()=>{
            handleClickNext()
        },3000);
        return ()=>{
            clearInterval(auto)
        }
    },[currentIndex])
  return <section id="AccommodationSide" className="">
    <div className="relative" style={bgAccommodationStyle}>
    <Navbar/>
        <h3 className="absolute bottom-[30px] left-[50%] translate-x-[-50%] text-[30px] italic uppercase font-bold leading-[20px] font-['Raleway'] text-[#fff] py-6">Odalarımız</h3>
    </div>
    <div className="flex flex-col  justify-center items-center gap-6 py-6 ">
        <div className="flex flex-col sm:flex-row justify-around w-full border border-gray-200 rounded-lg shadow-md">
            <div className="flex-1 relative">
                <div className="aspect-w-16 aspect-h-9">
                <img src={`${Datas[currentIndex].image}`} alt="standart-room" className="h-[250px] w-full " />
                </div>
          
            <div className="absolute flex flex-row items-center justify-between w-full top-1/2 transform -translate-y-1/2 px-3">
                <button className="cursor-pointer" onClick={()=>handleClickPrev()}><AiOutlineLeft size={34} color="#fff" /></button>
                <button className="cursor-pointer" onClick={()=>handleClickNext()}>
                    <AiOutlineRight size={34}  color="#fff" />
                </button>
            </div>
            </div>
          
            <div className="flex-1 ">
                <h3>Standart Oda</h3>
                <NavLink to="/">Oda Detayları</NavLink>
            </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-around w-full border border-gray-200 rounded-lg shadow-md">
            <div className="flex-1 relative">
                <div className="aspect-w-16 aspect-h-9">
                <img src={`${Datas[currentIndex].image}`} alt="standart-room" className="h-[250px] w-full " />
                </div>
          
            <div className="absolute flex flex-row items-center justify-between w-full top-1/2 transform -translate-y-1/2 px-3">
                <button className="cursor-pointer" onClick={()=>handleClickPrev()}><AiOutlineLeft size={34} color="#fff" /></button>
                <button className="cursor-pointer" onClick={()=>handleClickNext()}><AiOutlineRight size={34}  color="#fff" /></button>
            </div>
            </div>
          
            <div className="flex-1 ">
                <h3>Aile Odası</h3>
                <NavLink to="/">Oda Detayları</NavLink>
            </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-around w-full border border-gray-200 rounded-lg shadow-md">
            <div className="flex-1 relative">
                <div className="aspect-w-16 aspect-h-9">
                <img src={`${Datas[currentIndex].image}`} alt="standart-room" className="h-[250px] w-full " />
                </div>
          
            <div className="absolute flex flex-row items-center justify-between w-full top-1/2 transform -translate-y-1/2 px-3">
                <button className="cursor-pointer" onClick={()=>handleClickPrev()}><AiOutlineLeft size={34} color="#fff" /></button>
                <button className="cursor-pointer" onClick={()=>handleClickNext()}><AiOutlineRight size={34}  color="#fff" /></button>
            </div>
            </div>
          
            <div className="flex-1 ">
                <h3>Geniş Oda</h3>
                <NavLink to="/">Oda Detayları</NavLink>
            </div>
        </div>
    </div>
    <Footer/>
  </section>;
};

export default Accommodation;
