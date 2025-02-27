"use client";
import React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import CanvasRevealEffect from "../../components/ui/canvas-reveal-effect";
import react from "../../components/imgs/react.png";
import laravel from "../../components/imgs/laravel.png";
import { SparklesCore } from "../../components/ui/sparkles";

export default function Home() {
  return (
    <>
      <div className=" w-full bg-black flex flex-col items-center justify-center overflow-hidden ">
      <h1 className=" text-4xl  font-bold text-center text-white relative z-20">
        Web Stack ⚡️
      </h1>
      <div className="w-[42rem] h-14 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
 
        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={400}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
 
        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>

      {/* <h1 className="bg-black text-white text-center text-4xl font-bold p-5">Web Stack ⚡️</h1> */}
      <div className="py-14 pb-48 flex flex-col lg:flex-row items-center justify-center bg-black w-full gap-8 mx-auto px-8 text-center">
        <Card title="React.js" icon={<Reactjs />}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
          />
        </Card>

        <Card title="Laravel" icon={<Laravel />}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[[255, 68, 0]]}
          />
        </Card>
      </div>
      {/* small cards  */}
      {/* <div className="py-14 flex flex-col lg:flex-row items-center justify-center bg-black w-full gap-8 mx-auto px-8 text-center">

        <Card title="Laravel" icon={<Laravel/>} height="10rem" width="10rem">
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[[255, 68, 0]]}
          />
        </Card>

        <Card title="Laravel" icon={<Laravel/>} height="10rem" width="10rem">
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[[255, 68, 0]]}
          />
        </Card>

        <Card title="Laravel" icon={<Laravel/>} height="10rem" width="10rem">
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[[255, 68, 0]]}
          />
        </Card>

        <Card title="Laravel" icon={<Laravel/>} height="10rem" width="10rem">
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[[255, 68, 0]]}
          />
        </Card>

        <Card title="Laravel" icon={<Laravel/>} height="10rem" width="10rem">
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[[255, 68, 0]]}
          />
        </Card>
      </div> */}
    </>
  );
}

const Card = ({
  title,
  icon,
  children,
  width = "15rem",
  height = "20rem",
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  width?: string;
  height?: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`border group/canvas-card flex items-center justify-center border-white/[0.2] max-w-sm p-4 relative`}
      style={{ width, height }}
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white " />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white k" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white " />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white " />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 mt-4 font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-8 transition duration-200">
          {title}
        </h2>
      </div>
    </div>
  );
};

const Reactjs = () => {
  return (
    <Image
      src={react}
      alt="react"
      width={65}
      height={65}
    />
  );
};

const Laravel = () => {
  return (
    <Image
      src={laravel}
      alt="laravel"
      width={65}
      height={65}
    />
  );
};

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}
export const Icon = ({ className, ...rest }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};