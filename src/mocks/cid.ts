import { http, HttpResponse, RequestHandler } from 'msw'
import { WebsiteUrl } from '@/constants/base'

export const OLD_CID = 'g8jug747n2m23j7'
export const NEW_CID = 'f5kgj3tf0i3j8t4'

export function CidHandler(): RequestHandler {
  return http.get(`${WebsiteUrl}/cid`, () => HttpResponse.text(NEW_CID))
}
