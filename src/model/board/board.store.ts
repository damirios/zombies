import { create } from "zustand";

import { Cell } from "@/types/cell";

import { BOARD_COLS, BOARD_ROWS } from "../config";

/** Начальное состояние доски */
const initialBoardState: Cell[][] = Array(BOARD_ROWS)
  .fill(1)
  .map((_, i) => {
    return Array(BOARD_COLS)
      .fill(1)
      .map((_, j) => {
        return {
          position: {
            row: i,
            col: j,
          },
          isRevealed: false,
          isOccupied: false,
        };
      });
  });

interface BoardState {
  /** Состояние игровой доски */
  board: Cell[][];
  /** Сеттер состояния игровой доски */
  setBoard: (board: Cell[][]) => void;
}

export const useBoardStore = create<BoardState>((set) => ({
  board: initialBoardState,
  setBoard: (board) => set({ board }),
}));
