import { NEXT_PAGE, PREV_PAGE, VIEW_ALL, BACK_TO_100 } from '../constants/pagination';

export function pagination(state = {page: 1, perPage: 100}, action){
  switch (action.type) {
    case NEXT_PAGE:
      return {
        ...state,
        page: state.page + 1,
      };
    case PREV_PAGE:
      return {
        ...state,
        page: state.page - 1,
      };
    case VIEW_ALL:
      return {
        page: 1,
        perPage: Infinity,
      };
      case BACK_TO_100:
        return {
          page: 1,
          perPage: 100,
        };
    default:
      return state;
  }
};
