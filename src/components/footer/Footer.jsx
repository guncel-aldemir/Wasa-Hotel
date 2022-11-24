import React from "react";
import Logo from "../../assets/ıcons/CLUB-VASA-1.png";
const Footer = () => {
  return <footer className="py-2 bg-[#2e2e2e]" id="footerSide">
    <div className="flex flex-col justify-center items-center gap-4 md:flex-row ">
        <div className="text-[#fff] flex flex-1 flex-col items-center ">
            <div className="items-center">
                <img src={Logo} width={70} height={70} alt="logo"/>
            </div>
            <div className="">
                <h4 className="font-['Raleway'] text-[20px] font-bold">CLUB WASA HOLIDAY VILLAGE</h4>
            </div>
        </div>
        <div className="text-[#fff] flex flex-col flex-1">
            <h3 className="font-['Raleway'] text-[20px] font-bold text-center">İletişim</h3>
            <ul className="flex flex-col justify-start items-start gap-2">
                <li className="text-start font-['Montserrat'] font-normal text-[16px]"><span className="text-[#b55b02]">Adres:</span>Konaklı Mah. Mustafa Kemal Bulvarı No:58 Alanya/Antalya</li>
                <li className="font-['Montserrat'] font-normal text-[16px]"><span className="text-[#b55b02]">Telefon:</span> 0090 242 519 04 63</li>
                <li className="font-['Montserrat'] font-normal text-[16px]"><span className="text-[#b55b02]">Fax:</span> 0090 242 519 04 88</li>
                <li className="font-['Montserrat'] font-normal text-[16px]"><span className="text-[#b55b02]">Email</span>: info@clubwasa.com</li>
                <li className="font-['Montserrat'] font-normal text-[16px]"><span className="text-[#b55b02]">Satış:</span> sales@clubwasa.com</li>
                <li className="font-['Montserrat'] font-normal text-[16px]"><span className="text-[#b55b02]">Rezervasyon:</span> reservation@clubwasa.com</li>
            </ul>
        </div>
        <div className=" flex-1 ">
            <p className=" text-[#fff] font-['Montserrat'] font-normal text-[16px]">
            Çam ve palmiye ağaçları
aromasıyla iç içe, muhteşem doğasıyla misafirlerini baş başa bırakarak unutamayacağınız rüya gibi bir tatil sunuyoruz.
            </p>
        </div>
    </div>
  </footer>;
};

export default Footer;
