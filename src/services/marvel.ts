// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
import api from './apiConfig'
const tonkenPlubic = process.env.REACT_APP_TOKEN_PUBLIC_API
const tokenHash = process.env.REACT_APP_TOKEN_HASH_GENERATOR
const timestamp = process.env.REACT_APP_TIMESTAMP

export interface ParamsComics {
  format?: string
  formatType?: string
  noVariants?: boolean
  dateDescriptor?: string
  dateRange?: number
  title?: string
  titleStartsWith?: string
  startYear?: number
  issueNumber?: number
  diamondCode?: string
  digitalId?: number
  upc?: string
  isbn?: number
  ean?: string
  issn?: string
  hasDigitalIssue?: boolean
  modifiedSince?: string
  creators?: number
  characters?: number | undefined
  series?: number
  events?: number
  stories?: number
  sharedAppearances?: number
  collaborators?: number
  orderBy?: string
  limit: number
  offset?: number
}

const marvel = {
  getComics: (params: ParamsComics) => {
    return api.get('v1/public/comics', {
      params: {
        ts: timestamp,
        apikey: tonkenPlubic,
        hash: tokenHash,
        ...params
      }
    })
  },

  getCharacters: (name: string) => {
    return api.get('v1/public/characters', {
      params: {
        ts: timestamp,
        apikey: tonkenPlubic,
        hash: tokenHash,
        name,
        limit: 100
      }
    })
  }
}
export default marvel
