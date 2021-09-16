import { useEffect, useState } from 'react';

import { getAllCharacters } from '../../../services';

function useCharactersData(refreshFlag: boolean) {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorOccurred, setErrorOccurred] = useState<boolean>(false);

  const getCharactersData = async () => {
    setLoading(true);
    setErrorOccurred(false);
    try {
      const { success, data } = await getAllCharacters();
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
