import { useState, useEffect } from "react";
import {
  LightBulbIcon,
  CalendarIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/solid";
import { FaInstagram, FaEnvelope } from "react-icons/fa";
import logo from "../assets/logo.png";
import Modal from "../components/Modal";

// Taglines array
const taglines = [
  "Struggling to Connect with Your Audience?",
  "Still following viral trends but not growing your socials?",
  "Don’t know what to create next?",
  "Ready to Switch from Doom Scrolling to Endless Creating?",
];

const LandingPage = () => {
  const [tagline, setTagline] = useState("");
  const [email, setEmail] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    profession: "",
  });

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

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
  
    const formData = {
      name: event.target.name.value,
      phone: event.target.phone.value,
      email: event.target.email.value,
      profession: event.target.profession.value,
    };
  
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbx2gfEVfgRkGjB7R1Vt5V5CWu1GvyLNu_CLRgXzk4k_yuXAhzWAEXd0FP2j-vvbhiPm/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      console.log(response)
      console.log('Form submitted!');

      event.target.reset();
      
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFDF5] font-sans">
      <header className="w-full py-6 px-10 bg-[#FFFDF5] flex justify-center items-center sticky top-0 z-50">
        <div className="flex items-center justify-center">
          <img src={logo} alt="Logo" className="h-14 w-auto" />
        </div>
      </header>

      <section className="flex flex-col items-center justify-center text-center px-6 py-10">
        <h2 className="text-5xl md:text-5xl font-bold text-[#EB7A52] leading-tight animate-bounce" style={{ fontFamily: "Dela Gothic One" }}>
          {tagline}
        </h2>

        <p className="mt-8 text-[#2e2e2e] text-lg md:text-xl font-semibold" style={{ fontFamily: "Montserrat" }}>
          Every creator needs to be a brand & every brand needs to be a creator.
        </p>

        <div className="mt-8 text-[#181818]">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Card 1 */}
            <div className="flex flex-col items-center p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 bg-[#F0F871]">
              <LightBulbIcon className="h-12 w-12 text-black mb-3" />
              <h4 className="text-xl font-semibold text-black mt-2">Find Your Voice</h4>
              <p className="text-lg text-center font-medium text-black mt-1">Define what resonates with your audience.</p>
            </div>
            {/* Card 2 */}
            <div className="flex flex-col items-center p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 bg-[#F0F871]">
              <ChatBubbleLeftRightIcon className="h-12 w-12 text-black mb-3" />
              <h4 className="text-xl font-semibold text-black mt-2">Spark Ideas</h4>
              <p className="text-lg text-center font-medium text-black mt-1">Generate ideas, hooks, scripts without burning out.</p>
            </div>
            {/* Card 3 */}
            <div className="flex flex-col items-center p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 bg-[#F0F871]">
              <CalendarIcon className="h-12 w-12 text-black mb-3" />
              <h4 className="text-xl font-semibold text-black mt-2">Plan & Schedule</h4>
              <p className="text-lg text-center font-medium text-black mt-1">Streamline your strategy to maintain consistent engagement.</p>
            </div>
          </div>
        </div>

        <p className="mt-8 text-[#5f5c5c] text-lg text-center relative">Ready to simplify your content game?</p>
        <div className="mt-8 w-full max-w-md relative">
          <button type="button" onClick={handleModalOpen} className="w-1/3 bg-[#EB7A52] text-white py-3 px-4 rounded-full hover:bg-[#2127F6] hover:text-[#ffffff] transition-all duration-300 text-sm font-semibold shadow-md hover:scale-105">
            Join the Tribe
          </button>
        </div>
      </section>

      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <h3 className="text-2xl font-bold mb-4">Join the Tribe</h3>
        <form onSubmit={handleFormSubmit}>
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleInputChange} className="w-full mb-4 p-3 border rounded-lg" required />
          <input type="tel" name="phone" placeholder="Your Phone" value={formData.phone} onChange={handleInputChange} className="w-full mb-4 p-3 border rounded-lg" required />
          <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleInputChange} className="w-full mb-4 p-3 border rounded-lg" required />
          <input type="text" name="profession" placeholder="Your Profession" value={formData.profession} onChange={handleInputChange} className="w-full mb-4 p-3 border rounded-lg" required />
          <button type="submit" className="w-full bg-[#EB7A52] text-white py-3 px-4 rounded-full hover:bg-[#2127F6] transition-all duration-300">
            Submit
          </button>
        </form>
      </Modal>

      <section className="py-3 text-center">
        <div className="flex justify-center items-center space-x-4">
          <a
            href="mailto:your-email@example.com"
            className="flex items-center space-x-1 text-[#EB7A52] hover:text-[#2127F6]"
          >
            <FaEnvelope />
            <span>Email</span>
          </a>
          <a
            href="https://www.instagram.com/your-instagram-handle"
            className="flex items-center space-x-1 text-[#EB7A52] hover:text-[#2127F6]"
          >
            <FaInstagram />
            <span>Instagram</span>
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
