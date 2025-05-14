import Image from "next/image";
import { CSSProperties, FC } from "react";

import { CELL_IMAGE_SIZE, CELL_SIZE } from "@/model/config";
import { Cell as CellType, OpeningEntityEnum } from "@/types";

import { getImageSrc } from "./utils";

import s from "./cell.module.scss";

type Props = {
  /** Данные ячейки */
  cell: CellType;
};

export const Cell: FC<Props> = ({
  cell: {
    position: { col, row },
  },
}) => {
  const type: OpeningEntityEnum | null =
    Math.random() > 0.5 ? OpeningEntityEnum.ZOMBIE : null;

  const hasOpened = type !== null;

  // TODO: положить в утилиту getCellStyle
  const style: CSSProperties = {
    gridArea: [row + 1, col + 1, row + 2, col + 2].join(" / "),
    width: CELL_SIZE,
    height: CELL_SIZE,
    borderTopWidth: Number(row === 0),
    borderLeftWidth: Number(col === 0),
  };

  if (hasOpened) {
    style.background = "none";
  }

  return (
    <div className={s.cell} style={style}>
      {hasOpened && (
        <Image
          src={getImageSrc(type)}
          width={CELL_IMAGE_SIZE}
          height={CELL_IMAGE_SIZE}
          alt="Иконка.свг"
        />
      )}
    </div>
  );
};
