import React from "react";
import Container from "../../elements/Container";
import AliceCarousel from "react-alice-carousel";
import Image from "../../../media/images/Events/dorian-hurst-d-igN2ptyC8-unsplash.jpg";
import Image2 from "../../../media/images//Burgers/LastProducts-1.jpg";
import Image3 from "../../../media/images/Burgers/LastProducts-2.jpg";
import "../../../css/index.css";
import Heading from "../../elements/DisplayTitles/Heading";

const Slide = ({ children, category, title, image }) => {
  return (
    <div className="grid md:grid-cols-2 p-3 md:p-6  h-full">
      <div className="pb-10 md:p-10 md:mb-10">
        <Heading variant="h4">
            {category}
        </Heading>
        <Heading theme="secondary" variant="h3" className="mb-5">
          {title}
        </Heading>
        <p className="tracking-wide text-lg leading-relaxed font-light text-gray-800 md:mb-10 mb-0"> {children}</p>
      </div>
      <div className="relative w-full h-96 md:h-full">
        <img
          src={image}
          alt=""
          className="bg-primary absolute top-0 left-0 w-full h-full object-bottom object-cover z-0"
        />
      </div>
    </div>
  );
};

export default function Event() {
  const items = [
    <Slide
      image={Image}
      category="évènement à venir"
      title="vivez la demie-fianle"
    >
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
     
    </Slide>,
     <Slide
     image={Image2}
     category="Nouveau burger"
     title="Apprecier le nouveau délice"
   >
     Lorem Ipsum is simply dummy text of the printing and typesetting industry.
     Lorem Ipsum has been the industry's standard dummy text ever since the
     1500s, when an unknown printer took a galley of type and scrambled it to
     make a type specimen book. It has survived not only five centuries, but
    
   </Slide>,
    <Slide
    image={Image3}
    category="profiter de la sauce"
    title=" expérimenté le nouveau burger"
  >
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the
    1500s, when an unknown printer took a galley of type and scrambled it to
    make a type specimen book. It has survived not only five centuries, but
   
  </Slide>,
   
  ];

  return (
    <Container>
      <div className="shadow-2xl mb-20 border border-gray-100">
        <AliceCarousel
          autoPlay
          infinite
           autoPlayInterval="4000"
           animationType ='fadeout'
          disableButtonsControls
          mouseTracking
          items={items}
        />
      </div>
    </Container>
  );
}
