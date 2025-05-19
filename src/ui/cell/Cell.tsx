import clsx from "clsx";
import Image from "next/image";
import { CSSProperties, FC } from "react";

import { CELL_IMAGE_SIZE, CELL_SIZE } from "@/model/config";
import { Cell as CellType, RevealingEntityEnum } from "@/types";

import { getImageSrc } from "./utils";

import s from "./cell.module.scss";
import { onClickCell, useBoardState } from "@/model/board";
import { HIDDEN_CELL_PATH } from "@/config";

type Props = {
  /** Данные ячейки */
  cell: CellType;
};

export const Cell: FC<Props> = ({ cell }) => {
  const {
    isOccupied,
    isRevealed,
    position: { col, row },
  } = cell;

  const { board } = useBoardState();

  const handleClick = () => {
    onClickCell({ board, row, col });
  };

  // TODO: положить в утилиту getCellStyle
  const style: CSSProperties = {
    gridArea: [row + 1, col + 1, row + 2, col + 2].join(" / "),
    width: CELL_SIZE,
    height: CELL_SIZE,
    borderTopWidth: Number(row === 0),
    borderLeftWidth: Number(col === 0),
  };

  // Если на ячейке нет карточки
  if (!isOccupied) {
    const className = clsx(s.cell, s.cell_empty);

    return <div className={className} style={style} />;
  }

  // Если на ячейке есть карточка и она открыта
  if (isRevealed) {
    const className = clsx(s.cell, s.cell_opened);

    return (
      <div className={className} style={style} onClick={handleClick}>
        <Image
          src={getImageSrc(RevealingEntityEnum.ZOMBIE)}
          width={CELL_IMAGE_SIZE}
          height={CELL_IMAGE_SIZE}
          alt="Иконка.свг"
        />
      </div>
    );
  }

  return (
    <div className={s.cell} style={style} onClick={handleClick}>
      <Image
        src={HIDDEN_CELL_PATH}
        width={CELL_IMAGE_SIZE}
        height={CELL_IMAGE_SIZE}
        alt="Иконка.свг"
      />
    </div>
  );
};
