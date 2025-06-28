import { CELL_CUSTOM_POSSIBILITIES } from "@/model/config";
import { Cell } from "@/types";

type Params = {
  /** Кол-во строк на игровой доске */
  rows: number;
  /** Кол-во столбцов на игровой доске */
  cols: number;
  /** Общее кол-во открываемых сущностей на доске */
  totalEntitiesAmount: number;
};

/** Генерирует начальную конфигурацию ячеек на игровой доске */
export const generateInitialCellsConfiguration = ({
  rows,
  cols,
  totalEntitiesAmount,
}: Params): Cell[][] => {
  const cells: Cell[][] = Array(rows)
    .fill(1)
    .map((_, i) => {
      return Array(cols)
        .fill(1)
        .map((_, j) => {
          return {
            position: {
              row: i,
              col: j,
            },
            isRevealed: false,
            isOccupied: false,
            type: null,
          };
        });
    });

  let i = totalEntitiesAmount;
  outerLoop: while (i > 0) {
    /** Нужно ли заполнить ячейку. TODO: переписать, задав клеткам с окнами и дверьми вероятности побольше */

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const customPossibility =
          CELL_CUSTOM_POSSIBILITIES[`${col}_${row}`] ?? 0.5;
        const shouldOccupy = Math.random() < customPossibility;
        const cell = cells[row][col];

        if (shouldOccupy && !cell.isOccupied) {
          cell.isOccupied = true;
          i--;
        }

        if (i === 0) {
          break outerLoop;
        }
      }
    }
  }

  return cells;
};
