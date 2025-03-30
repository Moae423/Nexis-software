"use client";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import code from "@/assets/image/Software code testing-cuate.png";
import Image from "next/image";
import { motion } from "motion/react";

const Planner = () => {
  return (
    <div className="grid grid-rows-2 grid-cols-2 gap-4">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between w-[40rem] h-[20rem] bg-gray-200 rounded-3xl my-3 drop-shadow-[-2px_5px_0px_rgba(0,0,0,2)] "
      >
        <div className="flex flex-col h-full  p-[1rem]   justify-evenly">
          <h1 className="text-4xl bg-yellow-400 font-semibold">
            Custom Software Development
          </h1>
          <Button variant={"default"} className="max-w-[10rem]">
            <ArrowUpRight size={20} />
            Learn More
          </Button>
        </div>
        <Image src={code} alt="code" width={300} height={300} />
      </motion.div>
    </div>
  );
};
export default Planner;
