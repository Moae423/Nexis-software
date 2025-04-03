import Image from "next/image";
import FitnessApp from "@/assets/image/10183326_4345164.jpg";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Works = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
      <article className="min-h-[20rem] bg-gray-600/40 row-span-2 rounded-lg p-4 text-white ">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Fitness App</h2>
          <Button
            variant={"default"}
            className="hover:scale-105 active:scale-95 cursor-pointer"
          >
            Learn More
          </Button>
        </div>
        <div className="tag my-[2rem]">
          <p className="my-3">
            <strong>Category:</strong> Mobile App Development
          </p>
          <p className="my-3">
            <strong>Time Taken:</strong> 4 Months
          </p>
        </div>
        <p className="my-[3rem]">
          An all-in-one health & wellness app that makes fitness fun and
          effortless! Get personalized workout plans, nutrition guides, and
          on-demand virtual classes—all in one sleek interface. No more excuses,
          just pure gains!
        </p>
      </article>

      <article className="min-h-[10rem] bg-Putih/40 row-span-2 rounded-lg">
        <Image
          src={FitnessApp}
          alt="Fitness App"
          className="object-cover rounded-lg w-full h-full"
        />
      </article>
      <article className="min-h-[10rem] bg-gray-600/40 rounded-lg">
        <div className="p-4">
          <h1 className="text-3xl font-semibold text-white my-3">Tech Stack</h1>
          <div className="space-x-4">
            <Badge variant={"secondary"}>React Native</Badge>

            <Badge variant={"secondary"}>Supabase</Badge>
            <Badge variant={"secondary"}>Postgres</Badge>

            <Badge variant={"secondary"}>Redux</Badge>

            <Badge variant={"secondary"}>Expo</Badge>
          </div>
        </div>
      </article>
      <article className="min-h-[10rem] bg-gray-600/40 rounded-lg">
        <div className="p-4">
          <h1 className="text-2xl text-center font-semibold  text-white mb-[4rem]">
            Need A Solution for Your Business
          </h1>
          <Button
            variant={"default"}
            className="w-full bg-yellow-400 text-black font-semibold text-lg hover:bg-yellow-400 hover:scale-105 active:scale-100 cursor-pointer"
          >
            Contact Us
          </Button>
        </div>
      </article>
    </div>
  );
};
export default Works;
