import { bookDetailEndpoint, booksEndpoint } from './endpoints';
import { get } from './fetchs';

export const getAllBooks = async () => {
  return get(booksEndpoint, 'all books');
};

export const getBookById = async (id: number) => {
  return get(bookDetailEndpoint(id), `book with id ${id}`);
};
