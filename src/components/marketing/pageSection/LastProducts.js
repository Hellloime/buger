import React from "react";
import Container from "../../elements/Container";
import LastProducts_1 from "../../../media/images/Burgers/LastProducts-1.jpg";
import LastProducts_2 from "../../../media/images/Burgers/LastProducts-2.jpg";
import LastProducts_3 from "../../../media/images/Burgers/LastProducts-3.jpg";

export default function LastProducts() {
  return (
    <Container>
      <div className="grid grid-rows-3 lg:grid-rows-2 lg:grid-cols-2 gap-3 lg:gap-9 h-96 md:h-full w-full  lg:h-96 lg:px-11 my-20 text-white uppercase">

        <div className="relative bg-primary h-full lg:row-span-2 rounded-md md:py-10 p-5 lg:p-7 ">
       
            <img src={LastProducts_1} className="absolute top-0 left-0 rounded-md w-full h-full object-cover z-0 " alt=""/>
          
          <div className="relative z-10">
            <span className="block font-bold text-lg"> Killer Burger</span>
            <span className="text-xl lg:text-2xl font-black">
            
              Burger le plus populaire
            </span>
          </div>
        </div>

        <div className="relative bg-primary h-full rounded-md md:py-10 p-5 lg:p-7">
            <img src={LastProducts_2} className="absolute top-0 left-0 rounded-md w-full h-full object-cover z-0 " alt=""/>
          <div className="relative z-10">
            <span className="block font-bold text-lg"> Island Burger</span>
            <span className="block text-xl lg:text-2xl font-black">Plus de plaisir</span>
            <span className="text-xl lg:text-2xl font-black">Plus de goûts</span>
          </div>
        </div>

        <div className="relative bg-primary h-full rounded-md md:py-10 p-5 lg:p-7">
            <img src={LastProducts_3} className="absolute top-0 left-0 rounded-md w-full h-full object-cover z-0 " alt=""/>
          <div className="relative z-10">
            <span className="block font-bold text-lg">Orlando's Burger</span>
            <span className="text-xl lg:text-2xl font-black">frais & pimenté</span>
          </div>
        </div>
        
      </div>
    </Container>
  );
}
