import { BOARD_COLS, BOARD_ROWS } from "@/model/config";
import { Nullable, Position } from "@/types";
import { isNull } from "@/utils";

import { canMove } from "./canMove";

export const getPossibleRoutes = (
  currentPosition: Position,
  targetPosition: Position,
  steps: number
): Position[][] => {
  const { row: y1, col: x1 } = currentPosition;
  const { row: y2, col: x2 } = targetPosition;

  if (steps === 0 || (x1 === x2 && y1 === y2)) {
    return [[]];
  }

  const left: Nullable<Position> =
    x1 - 1 > 0 ? { ...currentPosition, col: x1 - 1 } : null;
  const right: Nullable<Position> =
    x1 + 1 < BOARD_COLS ? { ...currentPosition, col: x1 + 1 } : null;
  const bottom: Nullable<Position> =
    y1 + 1 < BOARD_ROWS ? { ...currentPosition, row: y1 + 1 } : null;
  const top: Nullable<Position> =
    y1 - 1 > 0 ? { ...currentPosition, row: y1 - 1 } : null;

  // Т.к. мы фильтруем по !isNull, то руками убираю эти типы, т.к. .filter не даёт понять ts, чтобы мы отсеяли null'ы
  return [left!, right!, top!, bottom!]
    .filter(
      (direction) =>
        !isNull(direction) && canMove(direction, targetPosition, steps - 1)
    )
    .flatMap((direction) => {
      /** Подмаршруты */
      const subroutes = getPossibleRoutes(direction, targetPosition, steps - 1);

      if (subroutes.length === 0) {
        return [[direction]];
      }

      return subroutes.map((route) => [direction, ...route]);
    });
};
