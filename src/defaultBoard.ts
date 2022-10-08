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
}
export const defaultBoard: BoardSquare[] = [
  {
    piece: { type: PieceType.ROOK, color: "black" },
    position: "a8",
  },
  {
    piece: { type: PieceType.KNIGHT, color: "black" },
    position: "b8",
  },
  {
    piece: { type: PieceType.BISHOP, color: "black" },
    position: "c8",
  },
  {
    piece: { type: PieceType.QUEEN, color: "black" },
    position: "d8",
  },
  {
    piece: { type: PieceType.KING, color: "black" },
    position: "e8",
  },
  {
    piece: { type: PieceType.BISHOP, color: "black" },
    position: "f8",
  },
  {
    piece: { type: PieceType.KNIGHT, color: "black" },
    position: "g8",
  },
  {
    piece: { type: PieceType.ROOK, color: "black" },
    position: "h8",
  },
  {
    piece: { type: PieceType.PAWN, color: "black" },
    position: "a7",
  },
  {
    piece: { type: PieceType.PAWN, color: "black" },
    position: "b7",
  },
  {
    piece: { type: PieceType.PAWN, color: "black" },
    position: "c7",
  },
  {
    piece: { type: PieceType.PAWN, color: "black" },
    position: "d7",
  },
  {
    piece: { type: PieceType.PAWN, color: "black" },
    position: "e7",
  },
  {
    piece: { type: PieceType.PAWN, color: "black" },
    position: "f7",
  },
  {
    piece: { type: PieceType.PAWN, color: "black" },
    position: "g7",
  },
  {
    piece: { type: PieceType.PAWN, color: "black" },
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
    piece: { type: PieceType.PAWN, color: "white" },
    position: "a2",
  },
  {
    piece: { type: PieceType.PAWN, color: "white" },
    position: "b2",
  },
  {
    piece: { type: PieceType.PAWN, color: "white" },
    position: "c2",
  },
  {
    piece: { type: PieceType.PAWN, color: "white" },
    position: "d2",
  },
  {
    piece: { type: PieceType.PAWN, color: "white" },
    position: "e2",
  },
  {
    piece: { type: PieceType.PAWN, color: "white" },
    position: "f2",
  },
  {
    piece: { type: PieceType.PAWN, color: "white" },
    position: "g2",
  },
  {
    piece: { type: PieceType.PAWN, color: "white" },
    position: "h2",
  },
  {
    piece: { type: PieceType.ROOK, color: "white" },
    position: "a1",
  },
  {
    piece: { type: PieceType.KNIGHT, color: "white" },
    position: "b1",
  },
  {
    piece: { type: PieceType.BISHOP, color: "white" },
    position: "c1",
  },
  {
    piece: { type: PieceType.QUEEN, color: "white" },
    position: "d1",
  },
  {
    piece: { type: PieceType.KING, color: "white" },
    position: "e1",
  },
  {
    piece: { type: PieceType.BISHOP, color: "white" },
    position: "f1",
  },
  {
    piece: { type: PieceType.KNIGHT, color: "white" },
    position: "g1",
  },
  {
    piece: { type: PieceType.ROOK, color: "white" },
    position: "h1",
  },
];
