import { CharacterEffects } from './character.effects';
import { lastValueFrom, Observable, of, throwError } from 'rxjs';
import { Action } from '@ngrx/store';
import {
  Character,
  CharacterDataService,
  CharacterDataServiceMock,
} from '../../../index';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import * as CharacterActions from './character.actions';
import { RouterTestingModule } from '@angular/router/testing';

describe('CharacterDomainEffect', () => {
  const mockCharacter: Character = {
    id: 1,
    name: 'Rick Sanchez',
    status: 'Alive',
    gender: 'male',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  };

  const mockCharacters: Character[] = [];

  let service: CharacterEffects;
  let actions$ = new Observable<Action>();
  let dataService: CharacterDataService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      providers: [
        CharacterEffects,
        {
          provide: CharacterDataService,
          useClass: CharacterDataServiceMock,
        },
        provideMockActions(() => actions$),
      ],
      imports: [RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    service = TestBed.inject(CharacterEffects);
    dataService = TestBed.inject(CharacterDataService);
    mockCharacters[0] = mockCharacter;
  });

  describe('loadCharacters', () => {
    it('should return observable with loadCharactersSuccess action if dataService returns ok', async () => {
      const expectResult = { characters: mockCharacters };

      jest.spyOn(dataService, 'load').mockReturnValue(of(expectResult));

      actions$ = of(CharacterActions.loadCharacter());

      await expect(lastValueFrom(service.loadCharacter$)).resolves.toEqual(
        CharacterActions.loadCharacterSuccess(expectResult)
      );
    });

    it('should return Observable with loadCharactersFailure if dataService returns error', async () => {
      const expectResult = new Error('error');
      jest
        .spyOn(dataService, 'load')
        .mockReturnValue(throwError(() => expectResult));

      actions$ = of(CharacterActions.loadCharacter());

      await expect(lastValueFrom(service.loadCharacter$)).resolves.toEqual(
        CharacterActions.loadCharacterFailure({ error: expectResult })
      );
    });
  });
});
