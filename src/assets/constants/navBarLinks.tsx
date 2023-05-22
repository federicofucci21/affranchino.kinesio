export type linkObjects =  {
  label:string,
  route: string,
}

export const navBarLinks: Array<linkObjects> = [
    {
      label: "Home",
      route: "/home",
    },
    {
      label: "Sobre mi",
      route: "/about",
    },
    {
      label: "Servicios",
      route: "/servicios",
    },
    {
      label: "Tarifas",
      route: "/prices",
    },
    {
      label: "Contacto",
      route: "/contact",
    },
  ]