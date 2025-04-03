import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import gambar from "@/assets/image/Team work-bro (1).png";
import { motion } from "framer-motion";
const Homepage = () => {
  return (
    <section id="homepage" className="bg-[#edf2f4]  ">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center min-h-screen justify-center gap-[1rem] md:gap-[3rem] px-6 md:px-12 w-full overflow-hidden ">
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: "0%", opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col  max-w-md md:max-w-lg  lg:max-w-xl text-center md:text-start"
        >
          <h1 className="text-xs  my-3 font-medium">
            Meningkatkan efisiensi dan produktivitas
          </h1>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold my-2">
            Membangun Solusi Digital Berkualitas Dunia
          </h2>
          <p className="md:text-base text-sm">
            Tim ahli kami menghadirkan teknologi inovatif untuk membantu Anda
            mengoptimalkan operasi, meningkatkan interaksi pelanggan, dan
            mendorong pertumbuhan bisnis yang berkelanjutan.
          </p>
          <div className="flex justify-center md:justify-start my-3 gap-4">
            <Button
              variant={"default"}
              className=" bg-yellow-400 border-2 border-black hover:bg-yellow-400 hover:-translate-1 active:-translate-1 lg:active:translate-1 text-black font-semibold px-6 py-3 rounded-lg drop-shadow-[4px_4px_rgba(0,0,0,1)] cursor-pointer transition-all duration-150"
            >
              Get Started
            </Button>
            <Button className="bg-[#fdf0d5] hover:bg-yellow-400 border-2 border-black hover:-translate-1 active:-translate-1  lg:active:translate-1 text-black font-semibold px-6 py-3 rounded-lg drop-shadow-[4px_4px_rgba(0,0,0,1)] cursor-pointer transition-all duration-300">
              See Our Work
            </Button>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <Image
            src={gambar}
            alt="gambar pekerja"
            quality={90}
            className="w-full  sm:w-[30rem] md:w-[40rem]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Homepage;
