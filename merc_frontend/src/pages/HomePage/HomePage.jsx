import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Hero from "../../components/Hero/Hero";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <div className="w-full flex justify-center items-center">
      <Hero />
      </div>
    </>
  );
}
