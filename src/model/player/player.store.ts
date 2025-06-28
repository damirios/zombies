import { create } from "zustand";

import { Player, PlayerClassEnum } from "@/types";

import { INITIAL_PLAYER_HEALTHS, INITIAL_PLAYER_POSITION } from "../config";

/** TODO: Заменить на выбираемый класс */
const playerClass = PlayerClassEnum.SHOOTER;

/** Начальное состояние игрока */
const initialPlayerState: Player = {
  class: playerClass,
  items: [],
  health: INITIAL_PLAYER_HEALTHS[playerClass],
  position: INITIAL_PLAYER_POSITION,
  weapons: [],
};

interface PlayerState {
  /** Состояние игрока */
  player: Player;
  /** Сеттер состояния игрока */
  setPlayer: (player: Player | ((prev: Player) => Player)) => void;
}

export const usePlayerState = create<PlayerState>((set) => ({
  player: initialPlayerState,
  setPlayer: (updater) =>
    set((state) => ({
      player: typeof updater === "function" ? updater(state.player) : updater,
    })),
}));
