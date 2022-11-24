import React from "react";
import Standart from "../../assets/images/roomsImages/standartImages/standart.jpg";
import Family from "../../assets/images/roomsImages/familyImages/aile.jpg";
import {BsFillPeopleFill} from "react-icons/bs";
import { NavLink } from "react-router-dom";
const MainRooms = () => {
  return <section id="Rooms Cards" className="bg-neutral-800">
    <div className="flex min-h-[500px] items-center justify-center">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-col-3">
            <div className="group relative cursor-pointer items-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                <div className="h-96 w-72">
                    <img loading="lazy" src={Standart} alt="standart-room" className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-12" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                    <h1 className="font-['Raleway'] text-[#fff] text-[24px] font-bold leading-[30px] mb-9">Standart Oda</h1>
                    <span className="mb-3 text-[14px] font-normal italic leading-[1.2] text-[#fff] flex justify-center items-center  ">
                        <BsFillPeopleFill color="#fff" size={18}/> 1-3 kişi arasında Konaklama
                    </span> 
                    <p className="mb-3 text-[13px] font-['Montserrat'] text-[#fff]">Duş&Wc, Saç Kurutma Makinesi,Split Klima,Uydu Tv,Telefon,Minibar(Boş),Kasa(Ücretli),Balkon,İlave Bebek Yatağı,Deniz Manzaralı,Kara Manzaralı,Zemin Kat </p>
                    <NavLink to="/"  className="text-[#fff] bg-[#b55b02] hover:text-[#b55b02] hover:bg-[#fff] border-1 borber-none rounded-md px-[3.5px] ">Oda Detayı</NavLink>
                </div>
            </div>
            <div className="group relative cursor-pointer items-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                <div className="h-96 w-72">
                    <img loading="lazy" src={Family } alt="standart-room" className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-12" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                    <h1 className="font-['Raleway'] text-[#fff] text-[24px] font-bold leading-[30px] mb-9">Aile Odası</h1>
                    <span className="mb-3 text-[14px] font-normal italic leading-[1.2] text-[#fff] flex justify-center items-center  ">
                        <BsFillPeopleFill color="#fff" size={18}/> 1-5 kişi arasında Konaklama
                    </span> 
                    <p className="mb-3 text-[13px] font-['Montserrat'] text-[#fff]">Duş&Wc, Saç Kurutma Makinesi,Split Klima,Uydu Tv,Telefon,Minibar(Boş),Kasa(Ücretli),Balkon,İlave Bebek Yatağı,Deniz Manzaralı,Kara Manzaralı,Ara Kapılı</p>
                    <NavLink to="/" className="text-[#fff] bg-[#b55b02] hover:text-[#b55b02] hover:bg-[#fff] border-1 borber-none rounded-md px-[3.5px] ">Oda Detayı</NavLink>
                </div>
            </div>
            <div className="group relative cursor-pointer items-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                <div className="h-96 w-72">
                    <img loading="lazy" src={Standart} alt="standart-room" className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-12" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                    <h1 className="font-['Raleway'] text-[#fff] text-[24px] font-bold leading-[30px] mb-9">Geniş Oda</h1>
                    <span className="mb-3 text-[14px] font-normal italic leading-[1.2] text-[#fff] flex justify-center items-center  ">
                        <BsFillPeopleFill color="#fff" size={18}/> 1-4 kişi arasında Konaklama
                    </span> 
                    <p className="mb-2 text-[13px] font-['Montserrat'] text-[#fff]">Duş&Wc, Saç Kurutma Makinesi,Split Klima,Uydu Tv,Telefon,Minibar(Boş),Kasa(Ücretli),Balkon,İlave Bebek Yatağı,Deniz Manzaralı,Kara Manzaralı</p>
                    <NavLink to="/" className="text-[#fff] bg-[#b55b02] hover:text-[#b55b02] hover:bg-[#fff] border-1 borber-none rounded-md px-[3.5px]">Oda Detayı</NavLink>
                </div>
            </div>
        </div>
    </div>
  </section>;
};

export default MainRooms;
