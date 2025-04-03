import Image from "next/image";
import Nexis from "@/assets/image/Nexis.png";
import { BsInstagram } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
import { AiFillYoutube } from "react-icons/ai";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="container mx-auto py-6 px-4 md:px-8">
      {/* Logo */}
      <div className="flex items-center justify-center h-[15rem] md:h-[20rem]">
        <Image
          src={Nexis}
          alt="Logo Brand Nexis"
          width={120}
          height={120}
          className="object-contain"
        />
      </div>

      {/* Copyright Section */}
      <div className="relative w-full max-w-4xl mx-auto">
        {/* Yellow Background */}
        <div className="absolute inset-x-0 top-0 mx-auto w-full h-[5rem] md:h-[3.5rem] bg-amber-300 z-10 rounded-3xl"></div>

        {/* Content */}
        <div className="relative flex flex-col md:flex-row items-center justify-between bg-black/80 py-4 px-6 md:px-8 rounded-3xl z-20 gap-4 w-full">
          <h6 className="text-white text-center text-xs md:text-sm">
            Copyright &copy; 2025, Made by Daffa Rihadatul Fairus
          </h6>
          <div className="flex items-center justify-center gap-4">
            <Link href="#" aria-label="Instagram">
              <BsInstagram
                className="text-white hover:scale-110 active:scale-100 cursor-pointer transition duration-150"
                size={25}
              />
            </Link>
            <Link href="#" aria-label="Twitter">
              <FaSquareXTwitter
                className="text-white hover:scale-110 active:scale-100 cursor-pointer transition duration-150"
                size={25}
              />
            </Link>
            <Link href="#" aria-label="YouTube">
              <AiFillYoutube
                className="text-white hover:scale-110 active:scale-100 cursor-pointer transition duration-150"
                size={25}
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
