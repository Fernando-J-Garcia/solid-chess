import { Component, createSignal, For, splitProps } from "solid-js";
import { render } from "solid-js/web";
import { PieceType, BoardSquare, defaultBoard, Piece } from "../defaultBoard";
import { classNames } from "../utils/styling";
import PieceDragging from "./PieceDragging";

const SIZE = 8;

const [board, setBoard] = createSignal<BoardSquare[]>(defaultBoard);
// const generated: BoardSquare[] = [];
// const A_CHAR_CODE = 97;
// for (let i = SIZE; i > 0; i--) {
//   for (let j = 0; j < SIZE; j++) {
//     const charCode = A_CHAR_CODE + j;
//     const position = `${String.fromCharCode(charCode)}${i}`;
//     board.push(position);
//     generated.push({ position, piece: null });
//   }
// }
// const newBoard = generated.map((el) => {
//   for (const d of defaultBoard) {
//     if (el.position === d.position) {
//       return d;
//     }
//   }
//   return el;
// });
// console.log(newBoard);
const Chessboard = () => {
  return (
    <div class="grid aspect-square h-full max-h-full grid-cols-8 shadow">
      <For each={board()}>
        {(square, i) => <Square index={i()} square={square} />}
      </For>
    </div>
  );
};

interface SquareProps {
  index: number;
  square: BoardSquare;
}
const Square: Component<SquareProps> = (props) => {
  let ref: HTMLDivElement;
  let imageRef: HTMLImageElement;
  //check if the row number is even
  const isRowEven = parseInt(props.square.position.charAt(1)) % 2 === 0;
  const color = isRowEven
    ? props.index % 2 === 0
      ? "bg-white"
      : "bg-amber-900"
    : props.index % 2 !== 0
    ? "bg-white"
    : "bg-amber-900";

  let mouseDown = false;
  let xPosOnDrag;
  let yPosOnDrag;

  const handleMouseMove = (e: MouseEvent) => {
    const imageBoundingRect = imageRef.getBoundingClientRect();

    const xOffset = e.clientX - imageBoundingRect.width / 2 - xPosOnDrag;
    const yOffset = e.clientY - imageBoundingRect.height / 2 - yPosOnDrag;
    imageRef.style.transform = `translate(${xOffset}px,${yOffset}px)`;
  };
  const handleMouseDown = (e: MouseEvent) => {
    if (!imageRef) return;

    mouseDown = true;
    const imageBoundingRect = imageRef.getBoundingClientRect();

    //get a refrence to the current x and y pos
    xPosOnDrag = imageBoundingRect.x;
    yPosOnDrag = imageBoundingRect.y;

    const xOffset = e.clientX - imageBoundingRect.width / 2 - xPosOnDrag;
    const yOffset = e.clientY - imageBoundingRect.height / 2 - yPosOnDrag;
    imageRef.style.transform = `translate(${xOffset}px,${yOffset}px)`;

    console.log({
      x: imageBoundingRect.x,
      y: imageBoundingRect.y,
      clientX: e.clientX,
      clientY: e.clientY,
      xOffset,
      yOffset,
    });

    document.addEventListener("mousemove", handleMouseMove);
    // const img = document.createElement("img");
    // render(
    //   () => <PieceDragging square={props.square} containerRef={ref} />,
    //   document.getElementById("root") as HTMLElement
    // );
  };
  const handleMouseUp = (e: MouseEvent) => {
    console.log("mouseup at " + props.square.position);
    document.removeEventListener("mousemove", handleMouseMove);
  };
  return (
    <div
      class={classNames(color, "relative")}
      onMouseDown={handleMouseDown}
      ref={ref}
      onMouseUp={handleMouseUp}
    >
      {props.square.piece && (
        <div class="absolute inset-0">
          <img
            src={`/assets/${props.square.piece.type}_${props.square.piece.color}.png`}
            class="h-full w-full p-2"
            ref={imageRef}
            draggable={false}
          />
        </div>
      )}
      <div class="absolute p-1 text-black text-opacity-50">
        {props.square.position}
      </div>
    </div>
  );
};
export default Chessboard;
