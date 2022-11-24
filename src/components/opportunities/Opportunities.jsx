import React from "react";
import {MdRestaurantMenu} from "react-icons/md";
import {FaSwimmingPool} from "react-icons/fa";
import {BiSwim} from "react-icons/bi";
import {AiFillShopping} from "react-icons/ai"
import { NavLink } from "react-router-dom";
const Opportunities = () => {
  return <section id="opportunities" className="py-[45px]">
    <h3 className="text-[30px] italic uppercase font-bold leading-[20px] font-['Raleway'] text-[#333] py-6">Hizmetlerimiz</h3>
    <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col items-center justify-center h-[350px] bg-[#2e2e2e] rounded-xl transform transition-all hover:translate-y-2 duration-300 shadow-lg hover:shadow-2xl ">
            <div>
               <FaSwimmingPool size={90} color="#b55b02"/>
            </div>
            <div className="flex flex-col items-center justify-center">
                <h3 className="font-['Raleway'] text-[24px] text-[#fff] ">Havuz</h3>
                <p className="my-2 font-['Raleway'] text-[16px] text-[#fff]">Açık yüzme havuzu,Açık çocuk yüzme havuzu,Kaydırak havuzu,Şezlong-şemsiye-minder(ücretsiz) olanaklarımızla hizmet vermekteyiz. </p>
                <NavLink to="/" className="rounded-md px-2 py-1  border-[#fff] bg-[#fff] text-[#b55b02] hover:bg-[#b55b02] hover:text-[#fff]" >Detayları Gör</NavLink>
            </div>
        </div>
        <div className="flex flex-col items-center justify-center h-[350px] bg-[#2e2e2e] rounded-xl transform transition-all hover:translate-y-2 duration-300 shadow-lg hover:shadow-2xl ">
            <div>
               <MdRestaurantMenu size={90} color="#b55b02"/>
            </div>
            <div className="flex flex-col items-center justify-center">
                <h3 className="font-['Raleway'] text-[24px] text-[#fff] ">Restaurant&Bar</h3>
                <p className="my-2 font-['Raleway'] text-[16px] text-[#fff]">Gün içinde  Kahvaltı,Geç Kahvaltı,Öğle Yemeği,Snack-Ara Öğün,Dondurma Saati,Pasta Saati,Akşam Yemeği ve Gece Çorbasıyla en iyi hizmeti vermekteyiz. </p>
                <NavLink to="/" className="rounded-md px-2 py-1  border-[#fff] bg-[#fff] text-[#b55b02] hover:bg-[#b55b02] hover:text-[#fff]" >Detayları Gör</NavLink>
            </div>
        </div>
        <div className="flex flex-col items-center justify-center h-[350px] bg-[#2e2e2e] rounded-xl transform transition-all hover:translate-y-2 duration-300 shadow-lg hover:shadow-2xl ">
            <div>
               <BiSwim size={90} color="#b55b02"/>
            </div>
            <div className="flex flex-col items-center justify-center">
                <h3 className="font-['Raleway'] text-[24px] text-[#fff] ">Deniz</h3>
                <p className="my-2 font-['Raleway'] text-[16px] text-[#fff]">Özel Plaj(kum),Kabin&Duş,Şezlong-şemsiye-minder(ücretsiz),Bira harici alkollü içecek yasaktır. </p>
                <NavLink to="/" className="rounded-md px-2 py-1  border-[#fff] bg-[#fff] text-[#b55b02] hover:bg-[#b55b02] hover:text-[#fff]" >Detayları Gör</NavLink>
            </div>
        </div>
        <div className="flex flex-col items-center justify-center h-[350px] bg-[#2e2e2e] rounded-xl transform transition-all hover:translate-y-2 duration-300 shadow-lg hover:shadow-2xl ">
            <div>
               <AiFillShopping size={90} color="#b55b02"/>
            </div>
            <div className="flex flex-col items-center justify-center">
                <h3 className="font-['Raleway'] text-[24px] text-[#fff] ">Alışveriş</h3>
                <p className="my-2 font-['Raleway'] text-[16px] text-[#fff]">Araç Kiralama,Butik-Deri-Hediyelik Eşya,Tattoo-Dövme,Havalimanı Transferi </p>
                <NavLink to="/" className="rounded-md px-2 py-1  border-[#fff] bg-[#fff] text-[#b55b02] hover:bg-[#b55b02] hover:text-[#fff]" >Detayları Gör</NavLink>
            </div>
        </div>
    </div>
  </section>;
};

export default Opportunities;
