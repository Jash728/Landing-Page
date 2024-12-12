import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense, lazy } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Lazy load pages
const AuthPage = lazy(() => import("./pages/AuthPage"));
const SignUpPage = lazy(() => import("./pages/SignUpPage"));
const LandingPage = lazy(() => import("./pages/LandingPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <AuthPage />
      </Suspense>
    ),
  },
  {
    path: "/signup",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <SignUpPage />
      </Suspense>
    ),
  },
  {
    path: "/landing",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <LandingPage />
      </Suspense>
    ),
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
