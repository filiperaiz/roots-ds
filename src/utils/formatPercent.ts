const formatPercent = (number: number) =>
  Number(number / 100).toLocaleString('pt-BR', {
    style: 'percent',
    minimumFractionDigits: 2
  })

export default formatPercent
