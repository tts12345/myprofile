
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-gray-100 ">
      <div className="flex justify-center bg-indigo-300 ">
      <Image src= "/images/p1.jpg" height={200} width={300}  className="h-48 w-48 rounded-full" alt="image discription"  />
      </div>
      <div className="container mx-auto my-4 text-center">
        <h2 className="text-4xl font-bold text-blue-600   mb-4">About Me</h2>
        <p className="text-lg max-w-2xl text-red-600 mx-auto">
          I am a programmer for creating beautiful, responsive websites. I love working with modern technologies like React.js and Tailwind CSS.
        </p>
      </div>
    </section>
  );
};

export default About;
