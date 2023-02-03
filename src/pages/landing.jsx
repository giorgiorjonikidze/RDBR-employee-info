import landingImg from "../assets/images/landing-img.png";
import logo from "../assets/images/landing-logo.svg";
import opc_redberry from "../assets/images/landing-opac-img.svg";

import {Link} from "react-router-dom"

const Landing = () => {
  return (
    <div className="overflow-hidden">
      {/* <div className="absolute w-[1920px] h-[1080px]"> */}
      <img className="absolute w-[1920px]" src={landingImg} />
      {/* </div> */}
      <div className=" ">
        <img
          className="relative z-10 pt-[25px] mb-[26px] ml-[70px] inline-block"
          src={logo}
          alt="redberry logo"
        />
        <div className=" relative z-10 h-[1px] bg-[#1A1A1A] mx-[70px] w-[1780px]"></div>
        <Link to="/user" className="absolute w-[464px] h-[60px] bg-black text-white text-[20px] rounded-[8px] ml-[728px] mt-[424px] cursor-pointer px-[126px] pt-[14px]  box-border">
          რეზიუმეს დამატება
        </Link>
      </div>
      <img
        className="absolute z-10 top-[473px] left-[1076px] z-200"
        src={opc_redberry}
      />
    </div>
  );
};

export default Landing;
