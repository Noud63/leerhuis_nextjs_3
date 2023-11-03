import React from 'react'
import Link from 'next/link';

const FooterMenu = ({submenu}) => {
  return (
    <>
    {submenu.map((link, index) => {
        return (
          <div key={index}>
            <div className="flex flex-row justify-start pb-2">
              <Link href={link.href}>
                <div className="text-[#a9bab6] text-base cursor-pointer">
                  {link.title}
                </div>
              </Link>
            </div>
          </div>
        );
    })}
      
    </>
  );
}

export default FooterMenu
