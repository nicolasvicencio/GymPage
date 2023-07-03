import Link from "next/link";
import React from "react";

type Props = {};

export default function ProductMain({}: Props) {
  return (
    <div className="h-screen w-[80%] mx-auto flex items-center p-10 bg-white">
      <div className="flex flex-col gap-8 p-10 flex-1">
        <h3 className="text-4xl font-semibold text-gray-600">
          Your body with{" "}
          <span className="text-primary">Maximun performance</span>
        </h3>
        <p className="text-gray-600 text-md leading-2">
          Located conveniently within the Fitness Factory, stop by our shake bar
          for pre and post workout necessities including protein shakes made to
          order, protein bars and other snacks, as well as a wide array of
          supplements, to take home.
        </p>

        <article className="flex w-full gap-10">
          <div className="flex flex-col gap-4">
            <h4 className="text-md font-semibold text-gray-500">
              The Shake Bar
            </h4>
            <ul className="pl-4 text-sm flex flex-col gap-1">
              <li>Protein Shakes Made to Order</li>
              <li>Pre Workout Drinks & Powder</li>
              <li>BCAAs & EAAs</li>
              <li>Protein Bars & Other Snacks</li>
              <li>Bottled Water</li>
              <li>Energy Drinks</li>
              <li>Ready to Drink Protein</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-md font-semibold text-gray-500">
              Retail & Merchandise
            </h4>
            <ul className="pl-4 text-sm flex flex-col gap-1">
              <li>Protein Tubs</li>
              <li>Pre Workout</li>
              <li>Intra Workout</li>
              <li>Custom Apparel</li>
              <li>Shaker Bottles</li>
            </ul>
          </div>
        </article>
      </div>
      <div className="flex justify-center items-center w-[50%]">
        <img
          src="/protein-featured.png"
          alt="featured-product"
          className="w-4/5"
        />
      </div>
    </div>
  );
}
