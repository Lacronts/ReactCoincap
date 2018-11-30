export function sortByColumn(column){
  return {
    type: 'CHANGE_SORTBY',
    column: column,
  }
}
