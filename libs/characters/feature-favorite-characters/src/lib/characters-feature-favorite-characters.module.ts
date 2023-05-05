import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersDomainModule } from '@rick-and-morty-v2/characters/domain';
import { FavoriteCharactersComponent } from './favorite-characters.component';
import {DialogModule} from "primeng/dialog";
import {CardModule} from "primeng/card";

@NgModule({
  imports: [CommonModule, CharactersDomainModule, DialogModule, CardModule],
  declarations: [FavoriteCharactersComponent],
  exports: [FavoriteCharactersComponent],
})
export class CharactersFeatureFavoriteCharactersModule {}
