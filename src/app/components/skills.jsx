import Image from "next/image";
import Aos from "aos";
const Skills = () => {
  return (
    <section id="skills" className="bg-black -mt-10 py-10">

      <div className="container mx-auto min-h-screen">
        <div className="py-6 text-center">
          <h2 data-aos="fade-up" className="text-5xl lg:text-6xl font-bold py-6">Skills</h2>
          <p data-aos="fade-down" className="text-gray-400 text-3xl">Involves knowing <br />
            <strong className="text-2xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text" > The syntax,logic and structures</strong>

          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10 p-7">
          <div data-aos="fade-up" className="bg-black mt-8 p-4 rouded-full border border-cyan-50 border-t-0 hover:border-orange-400 ">
            <h3 className="text-left text-xl text-orange-500 font-bold ml-4 pt-2 uppercase">Html</h3>
            <div className="flex justify-center mb-3">
              <Image src="/images/ht2.png" height={200} width={200} className="h-20 w-20  overflow-auto rounded-full shadow-sm shadow-gray-600 hover:shadow-gray-400 duration-300" alt="image discription" />
            </div>
            <p className="text-gray-500 text-center">
              It is used to structure content on the web.
              HTML elements are enclosed in tags.
              The foundation of every webpage on the internet.
              HTML documents can embed multimedia like videos and audio.
            </p>
          </div>
          <div data-aos="fade-down" className="bg-black mt-8 p-4 shadow-lg border  border-cyan-50 border-t-0  hover:border-orange-400 ">
            <h3 className="text-left text-xl text-orange-500 font-bold ml-4 pt-2 uppercase">Css</h3>
            <div className="flex justify-center mb-3">

              <Image src="/images/c12.png" height={200} width={200} className="h-20 w-20  overflow-auto " alt="image discription" />
            </div>
            <p className="text-gray-500 text-center">

              It is used to style the layout of a webpage.
              CSS defines colors, fonts, and spacing for HTML elements.
              Styles are applied using selectors.
              CSS can be written in an external and internal file.
            </p>
          </div>
          <div data-aos="fade-up-right" className="bg-black mt-8 p-4 shadow-lg border border-cyan-50 border-t-0  hover:border-orange-400 items-center">
            <h3 className="text-left text-xl text-orange-500 font-bold ml-4 pt-2 uppercase">js</h3>
            <div className="flex justify-center mb-3">
              <Image src="/images/jp1.png" height={200} width={200} className="h-20 w-20  overflow-auto " alt="image discription" />
            </div>
            <p className="text-gray-500 text-center">

              Programming language used for web development.
              It allows you to add interactivity to webpages.
              JavaScript code can be written inside  tags or in external files.
              It supports functions, variables, loops, and conditional statements.
            </p>
          </div>
          <div data-aos="fade-down-left" className="bg-black mt-8 p-4  shadow-lg border  border-cyan-50 border-t-0  hover:border-orange-400 ">
            <h3 className="text-left text-xl font-bold text-orange-500 ml-4 pt-2 uppercase">React</h3>
            <div className="flex justify-center mb-3">
              <Image src="/images/rt1.png" height={200} width={200} className="h-20 w-20  overflow-auto" alt="image discription" />
            </div>
            <p className="text-gray-500 text-center">


              It uses components to create reusable and modular code.
              React allows you to manage state and handle user interactions.

              React efficiently updates the DOM with a virtual DOM to improve performance.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
