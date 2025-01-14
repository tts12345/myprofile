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
    <section id="contact" className="bg-black">
      <div className="container max-auto min-h-screen py-9 bg-black">
        <div className="text-center m-10 text-5xl lg:text-6xl">
          <h3 className="font-bold">Contact Us</h3>
        </div>

        <div className="grid grid-col md:grid-cols-2 lg:grid-cols-3 py-10 gap-5">


          <div className="flex flex-col justify-center items-center m-10 p-6">
            <div className="">
              <Image src="/images/email.png" height={70} width={60} alt="picture logo" className=" h-15 w-15 p-4 border border-white rounded-xl" />
            </div>
            <div className="h-30 w-30 mt-3 py-2 text-center">
              <h3 className="text-xl text-gray-200">Email</h3>
              <p className="text-lg text-gray-400"></p>
              <p className="text-lg m-2 text-gray-400">prakashjje@gmail.com</p>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center m-10 p-8">
            <div className="">
              <Image src="/images/call.png" height={70} width={60} alt="picture logo" className=" h-15 w-15 p-4 border border-white rounded-xl" />
            </div>
            <div className="h-30 w-30 mt-3 py-2 text-center">
              <h3 className="text-xl text-gray-200">Mobile</h3>
              <p className="text-lg text-gray-400"></p>
              <p className="text-lg m-2 text-gray-400">+91-8709995158</p>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center m-10 p-8">
            <div className="">
              <Image src="/images/address.png" height={70} width={60} alt="picture logo" className=" h-15 w-15 p-4 border border-white rounded-xl" />
            </div>
            <div className="h-30 w-30 mt-3 py-2 text-center">
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
