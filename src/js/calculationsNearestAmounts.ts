import { ICell, INearestAmount } from '../interface/interface';

const calculationsNearestAmounts = (
  table: Array<ICell[]>,
  amount: number | null,
  cell: number,
): INearestAmount[] | undefined => {
  if (!amount) return;

  const arrayAmount = table.flat();
  const difference = arrayAmount.map(({ number }) =>
    amount >= number ? amount - number : number - amount,
  );
  const differenceSort = [...difference]
    .sort((a, b) => a - b)
    .slice(0, cell + 1);
  const mySet = new Set(differenceSort);
  const indexArray = difference.reduce((acc: number[], number, id) => {
    mySet.forEach(el => number === el && acc.push(id));
    return acc;
  }, []);
  const result = arrayAmount.reduce((acc: INearestAmount[], el, id) => {
    indexArray.forEach(
      index => index === id && acc.push({ indexNumber: el.id }),
    );
    return acc;
  }, []);

  return result;
};

export default calculationsNearestAmounts;
