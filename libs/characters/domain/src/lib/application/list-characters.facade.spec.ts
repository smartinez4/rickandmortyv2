import { Store } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {ListCharactersFacade} from "./list-characters.facade";

describe('ListCharactersFacade', () => {
  let service: ListCharactersFacade;
  let store: Store;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [ListCharactersFacade, provideMockStore({})],
    }).compileComponents();
    service = TestBed.inject(ListCharactersFacade);
    store = TestBed.inject(Store);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
