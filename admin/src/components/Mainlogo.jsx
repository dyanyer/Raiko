import React from "react";
import Logo from "../assets/Logo.png";

const Mainlogo = ({ className }) => {
  return (
    <div className={`flex justify-center mb-7 ${className}`}>
      <img src={Logo} alt="Main Logo" className="w-full h-full" />
    </div>
  );
};

export default Mainlogo;
