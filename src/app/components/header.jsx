
import Link from "next/link";
import React from "react";
import Image from "next/image";
const Header = () => {
  return (
    <header className=" bg-black text-white mt-1 " >
      <div className="container  mx-auto  w-full">
        <div className="flex flex-row  lg:flex-row-reverse w-full  ">
          <div className="mx-2 pt-1">
            <Image src="/images/ph1.jpg"
              height={50} width={70}
              className="  mx-5 shadow-xl  bg-red-400 rounded-full p-0 shadow-black" alt="image discription " />
          </div>
          <div className="flex flex-col py-8 -mx-1 ">
            <h3 className="text-xl text-center font-bold italic bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text ">Prakash Kumar</h3>
            <p className=" text-cyan-100  text-lg italic from-neutral-400 -mt-1 px-5 ">Programmer</p>

          </div>
        </div>
        {/* <nav>
          <ul className="flex space-x-6">
            <li><Link href="/about" className="hover:underline">About</Link></li>
            <li><a href="#projects" className="hover:underline">Projects</a></li>
            <li><Link href="/skills" className="hover:underline">Skills</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </nav> */}
      </div>
    </header>
  );
};

export default Header;
