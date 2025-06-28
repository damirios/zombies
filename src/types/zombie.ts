import { Position } from "./shared";

/** Класс зомби */
export enum ZombieClassEnum {
  /** Зомби */
  WALKER = "WALKER",
  /** Дьявольский пёс */
  DEVIL_DOG = "DEVIL_DOG",
  /** Паук-мутант */
  SPIDER_MUTANT = "SPIDER_MUTANT",
  /** Болотный ужас */
  SWAMP_HORROR = "SWAMP_HORROR",
}

/** Зомби */
export type Zombie = {
  /** Класс зомби */
  class: ZombieClassEnum;
  /** Может ли сейчас двигаться */
  canMove: boolean;
  /** Координаты */
  position: Position | null;
};
