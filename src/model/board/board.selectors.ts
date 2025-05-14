import { useBoardStore } from "./board.store";

export const useBoardState = () => useBoardStore((state) => state.board);
