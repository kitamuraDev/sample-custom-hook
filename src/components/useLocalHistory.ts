import useStack from './useStack';

export interface LocalHistory {
  top: () => void;
  next: () => void;
  back: () => void;
  last: () => void;
  reset: () => void;
}

const useLocalHistory = (
  toppage: number,
  lastpage: number,
): [number, LocalHistory] => {
  const initHistory: number[] = [toppage];
  const [currentPage, stack] = useStack<number>(initHistory);

  const top = () => {
    if (currentPage === toppage) return;
    stack.push(toppage);
  };

  const next = () => {
    const nextpage = currentPage + 1;
    if (lastpage < nextpage) return;
    stack.push(nextpage);
  };

  const back = () => {
    if (stack.length() <= 1) return;
    stack.pop();
  };

  const last = () => {
    if (currentPage === lastpage) return;
    stack.push(lastpage);
  };

  const reset = () => stack.reset();

  return [currentPage, { top, next, back, last, reset }];
};

export default useLocalHistory;
