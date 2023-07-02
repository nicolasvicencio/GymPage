import Link from "next/link";
import React from "react";
import { RingsIcon, RunningIcon, WeigthBarIcon } from "../icons";

type Props = {};

export default function InfoSection({}: Props) {
  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row">
      <div className="w-full md:w-[50%] flex items-center justify-center p-16">
        <img
          src="/jumping.png"
          alt="jumping-girl"
          className="w-full h-full object-contain ml-10 p-16  lg:p-20"
        />
      </div>
      <div className="flex flex-col gap-8 p-20 justify-center md:w-[50%]">
        <div className="sm:mx-auto max-w-[80%]">
          <div className="flex gap-2 items-center pb-6">
            <WeigthBarIcon className="text-primary w-8 h-8" />
            <h3 className="info-title">Weight Training</h3>
          </div>
          <p className="info-data">
            From bodybuilding to powerlifting and everything in between, the
            Fitness Factory has the equipment to help you reach your goals. With
            dumbells up to 150lbs, 7 squat racks, 5 deadlift platforms, 2
            competition benches, and a variety of plate loaded and pin loaded
            machines, we have everything you need.{" "}
          </p>
        </div>
        <div className="sm:mx-auto max-w-[80%]">
          <div className="flex gap-2 items-center pb-6">
            <RunningIcon className="text-primary w-8 h-8" />
            <h3 className="info-title">General Fitness</h3>
          </div>
          <p className="info-data">
            If your goals are to improve your overall health and wellness, we
            have everything you need. We have cardio equipment spanning two
            floors including 8 stepmills, 15+ treadmills, row machines, exercise
            bikes, spin bikes, ellipticals, arc trainers and even a Jacob’s
            Ladder. In addition to cardio equipment, we have stretching areas
            with mats, foam rollers, bands, light weights, and much more.
          </p>
        </div>
        <div className="sm:mx-auto max-w-[80%]">
          <div className="flex gap-2 items-center pb-6">
            <RingsIcon className="text-primary w-8 h-8" />
            <h3 className="info-title">Functional Training</h3>
          </div>
          <p className="info-data">
            With 60 feet of turf with a sled, stackable plyometric boxes,
            weighted medicine balls, battle ropes, squat racks, and deadlift
            platforms our functional training room has all the equipment you
            need to take your training to the next level.
          </p>
        </div>

        <Link href="/" className="text-yellow-500 hover:text-yellow-600">
          Learn more about our products
        </Link>
      </div>
    </div>
  );
}
