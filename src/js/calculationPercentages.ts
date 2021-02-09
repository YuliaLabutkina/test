import { IObjectPercent, IObject } from '../interface/interface';

const calculationPercentages = (
  table: Array<IObject[]>,
  amount: IObject[],
): Array<IObjectPercent[]> => {
  const showPercent = (row: IObject[], idAmount: number): IObjectPercent[] => {
    return row.map(el => {
      const percent: string = `${Math.round(
        (el.number / amount[idAmount].number) * 100,
      )}%`;
      return { percent };
    });
  };
  return table.map((el, id) => showPercent(el, id));
};

export default calculationPercentages;
