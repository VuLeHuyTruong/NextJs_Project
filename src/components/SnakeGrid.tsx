"use client";

import { KeyboardEvent, useEffect, useState } from "react";

const Grid_Size = 15;
const Speed = 200;

type Point = {
    x: number;
    y: number;
}

type Direction = "UP" | "DOWN" | "LEFT" | "RIGHT";

export default function SnakeGrid() {

    const [snake, setSnake] = useState<Point[]>([
        { y: 0, x: 2 },
        { y: 0, x: 1 },
        { y: 0, x: 0 },
    ]);

    const [food, setFood] = useState<Point>({ x: 7, y: 7 });
    const [direction, setDirection] = useState<Direction>("DOWN");
    const [gameOver, setGameOver] = useState<boolean>(false);



    const generateFood = () => {
        const x = Math.floor(Math.random() * Grid_Size);
        const y = Math.floor(Math.random() * Grid_Size);
        setFood({ x, y });
    };

    const moveSnake = () => {
        const newSnake = [...snake];
        const snakeHead = { ...newSnake[0] };


        if (direction === "UP") {
            snakeHead.y -= 1;
        }
        if (direction === "DOWN") {
            snakeHead.y += 1;
        }
        if (direction === "LEFT") {
            snakeHead.x -= 1;
        }
        if (direction === "RIGHT") {
            snakeHead.x += 1;
        }

        // Trường hợp có tường

        // if (snakeHead.x < 0 ||
        //     snakeHead.x >= Grid_Size ||
        //     snakeHead.y < 0 ||
        //     snakeHead.y >= Grid_Size ||
        //     newSnake.some((snakePart) => snakePart.x === snakeHead.x && snakePart.y === snakeHead.y)
        // ) {
        //     setGameOver(true);
        //     return;
        // }


        // Trường hợp không có tường

        if (
            newSnake.some((snakePart) => snakePart.x === snakeHead.x && snakePart.y === snakeHead.y)
        ) {
            setGameOver(true);
            return;
        }
        if (snakeHead.x < 0
        ) {
            snakeHead.x = Grid_Size - 1;
        }
        if (snakeHead.x > Grid_Size - 1
        ) {
            snakeHead.x = 0;
        }
        if (snakeHead.y < 0
        ) {
            snakeHead.y = Grid_Size - 1;
        }
        if (snakeHead.y > Grid_Size - 1
        ) {
            snakeHead.y = 0;
        }

        newSnake.unshift(snakeHead);

        if (snakeHead.x === food.x && snakeHead.y === food.y) {

            generateFood();
        } else {
            newSnake.pop();
        }

        setSnake(newSnake);
    };

    useEffect(() => {
        const interval = setInterval(moveSnake, Speed);
        return () => clearInterval(interval);
    }, [snake, direction]);

    useEffect(() => {
        generateFood();
    }, []);

    const handleKeyPress = (event: KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "w" && direction !== "DOWN") {
            setDirection("UP");
        }
        if (event.key === "s" && direction !== "UP") {
            setDirection("DOWN");
        }
        if (event.key === "a" && direction !== "RIGHT") {
            setDirection("LEFT");
        }
        if (event.key === "d" && direction !== "LEFT") {
            setDirection("RIGHT");
        }
        if (event.key === "ArrowUp" && direction !== "DOWN") {
            setDirection("UP");
        }
        if (event.key === "ArrowDown" && direction !== "UP") {
            setDirection("DOWN");
        }
        if (event.key === "ArrowLeft" && direction !== "RIGHT") {
            setDirection("LEFT");
        }
        if (event.key === "ArrowRight" && direction !== "LEFT") {
            setDirection("RIGHT");
        }
    }
    return (
        <div
            onKeyDown={handleKeyPress}
            tabIndex={0}
            autoFocus
            className="grid grid-cols-20 grid-rows-20 border border-black-500 bg-white">

            {gameOver && (
                <div className="absolute inset-0 flex justify-center items-center text-4xl font-bold text-red-800 bg-gradient-to-b from-black z-20 brightness-200 ">
                    <a href="/Snake" className="animate-wiggle [text-shadow:3px_3px_red]">
                        Game Over
                    </a>
                </div>
            )}

            {Array.from({ length: Grid_Size }).map((_, y) => (
                <div key={y} className="flex">
                    {Array.from({ length: Grid_Size }).map((_, x) => (
                        <div
                            key={x}
                            className={`w-5 h-5 border border-gray-100  

                        ${snake.some((snakePart) => snakePart.x === x && snakePart.y === y) && "bg-black rounded-md animate-snake"}

                        ${food.x === x && food.y === y && "bg-red-500 rounded-full animate-food"}
                        `}>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}