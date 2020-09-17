import api from './api';
const tonkenPlubic = process.env.REACT_APP_TOKEN_PUBLIC_API;
const tokenHash = process.env.REACT_APP_TOKEN_HASH_GENERATOR;
const ts = process.env.REACT_APP_TIMESTAMP;

interface ParamsComics {
  format: String;
  formatType: String;
  noVariants: Boolean;
  dateDescriptor: String;
  dateRange: Number;
  title: String;
  titleStartsWith: String;
  startYear: Number;
  issueNumber: Number;
  diamondCode: String;
  digitalId: Number;
  upc: String;
  isbn: Number;
  ean: String;
  issn: String;
  hasDigitalIssue: boolean;
  modifiedSince: String;
  creators: Number;
  characters: Number;
  series: Number;
  events: Number;
  stories: Number;
  sharedAppearances: Number;
  collaborators: Number;
  orderBy: String;
  limit: Number;
  offset: Number;
}

const marvel = {
  getComics: (params: ParamsComics) => {
    return api.get(
      `v1/public/comics?ts${ts}&apikey=${tonkenPlubic}&hash=${tokenHash}`,
      {
        params
      }
    );
  }
};
export default marvel;
