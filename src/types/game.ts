import { Player } from "./player";

/** Фаза игры */
export enum GamePhase {
  /** Выбор персонажа */
  CHARACTER_CHOOSING = "CHARACTER_CHOOSING",
  /** Выбор маршрута */
  ROUTE_CHOOSING = "ROUTE_CHOOSING",
  /** Вращение колеса хода */
  WHEEL_TURNING = "WHEEL_TURNING",
}

/** Данные игрока */
export type GamePlayer = {
  /** Id */
  id: number;
  /** Имя */
  name: string;
  /** Сущность игрока на доске */
  playerEntity: Pick<Player, "class" | "position">;
};

/** Игра */
export type Game = {
  /** Фаза игры */
  phase: GamePhase;
  /** Чей ход сейчас. TODO: тут будет id игрока */
  turn: GamePlayer;
  /** Данные всех игроков */
  players: GamePlayer[];
};
