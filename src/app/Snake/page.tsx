import SnakeGrid from "@/components/SnakeGrid";
import Image from "next/image";


export default function Snake() {
  return (
    <main className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <a href="/" className="fixed m-5 z-30" >
        <button className="border cursor-pointer uppercase bg-white px-4 py-2 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#F44336,-0.5rem_-0.5rem_#00BCD4] transition" >
          HOME
        </button>
        

      </a>
      <div className="flex min-h-screen flex-col items-center p-24">
        <h1 className="font-bold animate-bounce">🐍-SNAKE GAME-🐍</h1>
        <SnakeGrid />
      </div>
    </main>
  );
}
