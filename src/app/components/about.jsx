
import Image from "next/image";


const About = () => {
  return (
    <section id="about" className="bg-black  mx-10 -mt-1">
      <div className="container max-auto  p-5">
        <div className="flex flex-grow-0 flex-col pt-0 mb-8 justify-between items-center  ">
          <div className="">
            <Image src="/images/ph1.jpg" height={100} width={120} className="  m-0 shadow-xl  bg-red-400 rounded-full p-0 shadow-black" alt="image discription" />
          </div>
          <p  data-aos="zoom-inrun" className="text-xl text-center p-2 font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text "> 
             I am a programmer and working with <br />Technologies </p>  
        
      </div>
    </div>
    </section >

  );
};

export default About;
