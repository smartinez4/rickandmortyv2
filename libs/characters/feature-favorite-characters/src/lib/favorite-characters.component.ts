import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '@rick-and-morty-v2/characters/domain';

@Component({
  selector: 'characters-favorite-characters',
  templateUrl: './favorite-characters.component.html',
  styleUrls: ['./favorite-characters.component.scss'],
})
export class FavoriteCharactersComponent {
  @Input() displayModal = false;
  @Input() favoriteList: Character[] = [];

  @Output() toggleModal = new EventEmitter<boolean>();

  toggleModalDialog(show: boolean) {
    this.toggleModal.emit(show);
  }
}
