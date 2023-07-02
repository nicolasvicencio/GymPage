import Link from "next/link";
import React from "react";

type Props = {};

export default function Header({}: Props) {
  return (
    <div className="w-full h-auto p-4 bg-neutral-950 text-white border-b border-b-primary">
      <div className="md:w-[80%] mx-auto  flex justify-between gap-2 items-center">
        <h1 className="text-xl">IronSupplements</h1>
        <nav>
          <ul className="flex gap-4">
            <Link href="/">nav1</Link>
            <Link href="/">nav1</Link>
            <Link href="/">nav1</Link>
            <Link href="/">nav1</Link>
          </ul>
        </nav>
      </div>
    </div>
  );
}
