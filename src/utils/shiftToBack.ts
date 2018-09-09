export const shiftToBack = <T>(amountToShift: number, array: T[]): T[] => {
  const front = array.slice(0, amountToShift);
  const back = array.slice(amountToShift);
  return [...back, ...front];
};
