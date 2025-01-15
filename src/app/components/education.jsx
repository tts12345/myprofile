import Image from "next/image";


function Education() {
  return (
    <div>
      <div className="container max-auto min-h-screen -mt-10 bg-black">
        <div className="text-center mt-10 text-5xl lg:text-6xl">
          <h3 className="font-bold">Education</h3>
        </div>

        <div className="grid grid-col md:grid-cols-2 lg:grid-cols-3 gap-5">


          <div  data-aos="fade-up" className="flex flex-row justify-center items-center mt-10 mx-2 p-4 shadow-md shadow-gray-400 rounded-lg hover:shadow-orange-600 duration-500">
            <div className="">
              <Image src="/images/brab1.jpg" height={200} width={200} alt="picture logo" className=" h-24 w-24 rounded-full p-4" />
            </div>
            <div className="h-30 w-30 mt-3 py-3 text-center">
              <h3 className="text-xl text-gray-200">Ph.D in Mathematics </h3>
              <p className="text-lg text-gray-400">BRABU,Muzaffarpur</p>
              <p className="text-sm text-gray-400">Pursuing</p>
            </div>
          </div>


          <div data-aos="fade-down" className="flex flex-row justify-center items-center mt-10 mx-2 p-4 shadow-md shadow-gray-400 rounded-lg hover:shadow-orange-600 duration-500">

            <div className="">

              <Image src="/images/brab1.jpg" height={200} width={200} alt="picture logo" className=" h-24 w-24 rounded-full p-4" />
            </div>
            <div className="h-30 w-30 mt-3 py-3 text-center ">
              <h3 className="text-xl text-gray-200">M.Phil in Mathematics</h3>
              <p className="text-lg text-gray-400">BRABU,Muzaffarpur</p>
              <p className="text-sm text-gray-400">2023 </p>


            </div>
          </div>
          <div data-aos="fade-right" className="flex flex-row justify-center items-center mt-10 mx-2 p-8 shadow-md shadow-gray-400 rounded-lg hover:shadow-orange-600 duration-500">

            <div className="">

              <Image src="/images/brab1.jpg" height={200} width={200} alt="picture logo" className=" h-24 w-24 rounded-full p-4" />
            </div>
            <div className="h-30 w-30 mt-3 py-3 text-center">
              <h3 className="text-xl text-gray-200">B.Ed in Mathematics</h3>
              <p className="text-lg text-gray-400">BRABU,Muzaffarpur</p>
              <p className="text-sm text-gray-400">2022 </p>
            </div>
          </div>
          <div data-aos="fade-left" className="flex flex-row justify-center mt-10 mx-2 p-8 shadow-md shadow-gray-400 rounded-lg hover:shadow-orange-600 duration-500">

            <div className="">

              <Image src="/images/ignou.jpg" height={200} width={200} alt="picture logo" className=" h-24 w-24 rounded-full p-4" />
            </div>
            <div className="h-30 w-30 mt-3 py-3 text-center">
              <h3 className="text-xl text-gray-200">MCA in Computer Science</h3>
              <p className="text-lg text-gray-400">IGNOU,New Delhi</p>
              <p className="text-sm text-gray-400">2014</p>


            </div>
          </div>
          <div data-aos="fade-up-right" className="flex flex-row justify-center mt-10 mx-2 p-8 shadow-md shadow-gray-400 rounded-lg hover:shadow-orange-600 duration-500">

            <div className="">

              <Image src="/images/brab1.jpg" height={200} width={200} alt="picture logo" className=" h-24 w-24 rounded-full p-4" />
            </div>
            <div className="h-30 w-30 mt-3 py-3 text-center">
              <h3 className="text-xl text-gray-200">M.Sc in Mathematics</h3>
              <p className="text-lg text-gray-400">BRABU,Muzaffarpur</p>
              <p className="text-sm text-gray-400">2010 </p>
            </div>
          </div>



          <div data-aos="fade-up-left" className=" my-10 mx-10 py-9 text-center border border-gray-800">
            <h3 className="text-xl text-gray-400">Professional Qualification</h3>
            <p className="text-lg text-gray-400">MCA from IGNOU</p>
            <p className="text-sm text-gray-400">New Delhi </p>
          </div>
        </div>


        <div data-aos="fade-down-left" className="m-17 p-9 text-center text-gray-400 bg-black">
          <h3 className="text-3xl"></h3>
          <p className="text-lg pb-10"></p>
        </div>


      </div>
    </div>

  )
}

export default Education