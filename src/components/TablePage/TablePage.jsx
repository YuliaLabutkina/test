import { useSelector, useDispatch } from 'react-redux';

import {
  getTable,
  getRowAmount,
  getPercent,
  getColumn,
  getCell,
  getComingNumbers,
} from '../../redux/selectors';
import tableActions from '../../redux/table/table-action';
import createTable from '../../js/createTable';
import onFocusShowPercentages from '../../js/onFocusShowPercentages';
import showNearestAmount from '../../js/showNearestAmount';

import Button from '../Button';
import {
  Container,
  TableRow,
  TableCell,
  Table,
  AmountAndPercent,
  TableDel,
  Percent,
} from './TablePage.style';

const TablePage = () => {
  const dispatch = useDispatch();
  const table = useSelector(getTable);
  const rowAmount = useSelector(getRowAmount);
  const columnPercent = useSelector(getPercent);
  const column = useSelector(getColumn);
  const cell = useSelector(getCell);
  const comingNumbers = useSelector(getComingNumbers);

  const addAmount = id => {
    dispatch(tableActions.changeAmountCells(id));
  };

  const deleteRow = id => {
    dispatch(tableActions.deleteRow(id));
  };

  const addRow = () => {
    const newRow = createTable(1, column);
    dispatch(tableActions.addRow(newRow));
  };

  const showPercent = index => {
    const newRow = onFocusShowPercentages(index, table, rowAmount, true);
    dispatch(tableActions.createPercentages({ newRow, index }));
  };

  const onMouseLeaveUnShowPercent = index => {
    const newRow = onFocusShowPercentages(index, table, rowAmount, false);
    dispatch(tableActions.createPercentages({ newRow, index }));
  };

  const onHoverNearestAmount = amount => {
    const comingNumbers = showNearestAmount(table, amount, cell);
    dispatch(tableActions.showComingNumbers(comingNumbers));
  };

  const hideNearestAmount = () => {
    dispatch(tableActions.hideComingNumbers());
  };

  return (
    <Container>
      <Table>
        <tbody>
          {table.length > 0 &&
            table.map((tableRow, index) => (
              <TableRow key={index}>
                {tableRow.map(({ id, number, percent, show }) => (
                  <TableCell
                    key={id}
                    onClick={() => addAmount(id)}
                    onMouseEnter={() => onHoverNearestAmount(number)}
                    onMouseLeave={hideNearestAmount}
                    color={
                      comingNumbers.length &&
                      comingNumbers.find(
                        ({ indexNumber }) => indexNumber === id,
                      )
                    }
                  >
                    {number}
                    {show && <Percent>{percent}</Percent>}
                  </TableCell>
                ))}
                <AmountAndPercent
                  key={rowAmount[index].id}
                  onMouseEnter={() => showPercent(index)}
                  onMouseLeave={() => onMouseLeaveUnShowPercent(index)}
                >
                  {rowAmount[index].sum}
                </AmountAndPercent>
                <TableDel onClick={() => deleteRow(index)}>Del</TableDel>
              </TableRow>
            ))}
          <TableRow>
            {columnPercent.map(({ id, percent }) => (
              <AmountAndPercent key={id}>{percent}</AmountAndPercent>
            ))}
          </TableRow>
        </tbody>
      </Table>
      <Button onClick={addRow} text="Add Row" />
    </Container>
  );
};

export default TablePage;
