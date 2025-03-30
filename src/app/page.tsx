"use client";

import Homepage from "@/components/section/Homepage";
import Planner from "@/components/section/Planner";
import Statistics from "@/components/section/Statistics";
import { motion } from "motion/react";

export default function Home() {
  return (
    <div className="">
      <section
        id="homepage"
        className="bg-[#edf2f4] relative rounded-bl-none rounded-br-none lg:rounded-bl-[7rem] lg:rounded-br-[7rem] "
      >
        <div className="container mx-auto px-4">
          <Homepage />
        </div>
      </section>
      <section id="statistics" className="bg-black text-white py-20 ">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold">Our Wins</h2>
          <p className="text-gray-300">
            We’ve been crushing it over the years! Check this out:
          </p>
          <Statistics />
        </div>
      </section>
      <section id="Planning" className="bg-[#edf2f4] h-[40rem]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-evenly py-[3rem] gap-8"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl max-w-lg font-bold">
              Our Comprehensive Insurance Plans
            </h1>
            <p className="max-w-[40rem] font-medium text-xs md:text-sm lg:text-lg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
              voluptatum ad, tenetur tempora sunt atque facere iusto amet! Vero
              repellendus expedita fuga non explicabo doloribus, libero
              consequatur delectus debitis dignissimos!
            </p>
          </motion.div>
          <Planner />
        </div>
      </section>
    </div>
  );
}
