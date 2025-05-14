"use client";

import { CSSProperties, FC } from "react";

import { useBoardState } from "@/model/board";

import { Cell } from "../cell";

import s from "./board.module.scss";
import { BOARD_COLS, BOARD_ROWS, CELL_SIZE } from "@/model/config";

export const Board: FC = () => {
  const board = useBoardState();

  const style: CSSProperties = {
    gridTemplateColumns: `repeat(${CELL_SIZE}, ${BOARD_COLS})`,
    gridTemplateRows: `repeat(${CELL_SIZE}, ${BOARD_ROWS})`,
  };

  return (
    <div className={s.board__wrapper}>
      <div className={s.board__grid} style={style}>
        {board.map((row, i) =>
          row.map((cell, j) => <Cell key={`${i}_${j}`} cell={cell} />)
        )}
      </div>
    </div>
  );
};
