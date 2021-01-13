import { useState } from 'react';
import { useDispatch } from 'react-redux';

import createTable from '../../js/createTable';
import tableActions from '../../redux/table/table-action';
import tableCreationActions from '../../redux/tableCreation/tableCreation-action';
import { Form, LabelForm, InputForm, Button } from './TableCreationPage.style';

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
      <Button type="submit">Create table</Button>
    </Form>
  );
};

export default TableCreationPage;
