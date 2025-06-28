import { PlayerClassEnum, Position, RevealingEntityEnum } from "@/types";

const { HEALER, RUNNER, SHOOTER, TANK, WARRIOR } = PlayerClassEnum;

// ОБЩЕЕ =============================================================================
/** Кол-во строк (рядов) */
export const BOARD_ROWS = 12;
/** Кол-во столбцов */
export const BOARD_COLS = 12;

/** Кол-во ячеек на игровой доске */
export const BOARD_CELLS_AMOUNT = BOARD_ROWS * BOARD_COLS;

/** Размер ячейки в пикселях */
export const CELL_SIZE = 50;
/** Размер иконки ячейки в пикселях */
export const CELL_IMAGE_SIZE = 40;

/** Вероятности появится карточке на ячейке */
export const CELL_CUSTOM_POSSIBILITIES: Record<string, number> = {
  [`${BOARD_ROWS - 1}_${BOARD_COLS - 1}`]: 0,
};

// ИНФОБАР ===========================================================================
/** Размер иконки игрока в пикселях */
export const PLAYER_ICON_SIZE = 20;

// ДАННЫЕ ИГРОКА/ПЕРСОНАЖА ===========================================================
/** Начальное положение игрока */
export const INITIAL_PLAYER_POSITION: Position = {
  row: BOARD_ROWS - 1,
  col: 0,
};

/** Начальное здоровье игрока в зависимости от класса */
export const INITIAL_PLAYER_HEALTHS: Record<PlayerClassEnum, number> = {
  [HEALER]: 3,
  [RUNNER]: 3,
  [SHOOTER]: 3,
  [TANK]: 5,
  [WARRIOR]: 3,
};

// СУЩНОСТИ ===========================================================================
/** Общее кол-во открываемых сущностей на доске в зависимости от типа  */
export const TYPE_AMOUNTS: Record<RevealingEntityEnum, number> = {
  // Оружие
  [RevealingEntityEnum.AUTORIFLE]: 1,
  [RevealingEntityEnum.AXE]: 1,
  [RevealingEntityEnum.CROSSBOW]: 1,
  [RevealingEntityEnum.GRENADE]: 4,
  [RevealingEntityEnum.HANDGUN]: 1,
  [RevealingEntityEnum.KNIFE]: 1,
  [RevealingEntityEnum.SHOTGUN]: 1,
  [RevealingEntityEnum.RPG]: 1,
  // Предметы
  [RevealingEntityEnum.GAS_CAN]: 1,
  [RevealingEntityEnum.HEALTH_KIT]: 6,
  [RevealingEntityEnum.KEY]: 1,
  [RevealingEntityEnum.PALLET]: 8,
  // Зомби
  [RevealingEntityEnum.DEVIL_DOG]: 5,
  [RevealingEntityEnum.SPIDER_MUTANT]: 5,
  [RevealingEntityEnum.SWAMP_HORROR]: 1,
  [RevealingEntityEnum.WALKER]: 17,
};

/** Общее кол-во открываемых сущностей на доске */
export const TOTAL_ENTITIES_AMOUNT = Object.values(TYPE_AMOUNTS).reduce(
  (sum, currentAmount) => sum + currentAmount,
  0
);
