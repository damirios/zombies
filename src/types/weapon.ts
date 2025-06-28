/** Тип оружия */
export enum WeaponTypeEnum {
  /** Автомат */
  AUTORIFLE = "AUTORIFLE",
  /** Топор */
  AXE = "AXE",
  /** Арбалет */
  CROSSBOW = "CROSSBOW",
  /** Граната */
  GRENADE = "GRENADE",
  /** Пистолет */
  HANDGUN = "HANDGUN",
  /** Нож */
  KNIFE = "KNIFE",
  /** Дробовик */
  SHOTGUN = "SHOTGUN",
  /** Гранатомёт */
  RPG = "RPG",
}

/** Оружие */
export type Weapon = {
  /** Тип оружия */
  type: WeaponTypeEnum;
  /** Осталось использований */
  usesRemain: number;
};
