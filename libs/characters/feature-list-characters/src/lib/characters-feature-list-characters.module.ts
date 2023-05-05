import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersDomainModule } from '@rick-and-morty-v2/characters/domain';
import { ListCharactersComponent } from './list-characters.component';
import {TableModule} from "primeng/table";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {CharactersFeatureFavoriteCharactersModule} from "@rick-and-morty-v2/characters/feature-favorite-characters";

@NgModule({
  imports: [CommonModule, CharactersDomainModule, TableModule, InputTextModule, ButtonModule, RippleModule, CharactersFeatureFavoriteCharactersModule],
  declarations: [ListCharactersComponent],
  exports: [ListCharactersComponent],
})
export class CharactersFeatureListCharactersModule {}
