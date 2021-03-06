import { NEXT_PAGE, PREV_PAGE, VIEW_ALL, BACK_TO_100 } from '../constants/pagination';

export function nextPage() {
  return {
    type: NEXT_PAGE,
  };
};

export function prevPage() {
  return {
    type: PREV_PAGE,
  };
};

export function viewAll() {
  return {
    type: VIEW_ALL,
  };
};

export function backTo100() {
  return {
    type: BACK_TO_100,
  };
};
