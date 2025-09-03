import CommonContainer from "@/_components/shared/container/CommonContainer";
import backgroundImage from "@/assets/backgound.jpg";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function HeroSection() {
  return (
    <CommonContainer className="relative overflow-hidden flex items-center justify-center min-h-screen">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Hero Background"
          fill
          className="object-cover object-center"
          priority
          placeholder="blur"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 to-indigo-900/70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>

        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/5 animate-gradient-xy"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-8 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-contrast mb-6 ">
          Advanced{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Learning
          </span>{" "}
          Management System
        </h1>

        <p className="text-lg md:text-xl text-text-secondary mb-10 max-w-2xl ">
          Discover a modern platform designed to empower educators and engage
          students with interactive learning experiences.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center mb-16">
          <Link
            href="/login"
            className="group relative bg-gradient-to-r from-primary to-secondary text-text-contrast px-8 py-4 rounded-xl font-medium hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 inline-flex items-center justify-center overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              Get Started Now
              <IoIosArrowRoundForward className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>

          <Link
            href="/courses"
            className="group text-text-contrast hover:text-secondary font-medium inline-flex items-center justify-center px-6 py-4 rounded-xl backdrop-blur-sm bg-white/5 hover:bg-white/10 ring-1 ring-white/10 hover:ring-secondary/30 transition-all duration-300"
          >
            <span>Browse Courses</span>

            <IoIosArrowRoundForward className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Stats section */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-3xl text-white backdrop-blur-sm bg-white/5 rounded-2xl p-6 ring-1 ring-white/10">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">
              500+
            </div>
            <div className="text-sm text-gray-300 mt-2">Active Courses</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-secondary to-emerald-400">
              10K+
            </div>
            <div className="text-sm text-gray-300 mt-2">Happy Students</div>
          </div>
          <div className="text-center col-span-2 md:col-span-1">
            <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              98%
            </div>
            <div className="text-sm text-gray-300 mt-2">Success Rate</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </CommonContainer>
  );
}
