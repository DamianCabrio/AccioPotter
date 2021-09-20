import { useEffect, useState } from 'react';

import { getAllBooks, getFilteredBooks, saveHistory } from '../../../services';

function useBooksData(refreshFlag: boolean, searchQuery: string) {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorOccurred, setErrorOccurred] = useState<boolean>(false);

  const getBooksData = async () => {
    setLoading(true);
    setErrorOccurred(false);
    try {
      const { success, data } =
        searchQuery.length === 0 ? await getAllBooks() : await getFilteredBooks(searchQuery);

      if (searchQuery.length > 0) {
        await saveHistory({
          query: searchQuery,
          type: 'book',
          id: Math.floor(Math.random() * 10000) + 1,
        });
      }

      if (success) {
        setBooks(data);
      } else {
        setErrorOccurred(true);
      }
    } catch (error) {
      console.log('Error getting books on Book Screen', error);
      setErrorOccurred(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBooksData();
  }, [refreshFlag]);

  return { books, loading, errorOccurred };
}

export default useBooksData;
