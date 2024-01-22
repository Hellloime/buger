import React from "react";
import Container from "../../../components/elements/Container";
import BackgroundImage from "../../../media/images/Background/bg-footer.jpg";
import { MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import Logo from "../../../media/images/svg/Logo/Logo-burger-house-white.svg";
import Facebook from "../../../media/images/svg/Icones/facebook-f-brands.svg";
import Instagram from "../../../media/images/svg/Icones/instagram-brands.svg"
import Twitter from "../../../media/images/svg/Icones/twitter-brands.svg"
import Whatsapp from "../../../media/images/svg/Icones/whatsapp-brands.svg"
export default function Footer() {
  return (
    <Container>
      <div className="relative lg:mb-20 p-5 text-white">
        <img
          src={BackgroundImage}
          alt=""
          className="bg-black absolute top-0 left-0 w-full h-full object-cover z-0"
        />
        <div className="relative grid md:grid-cols-2   z-10">
          <div className=" w-full p-5 mt-20 mb-10 md:mb-28">
            <img src={Logo} alt="" className="w-2/3"/>
            <p className="mt-10">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
            Lorem ipsum Lorem ipsum Lorem ipsum 
            </p>
          </div>
       
          <div className=" h-full w-full flex flex-col items-start md:items-center justify-center">
            <div className="flex items-center">
              <MapPinIcon className="h-10 w-10 mr-5 text-white" />
              <span className="uppercase font-extrabold text-lg tracking-tighter">
                15 places bellecour, 6900 Lyon
              </span>
            </div>

            <div className="flex items-center mt-5">
              <EnvelopeIcon className="h-10 w-10 mr-5 text-white" />
              <span className="uppercase font-extrabold text-lg tracking-tighter">
                info@burger-house.com
              </span>
            </div>
          </div>
        </div>
        <div className="relative z-10  flex items-center justify-between">
            <div className="uppercase font-bold tracking-tighter text-sm">burger house 2021. All rights reserved</div>
            <div className="flex">
                <div>
                    <img src={Instagram} alt="" className="w-7 h-7 mr-2 bg-white rounded-full p-1"/>
                </div>
                <div>
                    <img src={Facebook} alt="" className="w-7 h-7 mr-2 bg-white rounded-full p-1"/>
                </div>
                <div>
                    <img src={Twitter} alt="" className="w-7 h-7 mr-2 bg-white rounded-full p-1"/>
                </div>
                <div>
                    <img src={Whatsapp} alt="" className="w-7 h-7  bg-white rounded-full p-1"/>
                </div>
            
            </div>

        </div>
      </div>
    </Container>
  );
}
