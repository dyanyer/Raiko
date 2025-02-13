import React from "react";
import TopBar from "../components/TopBar"; // Import the TopBar component

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <TopBar />
      <main>{children}</main> {/* Render the content passed as children */}
    </div>
  );
};

export default DefaultLayout;
