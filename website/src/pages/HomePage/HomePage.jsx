import React from "react";
import Mainlogo from "../../components/MainLogo";
import { FaSearch } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import TopBar from "../../components/TopBar";
import Carousel from "./Carousel";
import catImage from "../../assets/cat_one.jpg"; // Import the image

const HomePage = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center h-screen"
        style={{ backgroundImage: `url(${catImage})` }}
      >
        <TopBar />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center p-2">
          <div className="text-md mb-1 text-white">
            Gaming Marketplace Platform
          </div>
          <div className="text-6xl mb-4 font-extrabold text-white">
            Explore our Gaming App
          </div>
          <button className="border-white border mt-8 text-white px-6 py-2 rounded-full hover:bg-gray-500 cursor-pointer transition-colors">
            Get Started
          </button>
        </div>
      </div>
      <div className="bg-black px-4 py-8 border-t border-white">
        <div className="text-center font-semibold text-3xl sm:text-4xl md:text-5xl text-white mb-6">
          Our Products
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="bg-gray-400 h-96 border-black border-2 p-4"></div>
          <div className="bg-gray-400 h-96 border-black border-2 p-4"></div>
          <div className="bg-gray-400 h-96 border-black border-2 p-4"></div>
          <div className="bg-gray-400 h-96 border-black border-2 p-4"></div>
        </div>
        <div className="flex justify-center items-center mt-8">
          <button className="p-2 bg-white text-center items-center w-40 hover:bg-gray-300 rounded-full cursor-pointer transition-colors">
            Load More
          </button>
        </div>
      </div>

      <div className="bg-gradient-to-b to-gray-900 from-black px-4 py-8">
        <div className="text-3xl sm:text-4xl md:text-5xl text-white mb-6 p-6 ml-4 ">
          About Raiko Platform
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-6">
          <div className="bg-gray-400 w-full h-96 border-black border-2 p-4"></div>
          <div className="text-white text-lg font-medium flex flex-col justify-center space-y-3">
            <div>What we can offer</div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
              vero? Nesciunt voluptatibus assumenda quasi alias similique,
              numquam voluptate itaque, obcaecati repellendus suscipit culpa
              dolore architecto voluptates natus minima nam consectetur.
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-gray-900 to-gray-800 items-center text-center">
        <div className="">
          <div className="text-center text-6xl font-roboto mb-2 text-white">
            FAQ SECTION
          </div>

          <div className="text-center text-lg sm:text-xl text-white mb-12">
            Frequently Asked Questions
          </div>

          <div className="">
            <div className="border-b border-t border-white p-4 shadow-lg">
              <div className="font-semibold text-white p-4">
                How do I list items for sale?
              </div>
              <div className="text-gray-300 p-2">
                To list an item for sale, go to the "Sell" page and follow the
                instructions to upload a product.
              </div>
            </div>

            <div className="border-b border-t border-white p-4 shadow-lg">
              <div className="font-semibold text-white p-4">
                Is there a verification process for sellers?
              </div>
              <div className="text-gray-300 p-2">
                Yes, we require sellers to complete a verification process
                before they can list their products.
              </div>
            </div>

            <div className="border-b border-t border-white p-4 shadow-lg">
              <div className="font-semibold text-white p-4">
                How do I contact customer support?
              </div>
              <div className="text-gray-300 p-2">
                You can contact customer support via the "Contact Us" page,
                where you'll find our support email and live chat options.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-gray-800 to-gray-700 p-6 pt-20">
        <div className="text-white p-4 text-center text-6xl">CONTACT US</div>
        <div className="text-4xl font-roboto mb-2 text-white">
          <div className="border p-4">raiko</div>
          <div className="flex border">
            <div className="border p-6 text-sm w-80">
              <div>+98 765 432 1098 |</div>
              <div>example@gmail.com</div>
            </div>
            <div className="border p-6 text-sm w-dvh">
              <div>Mindanao</div>
              <div>Visayas</div>
              <div>Luzon | 9999</div>
            </div>
          </div>

          <div className="flex border h-64">
            <div className="border p-6 text-sm w-80"></div>
            <div className="p-6 space-y-2">
              <div className="text-sm p-2">Subscribe to our newsletter</div>
              <div className="text-sm p-2">
                Enter your email address to receive updates and promotions.
              </div>
              <div>
                <input
                  type="text"
                  placeholder=""
                  className="border-b w-80 text-sm focus:outline-none focus:ring-0"
                />
                <button className="p-2 text-sm bg-gray-600 rounded-lg ml-2 cursor-pointer hover:bg-gray-500">
                  subscribe
                </button>
              </div>
              <div className="text-sm p-2">contact us</div>
            </div>
          </div>

          <div className="flex justify-center items-center pt-4 p-4 border">
            <div className="text-white text-lg">
              © 2025 raiko. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
