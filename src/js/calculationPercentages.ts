import { IObjectPercent, ICell } from '../interface/interface';

const calculationPercentages = (
  table: Array<ICell[]>,
  amount: ICell[],
): Array<IObjectPercent[]> => {
  const showPercent = (row: ICell[], idAmount: number): IObjectPercent[] => {
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
