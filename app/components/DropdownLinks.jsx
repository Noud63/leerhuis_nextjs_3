"use Client"

import React from 'react'
import Link from 'next/link';

const DropdownLinks = ({item}) => {
  return (
    <ul className="w-full flex items-start flex-col py-2 text-green-950 text-md font-normal">
        <li className="w-full flex justify-center h-10 cursor-pointer border-b border-green-950 tracking-normal">
          <Link href={item.href}>{item.title}</Link>
        </li>
      </ul>
  );
}

export default DropdownLinks
