import { setupWorker } from 'msw/browser'
import { CidHandler } from '@/mocks/cid'

export const worker = setupWorker(CidHandler())
