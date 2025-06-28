"use client";

import {
  CSSProperties,
  FC,
  MouseEventHandler,
  useEffect,
  useState,
} from "react";

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

import { Cell as CellElement } from "../cell";

import s from "./board.module.scss";
import { useGameState } from "@/model/game";
import { Cell, Nullable } from "@/types";
import { canMove } from "@/model/player";
import { PossibleRoutes } from "../possible-routes";

type Props = {
  className: string;
};

export const Board: FC<Props> = ({ className }) => {
  const {
    board: { cells },
    setBoard,
  } = useBoardState();

  const {
    game: {
      players,
      turn: {
        playerEntity: { position },
      },
    },
  } = useGameState();

  /** Ячейка, на которую навели курсор */
  const [hoveredCell, setHoveredCell] = useState<Nullable<Cell>>(null);

  const handleHoverCell = (cell: Cell) => {
    setHoveredCell(cell);
  };

  const handleMouseLeave = () => {
    // setHoveredCell(null);
  };

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
    gridTemplateColumns: `repeat(${BOARD_COLS}, ${CELL_SIZE}px)`,
    gridTemplateRows: `repeat(${BOARD_ROWS}, ${CELL_SIZE}px)`,
  };

  return (
    <div className={`${s.board__wrapper} ${className}`}>
      <div className={s.board__grid_container}>
        <div
          className={s.board__grid}
          onMouseLeave={handleMouseLeave}
          style={style}
        >
          {cells.map((row, i) =>
            row.map((cell, j) => {
              const player = players.find(
                ({
                  playerEntity: {
                    position: { col, row },
                  },
                }) => row === i && col === j
              );

              return (
                <CellElement
                  key={`${i}_${j}`}
                  onHover={handleHoverCell}
                  cell={cell}
                  player={player}
                />
              );
            })
          )}
        </div>

        <PossibleRoutes
          currentPosition={position}
          targetPosition={hoveredCell?.position}
        />
      </div>
    </div>
  );
};
