import Image from "next/image";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-row p-24 ">

      <a href="/Snake">
        <div className="bg-yellow-500 w-20 h-20 mr-20 rounded-lg flex items-center justify-center">
        Snake
        </div>
      </a>

      <a href="/Snake" className="">
        <div className="bg-yellow-500 w-20 h-20 mr-20 rounded-lg"></div>
      </a>
      
      <a href="/Snake" className="">
        <div className="bg-yellow-500 w-20 h-20 mr-20 rounded-lg"></div>
      </a>
      
    </main>
  );
}
