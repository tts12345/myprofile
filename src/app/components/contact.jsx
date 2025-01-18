'use client'
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "next/image";
const Contact = () => {

  useEffect(() => {
    Aos.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <section id="contact" className="bg-black -mt-12 border border-white">
      <div className="container mx-auto min-h-screen items-center bg-black">
        <div className="text-center mt-12 py-14 text-5xl lg:text-6xl">
          <h3 className="font-bold">Contact Us</h3>
        </div>

        <div className="grid grid-cols-1 my-6 py-4 gap-5 md:grid-cols-2 lg:grid-cols-3">


          <div className="flex flex-col justify-center items-center m-10 py-5">
            <div className="">
              <Image src="/images/email.png" height={70} width={60} alt="picture logo" className=" h-15 w-15 p-4  rounded-2xl shadow-sm shadow-gray-400" />
            </div>
            <div className="mt-3 py-2 text-center">
              <h3 className="text-xl text-gray-200">Email</h3>
              <p className="text-lg text-gray-400"></p>
              <p className="text-lg m-2 text-gray-400">prakashjje@gmail.com</p>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center m-10 p-5">
            <div className="">
              <Image src="/images/call.png" height={70} width={60} alt="picture logo" className=" h-15 w-15 p-4  rounded-2xl shadow-sm shadow-gray-400" />
            </div>
            <div className="mt-3 py-2 text-center">
              <h3 className="text-xl text-gray-200">Mobile</h3>
              <p className="text-lg text-gray-400"></p>
              <p className="text-lg m-2 text-gray-400">+91-8709995158</p>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center m-10 p-5">
            <div className="">
              <Image src="/images/address.png" height={70} width={60} alt="picture logo" className=" h-15 w-15 p-4  rounded-2xl shadow-sm shadow-gray-400" />
            </div>
            <div className="mt-3 py-2 text-center">
              <h3 className="text-xl text-gray-200">Address</h3>
              <p className="text-lg text-gray-400"></p>
              <p className="text-lg text-gray-400">Muzaffarpur,Bihar<br />India-842001</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
