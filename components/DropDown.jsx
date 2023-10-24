"use client"
import React,{useState} from 'react'

const Dropdown = ({item, submenu}) => {

     const [menu, setMenu] = useState(false);

      const showMenu = (id) => {
        setMenu(true);
      };

      const closeMenu = () => {
        setMenu(false);
      };

     
  return (
    <>
      <div
        key={item.id}
        className="btn_menu relative tracking-widest font-medium"
        onMouseOver={showMenu}
        onMouseLeave={closeMenu}
      >
        {item.name}

        <div
          className={`${
            menu
              ? "max-h-[160px] opacity-100 w-full"
              : "max-h-0 opacity-0 invisible "
          } 
       dropdown w-full justify-center absolute top-[34px] bg-[#dfeae7] shadow-lg transition-all duration-300 ease-in-out visible border-b-2 border-green-950`}
        >
          {submenu &&
            submenu.map((item, index) => (
              <ul
                key={index}
                className="w-full flex items-start flex-col py-2 text-green-950 text-md font-normal"
              >
                <li className="w-full flex justify-center h-10 cursor-pointer border-b border-green-950 tracking-normal">
                  <a href={item.href}>{item.title}</a>
                </li>
              </ul>
            ))}
        </div>
      </div>
    </>
  );
}

export default Dropdown
