import { RevealingEntityEnum } from "@/types";

const {
  AUTORIFLE,
  AXE,
  CROSSBOW,
  GRENADE,
  HANDGUN,
  KNIFE,
  SHOTGUN,
  RPG,
  GAS_CAN,
  HEALTH_KIT,
  KEY,
  PALLET,
  DEVIL_DOG,
  SPIDER_MUTANT,
  SWAMP_HORROR,
  WALKER,
} = RevealingEntityEnum;

const prefix = "/icons";

const cellImageMap: Record<RevealingEntityEnum, string> = {
  // Оружие
  [AUTORIFLE]: `${prefix}/axe.svg`,
  [AXE]: `${prefix}/axe.svg`,
  [CROSSBOW]: `${prefix}/axe.svg`,
  [GRENADE]: `${prefix}/axe.svg`,
  [HANDGUN]: `${prefix}/axe.svg`,
  [KNIFE]: `${prefix}/axe.svg`,
  [SHOTGUN]: `${prefix}/axe.svg`,
  [RPG]: `${prefix}/axe.svg`,
  // Предметы
  [GAS_CAN]: `${prefix}/pallet.svg`,
  [HEALTH_KIT]: `${prefix}/pallet.svg`,
  [KEY]: `${prefix}/pallet.svg`,
  [PALLET]: `${prefix}/pallet.svg`,
  // Зомби
  [DEVIL_DOG]: `${prefix}/zombie.svg`,
  [SPIDER_MUTANT]: `${prefix}/zombie.svg`,
  [SWAMP_HORROR]: `${prefix}/zombie.svg`,
  [WALKER]: `${prefix}/zombie.svg`,
};

export const getRevealingCellImageSrc = (entity: RevealingEntityEnum): string =>
  cellImageMap[entity];
