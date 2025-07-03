import { CELL_SIZE } from "@/model/config";
import { Position } from "@/types";

export const getDAttribute = (route: Position[]): string => {
  // Начинаем в серединке первой ячейки
  let d = `M ${((route[0].col + 1) * CELL_SIZE) / 2} ${
    ((route[0].row + 1) * CELL_SIZE) / 2
  }`;
  for (let i = 1; i < route.length; i++) {
    const { col, row } = route[i];

    d += `L ${((col + 1) * CELL_SIZE) / 2} ${((row + 1) * CELL_SIZE) / 2}`;
  }

  return d;
};
