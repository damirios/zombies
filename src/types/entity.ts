import { ItemTypeEnum } from "./item";
import { WeaponTypeEnum } from "./weapon";
import { ZombieClassEnum } from "./zombie";

/** Открываемые сущности */
export enum RevealingEntityEnum {
  // Оружие
  AUTORIFLE = WeaponTypeEnum.AUTORIFLE,
  AXE = WeaponTypeEnum.AXE,
  CROSSBOW = WeaponTypeEnum.CROSSBOW,
  GRENADE = WeaponTypeEnum.GRENADE,
  HANDGUN = WeaponTypeEnum.HANDGUN,
  KNIFE = WeaponTypeEnum.KNIFE,
  SHOTGUN = WeaponTypeEnum.SHOTGUN,
  RPG = WeaponTypeEnum.RPG,
  // Предметы
  GAS_CAN = ItemTypeEnum.GAS_CAN,
  HEALTH_KIT = ItemTypeEnum.HEALTH_KIT,
  KEY = ItemTypeEnum.KEY,
  PALLET = ItemTypeEnum.PALLET,
  // Зомби
  DEVIL_DOG = ZombieClassEnum.DEVIL_DOG,
  SPIDER_MUTANT = ZombieClassEnum.SPIDER_MUTANT,
  SWAMP_HORROR = ZombieClassEnum.SWAMP_HORROR,
  WALKER = ZombieClassEnum.WALKER,
}
