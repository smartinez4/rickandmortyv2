import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import {CharacterDataService} from "./character.data.service";

describe('CharacterDataService', () => {
  let service: CharacterDataService;
  let http: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    service = TestBed.inject(CharacterDataService);
    http = TestBed.inject(HttpTestingController);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  describe('loadCharacters', () => {
    it('should call http.get', () => {
      service.load().subscribe();

      http.expectOne({
        method: 'GET',
        url: service.listUrl,
      });
    });
  });
});
