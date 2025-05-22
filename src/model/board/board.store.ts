import { create } from "zustand";

import { Board } from "@/types";

import { TYPE_AMOUNTS } from "../config";

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
