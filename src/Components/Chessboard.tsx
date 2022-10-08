import {
  Component,
  createEffect,
  createSignal,
  For,
  splitProps,
} from "solid-js";
import { render } from "solid-js/web";
import { PieceType, BoardSquare, defaultBoard, Piece } from "../defaultBoard";
import { classNames } from "../utils/styling";
import {
  getDragElement,
  getDragElementIndex,
  setDragElement,
} from "./dragHandler";

const SIZE = 8;

function MoveIsValid(squareStart: BoardSquare, squareDestination: BoardSquare) {
  //TODO: PIECE Move rules go here

  //is the slot occupied?
  if (squareDestination.piece) {
    //if so, Check if the piece is the same color...
    if (squareDestination.piece.color === squareStart.piece.color) {
      return false;
    }
  }
  return true;
}

const Chessboard: Component = () => {
  const [board, setBoard] = createSignal<BoardSquare[]>(defaultBoard);
  createEffect(() => {
    console.log(board());
  });
  function handleMove(
    index: number,
    squareDestination: BoardSquare,
    destinationIndex: number
  ) {
    console.log(board()[index].piece);
    const squareStart = board()[index];

    //TODO: Implement Evaluate valid Move Here...
    if (!MoveIsValid(squareStart, squareDestination)) {
      return;
    }
    const newBoard = [...board()];
    newBoard[index] = { ...newBoard[index], piece: null };
    newBoard[destinationIndex] = {
      ...newBoard[destinationIndex],
      piece: { ...squareStart.piece },
    };

    setBoard(newBoard);
  }
  return (
    <div class="grid aspect-square h-full max-h-full grid-cols-8 shadow">
      <For each={board()}>
        {(square, i) => {
          console.log(square);
          return <Square index={i()} square={square} handleMove={handleMove} />;
        }}
      </For>
    </div>
  );
};

interface SquareProps {
  index: number;
  square: BoardSquare;
  handleMove: (
    index: number,
    squareDestination: BoardSquare,
    destinationIndex: number
  ) => void;
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

  const handleMouseDown = (e: MouseEvent) => {
    if (!imageRef) return;

    const imageBoundingRect = imageRef.getBoundingClientRect();

    const xOffset =
      e.clientX - imageBoundingRect.width / 2 - imageBoundingRect.x;
    const yOffset =
      e.clientY - imageBoundingRect.height / 2 - imageBoundingRect.y;

    setDragElement(imageRef, props.index, xOffset, yOffset);
  };
  const handleMouseUp = (e: MouseEvent) => {
    console.log("mouseup at " + props.square.position);
    if (!getDragElement()) return;

    props.handleMove(getDragElementIndex(), props.square, props.index);
  };
  return (
    <div
      class={"relative"}
      onMouseDown={handleMouseDown}
      ref={ref}
      onMouseUp={handleMouseUp}
    >
      {/*Piece Image */}
      {props.square.piece && (
        <div class="absolute inset-0 z-10">
          <img
            src={`/assets/${props.square.piece.type}_${props.square.piece.color}.png`}
            class="h-full w-full p-2"
            ref={imageRef}
            draggable={false}
          />
        </div>
      )}
      {/*Tile Color */}
      <div class={classNames(color, "absolute inset-0 h-full w-full")} />
      {/*Position Text */}
      <div class="absolute p-1 text-black text-opacity-50">
        {props.square.position}
      </div>
    </div>
  );
};
export default Chessboard;
