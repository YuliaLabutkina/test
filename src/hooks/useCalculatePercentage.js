import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react';

const useCalculatePercentage = (table, column, row) => {
  const [percentsArray, setPercentsArray] = useState([]);
  const [columnArray, setColumnArray] = useState([]);

  const createPercent = (index, table, column) => {
    for (let i = column; i > 0; i = i - 1) {
      const columns = table[i - 1];
      setColumnArray(prevState => ({ ...prevState, ...columns[index].number }));
    }

    const result = Math.round(
      columnArray.reduce((acc, value) => acc + value, 0) / column,
    );
    // setColumnArray([]);

    return result;
  };

  useEffect(() => {
    const calculatePercentage = () => {
      let rows = row;
      for (let i = row; i > 0; i = i - 1) {
        rows = rows - 1;
        const percent = createPercent(rows, table, column);
        //   const res = { id: uuidv4(), percent };
        console.log(percent);
        setPercentsArray(prevState => ({
          ...prevState,
          ...{ id: uuidv4(), percent },
        }));
      }
      // setPercentsArray(percentsArray.reverse());
    };
    console.log('percent');
    calculatePercentage();
  }, []);

  // const calculatePercentage = () => {
  //     let rows = row;
  //     for (let i = row; i > 0; i = i - 1) {
  //         rows = rows - 1;
  //         const percent = createPercent(rows, table, column);
  //         setPercentsArray({ id: uuidv4(), percent });
  //     };
  //     const res = percentsArray.reverse();
  //     setPercentsArray([]);
  //     return res;
  // };

  return [...percentsArray];
};

export default useCalculatePercentage;
