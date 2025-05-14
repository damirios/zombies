import { Position } from "./shared";

export type Cell = {
  /** Координаты */
  position: Position;
  /** Раскрыта ли ячейка */
  isRevealed: boolean;
  /** Занята ли ячейка */
  isOccupied: boolean;
};
