import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Wasa from "../../assets/images/roomsImages/familyImages/aile.jpg"
import Footer from "../../components/footer/Footer";
const About = () => {
    const bgHeaderStyle={
        backgroundImage:"url(https://www.wasahotel.com/images/slides/slide-4.jpg)",
        backgroundPosition:"center",
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat",
        height:"450px",
        width: "100%",
       
        
      }
  return <section id="about" className="flex flex-col items-center justify-center  h-screen  " >
    <div style={bgHeaderStyle} className="">
    <Navbar/>
    </div>
    <h3 className="text-[30px] italic uppercase font-bold leading-[20px] font-['Raleway'] text-[#333] py-3">Hakkımızda</h3>
    <div className="my-[30px] md:my-0 flex flex-col items-center justify-center md:flex-row md:justify-center md:items-center gap-3  py-8">
       
        <div className="flex-auto">
            <h3 className="font-['Raleway'] text-[36px] font-normal text-[#333] leading-[42px]">İhtiyacınız olan Her Şey...</h3>
      
        </div>
        <div className="flex-auto lg:w-[50%]  ">
            <p className="font-['Montserrat'] text-[14px] text-[#333] font-normal leading-[24px]">Akdeniz’in modern Turistik ilçesi olan otelimiz Alanya Konaklı turizm merkezinde bulunan otelimiz 9.000 m2 alana inşaa edilmiştir. Çam ve palmiye ağaçları aromasıyla iç içe, muhteşem doğasıyla misafirlerini baş başa bırakarak unutamayacağınız rüya gibi bir tatil sunuyoruz.
            <br></br>Zengin yiyecek ve içecek hizmetleri,Sertifikalı spa ve wellness alanı,Aquaparkı ve eğlence merkezi,Muhteşem sahili ve havuzu ve daha birçok hizmeti siz değerli misafirlerimize sunmaktayız.
            </p>
        </div>
        
    </div>
    <div className=" grid grid-cols-1 md:grid-cols-3 gap-6 pb-6">
      <div className=" shadow-xl shadow-gray-400 border-1 rounded-lg transform transition duration-500 ease-in-out  hover:scale-110" >
        <img src={Wasa} alt="" loading="lazy" className="rounded-lg" />
      </div>
      <div className=" shadow-xl shadow-gray-400 border-1 rounded-lg transform transition duration-500 ease-in-out  hover:scale-110" >
        <img src={Wasa} alt="" loading="lazy" className="rounded-lg"/>
      </div>
      <div className=" shadow-xl shadow-gray-400 border-1 rounded-lg transform transition duration-500  ease-in-out hover:scale-110" >
        <img src={Wasa} alt="" loading="lazy" className="rounded-lg" />
      </div>
    </div>
    <div class="overflow-x-auto relative">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="py-3 px-6">
                    Hizmetler
                </th>
                <th scope="col" class="py-3 px-6">
                    Ücretli
                </th>
                <th scope="col" class="py-3 px-6">
                    Ücretsiz
                </th>
               
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple MacBook Pro 17"
                </th>
                <td class="py-4 px-6">
                   X
                </td>
                <td class="py-4 px-6">
                   
                </td>
                
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Microsoft Surface Pro
                </th>
                <td class="py-4 px-6">
                    
                </td>
                <td class="py-4 px-6">
                    X
                </td>
                
            </tr>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Magic Mouse 2
                </th>
                <td class="py-4 px-6">
                    Black
                </td>
                <td class="py-4 px-6">
                    Accessories
                </td>
               
            </tr>
        </tbody>
    </table>
</div>
    <Footer/>
  </section>;
};

export default About;
