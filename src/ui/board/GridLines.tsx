import { BOARD_COLS, BOARD_ROWS, CELL_SIZE } from "@/model/config";

export const GridLines = () => {
  const horizontalLinesNumber = BOARD_ROWS + 1;
  const verticalLinesNumber = BOARD_COLS + 1;
  const color = "#333333";

  return (
    <svg width="100%" height="100%">
      <rect
        x="0"
        y="0"
        width="100%"
        height="100%"
        stroke="#000000"
        strokeWidth={2}
        fill="none"
        rx="10"
      />

      {Array(horizontalLinesNumber)
        .fill(1)
        .map((item, index) => (
          <line
            x1="50px"
            x2={`calc(100% - 50px)`}
            y1={`${index * CELL_SIZE + 50}px`}
            y2={`${index * CELL_SIZE + 50}px`}
            stroke={color}
          />
        ))}

      {Array(verticalLinesNumber)
        .fill(1)
        .map((item, index) => (
          <line
            x1={`${index * CELL_SIZE + 50}px`}
            x2={`${index * CELL_SIZE + 50}px`}
            y1="50px"
            y2={`calc(100% - 50px)`}
            stroke={color}
          />
        ))}
    </svg>
  );
};
