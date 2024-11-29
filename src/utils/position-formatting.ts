import dayjs from 'dayjs'
import { i18n } from '@/content/i18n'
import type { Position } from '@/constants/positions'
import { stackWeight } from '@/constants/stack-weights'

function capitalize(str: string) {
  return `${str.charAt(0).toUpperCase()}${str.slice(1)}`
}

export function formatWorkPeriod(position: Position): string {
  const from = dayjs(position.period[0]).format('MMM YYYY')
  let to = i18n.value.present

  if (position.period[1]) {
    to = dayjs(position.period[1]).format('MMM YYYY')
  }

  return `${capitalize(from)} - ${capitalize(to)}`
}

export function formatStack(position: Position): string {
  return [
    position.mainStack,
    ...[...position.feStack, ...position.beStack]
      .filter((stack) => stack !== position.mainStack)
      .sort((a, b) => stackWeight[b] - stackWeight[a])
  ].join('/')
}
