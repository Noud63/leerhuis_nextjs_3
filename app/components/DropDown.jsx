"use client"
import React,{useState} from 'react'
import DropdownLinks from './DropdownLinks';

const Dropdown = ({item, submenu}) => {

     const [menu, setMenu] = useState(false);

      const showMenu = (id) => {
        setMenu(true);
      };

      const closeMenu = () => {
        setMenu(false);
      };
     
  return (
    
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
             <DropdownLinks key={index} item={item}/>
            ))}
        </div>
      </div>
    
  );
}

export default Dropdown
