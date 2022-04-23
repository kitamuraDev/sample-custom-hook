/* eslint-disable react/jsx-handler-names */
import { VFC } from 'react';

import useLocalHistory from './useLocalHistory';

const Page: VFC = () => {
  const toppage = 1;
  const lastpage = 4;

  const { currentPage, top, next, back, last, reset } = useLocalHistory(
    toppage,
    lastpage,
  );

  return (
    <div style={{ textAlign: 'center', marginTop: '300px' }}>
      <div style={{ marginBottom: '24px' }}>現在のページ: {currentPage}</div>
      <button type='button' onClick={() => top()}>
        トップ
      </button>
      <button type='button' onClick={() => next()}>
        次へ
      </button>
      <button type='button' onClick={() => back()}>
        戻る
      </button>
      <button type='button' onClick={() => last()}>
        ラスト
      </button>
      <button type='button' onClick={() => reset()}>
        リセット
      </button>
    </div>
  );
};

export default Page;
