import Link from "next/link";
import React from "react";

type Props = {};

export default function Contact({}: Props) {
  return (
    <div className="contact_img p-20 ">
      <section className="w-full min-h-full  ">
        <section className="w-[50%] flex flex-col gap-4 items-center justify-center min-h-full ">
          <h4 className="text-gray-400 text-5xl">
            YOUR FITNESS STARTS HERE SAVE TIME AND SIGN UP{" "}
            <span className="text-primary">ONLINE </span>
          </h4>
          <Link
            href="/"
            className="bg-primary text-white px-6 py-4 rounded-full"
          >
            Become a Member
          </Link>
        </section>
      </section>
    </div>
  );
}
