import { Board, Position, RevealingEntityEnum } from "@/types";
import { mapRecordValues } from "@/utils";

type Params = {
  /** Игровая доска */
  board: Board;
  /** Общее кол-во ячеек с открываемыми карточками на игровой доске */
  boardEntityCellsAmount: number;
} & Position;

/** Открывает ячейку - определяет вероятность каждого типа объекта и определяет тип объекта*/
export const revealCell = ({
  board,
  boardEntityCellsAmount,
  row,
  col,
}: Params) => {
  const { cells, hiddenEntitiesAmount, openCellsAmount } = board;

  /** Общее кол-во нераскрытых ячеек */
  const hiddenCellsAmount = boardEntityCellsAmount - openCellsAmount;

  // Логика такая: вычисляем для каждой сущности вероятность открытия, и, начиная с 0
  // задаём каждой сущности "верхнюю планку", при этом для каждой следующей сущности "планка"
  // будет вычисляться как значение "планки" предыдущей сущности + вероятность текущей сущности.
  // Дальше Math.random даёт значение от 0 до 1 и у каждой сущности есть свой диапазон значений,
  // в котором она "выпадает".

  console.log("hiddenEntitiesAmount: ", hiddenEntitiesAmount);
  console.log("hiddenCellsAmount: ", hiddenCellsAmount);
  /** Вероятности раскрытия */
  const possibilities: Record<RevealingEntityEnum, number> = mapRecordValues(
    hiddenEntitiesAmount,
    (amount) => amount / hiddenCellsAmount
  );

  /** Значения от 0 до 1, чтобы при открытии ячейки определить, каким будет тип ячейки */
  const fromZeroToOne: Record<RevealingEntityEnum, number> = {} as Record<
    RevealingEntityEnum,
    number
  >;

  let bottomPlank = 0;
  for (const entity in possibilities) {
    const newPlank: number = Number(
      (bottomPlank + possibilities[entity as RevealingEntityEnum]).toFixed(4)
    );

    fromZeroToOne[entity as RevealingEntityEnum] = newPlank;
    bottomPlank = newPlank;
  }

  console.log("possibilities: ", possibilities);
  console.log("fromZeroToOne: ", fromZeroToOne);
};
