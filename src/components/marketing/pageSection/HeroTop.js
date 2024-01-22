import React from "react";
import Illustration from "../../../media/images/Background/bg-food.jpg";
import Products from "../../../media/images/HeroTop/burger-hero-top.png";
import Container from "../../elements/Container";
import Header from "./Header";
import Button from "../../elements/Button";

function HeroTop() {
  return (
    <div className="bg-primary w-full ">
      <div
        className="bg-repeat w-full h-full pb-10 md:pb-40"
        style={{ backgroundImage: `url(${Illustration})` }}
      >
        <Container>
          <Header />
          <div className="relative mt-10 md:mt-28 w-full ">
            <img src={Products} className="hidden lg:block absolute z-0 -top-20 lg:-top-64 right-0 w-6/12" alt="burger" />

            <div className="hidden lg:block absolute right-80 top-40 rounded-full bg-danger w-40 h-40 p-3">
    <div className="w-full h-full rounded-full  border-2 border-dashed border-white text-white flex items-center justify-center">
        <div className="text-center ">
            <span className="block font-extrabold">
                <span className="text-5xl">5</span>
                 .49$</span>
            <span className="tracking-widest uppercase text-sm"> seulement</span>
           
        </div>
    </div>
            </div>

            <div className="relative z-10  text-secondary uppercase text-left md:text-center lg:text-left">
              <h1 className="mb-3 font-semibold">
                C'est le moment de goûter au bon goût des hamburgers
              </h1>
              <h2 className="font-secondary shadowTitleSecondary">
                <span className="text-6xl  md:text-8xl block ">Burger</span>{" "}
                <span className="text-5xl md:text-7xl block sm:inline-block">House</span>{" "}
                <span className="text-2xl md:text-4xl ml-0 sm:ml-3"> Click<span className="text-danger">&</span>Collect</span>
              </h2>
            </div>
          </div>
          
          <Button className="mt-5 w-full lg:w-80 rounded-sm" color="secondary" theme="big">Creer mon compte</Button>
         
        </Container>
      </div>
    </div>
  );
}

export default HeroTop;
