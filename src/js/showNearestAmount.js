const showNearestAmount = (table, amount, cell) => {
  const indexArray = [];

  const arrayAmount = table.flat();
  const difference = arrayAmount.map(({ number }) =>
    amount >= number ? amount - number : number - amount,
  );
  const differenceSort = [...difference]
    .sort((a, b) => a - b)
    .slice(0, cell + 1);
  const mySet = new Set(differenceSort);
  mySet.forEach(number =>
    difference.forEach((el, id) => number === el && indexArray.push(id)),
  );
  const result = arrayAmount.reduce((acc, el, id) => {
    indexArray.forEach(
      index => index === id && acc.push({ indexNumber: el.id }),
    );
    return acc;
  }, []);

  return result;
};

export default showNearestAmount;
