import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase"; // Your Firebase config
import logo from "../assets/logo.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState(""); // New field for username
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      // Save additional user information in Firestore
      await setDoc(doc(db, "users", user.uid), {
        username: username,
        email: email,
      });

      toast.success("Sign-Up Successful! Redirecting...");
      setTimeout(() => navigate("/landing"), 2000); // Redirect after 2 seconds
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFDF5] flex flex-col justify-center items-center">
      {/* Header */}
      <header className="w-full py-6 px-10 bg-[#FFFDF5] flex justify-center">
        <img src={logo} alt="Logo" className="h-14 w-auto" />
      </header>

      {/* Main Section */}
      <main className="flex flex-col items-center text-center mt-8 px-6">
        <h2 className="text-5xl font-bold text-[#EB7A52] leading-tight">
          Create Your Account
        </h2>
        <p className="mt-6 text-[#2e2e2e] text-lg font-semibold">
          Sign up with your email to get started.
        </p>

        {/* Email/Password Form */}
        <form onSubmit={handleSignUp} className="w-full max-w-md">
          <input
            type="text"
            placeholder="Username"
            className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#EB7A52]"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
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
            Sign Up
          </button>
        </form>

        {/* Go Back to Login */}
        <p className="mt-4 text-[#2e2e2e] text-sm">
          Already have an account?{" "}
          <button
            onClick={() => navigate("/")}
            className="text-[#EB7A52] hover:text-[#2127F6] font-semibold"
          >
            Go back to Login
          </button>
        </p>
      </main>

      {/* Toast Container */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default SignUpPage;