import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as CharacterActions from './character.actions';
import { CharacterDataService } from '../../infrastructure/character.data.service';

@Injectable()
export class CharacterEffects {
  loadCharacter$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CharacterActions.loadCharacter),
      switchMap(() =>
        this.characterDataService.load().pipe(
          map((characters) =>
            CharacterActions.loadCharacterSuccess( characters )
          ),
          catchError((error) =>
            of(CharacterActions.loadCharacterFailure({ error }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private characterDataService: CharacterDataService
  ) {}
}
