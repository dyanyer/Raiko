import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import DefaultLayout from "./layout/DefaulLayout";
import Marketplace from "./pages/Marketplace/Marketplace";

function App() {
  return (
    <Router>
      <Routes>
        {/* HomePage with Default Layout */}
        <Route path="/" element={<HomePage />} />

        {/* MarketplacePage with Marketplace Layout */}
        <Route
          path="/marketplace"
          element={
            <DefaultLayout>
              <Marketplace />
            </DefaultLayout>
          }
        />

        {/* Add more routes with different layouts as needed */}
      </Routes>
    </Router>
  );
}

export default App;
