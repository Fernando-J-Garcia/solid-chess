import { BoardSquare, PieceType } from "../defaultBoard";

function isValidBishop(
  squareStart: BoardSquare,
  squareDestination: BoardSquare
) {
  console.log(squareStart, squareDestination);
  const startPosRow = squareStart.position.charAt(0);
  const startPosCol = squareStart.position.charAt(1);
  const DestPosRow = squareDestination.position.charAt(0);
  const DestPosCol = squareDestination.position.charAt(1);

  if (
    squareStart.color !== squareDestination.color ||
    startPosRow === DestPosRow
  ) {
    return false;
  }
  return true;
}
function isValidKing(squareStart: BoardSquare, squareDestination: BoardSquare) {
  return true;
}
function isValidKnight(
  squareStart: BoardSquare,
  squareDestination: BoardSquare
) {
  return true;
}

export function MoveIsValid(
  squareStart: BoardSquare,
  squareDestination: BoardSquare
) {
  //TODO: PIECE Move rules go here
  switch (squareStart.piece.type) {
    case PieceType.BISHOP:
      if (!isValidBishop(squareStart, squareDestination)) {
        return false;
      }
      break;
    case PieceType.KING:
      if (!isValidKing(squareStart, squareDestination)) {
        return false;
      }
      break;
    case PieceType.KNIGHT:
      if (!isValidKnight(squareStart, squareDestination)) {
        return false;
      }
      break;
  }

  //is the slot occupied?
  if (squareDestination.piece) {
    //if so, Check if the piece is the same color...
    if (squareDestination.piece.color === squareStart.piece.color) {
      return false;
    }
  }
  return true;
}
