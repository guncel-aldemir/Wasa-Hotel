import React from "react";
import Navbar from "../../components/navbar/Navbar";
import House from "../../assets/images/roomsImages/familyImages/aile.jpg";
import Footer from "../../components/footer/Footer"
const Contact = () => {
    
    const bgContactStyle={
        backgroundImage:"url(https://www.wasahotel.com/images/slides/slide-4.jpg)",
        backgroundPosition:"center",
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat",
        height:"450px",
        width: "100%",
       
        
      }
  return <section id="contactPage" >
    <div style={bgContactStyle} className="relative">
        <Navbar/>
        <h3 className="absolute bottom-[30px] left-[50%] translate-x-[-50%] text-[30px] italic uppercase font-bold leading-[20px] font-['Raleway'] text-[#fff] py-6">iletişim</h3>
    </div>
      <div className="flex flex-col items-center justify-center md:flex-row py-6">
        <div className="flex-1 flex flex-col ">
            <div className="flex flex-col gap-3 sm:flex-row py-3">
                <input type="text" className="bg-[#f5f5f5] w-[260px] h-[50px]" placeholder="Adı"/>
                <input type="text" className="bg-[#f5f5f5] w-[260px] h-[50px]" placeholder="Soyadı"/>
                
            </div>
            <textarea className="bg-[#f5f5f5]"  cols="10" rows="4" placeholder="Mesajınız..."></textarea>
            <button className="bg-[#b55b02] px-6 py-4 rounded-md w-fit my-4 text-[14px] font-['Raleway'] text-[#fff] uppercase ">Mesaj Gönder</button>
        </div>
        <div className="flex-auto  flex justify-center  py-3   ">
            <img src={House} alt="back"  className="rounded-xl w-[400px]  shadow-xl shadow-gray-400 border-1  transform transition duration-500 ease-in-out "/>
        </div>
        
      </div>
      <div >
        <h3 className="text-[30px] italic uppercase font-bold leading-[30px] font-['Raleway'] text-[#333] py-6">Club Wasa Holiday Village</h3>
        <p className="text-[22px]  uppercase font-bold leading-[20px] font-['Montserrat'] text-[#b55b02] py-6">
Konaklı Mah. Mustafa Kemal Bulvarı No:58 Alanya/Antalya
        </p>
      </div>
      <Footer/>

    </section>;
};

export default Contact;
