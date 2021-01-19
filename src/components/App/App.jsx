import { useSelector } from 'react-redux';

import TableCreation from '../TableCreation';
import Table from '../Table';
import { isCreated } from '../../redux/selectors';

const App = () => {
  const isCreatedTable = useSelector(isCreated);
  return <>{!isCreatedTable ? <TableCreation /> : <Table />}</>;
};

export default App;
