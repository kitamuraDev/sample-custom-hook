/* eslint-disable react/jsx-handler-names */
import { useState, VFC } from 'react';

const Page: VFC = () => {
  const toppage = 1;
  const lastpage = 4;
  const initHistory: number[] = [toppage];
  const [history, setHistory] = useState<number[]>(initHistory);

  const currentPage = history[history.length - 1];

  return (
    <div style={{ textAlign: 'center', marginTop: '300px' }}>
      <div>現在のページ: {currentPage}</div>
      <button
        type='button'
        onClick={() => {
          if (currentPage === toppage) return;
          const nextHistory = [...history, toppage];
          setHistory(nextHistory);
        }}
      >
        トップ
      </button>
      <button
        type='button'
        onClick={() => {
          const nextpage = currentPage + 1;
          if (lastpage < nextpage) return;
          const nextHistory = [...history, nextpage];
          setHistory(nextHistory);
        }}
      >
        次へ
      </button>
      <button
        type='button'
        onClick={() => {
          if (history.length <= 1) return;
          const nextHistory = [...history.slice(0, history.length - 1)];
          setHistory(nextHistory);
        }}
      >
        戻る
      </button>
      <button
        type='button'
        onClick={() => {
          if (currentPage === lastpage) return;
          const nextHistory = [...history, lastpage];
          setHistory(nextHistory);
        }}
      >
        ラスト
      </button>
      <button
        type='button'
        onClick={() => {
          setHistory(initHistory);
        }}
      >
        リセット
      </button>
    </div>
  );
};

export default Page;
