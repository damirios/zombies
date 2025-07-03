import { GamePlayer, Position } from "@/types";

export const getPlayerByPosition = (
  players: GamePlayer[],
  { row: currentRow, col: currentCol }: Position
) =>
  players.find(
    ({
      playerEntity: {
        position: { col, row },
      },
    }) => row === currentRow && col === currentCol
  );
