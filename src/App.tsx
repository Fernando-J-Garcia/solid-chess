import type { Component } from "solid-js";
import Chessboard from "./Components/Chessboard";

const App: Component = () => {
  return (
    <div class="flex h-screen w-full bg-sky-300">
      <div class="flex flex-1 flex-col items-center gap-8">
        <h1 class="text-center text-8xl font-thin text-white drop-shadow-md">
          Solid Chess
        </h1>
        <div class="flex flex-1 pb-4">
          <Chessboard />
        </div>
        <footer class="text-center">
          <div class="font-semibold">
            Made By{" "}
            <a
              class="cursor-pointer hover:underline"
              href="https://github.com/Fernando-J-Garcia"
              target="_blank"
            >
              Fernando Garcia
            </a>
          </div>
          <div class="font-thin">
            Chess Pieces By{" "}
            <span>
              <a
                class="cursor-pointer hover:underline"
                href="https://www.figma.com/@swierq"
                target="_blank"
              >
                Maciej Świerczek
              </a>
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
