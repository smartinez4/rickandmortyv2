import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Character } from '../entities/character';
import { CHARACTERS_DOMAIN_CONFIG } from '../characters-domain.config';
import { catchError, map } from 'rxjs/operators';
import { environment } from '@rick-and-morty-v2/shared';

@Injectable({ providedIn: 'root' })
export class CharacterDataService {
  listUrl = `${environment.apiHost}${CHARACTERS_DOMAIN_CONFIG.ENDPOINTS.LIST}`;

  constructor(private http: HttpClient) {}

  load(): Observable<{ characters: Character[] }> {
    return this.http.get<{ results: Character[] }>(this.listUrl).pipe(
      map((response) => ({
        characters: response.results,
      })),
      catchError((error) => {
        return throwError(() => new Error(error));
      })
    );
  }
}
