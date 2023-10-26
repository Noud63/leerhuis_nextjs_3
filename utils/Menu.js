const navLinks = [
  {
    id: 1,
    name: "Over ons",
    href: "#about",
    submenu: [
      { title: "Over Ons", href: "/menulinks/overons" },
      { title: "Organisatie", href: "" },
      { title: "Doelstelling", href: "" },
    ],
  },
  {
    id: 2,
    name: "Agenda",
    href: "#agenda",
    submenu: [
      { title: "Agenda", href: "/menulinks/activiteiten/agenda" },
      { title: "Recent", href: "" },
      { title: "Historie", href: "" },
    ],
  },
  {
    id: 3,
    name: "Contact",
    href: "#contact",
    submenu: [
      { title: "Contact", href: "/menulinks/contact" },
      { title: "Mail ons", href: "/menulinks/contact" },
      { title: "Route", href: "" },
    ],
  },
  {
    id: 4,
    name: "Activiteiten",
    href: "#activiteiten",
    submenu: [
      { title: "Activiteiten", href: "/menulinks/activiteiten/activiteiten" },
      { title: "Agenda", href: "/menulinks/activiteiten/agenda" },
      { title: "Programma", href: "/menulinks/activiteiten/programma" },
    ],
  },
];

export default navLinks