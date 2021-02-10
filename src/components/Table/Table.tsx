import { useSelector, useDispatch } from 'react-redux';

import {
  getTable,
  getRowAmount,
  getAverage,
  getColumn,
  getComingNumbers,
  getPercent,
  indexCellRowAmount,
} from '../../redux/selectors';
import tableActions from '../../redux/table/table-action';
import createTable from '../../js/createTable';

import Button from '../Button/Button';
import {
  Container,
  TableRow,
  TableCell,
  NumberTable,
  AmountAndPercent,
  TableDel,
  Percent,
} from './Table.style';

const Table = () => {
  const dispatch = useDispatch();
  const table = useSelector(getTable);
  const rowAmount = useSelector(getRowAmount);
  const average = useSelector(getAverage);
  const column = useSelector(getColumn);
  const comingNumbers = useSelector(getComingNumbers);
  const percent = useSelector(getPercent);
  const indexRowAmount = useSelector(indexCellRowAmount);

  const addAmount = (id: string): void => {
    dispatch(tableActions.changeAmountCells(id));
  };

  const deleteRow = (id: number): void => {
    dispatch(tableActions.deleteRow(id));
  };

  const addRow = (): void => {
    const newRow = createTable(1, column);
    dispatch(tableActions.addRow(newRow));
  };

  const showPercent = (index: number): void => {
    dispatch(tableActions.addIndexSelectedRow(Number(index)));
  };

  const onMouseLeaveUnShowPercent = (): void => {
    dispatch(tableActions.deleteIndexSelectedRow());
  };

  const onHoverNearestAmount = (amount: number): void => {
    dispatch(tableActions.showNumber(amount));
  };

  const hideNearestAmount = (): void => {
    dispatch(tableActions.hideNumber());
  };

  return (
    <Container>
      <NumberTable>
        <tbody>
          {table.length > 0 &&
            table.map((tableRow, index) => (
              <TableRow key={index}>
                {tableRow.map(({ id, number }, idRow) => (
                  <TableCell
                    key={id}
                    onClick={() => addAmount(id)}
                    onMouseEnter={() => onHoverNearestAmount(number)}
                    onMouseLeave={hideNearestAmount}
                    color={
                      comingNumbers?.length &&
                      comingNumbers.find(
                        ({ indexNumber }) => indexNumber === id,
                      )
                    }
                  >
                    {number}
                    {indexRowAmount === index && (
                      <Percent>
                        {percent[index].reduce((acc, el, indexPercent) => {
                          if (indexPercent === idRow) {
                            return (acc = el.percent);
                          }
                          return acc;
                        }, '')}
                      </Percent>
                    )}
                  </TableCell>
                ))}
                <AmountAndPercent
                  key={rowAmount[index].id}
                  onMouseEnter={() => showPercent(index)}
                  onMouseLeave={onMouseLeaveUnShowPercent}
                >
                  {rowAmount[index].number}
                </AmountAndPercent>
                <TableDel onClick={() => deleteRow(index)}>Del</TableDel>
              </TableRow>
            ))}
          <TableRow>
            {average.map(({ id, average }) => (
              <AmountAndPercent key={id}>{average}</AmountAndPercent>
            ))}
          </TableRow>
        </tbody>
      </NumberTable>
      <Button onClick={addRow} text="Add Row" />
    </Container>
  );
};

export default Table;
