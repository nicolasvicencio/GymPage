import Link from "next/link";
import React from "react";

type Props = {};

export default function Featued({}: Props) {
  return (
    <div className="header_img ">
      <div className="flex flex-col gap-10 justify-center items-center h-[100vh]">
        <h2 className="text-white font-bold text-7xl">
          Your <span className="text-primary ">Best </span>
          Workout
        </h2>

        <Link href="/" className="bg-primary p-4 px-6 rounded-sm w-auto">
          Join now
        </Link>
      </div>
    </div>
  );
}
