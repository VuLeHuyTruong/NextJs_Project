
import Image from "next/image";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-row p-24 ">

      <a href="/Snake">
        <button className="h-20 mr-20 bg-gray-950 text-gray-400 border border-gray-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
          <span className="bg-gray-400 shadow-gray-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
          Snake Game 🐍
        </button>
      </a>

      <a href="/Pancakes" className="">
        <button className="h-20 mr-20 bg-gray-700 text-gray-400 border rounded-full border-gray-400  border-b-4 px-4 py-2 hover:scale-110 hover:text-gray-100 hover:bg-red-500 transition duration-500 ">
          Pancakes Game 🥞
        </button>
      </a>


      <a href="/Memory_Game" className="">
        <button className="h-20 mr-20 bg-gray-700 text-gray-400 border rounded-full border-gray-400  border-b-4 px-4 py-2 hover:scale-110 hover:text-gray-100 hover:bg-red-500 transition duration-500">
          Memory Game 🧠
        </button>
      </a>

    </main>
  );
}


