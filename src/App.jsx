import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AiPage from "./pages/AiPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path:"/ai-page",
    element:<AiPage/>
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
