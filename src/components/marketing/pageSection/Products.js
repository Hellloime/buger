import React from "react";
import Container from "../../elements/Container";
import HeadingTitles from "../../elements/DisplayTitles/HeadingTitles";
import Heading from "../../elements/DisplayTitles/Heading";
import Button from "../../elements/Button";

import products_1 from "../../../media/images/Burgers/Product-1.jpg"
import products_2 from "../../../media/images/Burgers/Product-2.jpg"
import products_3 from "../../../media/images/Burgers/Product-3.jpg"

export default function Products() {
  return (
    <Container>
      <HeadingTitles variant="sm:h3">Toujours des déliceux burgers</HeadingTitles>
      <Heading theme="secondary" alignement="center" className="my-5 text-center">
        Choisissez et savourez
      </Heading>

      <p className="text-center">
        lorem ipsum lorem ips50 lorem ipsum lorem ips50 lorem ipsum lorem ips50
        lorem ipsum lorem ips50 lorem ipsum lorem ips50 lorem ipsum lorem ips50
        lorem ipsum lorem ips50 lorem ipsum lorem ips50 lorem ipsum lorem ips50
       
      </p>

      <div className="grid lg:grid-cols-3 gap-x-1 mb-20 mt-10 ">
        <div className="w-full md:w-2/3 lg:w-full h-full mx-auto">
          <div className="relative w-full h-72">
            <img
              src={products_1}
              alt=""
              className="bg-primary absolute top-0 left-0 w-full h-full object-cover z-0"
            />
          </div>

          <div className="flex flex-col items-center justify-center px-5 pb-5">
            <Heading variant="h3" className="my-5">Lrem ipsum dolor</Heading>
            <p className="text-center">Lorem ipsum dolor beddsme</p>
            <Button color="danger" className="font-secondary mb-10 lg:mb-0">
              Commandez
            </Button>
          </div>
        </div>
        <div className="w-full md:w-2/3 lg:w-full h-full mx-auto">
          <div className="relative w-full h-72">
            <img
              src={products_2}
              alt=""
              className="bg-primary absolute top-0 left-0 w-full h-full object-cover z-0"
            />
          </div>

          <div className="flex flex-col items-center justify-center px-5 pb-5">
            <Heading variant="h3" className="my-5">Lrem ipsum dolor</Heading>
            <p className="text-center">Lorem ipsum dolor beddsme</p>
            <Button color="danger" className="font-secondary  mb-10 lg:mb-0">
              Commandez
            </Button>
          </div>
        </div>
        <div className="w-full md:w-2/3 lg:w-full h-full mx-auto">
          <div className="relative w-full h-72">
            <img
              src={products_3}
              alt=""
              className="bg-primary absolute top-0 left-0 w-full h-full object-cover z-0"
            />
          </div>

          <div className="flex flex-col items-center justify-center px-5 pb-5">
            <Heading variant="h3" className="my-5">Lrem ipsum dolor</Heading>
            <p className="text-center">Lorem ipsum dolor beddsme</p>
            <Button color="danger" className="font-secondary  mb-10 lg:mb-0">
              Commandez
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}
