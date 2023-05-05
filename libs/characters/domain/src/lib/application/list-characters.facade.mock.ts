/* eslint-disable @typescript-eslint/no-unused-vars,@typescript-eslint/no-empty-function */
import { of } from 'rxjs';

export class ListCharactersFacadeMock {
  charactersList$ = of([]);

  load(): void {}
}
