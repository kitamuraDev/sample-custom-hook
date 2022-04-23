import { useState } from 'react';

interface LocalHistory {
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
  const [history, setHistory] = useState<number[]>(initHistory);

  const currentPage = history[history.length - 1];

  const top = () => {
    if (currentPage === toppage) return;
    const nextHistory = [...history, toppage];
    setHistory(nextHistory);
  };

  const next = () => {
    const nextpage = currentPage + 1;
    if (lastpage < nextpage) return;
    const nextHistory = [...history, nextpage];
    setHistory(nextHistory);
  };

  const back = () => {
    if (history.length <= 1) return;
    const nextHistory = [...history.slice(0, history.length - 1)];
    setHistory(nextHistory);
  };

  const last = () => {
    if (currentPage === lastpage) return;
    const nextHistory = [...history, lastpage];
    setHistory(nextHistory);
  };

  const reset = () => setHistory(initHistory);

  return [currentPage, { top, next, back, last, reset }];
};

export default useLocalHistory;
