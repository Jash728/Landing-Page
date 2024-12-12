import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense, lazy } from "react";

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
  return <RouterProvider router={router} />;
}

export default App;
