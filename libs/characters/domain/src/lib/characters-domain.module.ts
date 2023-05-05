import * as fromCharacter from './+state/character/character.reducer';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterEffects } from './+state/character/character.effects';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromCharacter.CHARACTER_FEATURE_KEY,
      fromCharacter.reducer
    ),
    EffectsModule.forFeature([CharacterEffects]),
  ],
})
export class CharactersDomainModule {}
