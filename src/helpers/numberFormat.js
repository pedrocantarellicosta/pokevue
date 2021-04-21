const numberFormat = (number) => {
  let formatNumber = Number(number);
  if (typeof number === 'number' && !Number.isNaN(number)) {
    formatNumber = new Intl.NumberFormat('pt-BR',
      {
        minimumFractionDigits: 0,
        minimumIntegerDigits: 3,
      }).format(number);
  }
  return formatNumber;
};

export default numberFormat;
