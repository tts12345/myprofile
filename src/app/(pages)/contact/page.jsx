import Image from "next/image"

function page() {
  return (
    <div className="max-w-6xl mx-auto flex min-h-screen border border-red-600">
      <div className="flex flex-col-reverse w-full justify-between gap-5 lg:flex-row-reverse m-5 border border-green-800">

      <div className="w-full" >
        <div className="flex flex-col">
          <h2 className="text-4xl  bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">Contact</h2>

          <p className="text-2xl pl-4 my-7  text-indigo-300">Mobile:8709995158</p>
          <p className="text-2xl  text-indigo-300">Email:prakashjje@gmail.com</p>

        </div>

      </div>
      <div className="w-full mx-8 text-center overflow-hidden  ">
        <Image src="/images/me2.png" alt="picture" height={200} width={150} />
      </div>
      </div>
    </div>
  )
}

export default page