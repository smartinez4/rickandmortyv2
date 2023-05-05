import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { loadCharacter } from '../+state/character/character.actions';
import * as fromCharacter from '../+state/character/character.reducer';
import * as CharacterSelectors from '../+state/character/character.selectors';

@Injectable({ providedIn: 'root' })
export class ListCharactersFacade {
  characterList$ = this.store.pipe(select(CharacterSelectors.getAllCharacter));

  constructor(private store: Store<fromCharacter.CharacterPartialState>) {}

  load(): void {
    this.store.dispatch(loadCharacter());
  }
}
