import React from "react";
import image from "../michael-dziedzic-unsplash.jpg";

export default function Home() {
  return (
    <main>
      <img
        src={image}
        alt='Sphere with prism'
        className='absolute object-cover w-screen h-full'
      />
      <section className='relative flex justify-center min-h-screen pt-12 sm:pt-24 md:pt-36 lg:pt-48 px-8'>
        <h1 className='text-3xl md:text-6xl lg:text-9xl text-green-100 font-bold leading-none lg:leading-snug '>
          Hey, I'm Keagan!
        </h1>
      </section>
    </main>
  );
}
