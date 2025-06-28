import { Item } from "./item";
import { Position } from "./shared";
import { Weapon } from "./weapon";

/** Класс игрока */
export enum PlayerClassEnum {
  /** Целитель */
  HEALER = "HEALER",
  /** Бегун */
  RUNNER = "RUNNER",
  /** Стрелок */
  SHOOTER = "SHOOTER",
  /** Танк */
  TANK = "TANK",
  /** Воин */
  WARRIOR = "WARRIOR",
}

/** Игрок */
export type Player = {
  /** Класс игрока */
  class: PlayerClassEnum;
  /** Предметы */
  items: Item[];
  /** Здоровье */
  health: number;
  /** Координаты */
  position: Position;
  /** Оружие */
  weapons: Weapon[];
};
