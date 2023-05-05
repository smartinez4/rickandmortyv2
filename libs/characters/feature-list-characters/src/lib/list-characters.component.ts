import { Component, OnInit } from '@angular/core';
import {
  Character,
  ListCharactersFacade,
} from '@rick-and-morty-v2/characters/domain';
import { Table } from 'primeng/table';

@Component({
  selector: 'characters-list-characters',
  templateUrl: './list-characters.component.html',
  styleUrls: ['./list-characters.component.scss'],
})
export class ListCharactersComponent implements OnInit {
  characters$ = this.listCharacterService.characterList$;

  favoriteList: Character[] = [];
  showFavoritesModal = false;

  constructor(private listCharacterService: ListCharactersFacade) {}

  ngOnInit(): void {
    this.listCharacterService.load();
  }

  applyFilterGlobal($event: Event, mode: string, table: Table) {
    table.filterGlobal(($event.target as HTMLInputElement).value, mode);
  }

  selectCharacter(character: Character) {
    const charAlreadyFav = this.favoriteList.find(
      (favChar) => favChar.id === character.id
    );
    if (!charAlreadyFav) {
      this.favoriteList.push(character);
    }
  }

  toggleModal(value: boolean) {
    this.showFavoritesModal = value;
  }
}
