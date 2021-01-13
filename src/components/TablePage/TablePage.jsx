import { useSelector, useDispatch } from 'react-redux';

import {
  getTable,
  getRowAmount,
  getPercent,
  getRow,
} from '../../redux/selectors';
import tableActions from '../../redux/table/table-action';
import createTable from '../../js/createTable';

const TablePage = () => {
  const dispatch = useDispatch();
  const table = useSelector(getTable);
  const rowAmount = useSelector(getRowAmount);
  const columnPercent = useSelector(getPercent);
  const row = useSelector(getRow);

  const addAmount = id => {
    dispatch(tableActions.changeAmountCells(id));
  };

  const deleteRow = id => {
    dispatch(tableActions.deleteRow(id));
  };

  const addRow = () => {
    const newRow = createTable(row, 1);
    console.log(newRow);
    dispatch(tableActions.addRow(newRow));
  };

  return (
    <div>
      <table>
        <tbody>
          {table.length > 0 &&
            table.map((tableRow, index) => (
              <tr key={index}>
                {tableRow.map(({ id, number }) => (
                  <td key={id} onClick={() => addAmount(id)}>
                    {number}
                  </td>
                ))}
                <td key={rowAmount[index].id}>{rowAmount[index].sum}</td>
                <td onClick={() => deleteRow(index)}>Del</td>
              </tr>
            ))}
          <tr>
            {columnPercent.map(({ id, percent }) => (
              <td key={id}>{percent}</td>
            ))}
          </tr>
        </tbody>
      </table>
      <button onClick={addRow}>Add Row</button>
    </div>
  );
};

export default TablePage;
