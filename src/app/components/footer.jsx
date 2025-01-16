import { Roboto } from "next/font/google"

const roboto = Roboto({
  weight:["100","300","500","700","900"],
  subsets:["latin"],
  style:['italic','normal'],
  display:'swap'
})

function Footer() {
  return (
   // <div>Footer</div>
   <>
   <div className="bg-[#050606] h-28 flex items-center -mt-6">
   <h2 className="text-4xl font-bold text-blue-600 mb-4"></h2>
   <p className={`${roboto.className} text-lg max-w-xl text-center text-red-900 mx-auto`}>
     Created by <strong className="text-white text-pretty md:text-gray-300 text-xl font-bold font-mono">Prakash Kumar</strong>
   </p>
 </div>
 </>
  )
}

export default Footer