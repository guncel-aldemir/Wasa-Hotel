import React,{useState,useEffect} from "react";
import Datas from "../../rooms";
import {AiOutlineRight,AiOutlineLeft} from "react-icons/ai";
const PoolServices = () => {
    const [currentPoolIndex,setCurrentPoolIndex] = useState(0);
    let countPool;
  const handleClickPoolPrev = ()=>{


    countPool = currentPoolIndex === 0 ? 2 : currentPoolIndex -1
    setCurrentPoolIndex(countPool)
  }
  const handleClickPoolNext = ()=>{
    countPool = currentPoolIndex === 2 ? 0 : currentPoolIndex + 1
    setCurrentPoolIndex(countPool)
  }

  


useEffect(()=>{
    const auto = setInterval(()=>{
        handleClickPoolNext()
    },3000);
    return ()=>{
        clearInterval(auto)
    }
},[currentPoolIndex])
  return <div className="flex flex-col items-center justify-center  py-6 ">
     <h2 className="font-['Raleway'] text-[24px] font-bold leading-[30px] uppercase py-1">Havuz</h2>
     <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-[2px] lg:gap-4">
            <div className="group h-[400px] sm:h-96 w-[320px] sm:w-96 [perspective:1000px]">
                <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    <div className="absolute inset-0">
                        <img className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src="https://www.wasahotel.com/images/slides/slide-4.jpg" alt="" />
                    </div>
                    <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                        <h3 className="font-['Raleway'] text-[24px] font-bold leading-[30px] uppercase py-1">Havuz-Plaj</h3>
                        <span className="font-['Raleway'] text-[18px] font-normal leading-[26px] uppercase">Havuz</span>
                        <ul>
                            <li className="font-['Montserrat'] text-[15px] font-normal uppercase">Açık Yüzme Havuzu: Derinlik 140cm</li>
                            <li className="font-['Montserrat'] text-[15px] font-normal uppercase">Açık çocuk yüzme havuzu: derinlik 30cm</li>
                            <li className="font-['Montserrat'] text-[15px] font-normal uppercase">kaydırak havuzu: derinlik 140cm</li>
                            
                            <span className="font-['Montserrat'] text-[15px] font-normal text-[#b55b02]"> şezlong-şemsiye-minder (ücretsiz)</span>
                        </ul>
                        <span className="font-['Raleway'] text-[18px] font-normal leading-[26px] uppercase">Plaj</span>
                        <ul>
                            <li className="font-['Montserrat'] text-[15px] font-normal uppercase">Özel plaj(kum)</li>
                            <li className="font-['Montserrat'] text-[15px] font-normal uppercase">Kabin & Duş </li>
                            <li className="font-['Montserrat'] text-[15px] font-normal uppercase">şezlong-şemsiye-minder (ücretsiz)</li>
                            <li className="font-['Montserrat'] text-[15px] font-normal uppercase">Bira harici alkollü içecek yasaktır.</li>
                            
                            
                        </ul>
                    </div>
                </div>
            </div>
           
        </div>
        <div className="flex flex-col py-6 sm:flex-row justify-around w-full border border-gray-200 rounded-lg shadow-md ">
            <div className="flex-1 relative">
                <div className="aspect-w-16 aspect-h-9">
                <img src={`${Datas[currentPoolIndex].image}`} alt="standart-room" className="h-[400px] w-full " />
                </div>
          
            <div className="absolute flex flex-row items-center justify-between w-full top-1/2 transform -translate-y-1/2 px-3">
                <button className="cursor-pointer" onClick={()=>handleClickPoolPrev()}><AiOutlineLeft size={34} color="#fff" /></button>
                <button className="cursor-pointer" onClick={()=>handleClickPoolNext()}>
                    <AiOutlineRight size={34}  color="#fff" />
                </button>
            </div>
            </div>
          
            
        </div>
  </div>;
};

export default PoolServices;
