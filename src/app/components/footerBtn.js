// 'use client'

// export default function Footerbtn() {
//     return (
//       <div className="group flex border bg-gray-800 border-amber-100 rounded-full overflow-hidden">
//         <input
//           type="email"
//           placeholder="Your Email Here"
//           className="text-white px-3 py-1 rounded-full focus:outline-none w-full transition-all duration-300 group-hover:w-0 group-hover:opacity-0 group-hover:p-0"
//         />
//         <button className="bg-teal-500 hover:bg-yellow-600 rounded-full text-white px-3 m-1 py-1 transition-all duration-400 whitespace-nowrap group-hover:w-full">
//           Subscribe
//         </button>
//       </div>
//     )
//   }
// 'use client'



'use client'

export default function Footerbtn() {
  return (
    <div className="flex border w-3/6 md:w-4/5 lg:w-full  bg-gray-800 border-amber-100 rounded-full overflow-hidden relative h-10">
      <input
        type="email"
        placeholder="Your Email Here"
        className="text-white px-3 py-1 rounded-full focus:outline-none w-full transition-all duration-1000 ease-in-out peer-hover:w-0 peer-hover:opacity-0 peer-hover:p-0"
      />
      {/* <button className="bg-teal-500 hover:bg-yellow-600 rounded-full text-white px-3 py-1 transition-all duration-1000 ease-in-out whitespace-nowrap hover:w-full hover:absolute hover:inset-0 hover:m-0 hover:rounded-full peer">
        Subscribe
      </button> */}
      <button className="bg-teal-500 hover:bg-yellow-600 rounded-full text-white px-3 py-1 transition-all duration-1000 ease-in-out whitespace-nowrap hover:w-full hover:absolute hover:inset-0 hover:m-0 hover:rounded-full hover:scale-105 peer">
  Subscribe
</button>
    </div>
  );
}