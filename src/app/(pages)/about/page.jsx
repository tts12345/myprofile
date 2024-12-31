
import { Roboto } from "next/font/google"
import Image from "next/image"


const roboto = Roboto({
  weight: ["100", "300", "700"],
  subsets: ["latin"]
})
function page() {
  return (
    <div className="max-w-6xl mx-auto flex min-h-screen">
     {/* <div className="container  "> */}
      <div className="mx-5 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center h-[300px]  justify-between w-full text-white">
          <div className="w-full">
            <h1 className={`text-4xl lg:text-5xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text ${roboto.className} font-bold`}>About Me</h1>
            <p className="my-3 text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque inventore voluptatem, aut quibusdam distinctio optio dicta a illo ad sit, placeat omnis quod rem cum unde? Aliquam perferendis sapiente ullam.
            </p>
          </div>
          <div className="w-full  text-center  overflow-hidden ">
            <Image src="/images/me.svg" alt="" height={200} width={200} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default page