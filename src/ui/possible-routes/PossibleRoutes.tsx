"use client";

import { FC, useMemo } from "react";

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
  if (!targetPosition || !canMove(currentPosition, targetPosition, 5)) {
    return null;
  }

  const possibleRoutes = useMemo(
    () => getPossibleRoutes(currentPosition, targetPosition, 5),
    [currentPosition, targetPosition]
  );

  const ids = useMemo(
    () => possibleRoutes.map(() => uuidv4()),
    [possibleRoutes]
  );

  return (
    <svg className={s.routes_container}>
      {possibleRoutes.map((route, index) => (
        <PossibleRoute key={ids[index]} route={route} />
      ))}
    </svg>
  );
};
