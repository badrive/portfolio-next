"use client";
import React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "../../components/ui/canvas-reveal-effect";
import  react  from "../../components/imgs/react.png"
import  laravel  from "../../components/imgs/laravel.png"
// import { img } from "framer-motion/client";

export default function Home() {
    return (
        <>
        <h1 className="bg-black text-white text-center text-4xl font-bold p-5">Web Stack</h1>
          <div className="py-20 flex flex-col lg:flex-row items-center justify-center bg-black w-full gap-8 mx-auto px-8 text-center">
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
        </>
      );
    }
     
    const Card = ({
      title,
      icon,
      children,
    }: {
      title: string;
      icon: React.ReactNode;
      children?: React.ReactNode;
    }) => {
      const [hovered, setHovered] = React.useState(false);
      return (
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="border  group/canvas-card flex items-center justify-center border-white/[0.2]  max-w-sm w-[20rem]  p-4  h-[20rem] relative"
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
            <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
              {icon}
            </div>
            <h2 className="text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
              {title}
            </h2>
          </div>
        </div>
      );
    };
     
    const AceternityIcon = () => {
      return (
        <svg
          width="66"
          height="65"
          viewBox="0 0 66 65"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-white group-hover/canvas-card:text-white "
        >
          <path
            d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
            stroke="currentColor"
            strokeWidth="15"
            strokeMiterlimit="3.86874"
            strokeLinecap="round"
            style={{ mixBlendMode: "darken" }}
          />
        </svg>
      );
    };

    const Reactjs = () => {
        return (
        
        <Image
        src={react}
        alt="react"
        width={60}
        height={60}
        />
        );
      };

      const Laravel = () => {
        return (
        
        <Image
        src={laravel}
        alt="laravel"
        width={60}
        height={60}
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