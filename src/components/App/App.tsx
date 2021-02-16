import { useSelector } from 'react-redux';

import TableCreation from '../TableCreation/TableCreation';
import Table from '../Table/Table';
import { isCreated } from '../../redux/selectors';

const App = () => {
  const isCreatedTable = useSelector(isCreated);
  return <>{!isCreatedTable ? <TableCreation /> : <Table />}</>;
};

export default App;
