import React from "react";
import Logo from "../assets/Logo.png";

const Mainlogo = () => {
  return (
    <div className="flex justify-center mb-7">
      <img src={Logo} alt="Main Logo" className="w-[200px]" />
    </div>
  );
};

export default Mainlogo;
