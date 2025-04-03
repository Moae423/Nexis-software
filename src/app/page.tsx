"use client";

import Homepage from "@/components/section/Homepage";
import Planner from "@/components/section/Planner";
import Statistics from "@/components/section/Statistics";
import Works from "@/components/section/Works";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion"; // Fix import, pakai framer-motion

export default function Home() {
  return (
    <div>
      {/* SECTION: Homepage */}
      <section
        id="homepage"
        className="bg-[#edf2f4] relative rounded-bl-none rounded-br-none lg:rounded-bl-[7rem] lg:rounded-br-[7rem] overflow-hidden"
      >
        <div className="container mx-auto px-4">
          <Homepage />
        </div>
      </section>

      {/* SECTION: Statistics */}
      <section id="statistics" className="bg-black text-white py-16 sm:py-20">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold">Our Wins</h2>
          <p className="text-gray-300 text-sm sm:text-base">
            We’ve been crushing it over the years! Check this out:
          </p>
          <Statistics />
        </motion.div>
      </section>

      {/* SECTION: Planning */}
      <section
        id="Planning"
        className="bg-[#edf2f4] min-h-screen py-16   relative rounded-tl-none rounded-tr-none lg:rounded-tl-[7rem] lg:rounded-tr-[7rem] lg:rounded-bl-[7rem] lg:rounded-br-[7rem]"
      >
        <div className="container mx-auto">
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center text-center sm:text-left justify-evenly py-6 sm:py-[3rem] gap-4 sm:gap-8"
          >
            <h1 className="text-2xl sm:text-4xl lg:text-5xl max-w-full sm:max-w-lg font-bold">
              Our Comprehensive Insurance Plans
            </h1>
            <p className=" max-w-full  lg:max-w-[30rem]  font-medium text-sm sm:text-base  lg:text-lg px-3 lg:px-0">
              At Nexis, we craft tailored insurance solutions designed to
              safeguard your future. Whether it’s your business, health, or
              assets, we provide comprehensive protection so you can focus on
              what truly matters. Join thousands who trust Nexis. Secure your
              tomorrow, today.
            </p>
          </motion.div>
          <Planner />
        </div>
      </section>

      {/* SECTION: Works */}
      <section id="Works" className="bg-black text-white py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* HEADER */}
            <div className="flex flex-col sm:flex-row items-center justify-between w-full text-center sm:text-left gap-6 sm:gap-0">
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold">
                Our Works
              </h1>
              <Button
                variant={"default"}
                className="w-full sm:w-[16rem] hover:scale-105 active:scale-95 transition-transform border cursor-pointer border-white"
              >
                <ArrowUpRight />
                Ready to level up your brand?
              </Button>
            </div>

            {/* CONTENT */}
            <Works />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
