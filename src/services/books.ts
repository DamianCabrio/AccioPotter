import { bookDetailEndpoint, booksEndpoint, booksFilteredEndpoint } from './endpoints';
import { get } from './utils';

export const getAllBooks = async () => {
  return get(booksEndpoint, 'all books');
};

export const getBookById = async (id: number) => {
  return get(bookDetailEndpoint(id), `book with id ${id}`);
};

export const getFilteredBooks = async (searchQuery: string) => {
  return get(booksFilteredEndpoint(searchQuery), 'books filtered by query: ' + searchQuery);
};
