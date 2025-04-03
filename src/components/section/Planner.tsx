"use client";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { motion } from "motion/react";
import { dataPlanner } from "@/data/data";

const Planner = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[3rem] auto-rows-auto w-full overflow-hidden">
      {dataPlanner.map((item) => (
        <motion.div
          key={item.id}
          initial={
            item.position === "left"
              ? { x: "-100%", opacity: 0 }
              : { x: "100%", opacity: 0 }
          }
          whileInView={{ x: "0%", opacity: 1 }}
          transition={{ duration: 0.8 }}
          className={`flex flex-col lg:flex-row mx-auto  items-center justify-between w-[20rem] md:w-[40rem] h-[20rem] rounded-3xl my-3 drop-shadow-[-2px_5px_0px_rgba(0,0,0,2)] ${
            item.id === 1 || item.id === 4
              ? "bg-gray-200"
              : item.id === 2
              ? "bg-yellow-400"
              : "bg-black"
          } `}
        >
          <div className="flex flex-col h-full  p-[1rem]   justify-evenly">
            <h1
              className={`text-4xl font-semibold ${
                item.id === 3 || item.id === 2
                  ? "bg-gray-200"
                  : item.id === 1 || item.id === 4
                  ? "bg-yellow-400"
                  : "bg-black"
              }`}
            >
              {item.title}
            </h1>
            <Button
              variant={"default"}
              className="max-w-[10rem] hover:-translate-1 active:translate-1 cursor-pointer border-white border-1"
            >
              <ArrowUpRight size={20} />
              {item.buttonData}
            </Button>
          </div>
          <Image
            src={item.image}
            alt="code"
            width={300}
            height={300}
            className="hidden md:block"
          />
        </motion.div>
      ))}
    </div>
  );
};
export default Planner;
