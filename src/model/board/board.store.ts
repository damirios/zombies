import { create } from "zustand";

import { Board } from "@/types";

import { generateInitialCellsConfiguration } from "./logic";

import {
  BOARD_COLS,
  BOARD_ROWS,
  TOTAL_ENTITIES_AMOUNT,
  TYPE_AMOUNTS,
} from "../config";

/** Начальное состояние доски */
const initialBoardState: Board = {
  cells: [],
  hiddenEntitiesAmount: TYPE_AMOUNTS,
  openCellsAmount: 0,
};

interface BoardState {
  /** Состояние игровой доски */
  board: Board;
  /** Сеттер состояния игровой доски */
  setBoard: (board: Board | ((prev: Board) => Board)) => void;
}

export const useBoardState = create<BoardState>((set) => ({
  board: initialBoardState,
  setBoard: (updater) =>
    set((state) => ({
      board: typeof updater === "function" ? updater(state.board) : updater,
    })),
}));
