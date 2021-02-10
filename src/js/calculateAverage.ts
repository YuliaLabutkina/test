import { v4 as uuidv4 } from 'uuid';
import { ICell, IAverageArray } from '../interface/interface';

const calculateAverage = (
  table: Array<ICell[]>,
  column: number,
): IAverageArray[] => {
  const averageArray: IAverageArray[] = [];
  Array.from({ length: column }, () => {
    const average = table.reduce((acc, row, index, arr) => {
      if (index === arr.length - 1) {
        const avrg = Math.round(
          (acc + row[averageArray.length].number) / arr.length,
        );
        return avrg;
      }
      const val = acc + row[averageArray.length].number;

      return val;
    }, 0);

    averageArray.push({ id: uuidv4(), average });
  });

  return averageArray;
};

export default calculateAverage;
