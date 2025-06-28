/** Мэппинг значений объекта (аналог .map для массивов) */
export const mapRecordValues = <K extends string, V, U>(
  obj: Record<K, V>,
  func: (value: V, key: K) => U
): Record<K, U> =>
  Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [key, func(value as V, key as K)])
  ) as Record<K, U>;
