import Image from "next/image"

function Technology() {
    return (
        <div>
            <section className="bg-black -mt-0">
                <div className="container mx-auto min-h-screen py-5 items-center">
                    <div className="m-3 grid grid-cols-1 md:grid-cols-2 gap-7">
                        <div className="font-bold">
                            <h3 className="text-orange-500 text-5xl mb-3 px-2 py-8 lg:text-6xl">Technology</h3>
                            <p className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text  text-3xl text-center uppercase pl-3 mb-6 py-5 lg:text-5xl">
                                Innovation by transforming ideas</p>
                            {/* <p className="text-gray-200 text-3xl text-center uppercase mb-5 px-6 py-4">
                            ideas into practical solutions</p> */}
                            <p className="text-gray-200 text-xl text-center uppercase lg:text-2xl">
                                Enhancing efficiency and connectivity</p>
                            <p className="text-gray-200 text-xl text-center ">
                                in all aspects of life.
                            </p>

                        </div>

                        <div>

                            <Image src="/images/technology.svg" height={200} width={300} alt="no image found" data-aos="fade-up-left" className="h-[500px] w-[500px] ml-2 mt-8" />

                        </div>

                    </div>

                </div>
            </section>
        </div>
    )
}

export default Technology