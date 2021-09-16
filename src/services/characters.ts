import { characterDetailEndpoint, charactersEndpoint } from './endpoints';
import { get } from './fetchs';

export const getAllCharacters = async () => {
  return get(charactersEndpoint, 'all characters');
};

export const getCharacterById = async (id: number) => {
  return get(characterDetailEndpoint(id), `character with id ${id}`);
};
