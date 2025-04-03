import Image from "next/image";
import Nexis from "@/assets/image/Nexis.png";
import { BsInstagram } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
import { AiFillYoutube } from "react-icons/ai";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="container mx-auto py-[1rem]">
      <div className="flex items-center justify-center h-[20rem]">
        <Image
          src={Nexis}
          alt="Logo Brand Nexis"
          width={150}
          height={150}
          className="object-cover"
        />
      </div>
      {/* Bagian copyright dengan background kuning sebagai posisi relatif */}
      <div className="relative">
        {/* Background kuning yang diposisikan absolut */}
        <div className="absolute top-0 left-0 w-full h-[3.55rem] bg-amber-300 z-10 rounded-4xl"></div>

        {/* Konten copyright yang berada di atas dengan z-index lebih tinggi */}
        <div className="relative flex items-center justify-between bg-[#000000]/80 py-4 px-8 z-20">
          <h1 className="text-white">
            Copyrights 2025, Made by Daffa Rihadatul Fairus
          </h1>
          <div className="flex items-center justify-center gap-3">
            <Link href="">
              <BsInstagram
                className="text-white hover:scale-110 active:scale-100 cursor-pointer transition duration-150"
                size={25}
              />
            </Link>
            <FaSquareXTwitter
              className="text-white hover:scale-110 active:scale-100 cursor-pointer transition duration-150"
              size={25}
            />
            <AiFillYoutube
              className="text-white hover:scale-110 active:scale-100 cursor-pointer transition duration-150"
              size={25}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
