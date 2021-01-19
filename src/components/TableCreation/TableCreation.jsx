import { useState } from 'react';
import { useDispatch } from 'react-redux';

import createTable from '../../js/createTable';
import tableActions from '../../redux/table/table-action';
import tableCreationActions from '../../redux/tableCreation/tableCreation-action';
import Button from '../Button';

import { Form, LabelForm, InputForm } from './TableCreation.style';

const TableCreation = () => {
  const dispatch = useDispatch();
  const [row, setRow] = useState(0);
  const [column, setColumn] = useState(0);
  const [cells, setCells] = useState(0);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    switch (name) {
      case 'row':
        setRow(value);
        break;
      case 'column':
        setColumn(value);
        break;
      case 'cells':
        setCells(value);
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
    dispatch(tableCreationActions.createX(Number(cells)));
    dispatch(tableActions.createTable(table));
    dispatch(tableActions.isCreated());

    reset();
  };

  const reset = () => {
    setRow(0);
    setColumn(0);
    setCells(0);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <LabelForm>
        {' '}
        Add row
        <InputForm
          type="number"
          onChange={handleChange}
          name="row"
          value={row}
        />
      </LabelForm>
      <LabelForm>
        {' '}
        Add column
        <InputForm
          type="number"
          onChange={handleChange}
          name="column"
          value={column}
        />
      </LabelForm>
      <LabelForm>
        {' '}
        How many cells
        <InputForm
          type="number"
          onChange={handleChange}
          name="cells"
          value={cells}
        />
      </LabelForm>
      <Button type="submit" text="Create table" />
    </Form>
  );
};

export default TableCreation;
