import { Board, Cell, Position } from "@/types";

import { useBoardState } from "./board.store";
import { revealCell } from "./logic";

import { TOTAL_ENTITIES_AMOUNT } from "../config";
import { isNull } from "@/utils";

type Params = {
  /** Игровая доска */
  board: Board;
} & Position;

export const onClickCell = ({ board, col, row }: Params) => {
  const entityType = revealCell({
    board,
    boardEntityCellsAmount: TOTAL_ENTITIES_AMOUNT,
  });

  if (isNull(entityType)) {
    return console.error("Тип null!");
  }

  // TODO: пока состояние доски меняем здесь. Дальше оно будет меняться через WS
  useBoardState.getState().setBoard((prev) => {
    /** Новый набор ячеек в строке */
    const rowCells: Cell[] = prev.cells[row].map((cell, j) =>
      j === col
        ? ({ ...cell, isRevealed: true, type: entityType } as Cell)
        : cell
    );

    /** Новых набор всех ячеек */
    const cells: Cell[][] = prev.cells.map((prevRowCells, i) =>
      i === row ? rowCells : prevRowCells
    );

    /** Кол-во открытых карточек */
    const openCellsAmount = prev.openCellsAmount + 1;
    /** Кол-во скрытых сущностей */
    const hiddenEntitiesAmount = { ...prev.hiddenEntitiesAmount };
    hiddenEntitiesAmount[entityType]--;

    return { ...prev, cells, hiddenEntitiesAmount, openCellsAmount };
  });
};
