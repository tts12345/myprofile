
import React from "react";

const Skills1 = () => {
  return (
    <section id="skills1" className="bg-black py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-xl text-white font-bold mb-4">Skills</h2>
        <div className="flex flex-wrap justify-center space-x-8">
          <div className="bg-blue-500 text-white p-4 rounded-lg">html</div>
          <div className="bg-green-500 text-white p-4 rounded-lg">CSS</div>
          <div className="bg-red-500 text-white p-4 rounded-lg">JavaScript</div>
          <div className="bg-yellow-500 text-white p-4 rounded-lg">React.js</div>
        </div>
        <a
          href="#"
          className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-700"
        >
          Click Me
        </a>
      </div>
    </section>
  );
};

export default Skills1;
