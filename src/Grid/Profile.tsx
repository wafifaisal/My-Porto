import CurrentGreeting from "@/components/Greeting";
import Image from "next/image";

export default function ProfileGrid() {
  return (
    <div className="flex justify-center gap-8 min-h-[300px]  relative">
      <div className="rounded-lg shadow-lg w-full max-w-md flex flex-col items-center">
        {/* Current Greeting Section */}
        <div className="mb-4">
          <CurrentGreeting />
        </div>

        {/* Name Section */}
        <div className="text-4xl sm:text-3xl md:text-4xl font-extrabold text-center mb-6">
          Wafi Faisal Falah
        </div>

        {/* Profile Image and Background */}
        <div className="relative mt-4 flex justify-center">
          {/* Decorative Background */}
          <div className="absolute bg-teal-400 h-[100px] w-[100px] sm:h-[100px] sm:w-[100px] md:h-[100px] md:w-[100px] rounded-full z-0 top-10 "></div>

          {/* Profile Image */}
          <div className="relative z-10">
            <Image
              src="/profile.png"
              alt="Profile"
              className="rounded-full  shadow-md transition-all duration-300 ease-in-out top-1"
              width={101}
              height={101}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
