import { RevealingEntityEnum } from "@/types";

/** Кол-во строк (рядов) */
export const BOARD_ROWS = 12;
/** Кол-во столбцов */
export const BOARD_COLS = 12;

/** Кол-во ячеек на игровой доске */
export const BOARD_CELLS_AMOUNT = BOARD_ROWS * BOARD_COLS;

/** Общее кол-во открываемых сущностей на доске в зависимости от типа  */
export const TYPE_AMOUNTS: Record<RevealingEntityEnum, number> = {
  [RevealingEntityEnum.AXE]: 11 + 3,
  [RevealingEntityEnum.PALLET]: 16 + 4,
  [RevealingEntityEnum.ZOMBIE]: 28 + 5,
};

/** Общее кол-во открываемых сущностей на доске */
export const TOTAL_ENTITIES_AMOUNT = Object.values(TYPE_AMOUNTS).reduce(
  (sum, currentAmount) => sum + currentAmount,
  0
);

/** Размер ячейки в пикселях */
export const CELL_SIZE = 50;
/** Размер иконки ячейки в пикселях */
export const CELL_IMAGE_SIZE = 40;
