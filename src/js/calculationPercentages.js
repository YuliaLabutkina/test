const calculationPercentages = (table, amount) => {
  const showPercent = (row, idAmount) => {
    return row.map(el => {
      const percent = `${Math.round(
        (el.number / amount[idAmount].sum) * 100,
      )}%`;
      return { percent };
    });
  };
  return table.map((el, id) => showPercent(el, id));
};

export default calculationPercentages;
