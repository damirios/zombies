import React, { FC } from "react";

import { Position } from "@/types";

type Props = {
  route: Position[];
};

export const PossibleRoute: FC<Props> = ({ route }) => {
  const dAttribute = "M 50 50 L 150 50 A 25 25 0 0 1 150 75 L 150 150";

  return <path d={dAttribute} stroke="black" strokeWidth="5" fill="none" />;
};
