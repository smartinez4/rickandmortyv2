import { of } from 'rxjs';

export class CharacterDataServiceMock {
  load() {
    return of({});
  }
}
