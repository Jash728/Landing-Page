import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import logo from "../assets/logo.png";
import { auth, googleProvider } from "../firebase"; 
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { toast, ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
const AuthPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log("Google Sign-In successful:", user);
      localStorage.setItem("userName", user.displayName);
      toast.success("Google Sign-In successful!"); 
      navigate("/landing");
    } catch (error) {
      console.error("Google Sign-In Error:", error.message);
      toast.error("Google Sign-In failed: " + error.message); 
    }
  };

  
  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      console.log("Email Login successful!");
      console.log(result);
      const user = result.user;
      toast.success("Login successful!");
      localStorage.setItem("userName", user.displayName || user.email); 
      navigate("/landing");
    } catch (error) {
      console.error("Email Login Error:", error.message);
      toast.error("Invalid credentials. Please try again.");
    }
  };
  

  
  const handleSignUpRedirect = () => {
    navigate("/signup"); 
  };

  return (
    <div className="min-h-screen bg-[#FFFDF5] flex flex-col justify-center items-center">
      
      <header className="w-full py-6 px-10 bg-[#FFFDF5] flex justify-center">
        <img src={logo} alt="Logo" className="h-14 w-auto" />
      </header>

      
      <main className="flex flex-col items-center text-center mt-8 px-6">
        <h2 className="text-5xl font-bold text-[#EB7A52] leading-tight">
          Welcome Back!
        </h2>
        <p className="mt-6 text-[#2e2e2e] text-lg font-semibold">
          Login to unlock your creative journey
        </p>

        
        <button
          onClick={handleGoogleSignIn}
          className="mt-8 flex items-center bg-[#2127F6] text-white px-6 py-3 rounded-full shadow-lg hover:bg-[#EB7A52] hover:scale-105 transition-all duration-300 font-medium"
        >
          <FaGoogle className="mr-2" /> Sign in with Google
        </button>

        
        <div className="my-8 flex items-center w-full max-w-md">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-[#5f5c5c]">or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        
        <form onSubmit={handleEmailLogin} className="w-full max-w-md">
          <input
            type="email"
            placeholder="Email"
            className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EB7A52]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EB7A52]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-[#EB7A52] text-white py-3 rounded-full hover:bg-[#2127F6] hover:scale-105 transition-all duration-300 font-semibold shadow-md"
          >
            Login
          </button>
        </form>

        
        <p className="mt-4 text-[#5f5c5c]">
          Don't have an account?{" "}
          <span
            onClick={handleSignUpRedirect}
            className="text-[#EB7A52] cursor-pointer hover:underline"
          >
            Sign Up
          </span>
        </p>
      </main>

      
      <ToastContainer 
        position="top-right"
        autoClose={5000} 
        hideProgressBar={false} 
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default AuthPage;
