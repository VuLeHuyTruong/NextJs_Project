"use client";

import Pan from "@/components/Pan";
import {  useState } from "react";

export default function Pancakes() {
  const [totalBakedPancakes, setTotalBakedPancakes] = useState<number>(0);
  const [totalBurnedPancakes, setTotalBurnedPancakes] = useState<number>(0);
  const [gameOver, setGameOver] = useState<boolean>(false);

  const handleBakedPancakes = () => {
    setTotalBakedPancakes((prevCount) => prevCount + 1);
  };
  const handleBurnedPancakes = () => {
    setTotalBurnedPancakes((prevCount) => prevCount + 1);
  };
  const check = () => {
    if (totalBurnedPancakes >= 10) {
      setGameOver(true);
      return; // Đặt gameOver thành true nếu số lượng bánh pancake bị cháy là 10 hoặc hơn
    }
  };
  const Pinterval = setInterval(check, 100);




  return (

    <>
      {gameOver && (
        <div className="absolute inset-0 flex justify-center items-center text-4xl font-bold text-red-500 animate-pulse bg-yellow-300 z-20">
          <a href="/Pancakes">
            Game Over
          </a>
        </div>

      )}
      <h2 className="flex flex-col items-center">🥞Pancakes Game🥞</h2>
      <div className="text-red-500 ms-5">
        <h2>rule: If you burn more than 10 cakes game is over</h2>
      </div>
      <a href="/" className="fixed m-5 z-30" >
        <button className=" animate-[wiggle_1s_ease-in-out_infinite] text-gray-400 bg-purple-700 px-4 py-2 hover:scale-75 hover:bg-pink-500 duration-500 border rounded-lg hover:brightness-150">

          HOME
        </button>
      </a>
      <div className="flex gap-5 justify-center">
        <div className="text-green-500">
          <h2>Baked cake: {totalBakedPancakes}</h2>
        </div>
        <div className="text-red-500">
          <h2>Burned cake: {totalBurnedPancakes}</h2>
        </div>

      </div>


      <div className="grid grid-cols-4 gap-4 mt-5">
        {[...Array(8)].map((_, index) => (
          <Pan
            key={index}
            onBakedPancake={handleBakedPancakes}
            onBurnedPancake={handleBurnedPancakes}
          />
        ))}
      </div>
    </>
  );
}
