"use client";

import Pan from "@/components/Pan";
import { useState } from "react";

export default function Pancakes() {
  const [totalBakedPancakes, setTotalBakedPancakes] = useState<number>(0);
  const [totalBurnedPancakes, setTotalBurnedPancakes] = useState<number>(0);
  const [gameOver, setGameOver] = useState<boolean>(false);

  const handleBakedPancakes = () => {
    setTotalBakedPancakes((prevCount) => prevCount + 1);
  };
  const handleBurnedPancakes = () => {
    setTotalBurnedPancakes((prevCount) => prevCount + 1);
    if (totalBurnedPancakes >= 10) {
      setGameOver(true); // Đặt gameOver thành true nếu số lượng bánh pancake bị cháy là 10 hoặc hơn
    }
  };
  

 

  return (
    <>
    {gameOver && (
                <div className="absolute inset-0 flex justify-center items-center text-4xl font-bold text-red-500 animate-pulse bg-yellow-300 z-20">
                    <a href="/Pancakes">
                        Game Over
                    </a>
                </div>

            )}
            <div className="text-red-500 ms-5">
          <h2>rule: bạn ko thể để bánh bị cháy hơn quá 10 cái</h2>
        </div>
    <a href="/" className="fixed m-5 z-30" >
        <button className=" text-gray-400 bg-fuchsia-950 px-4 py-2 hover:scale-75 hover:bg-pink-500" >
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
      

      <div className="grid grid-cols-5 gap-4 mt-5">
        {[...Array(10)].map((_, index) => (
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