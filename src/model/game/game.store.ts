import { create } from "zustand";

import { Game, GamePhase, PlayerClassEnum } from "@/types";
import { INITIAL_PLAYER_POSITION } from "../config";

/** Начальное состояние игры */
const initialGameState: Game = {
  phase: GamePhase.ROUTE_CHOOSING,
  turn: {
    id: 1,
    name: "Ириня",
    playerEntity: {
      class: PlayerClassEnum.SHOOTER,
      position: INITIAL_PLAYER_POSITION,
    },
  },
  players: [
    {
      id: 1,
      name: "Ириня",
      playerEntity: {
        class: PlayerClassEnum.SHOOTER,
        position: INITIAL_PLAYER_POSITION,
      },
    },
    {
      id: 2,
      name: "Дамир",
      playerEntity: {
        class: PlayerClassEnum.RUNNER,
        position: INITIAL_PLAYER_POSITION,
      },
    },
  ],
};

interface GameState {
  /** Состояние игрока */
  game: Game;
  /** Сеттер состояния игрока */
  setGame: (game: Game | ((prev: Game) => Game)) => void;
}

export const useGameState = create<GameState>((set) => ({
  game: initialGameState,
  setGame: (updater) =>
    set((state) => ({
      game: typeof updater === "function" ? updater(state.game) : updater,
    })),
}));
