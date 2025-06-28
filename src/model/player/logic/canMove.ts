import { Position } from "@/types";

export const canMove = (
  currentPosition: Position,
  targetPosition: Position,
  steps: number
): boolean => {
  const { row: y1, col: x1 } = currentPosition;
  const { row: y2, col: x2 } = targetPosition;

  return Math.abs(x2 - x1) + Math.abs(y2 - y1) <= steps;
};
