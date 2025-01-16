import Image from "next/image"

function Navigation() {
    return (
        <>
            <header>
                <section className="bg-black -mb-5">

                    <div className="w-full h-[135px] mx-auto">

                        

                        <div className="flex flex-row lg:flex-row-reverse w-full pb-2 ">
                            <div className="mx-3 py-3">
                                <Image src="/images/ph4.jpg"
                                    height={50} width={70}
                                    className="mx-5 shadow-sm opacity-65 bg-black rounded-full p-0  shadow-[#202314]" alt="image discription " />
                            </div>
                            <div className="flex flex-col py-6 -mx-1  ">
                                <h3 className="text-xl text-center font-bold italic bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text ">Prakash Kumar</h3>
                                <p className=" text-cyan-100  text-lg italic from-neutral-400 -mt-1 px-5 ">Programmer</p>
                            </div>
                        </div>

                    </div>

                </section>
            </header>
        </>

    )
}

export default Navigation