import Home from "../../pages/Home/home";
import LandingPage from "../../pages/Landing/Landing";
import Servicios from "../../pages/Servicios/Servicios";

export const routesArray: Array<object> = [
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/home/servicios",
      element: <Servicios />,
    },
  ]