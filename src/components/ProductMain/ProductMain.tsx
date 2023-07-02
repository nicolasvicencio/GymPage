import Link from "next/link";
import React from "react";

type Props = {};

export default function ProductMain({}: Props) {
  return (
    <div className="h-screen w-[80%] mx-auto flex items-center p-10 bg-gray-100">
      <div className="flex flex-col gap-8 p-10 flex-1">
        <h3 className="text-4xl font-semibold text-gray-600">
          Your body with{" "}
          <span className="text-primary">Maximun performance</span>
        </h3>
        <p className="text-gray-600">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
          officiis asperiores totam soluta reiciendis dignissimos cupiditate
          maiores dolorum ullam nihil quibusdam iure saepe ut laborum quis
          atque, qui quaerat cum.
        </p>

        <article className="flex w-full justify-between ">
          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-semibold text-gray-700">
              The Shake Bar
            </h4>
            <ul className="pl-4 text-sm ">
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
            <h4 className="text-lg font-semibold text-gray-700">
              Retail & Merchandise
            </h4>
            <ul className="pl-4 text-sm">
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
