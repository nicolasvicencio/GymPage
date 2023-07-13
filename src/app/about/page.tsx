import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <div className="w-[70%] mx-auto">
      <header className="min-h-[30vh] w-full">
        <div className="about_header">
          <div className="flex justify-center items-center h-full ">
            <h1 className="text-4xl text-white">About us</h1>
          </div>
        </div>
      </header>
      <section className=" flex flex-col gap-6 my-20">
        <h2 className="text-gray-700 text-4xl font-bold">
          ABOUT THE <span className="text-primary">IRON SUPPLEMENTS</span>
        </h2>
        <h3 className="text-gray-700 text-2xl">
          Fitness - Bodybuilding - Powerlifting
        </h3>
        <p className="text-gray-600">
          The Fitness Factory is a 24/7, multi-level facility that houses an
          expansive selection of equipment, resources for a complete wellness
          experience. We provide a friendly, welcoming atmosphere for all
          members for all fitness levels from beginners to the PRO athletes.
          Whether your passion is, cardio, weight training, bodybuilding,
          powerlifting, CrossFit, or functional training; we have all the
          equipment and necessary machines you need for results.
        </p>
        <p className="text-gray-600">Come train with us!</p>
      </section>
      <section>
        <h3 className="text-gray-700 text-2xl text-semibold">
          Our Facility Features
        </h3>
        <div className="flex gap-6">
          <ul className="my-6 ml-6 text-gray-500 text-lg">
            <li>Over 18,000 square feet of space</li>
            <li>Locker rooms with private showers and day lockers</li>
            <li>60 feet of turf for sleds</li>
            <li>Two levels of cardio equipment</li>
          </ul>
          <ul className="my-6 ml-6 text-gray-500 text-lg">
            <li>Dumbbells up to 150 lbs</li>
            <li>Hammer Strength plate loaded equipment</li>
            <li>Pin loaded weight training machines</li>
            <li>7 squat racks</li>
            <li>4 deadlift platforms with bumper plates</li>
            <li>Rogue Glute Hamstring Developer</li>
          </ul>
        </div>
      </section>
      <section className="mt-20 flex gap-6">
        <div className="w-[70%] flex flex-col gap-6">
          <h2 className="text-gray-700 text-4xl font-bold">
            THE <span className="text-primary">IRON ROUTINES</span>
          </h2>
          <p className="text-gray-600">
            The Supplement Factory is your source for nutrition and supplements.
            We have your nutrition needs covered including protein shakes made
            to order, protein bars and other snacks, as well as a wide array of
            supplements, to take home.
          </p>
          <div className="flex gap-6">
            <ul className="my-6 ml-6 text-gray-500 text-lg ">
              <li>Dumbbells up to 150 lbs</li>
              <li>Hammer Strength plate loaded equipment</li>
              <li>Pin loaded weight training machines</li>
              <li>7 squat racks</li>
              <li>4 deadlift platforms with bumper plates</li>
              <li>Rogue Glute Hamstring Developer</li>
            </ul>
            <ul className="my-6 ml-6 text-gray-500 text-lg">
              <li>Over 18,000 square feet of space</li>
              <li>Locker rooms with private showers and day lockers</li>
              <li>Two levels of cardio equipment</li>
              <li>60 feet of turf for sleds</li>
            </ul>
          </div>
        </div>
        <div className="w-[30%]">
          <img
            src="/dumbell-girl.png"
            alt=""
            className="object-contain mx-auto"
          />
        </div>
      </section>
    </div>
  );
}
