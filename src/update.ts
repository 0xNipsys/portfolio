import axios from 'axios'
import { WebsiteUrl } from '@/constants/base'

export async function CheckForNewVersion() {
  console.log(window.location.href)
  axios.get(`${WebsiteUrl}/cid`).then((response) => console.log(response))
}
