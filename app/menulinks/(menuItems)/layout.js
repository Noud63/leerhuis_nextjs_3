import "../../../app/globals.css"
import Header from "@/app/components/Header";

export default function MenuLayout({ children }) {
  return <>
  <Header />
  {children}
  </>;
}
