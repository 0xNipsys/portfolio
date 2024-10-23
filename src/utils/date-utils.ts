import dayjs from 'dayjs'
import { i18n } from '@/content/i18n'

export function formatWorkPeriod(period: [Date, Date?]): string {
  const from = dayjs(period[0]).format('MMM YYYY')
  let to = i18n.value.present

  if (period[1]) {
    to = dayjs(period[1]).format('MMM YYYY')
  }

  return `${from} - ${to}`.toLowerCase()
}
