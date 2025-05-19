import { Board, Position } from "@/types";

import { revealCell } from "./logic";

import { TOTAL_ENTITIES_AMOUNT } from "../config";

type Params = {
  /** Игровая доска */
  board: Board;
} & Position;

export const onClickCell = (params: Params) => {
  revealCell({ ...params, boardEntityCellsAmount: TOTAL_ENTITIES_AMOUNT });
};
