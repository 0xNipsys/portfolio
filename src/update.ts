import axios from 'axios'
import { WebsiteUrl } from '@/constants/base'

const cidMatch = /^[a-zA-Z0-9]+$/
const cidUrlMatch = /\/ipfs\/([a-zA-Z0-9]+)/

export async function GetNewCid(): Promise<string | null> {
  const latestCid = (await axios.get(`${WebsiteUrl}/cid`, { params: { v: crypto.randomUUID() } }))
    .data
  if (!cidMatch.test(latestCid)) return null
  const currentCid = GetCurrentCid()
  return currentCid.localeCompare(latestCid) !== 0 ? latestCid : null
}

export function GetCurrentCid(): string {
  const match = [...(window.location.href.match(cidUrlMatch) ?? [])]
  return match.length > 1 ? match[1] : ''
}

export function GoToCid(cid: string): void {
  window.location.href = `/ipfs/${cid}`
}
