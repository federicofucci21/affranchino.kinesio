import About from "../../pages/About/about";
import Contact from "../../pages/Contact/Contact";
import Home from "../../pages/Home/home";
import LandingPage from "../../pages/Landing/Landing";
import Servicios from "../../pages/Servicios/Servicios";
import Acupuntura from "../../pages/Servicios/serviceCards/acupuntura";
import Calistenia from "../../pages/Servicios/serviceCards/calistenia";
import Puncion from "../../pages/Servicios/serviceCards/puncion";
import Rehabilitacion from "../../pages/Servicios/serviceCards/rehabilitacion";
import Rpg from "../../pages/Servicios/serviceCards/rpg";
import Terapia from "../../pages/Servicios/serviceCards/terapia";

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
    {
      path: "/home/servicios/acupuntura",
      element: <Acupuntura />,
    },
    {
      path: "/home/servicios/calistenia",
      element: <Calistenia />,
    },
    {
      path: "/home/servicios/rehab",
      element: <Rehabilitacion />,
    },
    {
      path: "/home/servicios/rpg",
      element: <Rpg />,
    },
    {
      path: "/home/servicios/terapia",
      element: <Terapia />,
    },
    {
      path: "/home/servicios/puncion",
      element: <Puncion />,
    },
    {
      path: "/home/contact",
      element: <Contact />,
    },
    {
      path: "/home/about",
      element: <About />,
    },
  ]