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
      label: "Terapias",
      route: "/terapias",
    },
    {
      label: "Honorarios",
      route: "/honorarios",
    },
    {
      label: "Contacto",
      route: "/contact",
    },
  ]