type Book = {
  id: number;
  title: string;
  author: string;
  book_covers: Array;
};

type Character = {
  id: number;
  name: string;
  birth: string;
  death: string | null;
  gender: string;
  house: string;
};

type HistoryItem = {
  id: number;
  query: string;
  type: 'character' | 'book';
};
