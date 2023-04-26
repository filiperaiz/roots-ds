const transformDate = (date = new Date(), fmt = 'dd/MM/yyyy') => {
  const day = date.getDate().toString().padStart(2, '0')
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const year = date.getFullYear().toString()

  const dateObj: any = { dd: day, MM: month, yyyy: year }

  return fmt.replace(/dd|MM|yyyy/g, (match) => dateObj[match])
}

const formatDate = (date: string | Date, fmt: string) => {
  const dateObject =
    typeof date === 'string' ? new Date(date.replace(/-/g, '/')) : date

  return transformDate(dateObject, fmt)
}

export default formatDate
