import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

const transformDate = (date = new Date(), fmt = 'dd/MM/yyyy') =>
  format(date, fmt, { locale: ptBR })

const formatDate = (date: string, fmt: string) => {
  if (typeof date === 'string') {
    const dateString = date.replace(/-/g, '/')

    return transformDate(new Date(dateString), fmt)
  }

  return transformDate(date, fmt)
}

export default formatDate
