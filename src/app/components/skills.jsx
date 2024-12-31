
import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Skills</h2>
        <div className="flex flex-wrap justify-center space-x-8">
          <div className="bg-blue-500 text-white p-4 rounded-lg">html</div>
          <div className="bg-green-500 text-white p-4 rounded-lg">CSS</div>
          <div className="bg-red-500 text-white p-4 rounded-lg">JavaScript</div>
          <div className="bg-yellow-500 text-white p-4 rounded-lg">React.js</div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
