import Link from "next/link";
import React from "react";

type Props = {};

export default function Header({}: Props) {
  return (
    <div className="w-full h-auto p-4 bg-neutral-950 text-white border-b border-b-primary">
      <div className="md:w-[80%] mx-auto  flex justify-between gap-2 items-center">
        <h1 className="text-xl">IRONSUPPLEMENTS</h1>
        <nav>
          <ul className="flex gap-4">
            <Link className='nav-link' href="/">Home</Link>
            <Link className='nav-link' href="/">About us</Link>
            <Link className='nav-link' href="/">Products</Link>
            <Link className='nav-link' href="/">Services</Link>
            <Link className='nav-link' href="/">Contact</Link>
          </ul>
        </nav>
      </div>
    </div>
  );
}
