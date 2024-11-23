"use client";
import CurrentGreeting from "@/components/Greeting";
import Image from "next/image";

export default function ProfileGrid() {
  return (
    <div className="flex justify-center gap-8 min-h-[300px]">
      <div className="rounded-lg shadow-lg w-full max-w-md flex flex-col items-center">
        {/* Current Greeting Section */}
        <div className="mb-4">
          <CurrentGreeting />
        </div>

        {/* Name Section */}
        <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6">
          Wafi Faisal Falah
        </div>

        {/* Profile Image and Background */}

        <div className="relative flex justify-center items-center ">
          <div className="relative bg-teal-400 h-[80px] w-[80px] sm:h-[100px] sm:w-[100px] md:h-[100px] md:w-[100px] rounded-full mt-4"></div>

          <div className="absolute z-10 items-center py-5">
            <Image
              src="/profile.png"
              alt="Profile"
              className="rounded-full transition-all duration-300 ease-in-out bw-to-color"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
