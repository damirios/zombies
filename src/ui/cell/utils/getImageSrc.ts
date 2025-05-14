import { OpeningEntityEnum } from "@/types";

const { ZOMBIE } = OpeningEntityEnum;

const prefix = "/icons";

const cellImageMap: Record<OpeningEntityEnum, string> = {
  ZOMBIE: `${prefix}/zombie.svg`,
  PALLET: `${prefix}/pallet.svg`,
};

export const getImageSrc = (entity: OpeningEntityEnum): string =>
  cellImageMap[entity];
