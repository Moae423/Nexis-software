import { Navmenu } from "@/data/data";
import { Button } from "./ui/button";
const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-[999]">
      {/* Background untuk efek transparan */}
      <div className="bg-emerald-500/90 w-full h-[4rem] absolute -z-10"></div>

      <nav className="flex bg-emerald-500 items-center justify-between py-[1rem] px-[10rem]">
        <h1>Logo</h1>
        <ul className="flex items-center gap-5">
          {Navmenu.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
        <Button
          variant={"default"}
          className="cursor-pointer hover:scale-105 active:scale-95"
        >
          Contact Us
        </Button>
      </nav>
    </header>
  );
};

export default Header;
