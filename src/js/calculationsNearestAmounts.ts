import { IObject, INearestAmount } from '../interface/interface';

const calculationsNearestAmounts = (
  table: Array<IObject[]>,
  amount: number | null,
  cell: number,
): INearestAmount[] | undefined => {
  if (!amount) return;
  const indexArray: number[] = [];

  const arrayAmount: IObject[] = table.flat();
  const difference: number[] = arrayAmount.map(({ number }) =>
    amount >= number ? amount - number : number - amount,
  );
  const differenceSort: number[] = [...difference]
    .sort((a, b) => a - b)
    .slice(0, cell + 1);
  const mySet: Set<number> = new Set(differenceSort);
  mySet.forEach((number: number) =>
    difference.forEach(
      (el: number, id: number) => number === el && indexArray.push(id),
    ),
  );
  const result = arrayAmount.reduce(
    (acc: INearestAmount[], el: IObject, id: number): INearestAmount[] => {
      indexArray.forEach(
        (index: number) => index === id && acc.push({ indexNumber: el.id }),
      );
      return acc;
    },
    [],
  );

  return result;
};

export default calculationsNearestAmounts;
