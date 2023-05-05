import { Character } from '../../entities/character';
import { characterAdapter, State } from './character.reducer';
import {
  getCharacterEntities,
  getCharacterError,
  getCharacterLoaded,
  getAllCharacter,
  getSelected,
  getSelectedId,
} from './character.selectors';

describe('CharactersDomainSelectors', () => {
  const character = { id: 1 } as Character;
  const initialState: State = characterAdapter.getInitialState({
    error: 'Test error',
    selectedId: 1,
    loaded: true,
    ids: [1],
    entities: { 1: character },
  });

  it('should select characters error', () => {
    const result = getCharacterError.projector(
      initialState,
      initialState.error
    );

    expect(result).toBe(initialState.error);
  });

  it('should select characters loaded', () => {
    const result = getCharacterLoaded.projector(
      initialState,
      initialState.loaded
    );
    expect(result).toBe(initialState.loaded);
  });

  it('should select characters', () => {
    const result = getAllCharacter.projector(
      initialState,
      characterAdapter.getSelectors().selectAll
    );

    expect(result).toEqual([character]);
  });

  it('should select entities', () => {
    const result = getCharacterEntities.projector(
      initialState,
      initialState.entities
    );

    expect(result).toEqual(initialState.entities);
  });

  it('should select selectedId', () => {
    const result = getSelectedId.projector(
      initialState,
      initialState.selectedId
    );

    expect(result).toEqual(initialState.selectedId);
  });

  it('should get selected character', () => {
    const result = getSelected.projector(
      initialState.entities,
      initialState.selectedId
    );

    expect(result).toEqual(character);
  });
});
