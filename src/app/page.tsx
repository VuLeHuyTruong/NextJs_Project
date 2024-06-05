
import Image from "next/image";


export default function Home() {
  return (
    <main className="flex min-h-screen justify-center flex-col bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="text-center text-4xl font-bold animate-colors">Mini Games</div>
      <div className="flex justify-center flex-row p-24 ">

        {/* <a href="/Snake" className="h-20 m-20">
        <button className="h-20 bg-gray-950 text-gray-400 border border-gray-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-2xl hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
          <span className="bg-gray-400 shadow-gray-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
          Snake Game 🐍 
        </button>
      </a> */}

        {/* <a href="/Pancakes" className="">
        <button className="h-20 m-20 bg-gray-700 text-gray-400 border rounded-full border-gray-400  border-b-4 px-4 py-2 hover:scale-110 hover:text-gray-100 hover:bg-red-500 transition duration-500 ">
          Pancakes Game 🥞
        </button>
      </a> */}
        <a href="/Snake" className=" relative text-center m-20 h-20 hover:scale-110 transition duration-500 hover:brightness-150 active:opacity-75 font-bold duration-300 group">
          <Image
            src='/images/snake.png'
            alt="snake"
            width={70} height={70} quality={100}
            className="object-cover border rounded-lg	 ms-7 group-hover:animate-wiggleSnake transition"
          />
          <p>Snake Game 🐍 </p>
        </a>

        <a href="/Pancakes" className="text-center m-20 h-20 hover:scale-110 transition group duration-500 hover:brightness-150 ">
          {/* <button className="h-20 mr-20 bg-gray-700 text-gray-400 border rounded-full border-gray-400  border-b-4 px-4 py-2 hover:scale-110 hover:text-gray-100 hover:bg-red-500 transition duration-500 ">
          Pancakes Game 🥞
        </button> */}
          <Image
            src='/images/Pancakes.png'
            alt="Pancakes"
            width={70} height={70} quality={100}
            className="object-cover border rounded-lg ms-9 group-hover:animate-bounce transition"
          />
          <p>Pancakes Game 🥞 </p>
        </a>



        <a href="/Memory_Game" className="text-center m-20 h-20 hover:scale-110 transition duration-500 hover:brightness-150 group">

          <Image
            src='/images/MemoryCard.png'
            alt="Memory"
            width={70} height={70} quality={100}
            className="object-cover border rounded-lg ms-9 group-hover:animate-flip transition"
          />
          <p>Memory Game 🧠 </p>
        </a>

        {/* <a href="/Memory_Game" className="m-20 h-20">
        <button className="h-20  bg-gray-700 text-gray-400 border rounded-full border-gray-400  border-b-4 px-4 py-2 hover:scale-110 hover:text-gray-100 hover:bg-red-500 transition duration-500">
          Memory Game 🧠
        </button>
      </a> */}
      </div>
    </main>
  );
}


