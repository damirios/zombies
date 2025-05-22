import { RevealingEntityEnum } from "./entity";
import { Position } from "./shared";

/** Ячейка на игровой доске */
export type Cell = {
  /** Координаты */
  position: Position;
  /** Раскрыта ли ячейка */
  isRevealed: boolean;
  /** Занята ли ячейка */
  isOccupied: boolean;
  /** Тип сущности, занимающей ячейку */
  type: RevealingEntityEnum | null;
};
