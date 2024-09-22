import { useState, useEffect } from "react";
import {
  LightBulbIcon,
  CalendarIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/solid";

const taglines = [
  "Struggling to Connect with Your Audience?",
  "Still following viral trends but not growing your socials?",
  "Don’t know what to create next?",
  "Ready to Switch from Doom Scrolling to Endless Creating?",
];

const LandingPage = () => {
  const [tagline, setTagline] = useState("");

  useEffect(() => {
    const randomTagline = taglines[Math.floor(Math.random() * taglines.length)];
    setTagline(randomTagline);
  }, []);

  return (
    <div className="min-h-screen bg-[#FFFDF5] font-sans">
      <header className="w-full py-6 px-10 bg-[#FFFDF5] flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-14 w-auto" />
        </div>
        <nav>
          <ul className="flex space-x-8 text-[#181818] text-lg">
            <li className="hover:text-[#EB7A52] transition duration-300 cursor-pointer">
              What We Do
            </li>
            <li className="hover:text-[#EB7A52] transition duration-300 cursor-pointer">
              Testimonials
            </li>
            <li className="hover:text-[#EB7A52] transition duration-300 cursor-pointer">
              Pricing
            </li>
            <li className="hover:text-[#EB7A52] transition duration-300 cursor-pointer">
              FAQs
            </li>
          </ul>
        </nav>
      </header>

      <section className="flex flex-col items-center justify-center text-center px-6 py-16">
        <h2
          className="text-5xl md:text-5xl font-bold text-[#b3663f] leading-tight animate-bounce"
          style={{ fontFamily: "Dela Gothic One" }}
        >
          {tagline}
        </h2>

        <p
          className="mt-4 text-[#181818] text-lg md:text-xl font-medium"
          style={{ fontFamily: "Montserrat" }}
        >
          Every creator needs to be a brand & every brand needs to be a creator.
        </p>

        <div className="mt-8 text-[#181818]">
          <h3
            className="text-3xl font-semibold mb-6"
            style={{ fontFamily: "Montserrat" }}
          >
            Turn confusion into clarity!
          </h3>

          <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center p-6 border border-[#EB7A52] rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <LightBulbIcon className="h-12 w-12 text-[#EB7A52] mb-3" />
              <p className="text-lg text-center font-semibold">
                <strong>Find Your Voice:</strong> Define what resonates with
                your audience.
              </p>
            </div>

            <div className="flex flex-col items-center p-6 border border-[#EB7A52] rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <ChatBubbleLeftRightIcon className="h-12 w-12 text-[#EB7A52] mb-3" />
              <p className="text-lg text-center font-semibold">
                <strong>Spark Ideas:</strong> Generate and organize content that
                speaks directly to them.
              </p>
            </div>

            <div className="flex flex-col items-center p-6 border border-[#EB7A52] rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <CalendarIcon className="h-12 w-12 text-[#EB7A52] mb-3" />
              <p className="text-lg text-center font-semibold">
                <strong>Plan & Schedule:</strong> Streamline your strategy to
                maintain consistent engagement.
              </p>
            </div>
          </div>
        </div>

        <a
          href="#"
          className="mt-8 bg-[#EB7A52] text-white py-3 px-6 rounded-full hover:bg-[#F0F871] hover:text-[#181818] transition-all duration-300 text-lg font-semibold shadow-md transform hover:scale-105"
        >
          Join the Klque Tribe
        </a>

        <p className="mt-4 text-[#181818] text-lg font-semibold text-center relative">
          Can you guess what it’ll be?
          <span className="underline decoration-[#EB7A52] decoration-2">
            ______
          </span>
        </p>
      </section>

      <footer className="py-6 text-center text-[#181818]">
        &copy; 2024 Klque Tribe. All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;
