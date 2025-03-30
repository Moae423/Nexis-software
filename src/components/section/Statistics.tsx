import React from "react";
import { dataStatistics } from "@/data/data";

export default function Statistics() {
  return (
    <div className="w-[20rem] md:w-[40rem] lg:w-[78.5rem] h-[30rem] md:h-[11rem] lg:h-[7.8rem] bg-gray-600 -z-10 mx-auto my-8 flex items-center justify-center rounded-3xl">
      <div className="flex flex-col md:flex-row items-center gap-[2rem] md:gap-[5rem] lg:gap-[15rem] w-[18rem] md:w-[39rem] lg:w-[78rem] h-[28rem] md:h-[10rem] lg:h-[7.2rem] justify-center backdrop-blur-xl bg-black/30 p-8 rounded-3xl">
        {dataStatistics.map((item) => (
          <div
            key={item.id}
            className="flex items-center flex-col z-50 text-white"
          >
            <h1 className="text-3xl font-bold">{item.number}</h1>
            <p className="text-sm">{item.desription}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
