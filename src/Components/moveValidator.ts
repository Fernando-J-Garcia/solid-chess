import { BoardSquare } from "../defaultBoard";

export function MoveIsValid(
  squareStart: BoardSquare,
  squareDestination: BoardSquare
) {
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
