import { useState, useEffect } from "react";
import {
  LightBulbIcon,
  CalendarIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/solid";
import { FaInstagram, FaEnvelope } from "react-icons/fa"; // Importing icons from react-icons
import logo from "./assets/logo.png";

const taglines = [
  "Struggling to Connect with Your Audience?",
  "Still following viral trends but not growing your socials?",
  "Don’t know what to create next?",
  "Ready to Switch from Doom Scrolling to Endless Creating?",
];

const LandingPage = () => {
  const [tagline, setTagline] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const randomTagline = taglines[Math.floor(Math.random() * taglines.length)];
    setTagline(randomTagline);
  }, []);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for subscribing with: ${email}`);
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-[#FFFDF5] font-sans">
      <header className="w-full py-6 px-10 bg-[#FFFDF5] flex justify-center items-center sticky top-0 z-50">
        <div className="flex items-center justify-center">
          <img src={logo} alt="Logo" className="h-14 w-auto" />
        </div>
      </header>

      <section className="flex flex-col items-center justify-center text-center px-6 py-10">
        <h2
          className="text-5xl md:text-5xl font-bold text-[#EB7A52] leading-tight animate-bounce"
          style={{ fontFamily: "Dela Gothic One" }}
        >
          {tagline}
        </h2>

        <p
          className="mt-8 text-[#2e2e2e] text-lg md:text-xl font-semibold"
          style={{ fontFamily: "Montserrat" }}
        >
          Every creator needs to be a brand & every brand needs to be a creator.
        </p>

        <div className="mt-8 text-[#181818]">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 bg-[#F0F871]">
              <LightBulbIcon className="h-12 w-12 text-black mb-3" />
              <h4 className="text-xl font-semibold text-black mt-2">
                Find Your Voice
              </h4>
              <p className="text-lg text-center font-medium text-black mt-1">
                Define what resonates with your audience.
              </p>
            </div>

            <div className="flex flex-col items-center p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 bg-[#F0F871]">
              <ChatBubbleLeftRightIcon className="h-12 w-12 text-black mb-3" />
              <h4 className="text-xl font-semibold text-black mt-2">
                Spark Ideas
              </h4>
              <p className="text-lg text-center font-medium text-black mt-1">
                Generate ideas, hooks, scripts without burning out.
              </p>
            </div>

            <div className="flex flex-col items-center p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 bg-[#F0F871]">
              <CalendarIcon className="h-12 w-12 text-black mb-3" />
              <h4 className="text-xl font-semibold text-black mt-2">
                Plan & Schedule
              </h4>
              <p className="text-lg text-center font-medium text-black mt-1">
                Streamline your strategy to maintain consistent engagement.
              </p>
            </div>
          </div>
        </div>

        <p className="mt-8 text-[#5f5c5c] text-lg text-center relative">
          Ready to simplify your content game?
        </p>

        <form
          onSubmit={handleEmailSubmit}
          className="mt-8 w-full max-w-md relative"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
            className="w-full py-3 px-4 pr-[5rem] rounded-full border border-gray-300 focus:outline-none focus:ring-4 focus:ring-[#EB7A52] transition-all duration-300 shadow-lg text-sm" // Reduced padding & text size
            required
          />
          <button
            type="submit"
            className="absolute right-0 top-0 bottom-0 bg-[#EB7A52] text-white py-2 px-4 rounded-full hover:bg-[#2127F6] hover:text-[#ffffff] transition-all duration-300 text-sm font-semibold shadow-md hover:scale-105" 
          >
            Join the Tribe
          </button>
        </form>
      </section>

      <section className="py-3 text-center"> 
  <div className="flex justify-center items-center space-x-4"> 
    <a
      href="mailto:your-email@example.com"
      className="flex items-center space-x-1 text-[#EB7A52] hover:text-[#2127F6] transition-colors"
    >
      <FaEnvelope className="h-4 w-4" /> 
      <span className="text-sm font-medium">Email</span>
    </a>
    <a
      href="https://www.instagram.com/klque.ai?igsh=MW9mcXl3N2dlc3R3MQ=="
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center space-x-1 text-[#EB7A52] hover:text-[#2127F6] transition-colors"
    >
      <FaInstagram className="h-4 w-4" /> 
      <span className="text-sm font-medium">Instagram</span> 
    </a>
  </div>
</section>


      <footer className="py-6 text-center text-[#181818]">
        &copy; 2024 Klque Tribe. All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;
