"use client";

import ProfileGrid from "@/Grid/Profile";

export default function Home() {
  return (
    <div className="py-8 px-4 sm:px-8">
      {/* Top row: ProfileGrid, About, Portfolio */}
      <div className="flex flex-col lg:flex-row justify-center gap-8 min-h-[300px]">
        <div className="w-full lg:w-1/3">
          <ProfileGrid />
        </div>

        {/* About Section */}
        <div className="rounded-lg shadow-lg w-full lg:w-1/3 flex items-center justify-center text-center text-sm sm:text-base">
          <div>About</div>
        </div>

        {/* Portfolio Section */}
        <div className="rounded-lg shadow-lg w-full lg:w-1/3 flex items-center justify-center text-center text-sm sm:text-base">
          <div>Portfolio</div>
        </div>
      </div>

      {/* Bottom row: Education, Skills, Contact */}
      <div className="flex flex-col lg:flex-row justify-center gap-8 mt-8 min-h-[300px]">
        {/* Education Section */}
        <div className="rounded-lg shadow-lg w-full lg:w-1/3 flex items-center justify-center text-center text-sm sm:text-base">
          <div className="text-lg font-semibold">Education</div>
        </div>

        {/* Skills Section */}
        <div className="rounded-lg shadow-lg w-full lg:w-1/3 flex items-center justify-center text-center text-sm sm:text-base">
          <div className="text-lg font-semibold">Skills</div>
        </div>

        {/* Contact Section */}
        <div className="rounded-lg shadow-lg w-full lg:w-1/3 flex items-center justify-center text-center text-sm sm:text-base">
          <div className="text-lg font-semibold">Contact</div>
        </div>
      </div>
    </div>
  );
}
