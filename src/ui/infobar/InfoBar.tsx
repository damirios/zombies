"use client";

import Image from "next/image";
import { FC } from "react";

import { useGameState } from "@/model/game";
import { getPlayerIconSrc } from "@/utils";

import { getNextPlayer } from "./utils";

import s from "./infobar.module.scss";
import { PLAYER_ICON_SIZE } from "@/model/config";

type Props = {
  className: string;
};

export const InfoBar: FC<Props> = ({ className }) => {
  const {
    game: {
      players,
      turn: {
        playerEntity: { class: currentPlayerClass },
        id,
        name: currentPlayerName,
      },
    },
  } = useGameState();

  /** Данные следующего игрока */
  const {
    name: nextPlayerName,
    playerEntity: { class: nextPlayerClass },
  } = getNextPlayer(id, players);

  return (
    <div className={`${s.wrapper} ${className}`}>
      <div className={s.current_turn}>
        <p>Ход игрока:</p>
        <div className={s.player_data}>
          {currentPlayerName}
          <Image
            src={getPlayerIconSrc(currentPlayerClass)}
            width={PLAYER_ICON_SIZE}
            height={PLAYER_ICON_SIZE}
            alt="Иконка.свг"
          />
        </div>
      </div>

      <div className={s.next_turn}>
        <p>Следующим ходит игрок:</p>
        <div className={s.player_data}>
          {nextPlayerName}
          <Image
            src={getPlayerIconSrc(nextPlayerClass)}
            width={PLAYER_ICON_SIZE}
            height={PLAYER_ICON_SIZE}
            alt="Иконка.свг"
          />
        </div>
      </div>
    </div>
  );
};
