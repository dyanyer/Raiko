import React from "react";
import Logo from "../../public/Logo.png";

const Mainlogo = () => {
  return (
    <div className="flex justify-center mb-7">
      <img
        src={Logo}
        alt="Main Logo"
        className="w-full sm:w-2/3 md:w-1/2 lg:w-1/4 h-auto max-w-[50%]"
      />
    </div>
  );
};

export default Mainlogo;
