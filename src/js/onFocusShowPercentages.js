const onFocusShowPercentages = (index, table, amount, show) => {
  const showPercent = () => {
    return table[index].map(el => {
      const percent = `${Math.round((el.number / amount[index].sum) * 100)}%`;
      return { ...el, show, percent };
    });
  };
  return showPercent();
};

export default onFocusShowPercentages;
