
import React from "react";
import Link from "next/link";

const OverlayLinks = ({ submenu, item, closeMenu }) => {
  return (
    <div className="w-full flex flex-col items-center mt-6 overflow-y-auto">
      <span className="w-full flex justify-center text-green-950 font-semibold border-b border-green-950 pb-2 mb-2">
        {item.name}
      </span>
      {submenu &&
        submenu.map((item, index) => (
          <div
            key={index}
            className="w-full flex flex-col items-center max-thumbs:"
            onClick={closeMenu}
          >
            <Link href={item.href}>
              <div className="text-green-950 text-base cursor-pointer mb-2">
                {item.title}
              </div>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default OverlayLinks;
