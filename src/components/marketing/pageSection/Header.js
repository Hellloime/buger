import React from "react";
import Logo from "../../../media/images/svg/Logo/Logo-burger-house.svg";
import Bag from "../../../media/images/svg/Icones/ico-bag-clickAndCollect.svg";
import Button from "../../elements/Button";
import Picto from "../../../media/images/svg/Logo/picto-burger-house.svg"
function Header() {
  return (
    <div className="relative z-10 flex items-center justify-between py-10">
      <div className="h-20 w-full">
        <img src={Logo} alt="logo burger" className="w-64 hidden md:block" />
        <img src={Picto} alt="logo burger" className="w-10 md:hidden" />
      </div>

      <div className="w-full text-secondary ">
        <div className="items-center justify-end hidden md:flex">
          <img src={Bag} alt="" className="w-5 h-5 mr-1" />
          <span> Commandez votre repas en ligne</span>
        </div>

        <div className="-mt-10 md:mt-5 flex items-center justify-end">
          <Button className="tracking-widest mr-3">
            inscription

          </Button>
          <Button  className="tracking-widest" color="secondary">Connexion</Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
