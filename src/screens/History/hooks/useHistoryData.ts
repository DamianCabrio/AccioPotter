import { useEffect, useState } from 'react';

import { recoverHistory } from './../../../services/utils';

function useHistoryData(refreshFlag: boolean) {
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorOccurred, setErrorOccurred] = useState<boolean>(false);

  const getCharactersData = async () => {
    setLoading(true);
    setErrorOccurred(false);
    try {
      const historyResult = await recoverHistory();
      if (historyResult) {
        setHistory(historyResult);
      } else {
        setErrorOccurred(true);
      }
    } catch (error) {
      console.log('Error getting history on History Screen', error);
      setErrorOccurred(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCharactersData();
  }, [refreshFlag]);

  return { history, loading, errorOccurred };
}

export default useHistoryData;
