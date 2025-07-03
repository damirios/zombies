"use client";

import {
  CSSProperties,
  FC,
  MouseEventHandler,
  useEffect,
  useState,
} from "react";

import {
  BOARD_CELLS_AMOUNT,
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

import { useGameState } from "@/model/game";
import { Cell, Nullable } from "@/types";
import { canMove } from "@/model/player";
import { PossibleRoutes } from "../possible-routes";
import { getPlayerByPosition } from "./utils";
import { GridLines } from "./GridLines";

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
    console.log("handleHoverCell: ", cell);
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

  return (
    <svg
      width={`${BOARD_COLS * CELL_SIZE + 2 * 50}px`}
      height={`${BOARD_ROWS * CELL_SIZE + 2 * 50}px`}
    >
      <svg x={"50px"} y={"50px"}>
        <g onMouseLeave={handleMouseLeave}>
          {cells.map((cellsRow, row) =>
            cellsRow.map((cell, col) => {
              const player = getPlayerByPosition(players, { row, col });

              return (
                <CellElement
                  key={`${row}_${col}`}
                  onHover={handleHoverCell}
                  cell={cell}
                  player={player}
                />
              );
            })
          )}
        </g>
      </svg>

      <GridLines />

      <PossibleRoutes
        currentPosition={position}
        targetPosition={hoveredCell?.position}
      />
    </svg>
  );
};
