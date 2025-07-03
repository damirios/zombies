import clsx from "clsx";
import Image from "next/image";
import { CSSProperties, FC, MouseEventHandler } from "react";

import { HIDDEN_CELL_PATH } from "@/config";
import { onClickCell, useBoardState } from "@/model/board";
import { CELL_IMAGE_SIZE, CELL_SIZE } from "@/model/config";
import { Cell as CellType, GamePlayer } from "@/types";
import { getPlayerIconSrc } from "@/utils";

import { getRevealingCellImageSrc } from "./utils";

import s from "./cell.module.scss";

type Props = {
  /** Данные ячейки */
  cell: CellType;
  /** Данные игрока */
  player?: GamePlayer;
  /** Хэндлер наведения курсора */
  onHover: (cell: CellType) => void;
};

export const Cell: FC<Props> = ({ cell, player, onHover }) => {
  const {
    isOccupied,
    isRevealed,
    position: { col, row },
    type,
  } = cell;

  const { board } = useBoardState();

  const handleClick = () => {
    console.log("click: ");
    if (!isRevealed) {
      onClickCell({ board, row, col });
    }
  };

  const handleHover: MouseEventHandler<SVGSVGElement> = () => {
    console.log("cell: ", cell);
    onHover(cell);
  };
  console.log("cell: ", cell);

  const attributes = {
    x: `${col * CELL_SIZE}px`,
    y: `${row * CELL_SIZE}px`,
    width: `${CELL_SIZE}px`,
    height: `${CELL_SIZE}px`,
    fill: "white",
  };
  // TODO: положить в утилиту getCellStyle
  const style: CSSProperties = {
    gridArea: [row + 1, col + 1, row + 2, col + 2].join(" / "),
    width: CELL_SIZE,
    height: CELL_SIZE,
    borderTopWidth: Number(row === 0),
    borderLeftWidth: Number(col === 0),
  };

  if (player) {
    const {
      playerEntity: {
        class: playerClass,
        position: { col, row },
      },
    } = player;

    const className = clsx(s.default, s.revealed);
    // TODO: положить в утилиту getCellStyle
    const style: CSSProperties = {
      gridArea: [row + 1, col + 1, row + 2, col + 2].join(" / "),
      width: CELL_SIZE,
      height: CELL_SIZE,
      borderTopWidth: Number(row === 0),
      borderLeftWidth: Number(col === 0),
    };

    return (
      <rect {...attributes} onMouseEnter={handleHover} onClick={handleClick}>
        <Image
          src={getPlayerIconSrc(playerClass)}
          width={CELL_IMAGE_SIZE}
          height={CELL_IMAGE_SIZE}
          alt="Иконка.свг"
        />
      </rect>
    );
  }

  // Если на ячейке нет карточки
  if (!isOccupied) {
    const className = clsx(s.default, s.empty);

    return <rect {...attributes} onMouseEnter={handleHover} />;
  }

  // Если на ячейке есть карточка и она открыта
  if (isRevealed) {
    const className = clsx(s.default, s.revealed);

    return (
      <svg
        className={className}
        style={style}
        onClick={handleClick}
        onMouseEnter={handleHover}
      >
        <Image
          src={getRevealingCellImageSrc(type!)}
          width={CELL_IMAGE_SIZE}
          height={CELL_IMAGE_SIZE}
          alt="Иконка.свг"
        />
      </svg>
    );
  }

  return (
    <rect {...attributes} onClick={handleClick} onMouseEnter={handleHover}>
      <Image
        src={HIDDEN_CELL_PATH}
        width={CELL_IMAGE_SIZE}
        height={CELL_IMAGE_SIZE}
        alt="Иконка.свг"
      />
    </rect>
  );
};
