import { characterDetailEndpoint, charactersEndpoint, charactersFilterEndpoint } from './endpoints';
import { get } from './utils';

export const getAllCharacters = async () => {
  return get(charactersEndpoint, 'all characters');
};

export const getCharacterById = async (id: number) => {
  return get(characterDetailEndpoint(id), `character with id ${id}`);
};

export const getFilteredCharacters = async (searchQuery: string) => {
  return get(charactersFilterEndpoint(searchQuery), 'characters filtered by query: ' + searchQuery);
};
