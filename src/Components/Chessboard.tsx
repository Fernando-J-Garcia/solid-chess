import { createSignal, For } from "solid-js";
import { Piece, BoardSquare, defaultBoard } from "../defaultBoard";
import { classNames } from "../utils/styling";

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
const Square = ({ index, square }: SquareProps) => {
  //check if the row number is even
  const isRowEven = parseInt(square.position.charAt(1)) % 2 === 0;
  const color = isRowEven
    ? index % 2 === 0
      ? "bg-white"
      : "bg-amber-900"
    : index % 2 !== 0
    ? "bg-white"
    : "bg-amber-900";
  return (
    <div class={classNames(color, "relative")}>
      {square.piece && (
        <div>
          <img src={getPieceImage(square.piece)} />
        </div>
      )}
      <div class="absolute p-1 text-black text-opacity-50">
        {square.position}
      </div>
    </div>
  );
};

function getPieceImage(piece: Piece) {
  switch (piece) {
    case Piece.PAWN:
      return "";
    case Piece.BISHOP:
      return "";
  }
}
export default Chessboard;
