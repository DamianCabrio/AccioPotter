import { useEffect, useState } from 'react';

import { getAllCharacters, getFilteredCharacters, saveHistory } from '../../../services';

function useCharactersData(refreshFlag: boolean, searchQuery: string) {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorOccurred, setErrorOccurred] = useState<boolean>(false);

  const getCharactersData = async () => {
    setLoading(true);
    setErrorOccurred(false);
    try {
      const { success, data } =
        searchQuery.length === 0
          ? await getAllCharacters()
          : await getFilteredCharacters(searchQuery);

      if (searchQuery.length > 0) {
        await saveHistory({
          query: searchQuery,
          type: 'character',
          id: Math.floor(Math.random() * 10000) + 1,
        });
      }

      if (success) {
        setCharacters(data);
      } else {
        setErrorOccurred(true);
      }
    } catch (error) {
      console.log('Error getting characters on Characters Screen', error);
      setErrorOccurred(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCharactersData();
  }, [refreshFlag]);

  return { characters, loading, errorOccurred };
}

export default useCharactersData;
