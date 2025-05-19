"use client";

import { CSSProperties, FC, useEffect } from "react";

import {
  BOARD_COLS,
  BOARD_ROWS,
  CELL_SIZE,
  TOTAL_ENTITIES_AMOUNT,
} from "@/model/config";
import {
  generateInitialCellsConfiguration,
  useBoardState,
} from "@/model/board";

import { Cell } from "../cell";

import s from "./board.module.scss";

export const Board: FC = () => {
  const {
    board: { cells },
    setBoard,
  } = useBoardState();

  // TODO: временное решение, пока нет бэкенда
  useEffect(() => {
    setBoard((prev) => ({
      ...prev,
      cells: generateInitialCellsConfiguration({
        rows: BOARD_ROWS,
        cols: BOARD_COLS,
        totalEntitiesAmount: TOTAL_ENTITIES_AMOUNT,
      }),
    }));
  }, []);

  const style: CSSProperties = {
    gridTemplateColumns: `repeat(${CELL_SIZE}, ${BOARD_COLS})`,
    gridTemplateRows: `repeat(${CELL_SIZE}, ${BOARD_ROWS})`,
  };

  return (
    <div className={s.board__wrapper}>
      <div className={s.board__grid} style={style}>
        {cells.map((row, i) =>
          row.map((cell, j) => <Cell key={`${i}_${j}`} cell={cell} />)
        )}
      </div>
    </div>
  );
};
