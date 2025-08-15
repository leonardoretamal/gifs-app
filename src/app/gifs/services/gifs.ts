import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import type { GiphyResponse } from '../interfaces/giphy.interfaces'; //para que no haga mas trabajo del necesario

@Injectable({
  providedIn: 'root',
})
export class Gifs {
  private http = inject(HttpClient);

  constructor() {
    this.getTrendingGifs();
  }

  getTrendingGifs() {
    this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/trending`, {
      params: {
        api_key: environment.giphyApiKey,
        limit: 20,
      },
    });
  }
}
