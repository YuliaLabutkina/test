import { useState } from 'react';
import { useDispatch } from 'react-redux';

import createTable from '../../js/createTable';
import tableActions from '../../redux/table/table-action';
import tableCreationActions from '../../redux/tableCreation/tableCreation-action';

const TableCreationPage = () => {
  const dispatch = useDispatch();
  const [row, setRow] = useState(0);
  const [column, setColumn] = useState(0);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    switch (name) {
      case 'row':
        setRow(value);
        break;
      case 'column':
        setColumn(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    const table = createTable(row, column);

    dispatch(tableCreationActions.createRow(Number(row)));
    dispatch(tableCreationActions.createColumn(Number(column)));
    dispatch(tableActions.createTable(table));
    dispatch(tableActions.isCreated());

    reset();
  };

  const reset = () => {
    setRow(0);
    setColumn(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        {' '}
        Введите количество строк
        <input type="number" onChange={handleChange} name="row" value={row} />
      </label>
      <label>
        {' '}
        Введите количество колонок
        <input
          type="number"
          onChange={handleChange}
          name="column"
          value={column}
        />
      </label>
      <button type="submit">Create table</button>
    </form>
  );
};

export default TableCreationPage;
