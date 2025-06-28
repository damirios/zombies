import { GamePlayer } from "@/types";

export const getNextPlayer = (
  currentPlayerId: number,
  players: GamePlayer[]
) => {
  const sortedPlayers = players.toSorted((a, b) => a.id - b.id);
  return (
    sortedPlayers.find((player) => player.id > currentPlayerId) ??
    sortedPlayers[0]
  );
};
