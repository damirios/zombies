import { Cell } from "./cell";
import { RevealingEntityEnum } from "./entity";

/** Игровая доска */
export type Board = {
  /** Состояния ячеек */
  cells: Cell[][];
  /** Кол-во неоткрытых сущностей по типам */
  hiddenEntitiesAmount: Record<RevealingEntityEnum, number>;
  /** Общее кол-во открытых ячеек */
  openCellsAmount: number;
};
