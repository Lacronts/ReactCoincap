import { CHANGE_SORTBY } from '../constants/sort';

export function sortByColumn(column){
  return {
    type: CHANGE_SORTBY,
    column: column,
  }
}
