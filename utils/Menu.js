const navLinks = [
  {
    id: 1,
    name: "Over ons",
    href: "#about",
    submenu: [
      { title: "Over Ons", href: "/about" },
      { title: "Organisatie", href: "" },
      { title: "Doelstelling", href: "" },
    ],
  },
  {
    id: 2,
    name: "Agenda",
    href: "#agenda",
    submenu: [
      { title: "Agenda", href: "/agenda" },
      { title: "Recent", href: ""},
      { title: "Historie", href: "" },
    ],
  },
  {
    id: 3,
    name: "Contact",
    href: "#contact",
    submenu: [
      { title: "Contact", href: "/contact" },
      { title: "Mail ons", href: "/contact" },
      { title: "Route", href: "" },
    ],
  },
  {
    id: 4,
    name: "Activiteiten",
    href: "#activiteiten",
    submenu: [
      { title: "Activiteiten", href: "/activiteiten" },
      { title: "Agenda", href: "#agenda" },
      { title: "Programma", href: "" },
    ],
  },
];

export default navLinks