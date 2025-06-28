/** Тип предмета */
export enum ItemTypeEnum {
  /** Аптечка */
  HEALTH_KIT = "HEALTH_KIT",
  /** Доска */
  PALLET = "PALLET",
  /** Канистра с бензином */
  GAS_CAN = "GAS_CAN",
  /** Ключ */
  KEY = "KEY",
}

/** Предмет */
export type Item = {
  /** Тип предмета */
  type: ItemTypeEnum;
};
