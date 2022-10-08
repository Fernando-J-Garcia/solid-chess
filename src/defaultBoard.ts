export enum PieceType {
  PAWN = "pawn",
  BISHOP = "bishop",
  KNIGHT = "knight",
  ROOK = "rook",
  QUEEN = "queen",
  KING = "king",
}
export interface Piece {
  type: PieceType;
  color: "white" | "black";
}
export interface BoardSquare {
  position: string;
  piece: Piece | null;
  color: "white" | "black";
}
export const defaultBoard: BoardSquare[] = [
  {
    piece: {
      type: PieceType.ROOK,
      color: "black",
    },
    position: "a8",
    color: "white",
  },
  {
    piece: {
      type: PieceType.KNIGHT,
      color: "black",
    },
    position: "b8",
    color: "black",
  },
  {
    piece: {
      type: PieceType.BISHOP,
      color: "black",
    },
    position: "c8",
    color: "white",
  },
  {
    piece: {
      type: PieceType.QUEEN,
      color: "black",
    },
    position: "d8",
    color: "black",
  },
  {
    piece: {
      type: PieceType.KING,
      color: "black",
    },
    position: "e8",
    color: "white",
  },
  {
    piece: {
      type: PieceType.BISHOP,
      color: "black",
    },
    position: "f8",
    color: "black",
  },
  {
    piece: {
      type: PieceType.KNIGHT,
      color: "black",
    },
    position: "g8",
    color: "white",
  },
  {
    piece: {
      type: PieceType.ROOK,
      color: "black",
    },
    position: "h8",
    color: "black",
  },
  {
    piece: {
      type: PieceType.PAWN,
      color: "black",
    },
    position: "a7",
    color: "black",
  },
  {
    piece: {
      type: PieceType.PAWN,
      color: "black",
    },
    position: "b7",
    color: "white",
  },
  {
    piece: {
      type: PieceType.PAWN,
      color: "black",
    },
    position: "c7",
    color: "black",
  },
  {
    piece: {
      type: PieceType.PAWN,
      color: "black",
    },
    position: "d7",
    color: "white",
  },
  {
    piece: {
      type: PieceType.PAWN,
      color: "black",
    },
    position: "e7",
    color: "black",
  },
  {
    piece: {
      type: PieceType.PAWN,
      color: "black",
    },
    position: "f7",
    color: "white",
  },
  {
    piece: {
      type: PieceType.PAWN,
      color: "black",
    },
    position: "g7",
    color: "black",
  },
  {
    piece: {
      type: PieceType.PAWN,
      color: "black",
    },
    position: "h7",
    color: "white",
  },
  {
    position: "a6",
    piece: null,
    color: "white",
  },
  {
    position: "b6",
    piece: null,
    color: "black",
  },
  {
    position: "c6",
    piece: null,
    color: "white",
  },
  {
    position: "d6",
    piece: null,
    color: "black",
  },
  {
    position: "e6",
    piece: null,
    color: "white",
  },
  {
    position: "f6",
    piece: null,
    color: "black",
  },
  {
    position: "g6",
    piece: null,
    color: "white",
  },
  {
    position: "h6",
    piece: null,
    color: "black",
  },
  {
    position: "a5",
    piece: null,
    color: "black",
  },
  {
    position: "b5",
    piece: null,
    color: "white",
  },
  {
    position: "c5",
    piece: null,
    color: "black",
  },
  {
    position: "d5",
    piece: null,
    color: "white",
  },
  {
    position: "e5",
    piece: null,
    color: "black",
  },
  {
    position: "f5",
    piece: null,
    color: "white",
  },
  {
    position: "g5",
    piece: null,
    color: "black",
  },
  {
    position: "h5",
    piece: null,
    color: "white",
  },
  {
    position: "a4",
    piece: null,
    color: "white",
  },
  {
    position: "b4",
    piece: null,
    color: "black",
  },
  {
    position: "c4",
    piece: null,
    color: "white",
  },
  {
    position: "d4",
    piece: null,
    color: "black",
  },
  {
    position: "e4",
    piece: null,
    color: "white",
  },
  {
    position: "f4",
    piece: null,
    color: "black",
  },
  {
    position: "g4",
    piece: null,
    color: "white",
  },
  {
    position: "h4",
    piece: null,
    color: "black",
  },
  {
    position: "a3",
    piece: null,
    color: "black",
  },
  {
    position: "b3",
    piece: null,
    color: "white",
  },
  {
    position: "c3",
    piece: null,
    color: "black",
  },
  {
    position: "d3",
    piece: null,
    color: "white",
  },
  {
    position: "e3",
    piece: null,
    color: "black",
  },
  {
    position: "f3",
    piece: null,
    color: "white",
  },
  {
    position: "g3",
    piece: null,
    color: "black",
  },
  {
    position: "h3",
    piece: null,
    color: "white",
  },
  {
    piece: {
      type: PieceType.PAWN,
      color: "white",
    },
    position: "a2",
    color: "white",
  },
  {
    piece: {
      type: PieceType.PAWN,
      color: "white",
    },
    position: "b2",
    color: "black",
  },
  {
    piece: {
      type: PieceType.PAWN,
      color: "white",
    },
    position: "c2",
    color: "white",
  },
  {
    piece: {
      type: PieceType.PAWN,
      color: "white",
    },
    position: "d2",
    color: "black",
  },
  {
    piece: {
      type: PieceType.PAWN,
      color: "white",
    },
    position: "e2",
    color: "white",
  },
  {
    piece: {
      type: PieceType.PAWN,
      color: "white",
    },
    position: "f2",
    color: "black",
  },
  {
    piece: {
      type: PieceType.PAWN,
      color: "white",
    },
    position: "g2",
    color: "white",
  },
  {
    piece: {
      type: PieceType.PAWN,
      color: "white",
    },
    position: "h2",
    color: "black",
  },
  {
    piece: {
      type: PieceType.ROOK,
      color: "white",
    },
    position: "a1",
    color: "black",
  },
  {
    piece: {
      type: PieceType.KNIGHT,
      color: "white",
    },
    position: "b1",
    color: "white",
  },
  {
    piece: {
      type: PieceType.BISHOP,
      color: "white",
    },
    position: "c1",
    color: "black",
  },
  {
    piece: {
      type: PieceType.QUEEN,
      color: "white",
    },
    position: "d1",
    color: "white",
  },
  {
    piece: {
      type: PieceType.KING,
      color: "white",
    },
    position: "e1",
    color: "black",
  },
  {
    piece: {
      type: PieceType.BISHOP,
      color: "white",
    },
    position: "f1",
    color: "white",
  },
  {
    piece: {
      type: PieceType.KNIGHT,
      color: "white",
    },
    position: "g1",
    color: "black",
  },
  {
    piece: {
      type: PieceType.ROOK,
      color: "white",
    },
    position: "h1",
    color: "white",
  },
];
