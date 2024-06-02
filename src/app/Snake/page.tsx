import SnakeGrid from "@/components/SnakeGrid";
import Image from "next/image";


export default function Snake() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="font-bold animate-bounce">-SNAKE GAME-</h1>
      <SnakeGrid />
    </main>
  );
}
