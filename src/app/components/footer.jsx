import {Poppins} from 'next/font/google'

const poppins = Poppins({
  weight:["100","200","500","700","700"],
  subsets:["latin"],
  style:['italic','normal'],
  display:'swap'
})

function Footer() {
  return (
   // <div>Footer</div>
   <>
   <div className="bg-[#032122] h-20 flex items-center">
   <h2 className="text-4xl font-bold text-blue-600 mb-4"></h2>
   <p className={`${poppins.className} text-lg max-w-2xl text-center text-red-600 mx-auto`}>
     Created by <strong className="text-green-600 md:text-blue-800">Aditya Technology</strong>
   </p>
 </div>
 </>
  )
}

export default Footer