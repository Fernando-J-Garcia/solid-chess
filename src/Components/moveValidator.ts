import { BoardSquare, PieceType } from "../defaultBoard";

const possibleMoves = new Map<string, boolean>();
const BOARD_WIDTH = 8;

const isInBoundary = (x: number, y: number): Boolean => {
  console.log(x, y);
  if (x > 8 || y - 97 > 8 || x < 0 || y < 0) {
    return false;
  }
  return true;
};
function validateMove(
  squareStart: BoardSquare,
  board: BoardSquare[],
  x: number,
  y: number
) {
  const pieceType = squareStart.piece.type;

  if (!isInBoundary(x, y)) return false;

  const currentPositionCol = String.fromCharCode(y + 97); //Convert to algabraic format
  const currentPositionRow = x;
  const algraicPos = `${currentPositionCol}${currentPositionRow}`;

  //TODO add x and y to get the postion in a one dimensional array
  const index =
    BOARD_WIDTH * BOARD_WIDTH - ((y - 1) * BOARD_WIDTH + BOARD_WIDTH + 1 - x);
  const currentSquare: BoardSquare = board[index];

  console.log({ x, y, index });
  console.log(currentSquare);
  if (currentSquare !== squareStart) {
    //There is no pieces blocking this path
    if (currentSquare.piece === null) {
      //move is valid add it to the possible moves
      possibleMoves.set(algraicPos, true);
    } else {
      if (currentSquare.piece.color !== squareStart.color) {
        possibleMoves.set(algraicPos, true);
      }
      return false;
    }
  }

  if (pieceType === PieceType.BISHOP) {
    //check diagonol
    validateMove(squareStart, board, x + 1, y + 1);
    validateMove(squareStart, board, x - 1, y - 1);
    validateMove(squareStart, board, x + 1, y + 1);
    validateMove(squareStart, board, x - 1, y + 1);
  }
}

export function generateAllPossibleMoves(
  squareStart: BoardSquare,
  board: BoardSquare[]
) {
  possibleMoves.clear(); //clear previous moves

  const startPosRow = squareStart.position.charAt(0);
  const startPosCol = squareStart.position.charAt(1);
  let x = startPosRow.charCodeAt(0) - 97 + 1;
  let y = parseInt(startPosCol);

  //Recursivily go through every move and check if it is valid
  validateMove(squareStart, board, x, y);
  console.log(possibleMoves);
}

export function MoveIsValid(
  squareStart: BoardSquare,
  squareDestination: BoardSquare,
  board: BoardSquare[]
) {
  //is the slot occupied?
  if (squareDestination.piece) {
    //if so, Check if the piece is the same color...
    if (squareDestination.piece.color === squareStart.piece.color) {
      return false;
    }
  }
  return true;
}
