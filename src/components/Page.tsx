/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-handler-names */
import { VFC } from 'react';

import useLocalHistory, { LocalHistory } from './useLocalHistory';

interface PageProps {
  currentPage: number;
  history: LocalHistory;
}

const Page: VFC<PageProps> = (props) => {
  const { currentPage, history } = props;

  return (
    <div style={{ textAlign: 'center', marginTop: '300px' }}>
      <div style={{ marginBottom: '24px' }}>現在のページ: {currentPage}</div>
      <button type='button' onClick={() => history.top()}>
        トップ
      </button>
      <button type='button' onClick={() => history.next()}>
        次へ
      </button>
      <button type='button' onClick={() => history.back()}>
        戻る
      </button>
      <button type='button' onClick={() => history.last()}>
        ラスト
      </button>
      <button type='button' onClick={() => history.reset()}>
        リセット
      </button>
    </div>
  );
};

const PageContainer = () => {
  const toppage = 1;
  const lastpage = 4;

  const [currentPage, history] = useLocalHistory(toppage, lastpage);

  return <Page currentPage={currentPage} history={history} />;
};

export default PageContainer;
