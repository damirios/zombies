import { create } from "zustand";

import { Zombie, ZombieClassEnum } from "@/types";

/** Начальное состояние зомби */
const initialZombieState: Zombie = {
  class: ZombieClassEnum.WALKER,
  canMove: false,
  position: null,
};

interface ZombieState {
  /** Состояние зомби */
  zombie: Zombie;
  /** Сеттер состояния зомби */
  setZombie: (zombie: Zombie | ((prev: Zombie) => Zombie)) => void;
}

export const usePlayerState = create<ZombieState>((set) => ({
  zombie: initialZombieState,
  setZombie: (updater) =>
    set((state) => ({
      zombie: typeof updater === "function" ? updater(state.zombie) : updater,
    })),
}));
