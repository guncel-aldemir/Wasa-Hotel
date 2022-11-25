import React,{useState} from "react";
import {GiHamburgerMenu} from "react-icons/gi";
import {RiArrowDropDownFill} from "react-icons/ri";
import {GrClose} from "react-icons/gr";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/ıcons/CLUB-VASA-1.png"
const Navbar = () => {
    const [toggleNav,setToggleNav] = useState(false);
    const [activeLink,setActiveLink] = useState(false);
    const [dropdown,setDropDown] = useState(false);
    const [navbar, setNavbar] = useState(false);
    const handleNav = ()=>{
        setToggleNav(!toggleNav)
    };
    const handleDropdown=()=>{
    setActiveLink(!activeLink)
    }
    const changeBackground = () => {
        if (window.scrollY >= 80) {
          setNavbar(true);
        } else {
          setNavbar(false);
        }
      };
      window.addEventListener("scroll", changeBackground);
  return <nav className="fixed w-full z-[99]  ">
    <div className={navbar ? "flex justify-between lg:justify-evenly items-center w-full bg-[#2e2e2e] ease-in duration-500":"flex justify-between lg:justify-evenly items-center w-full bg-transparent "}>
        <div className="h-[80px]">
            <img src={Logo} className="h-[70px]" alt="logo" />           
        </div>
        <div className="hidden lg:flex lg:flex-row lg:justify-between lg:items-center">
        <ul className="flex flex-row justify-between gap-4 ">
            <li className="relative" >
                <NavLink to="/" className="font-bold font-['Raleway']  text-[18px] text-[#fff] uppercase  hover:text-[#b55b02] transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-700 before:bg-gradient-to-r before:from-gray-400 before:via-slate-300 before:to-zinc-300 hover:before:w-full hover:before:opacity-100 ">Ana Sayfa</NavLink>
            </li>
            <li className="relative " onMouseLeave={()=>setDropDown(!dropdown)}>
                <NavLink to="/" className="font-bold font-['Raleway'] text-[18px] text-[#fff] uppercase hover:text-[#b55b02]  flex flex-row transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-700 before:bg-gradient-to-r before:from-gray-400 before:via-slate-300 before:to-zinc-300 hover:before:w-full hover:before:opacity-100">Odalarımız
                <RiArrowDropDownFill color="#fff" size={26} className=""  />
                </NavLink>
            
                <div className= {dropdown ? "absolute top-[10] flex hover:flex-col hover:items-center hover:justify-center bg-[white] rounded-md px-2": "hidden"} onMouseLeave={() => setDropDown(!dropdown)}>
                    <ul className="flex flex-col items-center justify-center  py-4 w-[200px]  ">
                        <li className="hover:bg-[#b55b02] border-b border-solid border-[#ddd] w-[100%]    ">
                            <NavLink to="/" className="font-bold font-['Raleway'] text-[14px] text-[#2e2e2e] uppercase hover:text-[#fff] ">Standart Oda</NavLink>
                        </li>
                        <li className="hover:bg-[#b55b02] border-b border-solid border-[#ddd] w-[100%]  ">
                            <NavLink to="/" className="font-bold font-['Raleway'] text-[14px] text-[#2e2e2e] uppercase hover:text-[#fff]">Aİle Odası</NavLink>
                        </li>
                        <li className="hover:bg-[#b55b02] w-[100%]  px-4">
                            <NavLink to="/" className="font-bold font-['Raleway'] text-[14px]  text-[#2e2e2e] uppercase hover:text-[#fff] ">Geniş Oda</NavLink>
                        </li>
                    </ul>
                </div></li>
            <li className="relative">
                <NavLink to="/" className=" font-bold font-['Raleway'] text-[18px] text-[#fff] uppercase hover:text-[#b55b02] transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-700 before:bg-gradient-to-r before:from-gray-400 before:via-slate-300 before:to-zinc-300 hover:before:w-full hover:before:opacity-100">Hizmetlerimiz</NavLink>
            </li>
            <li className="relative">
                <NavLink to="/hakkımızda" className="  font-bold font-['Raleway'] text-[18px] text-[#fff] uppercase hover:text-[#b55b02] transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-700 before:bg-gradient-to-r before:from-gray-400 before:via-slate-300 before:to-zinc-300 hover:before:w-full hover:before:opacity-100 ">Hakkımızda</NavLink>
            </li>
            <li className="relative">
                <NavLink to="/" className="font-bold font-['Raleway']  text-[18px] text-[#fff] uppercase hover:text-[#b55b02] transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-700 before:bg-gradient-to-r before:from-gray-400 before:via-slate-300 before:to-zinc-300 hover:before:w-full hover:before:opacity-100">Galeri</NavLink>
            </li>
            <li className="relative">
                <NavLink to="/iletişim" className="font-bold font-['Raleway'] text-[18px] text-[#fff] uppercase   hover:text-[#b55b02] transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-700 before:bg-gradient-to-r before:from-gray-400 before:via-slate-300 before:to-zinc-300 hover:before:w-full hover:before:opacity-100">İletişim</NavLink>
            </li>
        </ul>
        </div>
        <div className="lg:hidden flex ">
            <button className="navbar-burger flex items-center text-[#b55b02]" onClick={handleNav}>
                <GiHamburgerMenu size={28}/>
            </button>
            
        </div>
        
    </div>
    <div className={toggleNav ? "lg:hidden fixed left-0 top-0 w-full h-screen bg-black/60 ":""}>
        <div className={toggleNav ? "fixed left-0 top-0 w-[70%] sm:w-[30%] md:w-[45%] h-screen bg-[#18191b] ease-in duration-200" : "fixed left-[-100%] top-0  ease-in duration-500 h-screen"}>
            <div className="flex flex-row justify-between items-center ">
                <img src={Logo}  alt="logo Sidebar" className="h-[80px]  " />
              
                <GrClose size={30}  className="bg-[#b55b02]" onClick={handleNav}/>
            </div>
            <div className="flex flex-col items-center justify-start my-8">
                <ul className="uppercase flex flex-col justify-start items-start gap-4 ">
                <li className="px-2 relative " >
                <NavLink to="/" className="font-bold font-['Raleway']  text-[18px] text-[#fff] uppercase  hover:text-[#b55b02] transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-700 before:bg-gradient-to-r before:from-gray-400 before:via-slate-300 before:to-zinc-300 hover:before:w-full hover:before:opacity-100  ">Ana Sayfa</NavLink>
            </li>
            <li className="relative">
                <NavLink to="/" className="font-bold font-['Raleway'] text-[18px] text-[#fff] uppercase hover:text-[#b55b02]  flex flex-row transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-700 before:bg-gradient-to-r before:from-gray-400 before:via-slate-300 before:to-zinc-300 hover:before:w-full hover:before:opacity-100">Odalarımız
                <RiArrowDropDownFill color="#fff" size={26} onClick={handleDropdown}/>
                </NavLink>
                <div className={activeLink ? "flex flex-col items-center justify-center": "hidden"}>
                    <ul className="flex flex-col items-start    ">
                        <li className="hover:bg-[#b55b02]">
                            <NavLink to="/" className="font-bold font-['Raleway'] text-[14px] text-[#b55b02] uppercase hover:text-[#fff]  ">Standart Oda</NavLink>
                        </li>
                        <li className="hover:bg-[#b55b02]">
                            <NavLink to="/" className="font-bold font-['Raleway'] text-[14px] text-[#b55b02] uppercase hover:text-[#fff]">Aile Odası</NavLink>
                        </li>
                        <li className="hover:bg-[#b55b02]">
                            <NavLink to="/" className="font-bold font-['Raleway'] text-[14px] text-[#b55b02] uppercase hover:text-[#fff] ">Geniş Oda</NavLink>
                        </li>
                    </ul>
                </div>
            </li>
            <li className="relative">
                <NavLink to="/" className=" font-bold font-['Raleway'] text-[18px] text-[#fff] uppercase hover:text-[#b55b02] transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-700 before:bg-gradient-to-r before:from-gray-400 before:via-slate-300 before:to-zinc-300 hover:before:w-full hover:before:opacity-100">Hizmetlerimiz</NavLink>
            </li>
            <li className="relative">
                <NavLink to="/hakkımızda" className=" active:text-[#b55b02] font-bold font-['Raleway'] text-[18px] text-[#fff] uppercase hover:text-[#b55b02] transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-700 before:bg-gradient-to-r before:from-gray-400 before:via-slate-300 before:to-zinc-300 hover:before:w-full hover:before:opacity-100 ">Hakkımızda</NavLink>
            </li>
            <li className="relative">
                <NavLink to="/" className="font-bold font-['Raleway']  text-[18px] text-[#fff] uppercase hover:text-[#b55b02] transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-700 before:bg-gradient-to-r before:from-gray-400 before:via-slate-300 before:to-zinc-300 hover:before:w-full hover:before:opacity-100">Galeri</NavLink>
            </li>
            <li className="relative">
                <NavLink to="/iletişim" className="font-bold font-['Raleway'] text-[18px] text-[#fff] uppercase   hover:text-[#b55b02] transition-all duration-500 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5 before:rounded-full before:opacity-0 before:transition-all before:duration-700 before:bg-gradient-to-r before:from-gray-400 before:via-slate-300 before:to-zinc-300 hover:before:w-full hover:before:opacity-100">İletişim</NavLink>
            </li>
                </ul>
            </div>
        </div>
    </div>

  </nav>;
};

export default Navbar;
