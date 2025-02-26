"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../../components/ui/hero-highlight";

export default function Home() {
  return (
    <>
    {/* background first section */}
    <div className="h-[100vh] w-full bg-black bg-grid-white/[0.2] relative flex items-center justify-center">
    <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

    
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-white max-w-4xl leading-relaxed lg:leading-snug  mx-auto"
      >
        Hi,😁<br /> I&apos;m Badreddine Faras <br />
        {" "}
        <Highlight className="text-white">
          comming soon ...
        </Highlight>
      </motion.h1>
    </HeroHighlight>
    </div>

    
    </>
  );
}