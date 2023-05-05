import { characterAdapter, reducer, State } from './character.reducer';
import {
  Character,
  loadCharacter,
  loadCharacterFailure,
  loadCharacterSuccess,
} from '../../../index';

describe('CharacterReducer', () => {
  describe('loadCharacters', () => {
    it('should return same state on loadCharacter action', () => {
      const state: State = {
        loaded: false,
        error: null,
        ids: null,
        entities: null,
      };
      const result = reducer(state, loadCharacter());
      expect(result).toEqual(state);
    });

    it('should return state with characters and total on loadCharacterSuccess action', () => {
      const state: State = {
        loaded: false,
        error: null,
        ids: [],
        entities: null,
      };
      const characters: Character[] = [
        {
          id: 1,
          name: 'Rick Sanchez',
          status: 'Alive',
          gender: 'male',
          image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
        },
        {
          id: 2,
          name: 'Morty Smith',
          status: 'Alive',
          gender: 'male',
          image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
        },
      ];

      const expectState: State = {
        loaded: true,
        error: null,
        ids: characters.map((character) => character.id),
        entities: characters.reduce((prev, next: Character) => {
          return { ...prev, [next.id]: next };
        }, {}),
      };

      const result = reducer(
        state,
        loadCharacterSuccess({ characters: characters })
      );

      expect(result).toEqual(expectState);
    });

    it('should return state with error on loadCharactersFailure action', () => {
      const state: State = characterAdapter.getInitialState({
        loaded: false,
      });
      const expectState: State = {
        ...state,
        error: 'error',
      };

      const result = reducer(state, loadCharacterFailure({ error: 'error' }));

      expect(result).toEqual(expectState);
    });
  });
});
