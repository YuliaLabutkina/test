import { useSelector } from 'react-redux';

import TableCreationPage from '../TableCreationPage';
import TablePage from '../TablePage';
import { isCreated } from '../../redux/selectors';

const App = () => {
  const isCreatedTable = useSelector(isCreated);
  return <>{!isCreatedTable ? <TableCreationPage /> : <TablePage />}</>;
};

export default App;
