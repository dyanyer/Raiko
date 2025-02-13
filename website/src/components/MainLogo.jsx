import React from "react";
import Logo from "../assets/Logo.png";

const Mainlogo = ({ className, positionStyles }) => {
  return (
    <div className={`flex justify-center ${className} ${positionStyles}`}>
      <img src={Logo} alt="Main Logo" className="w-full h-auto" />
    </div>
  );
};

export default Mainlogo;
