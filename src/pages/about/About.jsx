import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Wasa from "../../assets/images/roomsImages/familyImages/aile.jpg";
import Footer from "../../components/footer/Footer";
import Information from "../../information";
const About = () => {
  const [opportunities, setOpportunities] = useState(0);
  const bgHeaderStyle = {
    backgroundImage: "url(https://www.wasahotel.com/images/slides/slide-4.jpg)",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "450px",
    width: "100%",
  };
  const handleClick = (type) => {
    let newText;
    if (type === "g") {
      newText = 0;
    } else if (type === "r") {
      newText = 1;
    } else if (type === "o") {
      newText = 2;
    } else {
      newText = 3;
    }
    setOpportunities(newText);
  };
  return (
    <section id="about" className="flex flex-col items-center justify-center">
      <div style={bgHeaderStyle} className="relative">
        <Navbar />
        <h3 className="absolute bottom-[30px] left-[50%] translate-x-[-50%] text-[30px] italic uppercase font-bold leading-[20px] font-['Raleway'] text-[#fff] py-6">
        Hakkımızda
      </h3>
      </div>
      
      <div className="my-[30px] md:my-0 flex flex-col items-center justify-center md:flex-row md:justify-center md:items-center gap-3  py-8">
        <div className="flex-auto">
          <h3 className="font-['Raleway'] text-[36px] font-normal text-[#333] leading-[42px]">
            İhtiyacınız olan Her Şey...
          </h3>
        </div>
        <div className="flex-auto lg:w-[50%]  ">
          <p className="font-['Montserrat'] text-[14px] text-[#333] font-normal leading-[24px]">
            Akdeniz’in modern Turistik ilçesi olan otelimiz Alanya Konaklı
            turizm merkezinde bulunan otelimiz 9.000 m2 alana inşaa edilmiştir.
            Çam ve palmiye ağaçları aromasıyla iç içe, muhteşem doğasıyla
            misafirlerini baş başa bırakarak unutamayacağınız rüya gibi bir
            tatil sunuyoruz.
            <br></br>Zengin yiyecek ve içecek hizmetleri,Sertifikalı spa ve
            wellness alanı,Aquaparkı ve eğlence merkezi,Muhteşem sahili ve
            havuzu ve daha birçok hizmeti siz değerli misafirlerimize
            sunmaktayız.
          </p>
        </div>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-6 pb-6">
        <div className=" shadow-xl shadow-gray-400 border-1 rounded-lg transform transition duration-500 ease-in-out  hover:scale-110">
          <img src={Wasa} alt="" loading="lazy" className="rounded-lg" />
        </div>
        <div className=" shadow-xl shadow-gray-400 border-1 rounded-lg transform transition duration-500 ease-in-out  hover:scale-110">
          <img src={Wasa} alt="" loading="lazy" className="rounded-lg" />
        </div>
        <div className=" shadow-xl shadow-gray-400 border-1 rounded-lg transform transition duration-500  ease-in-out hover:scale-110">
          <img src={Wasa} alt="" loading="lazy" className="rounded-lg" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center md:flex-row w-full py-10 border-t-2 border-[#e4e4e4]">
        <div className="flex-1">
          <ul className="flex flex-col justify-center items-center">
            <li
              className="py-2 font-['Raleway'] text-[30px] italic font-normal text-[#333] leading-[42px] border-b-2 w-max border-[#e4e4e4] cursor-pointer hover:text-[#b55b02] "
              onClick={() => handleClick("g")}
            >
              Genel Bilgiler
            </li>
            <li
              className=" py-2 font-['Raleway'] text-[30px] italic font-normal text-[#333] leading-[42px] border-b-2 w-max border-[#e4e4e4] cursor-pointer hover:text-[#b55b02]"
              onClick={() => handleClick("r")}
            >
              Resepsiyon Bilgileri
            </li>
            <li
              className=" py-2 font-['Raleway'] text-[30px] italic font-normal text-[#333] leading-[42px] border-b-2 w-max border-[#e4e4e4] cursor-pointer hover:text-[#b55b02]"
              onClick={() => handleClick("o")}
            >
              Oda Hizmet Bilgileri
            </li>
            <li
              className=" py-2 font-['Raleway'] text-[30px] italic font-normal text-[#333] leading-[42px] border-b-2 w-max border-[#e4e4e4] cursor-pointer hover:text-[#b55b02]"
              onClick={() => handleClick("s")}
            >
              Sağlık Hizmet Bilgileri
            </li>
          </ul>
        </div>
        <div className="flex-1 flex-col items-center justify-center  shadow-xl shadow-gray-400 border-1 rounded-lg py-4 ">
          <h3 className="font-['Raleway'] text-[28px] font-normal text-[#b55b02] leading-[32px]">{`${Information[opportunities].mainTitle}`}</h3>
          {`${Information[opportunities].title}` ? (
            <h4 className="font-['Raleway'] text-[22px] font-normal text-[#333] leading-[32px]">
              {Information[opportunities].title}
            </h4>
          ) : (
            ""
          )}
          <p className="font-['Montserrat'] text-[16px] text-[#333] font-normal leading-[24px]">{`${Information[opportunities].desc}`}</p>
          {`${Information[opportunities].title2}` ? (
            <h4 className="font-['Raleway'] text-[22px] font-normal text-[#333] leading-[32px]">
              {Information[opportunities].title2}
            </h4>
          ) : (
            ""
          )}
          {`${Information[opportunities].desc2}` ? (
            <p className="font-['Montserrat'] text-[16px] text-[#333] font-normal leading-[24px]">
              {Information[opportunities].desc2}
            </p>
          ) : (
            ""
          )}
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default About;
