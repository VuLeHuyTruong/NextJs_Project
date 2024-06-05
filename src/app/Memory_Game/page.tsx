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

    return <div className="text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <a href="/" className="w-20 flex rounded-md " >
            <button className=" text-gray-400 text-rose-800 bg-rose-400 px-4 py-2 hover:scale-75 rounded-md hover:rotate-12 transition" >
                HOME
            </button>
        </a>
        <h1 className="font-bold animate-food">🧠MEMORY GAME🧠</h1>
        {gameOver && (<h2 className="p-5">🎉🎉🎉 YOU WON! 🎉🎉🎉</h2>)}
        <div className="grid grid-cols-4 gap-4 mt-5 ">
            {cards.map((card, index) => (
                <div className={`rounded-xl flex ms-20 justify-center items-center text-4xl font-bold text-black w-28 h-28 bg-slate-200 transform cursor-pointer transition-transform duration-300 ${flipped.includes(index) || solved.includes(index) ? 'rotate-180' : ""}`} key={index} onClick={() => handleClick(index)}>
                    {flipped.includes(index) || solved.includes(index) ? (
                        <Image className="rounded-xl rotate-180" src={`/memory-cards/${card}.webp`} fill alt="Memory Card" />
                    ) : (
                        "?"
                    )}
                </div>
            ))}
        </div>
        <button onClick={resetGame} className="flex p-5 bg-white rounded-md mt-5">Restart</button>
    </div>
}