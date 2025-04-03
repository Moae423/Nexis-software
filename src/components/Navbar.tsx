"use client";
// import { Menu } from "@/data/data";
import { Menu } from "@/data/data";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Logo from "@/assets/icon/logo2.png";
import Link from "next/link";
import { motion } from "motion/react";
const Navbar = () => {
  return (
    <motion.header
      initial={{ y: "-100%", opacity: 0 }}
      animate={{ y: "0  %", opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-4 left-0 right-0 w-full z-[999] "
    >
      <nav className=" flex bg-[#000000]/80 items-center justify-between mx-auto rounded-full  w-[20rem] md:w-[40rem] lg:w-[80rem] py-[0.4rem] px-[1rem] shadow-[0px_10px_10px_rgba(0,0,0,0.5)]">
        <Link href={"/"} className="hover:scale-105 transition duration-200">
          <div className="flex items-center gap-2 px-[1rem]">
            <Image
              src={Logo}
              alt="Logo Brand Nexis"
              width={40}
              height={40}
              // priority={true}
              loading="lazy"
              className="rounded-full "
            />
            <h1 className="text-2xl text-[#ffffff]">Nexis</h1>
          </div>
        </Link>
        <ul className="hidden lg:flex items-center gap-10">
          {Menu.map((item) => (
            <li key={item.id}>
              <Button
                key={item.id}
                variant="link"
                className="text-md hover:underline hover:font-bold hover:underline-offset-8 text-[#ffffff] font-medium"
              >
                <Link href={item.link} passHref>
                  {item.title}
                </Link>
              </Button>
            </li>
          ))}
        </ul>
        <Button
          variant={"outline"}
          className="cursor-pointer rounded-full bg-[#000000] text-[#ffffff] border-1 hover:scale-105 active:scale-95 hover:border-black hover:bg-[#ffffff] hover:text-[#000000]"
        >
          Get a Free Quote
        </Button>
      </nav>
    </motion.header>
  );
};

export default Navbar;
