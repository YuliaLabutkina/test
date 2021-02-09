import { useState } from 'react';
import { useDispatch } from 'react-redux';

import createTable from '../../js/createTable';
import tableActions from '../../redux/table/table-action';
import tableCreationActions from '../../redux/tableCreation/tableCreation-action';
import Button from '../Button/Button';
import { AppDispatch } from '../../redux/store';
import { IObject } from '../../interface/interface';

import { Form, LabelForm, InputForm } from './TableCreation.style';

const TableCreation = () => {
  const dispatch: AppDispatch = useDispatch();
  const [row, setRow] = useState(0);
  const [column, setColumn] = useState(0);
  const [cells, setCells] = useState(0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    switch (name) {
      case 'row':
        setRow(Number(value));
        break;
      case 'column':
        setColumn(Number(value));
        break;
      case 'cells':
        setCells(Number(value));
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const table: Array<IObject[]> = createTable(row, column);

    dispatch(tableCreationActions.createRow(row));
    dispatch(tableCreationActions.createColumn(column));
    dispatch(tableCreationActions.createX(cells));
    dispatch(tableActions.createTable(table));
    dispatch(tableActions.isCreated());

    reset();
  };

  const reset = (): void => {
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
