import React,{useState,useEffect} from "react";
import Navbar from "../../components/navbar/Navbar";
import Datas from "../../rooms";
import {AiOutlineLeft} from "react-icons/ai";
import {AiOutlineRight} from "react-icons/ai";
import Footer from "../../components/footer/Footer";
import PoolServices from "./PoolServices";
const Servives = () => {
    const bgServicesStyle={
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
  return <section id="services">
   <div style={bgServicesStyle} className="relative">
        <Navbar/>
        <h3 className="absolute bottom-[30px] left-[50%] translate-x-[-50%] text-[30px] italic uppercase font-bold leading-[20px] font-['Raleway'] text-[#fff] py-6">Hizmetlerimiz</h3>
    </div>
    <div className="flex flex-col items-center justify-center  py-6 ">
        <h2 className="font-['Raleway'] text-[24px] font-bold leading-[30px] uppercase py-1">Restaurant&Bar</h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-[2px] lg:gap-4">
            <div className="group h-[400px] sm:h-96 w-[320px] sm:w-96 [perspective:1000px]">
                <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div className="absolute inset-0">
                        <img className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src="https://www.wasahotel.com/images/slides/slide-4.jpg" alt="" />
                    </div>
                    <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <h3 className="font-['Raleway'] text-[24px] font-bold leading-[30px] uppercase py-1">Restorant</h3>
                        <span className="font-['Raleway'] text-[18px] font-normal leading-[26px] uppercase">her şey dahil yiyecek konsepti</span>
                        <ul>
                            <li className="font-['Montserrat'] text-[15px] font-normal">Kahvaltı: 07:30-10:00 Açık Büfe</li>
                            <li className="font-['Montserrat'] text-[15px] font-normal">Geç Kahvaltı: 10:00-10:30 Açık Büfe</li>
                            <li className="font-['Montserrat'] text-[15px] font-normal">Öğle Yemeği: 12:30-14:00 Açık Büfe</li>
                            <li className="font-['Montserrat'] text-[15px] font-normal">Snack- Ara Öğün: 11:00-16:00</li>
                            <li className="font-['Montserrat'] text-[15px] font-normal">Dondurma Saati 15:00-17:00</li>
                            <li className="font-['Montserrat'] text-[15px] font-normal">Pasta Saati: 16:00-17:00 </li>
                            <li className="font-['Montserrat'] text-[15px] font-normal">Akşam Yemeği: 19:00-21:00 Açık Büfe</li>
                            <li className="font-['Montserrat'] text-[15px] font-normal">Gece Çorbası: 23:00-00:00 Açık Büfe</li>
                            <span className="font-['Montserrat'] text-[15px] font-normal text-[#b55b02]"> Bebekler için mama sandalyesi bulunur.(ücretsiz)</span>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="group h-[400px] sm:h-96 w-[320px] sm:w-96 [perspective:1000px]">
                <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div className="absolute inset-0">
                        <img className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src="https://www.wasahotel.com/images/slides/slide-4.jpg" alt="" />
                    </div>
                    <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <h3 className="font-['Raleway'] text-[24px] font-bold leading-[30px] uppercase py-1">Bar</h3>
                        <span className="font-['Raleway'] text-[18px] font-normal leading-[26px] uppercase">her şey dahil içecek konsepti</span>
                      
                        <ul>
                            <li className="font-['Montserrat'] text-[15px] font-normal">Havuz-Bar: 10:00-24:00 Self Servis</li>
                            
                           
                        </ul>
                        <div className="flex flex-row w-full py-4 gap-3">
                            <div className="flex flex-col">
                            <span className="font-['Montserrat'] text-[14px] text-[#b55b02] font-normal">Konsepte Dahil Olanlar</span>
                        <ul>
                            <li  className="font-['Montserrat'] text-[13px] font-normal">Lokal Alkollü içecekler</li>
                            <li  className="font-['Montserrat'] text-[13px] font-normal">Lokal Alkolsüz içecekler</li>
                            <li  className="font-['Montserrat'] text-[13px] font-normal">Sıcak-Soğuk Soft İçecekler</li>
                            <li  className="font-['Montserrat'] text-[13px] font-normal">Lokal Alkolsüz kokteyler</li>
                            <li  className="font-['Montserrat'] text-[13px] font-normal">Lokal Alkollü kokteyler</li>
                            <li  className="font-['Montserrat'] text-[13px] font-normal">Dondurma servisi</li>
                        </ul>
                            </div>
                            <div className="flex flex-col">
                            <span className="font-['Montserrat'] text-[15px] font-normal text-[#b55b02]">Ücretli Olanlar</span>
                        <ul>
                            <li  className="font-['Montserrat'] text-[13px] font-normal">Lokal Alkollü içecekler</li>
                            <li  className="font-['Montserrat'] text-[13px] font-normal">Lokal Alkolsüz içecekler</li>
                            <li  className="font-['Montserrat'] text-[13px] font-normal">Sıcak-Soğuk Soft İçecekler</li>
                            <li  className="font-['Montserrat'] text-[13px] font-normal">Lokal Alkolsüz kokteyler</li>
                            <li  className="font-['Montserrat'] text-[13px] font-normal">Lokal Alkollü kokteyler</li>
                            <li  className="font-['Montserrat'] text-[13px] font-normal">Dondurma servisi</li>
                        </ul>
                            </div>
                     
                       
                        </div>
                        
                        
                       
                        <span className="font-['Montserrat'] text-[15px] font-normal text-[#b55b02] ">18 yaşından küçüklere alkollü içecek verilmesi yasaktır.</span>
                        <br></br>
                        <span className="font-['Montserrat'] text-[15px] font-normal text-[#b55b02]">İçecek ve içkiler bardak ile servis edilir.</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex flex-col py-6 sm:flex-row justify-around w-full border border-gray-200 rounded-lg shadow-md ">
            <div className="flex-1 relative">
                <div className="aspect-w-16 aspect-h-9">
                <img src={`${Datas[currentIndex].image}`} alt="standart-room" className="h-[400px] w-full " />
                </div>
          
            <div className="absolute flex flex-row items-center justify-between w-full top-1/2 transform -translate-y-1/2 px-3">
                <button className="cursor-pointer" onClick={()=>handleClickPrev()}><AiOutlineLeft size={34} color="#fff" /></button>
                <button className="cursor-pointer" onClick={()=>handleClickNext()}>
                    <AiOutlineRight size={34}  color="#fff" />
                </button>
            </div>
            </div>
          
            
        </div>
    </div>
    <PoolServices/>
    <Footer/>
    </section>;
};

export default Servives;
