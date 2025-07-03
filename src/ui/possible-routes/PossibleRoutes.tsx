"use client";

import { FC } from "react";

import { v4 as uuidv4 } from "uuid";

import { canMove, getPossibleRoutes } from "@/model/player";
import { Position } from "@/types";

import { PossibleRoute } from "./PossibleRoute";

import s from "./routes.module.scss";

type Props = {
  currentPosition: Position;
  targetPosition?: Position;
};

export const PossibleRoutes: FC<Props> = ({
  currentPosition,
  targetPosition,
}) => {
  console.log("currentPosition: ", currentPosition);
  console.log("targetPosition: ", targetPosition);
  if (!targetPosition || !canMove(currentPosition, targetPosition, 5)) {
    return null;
  }

  const possibleRoutes = getPossibleRoutes(currentPosition, targetPosition, 5);
  const ids = possibleRoutes.map(() => uuidv4());

  return (
    <svg className={s.routes_container}>
      {possibleRoutes
        .filter((_, index) => index < 1)
        .map((route, index) => (
          <PossibleRoute key={ids[index]} route={route} />
        ))}
    </svg>
  );
};
