"use client";
// import Image from "next/image";
import Hero from "./sections/hero"
import Dock from "./sections/dock"
import Magnet from "./sections/magnet"
import Skills from "./sections/skills"

export default function Home() {
  return (
    <>
      <Dock />
      <Hero />
      <Magnet />
      <Skills />
    </>
  );
}
