import { RevealingEntityEnum } from "@/types";

const { AXE, PALLET, ZOMBIE } = RevealingEntityEnum;

const prefix = "/icons";

const cellImageMap: Record<RevealingEntityEnum, string> = {
  [AXE]: `${prefix}/axe.svg`,
  [PALLET]: `${prefix}/pallet.svg`,
  [ZOMBIE]: `${prefix}/zombie.svg`,
};

export const getImageSrc = (entity: RevealingEntityEnum): string =>
  cellImageMap[entity];
