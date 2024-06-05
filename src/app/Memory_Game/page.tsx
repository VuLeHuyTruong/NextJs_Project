"use client";

import Image from "next/image";
import { useEffect, useState } from "react";


const generateDeck = () => {
    const memoryCards = [
        "cheems",
        "sad-thumbs-up-cat",
        "hamster",
        "monkeyrizz",
        "olli-the-polite-cat",
        "orangutan_square",
        "sad_hamster",
        "smile_corgi",
    ];

    const deck = [...memoryCards, ...memoryCards];
    return deck.sort(() => Math.random() - 0.5);
}

export default function MemoryGame() {
    const [cards, setCards] = useState<string[]>(generateDeck());
    const [flipped, setFlipped] = useState<number[]>([]);
    const [solved, setSolved] = useState<number[]>([]);

    useEffect(() => {
        const checkForMatch = () => {
            const [first, second] = flipped;
            if (cards[first] == cards[second]) {
                setSolved([...solved, ...flipped]);
            }
            setFlipped([]);
        };

        if (flipped.length == 2) {
            setTimeout(() => {
                checkForMatch();

            }, 1000);
        }

    }, [cards, flipped, solved]);

    const handleClick = (index: number) => {
        if (!flipped.includes(index) && flipped.length < 2) {

            setFlipped([...flipped, index]);
        }
    }

    const gameOver = solved.length == cards.length;

    const resetGame = () => {
        setCards(generateDeck());
        setFlipped([]);
        setSolved([]);
    };

        return <div className="text-center ">
         <a href="/" className="flex rounded-md mt-5" >
        <button className=" text-gray-400 bg-slate-500 px-4 py-2 hover:scale-75 rounded-md" >
        HOME
        </button>
        
      </a>
        <h1>MEMORY GAME</h1>
        {gameOver && (<h2 className="p-5">🎉🎉🎉 YOU WON! 🎉🎉🎉</h2>)}
        <div className="grid grid-cols-4 gap-5 mt-5">
            {cards.map((card, index) => (
                <div className={`flex justify-center items-center text-4xl font-bold text-black w-28 h-28 bg-slate-200 transform cursor-pointer transition-transform duration-300 ${flipped.includes(index) || solved.includes(index) ? 'rotate-180' : ""}`} key={index} onClick={() => handleClick(index)}>
                    {flipped.includes(index) || solved.includes(index) ? (
                        <Image className="rotate-180" src={`/memory-cards/${card}.webp`} fill alt="Memory Card" />
                    ) : (
                        "?"
                    )}
                </div>
            ))}
        </div>
        <button onClick={resetGame} className="flex p-5 bg-slate-500 rounded-md mt-5">Restart</button>
    </div>
}