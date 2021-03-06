import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BrowserGame } from '../models/BrowserGame';
import { Observable } from 'rxjs';

@Injectable()
export class BrowserGameService {
  private browserGameApiUrl = 'https://gbgames-api.herokuapp.com/browserGames';
  constructor(private http: HttpClient) { }

  getBrowserGames(): Observable<BrowserGame[]> {
    return this.http.get<BrowserGame[]>(this.browserGameApiUrl);
  }

  getBrowserGameById(id: string): Observable<BrowserGame> {
    return this.http.get<BrowserGame>(`${this.browserGameApiUrl}/${id}`);
  }

  getBrowserGamesByCategoryId(id: string): Observable<BrowserGame[]> {
    return this.http.get<BrowserGame[]>(`${this.browserGameApiUrl}?categoriaId=${id}`);
  }

  getRecomendationByUsuarioId(id: string): Observable<BrowserGame[]> {
    return this.http.get<BrowserGame[]>(`${this.browserGameApiUrl}/recomendacao/${id}`);
  }

  createBrowserGames(browserGame: BrowserGame): Observable<BrowserGame> {
    return this.http.post<BrowserGame>(this.browserGameApiUrl, browserGame);
  }

  editBrowserGame(browserGame: BrowserGame): Observable<BrowserGame> {
    return this.http.put<BrowserGame>(`${this.browserGameApiUrl}/${browserGame.id}`, browserGame);
  }

  deleteBrowserGame(id: string): Observable<any> {
    return this.http.delete<any>(`${this.browserGameApiUrl}/${id}`);
  }
}