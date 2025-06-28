import { PlayerClassEnum } from "@/types";

const { HEALER, RUNNER, SHOOTER, TANK, WARRIOR } = PlayerClassEnum;

const prefix = "/icons/players";

const cellImageMap: Record<PlayerClassEnum, string> = {
  [HEALER]: `${prefix}/runner.svg`,
  [RUNNER]: `${prefix}/runner.svg`,
  [SHOOTER]: `${prefix}/runner.svg`,
  [TANK]: `${prefix}/runner.svg`,
  [WARRIOR]: `${prefix}/runner.svg`,
};

export const getPlayerIconSrc = (entity: PlayerClassEnum): string =>
  cellImageMap[entity];
