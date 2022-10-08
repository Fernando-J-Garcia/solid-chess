export enum Piece {
  PAWN = "pawn",
  BISHOP = "bishop",
  KNIGHT = "knight",
  ROOK = "rook",
  QUEEN = "queen",
  KING = "king",
}
export interface BoardSquare {
  position: string;
  piece: Piece | null;
}
export const defaultBoard: BoardSquare[] = [
  {
    piece: Piece.ROOK,
    position: "a8",
  },
  {
    piece: Piece.KNIGHT,
    position: "b8",
  },
  {
    piece: Piece.BISHOP,
    position: "c8",
  },
  {
    piece: Piece.QUEEN,
    position: "d8",
  },
  {
    piece: Piece.KING,
    position: "e8",
  },
  {
    piece: Piece.BISHOP,
    position: "f8",
  },
  {
    piece: Piece.KNIGHT,
    position: "g8",
  },
  {
    piece: Piece.ROOK,
    position: "h8",
  },
  {
    piece: Piece.PAWN,
    position: "a7",
  },
  {
    piece: Piece.PAWN,
    position: "b7",
  },
  {
    piece: Piece.PAWN,
    position: "c7",
  },
  {
    piece: Piece.PAWN,
    position: "d7",
  },
  {
    piece: Piece.PAWN,
    position: "e7",
  },
  {
    piece: Piece.PAWN,
    position: "f7",
  },
  {
    piece: Piece.PAWN,
    position: "g7",
  },
  {
    piece: Piece.PAWN,
    position: "h7",
  },
  {
    position: "a6",
    piece: null,
  },
  {
    position: "b6",
    piece: null,
  },
  {
    position: "c6",
    piece: null,
  },
  {
    position: "d6",
    piece: null,
  },
  {
    position: "e6",
    piece: null,
  },
  {
    position: "f6",
    piece: null,
  },
  {
    position: "g6",
    piece: null,
  },
  {
    position: "h6",
    piece: null,
  },
  {
    position: "a5",
    piece: null,
  },
  {
    position: "b5",
    piece: null,
  },
  {
    position: "c5",
    piece: null,
  },
  {
    position: "d5",
    piece: null,
  },
  {
    position: "e5",
    piece: null,
  },
  {
    position: "f5",
    piece: null,
  },
  {
    position: "g5",
    piece: null,
  },
  {
    position: "h5",
    piece: null,
  },
  {
    position: "a4",
    piece: null,
  },
  {
    position: "b4",
    piece: null,
  },
  {
    position: "c4",
    piece: null,
  },
  {
    position: "d4",
    piece: null,
  },
  {
    position: "e4",
    piece: null,
  },
  {
    position: "f4",
    piece: null,
  },
  {
    position: "g4",
    piece: null,
  },
  {
    position: "h4",
    piece: null,
  },
  {
    position: "a3",
    piece: null,
  },
  {
    position: "b3",
    piece: null,
  },
  {
    position: "c3",
    piece: null,
  },
  {
    position: "d3",
    piece: null,
  },
  {
    position: "e3",
    piece: null,
  },
  {
    position: "f3",
    piece: null,
  },
  {
    position: "g3",
    piece: null,
  },
  {
    position: "h3",
    piece: null,
  },
  {
    piece: Piece.PAWN,
    position: "a2",
  },
  {
    piece: Piece.PAWN,
    position: "b2",
  },
  {
    piece: Piece.PAWN,
    position: "c2",
  },
  {
    piece: Piece.PAWN,
    position: "d2",
  },
  {
    piece: Piece.PAWN,
    position: "e2",
  },
  {
    piece: Piece.PAWN,
    position: "f2",
  },
  {
    piece: Piece.PAWN,
    position: "g2",
  },
  {
    piece: Piece.PAWN,
    position: "h2",
  },
  {
    piece: Piece.ROOK,
    position: "a1",
  },
  {
    piece: Piece.KNIGHT,
    position: "b1",
  },
  {
    piece: Piece.BISHOP,
    position: "c1",
  },
  {
    piece: Piece.QUEEN,
    position: "d1",
  },
  {
    piece: Piece.KING,
    position: "e1",
  },
  {
    piece: Piece.BISHOP,
    position: "f1",
  },
  {
    piece: Piece.KNIGHT,
    position: "g1",
  },
  {
    piece: Piece.ROOK,
    position: "h1",
  },
];
