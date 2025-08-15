import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import type { GiphyResponse } from '../interfaces/giphy.interfaces'; //para que no haga mas trabajo del necesario
import { Gif } from '../interfaces/gif.interface';
import { GifMapper } from '../mapper/gif.mapper';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GifService {
  private http = inject(HttpClient);

  trendingGifs = signal<Gif[]>([]);
  trendingGifsLoading = signal(true);

  constructor() {
    console.log('servicio creado');
    this.getTrendingGifs(); //se llama solo una vez
  }

  getTrendingGifs() {
    this.http
      .get<GiphyResponse>(`${environment.giphyUrl}/gifs/trending`, {
        params: {
          api_key: environment.giphyApiKey,
          limit: 20,
        },
      })
      .subscribe((resp) => {
        const gifs = GifMapper.mapGiphyItemstoGifArray(resp.data);
        console.log({ gifs });
        this.trendingGifs.set(gifs);
        this.trendingGifsLoading.set(false);
      });
  }

  searchGifs(query: string) {
    const replacePlus = query.replace(/ /g, '+');
    return this.http
      .get<GiphyResponse>(`${environment.giphyUrl}/gifs/search`, {
        params: {
          api_key: environment.giphyApiKey,
          q: replacePlus,
          limit: 25,
          lang: 'es',
        },
      })
      .pipe(
        map( ({data}) => data),
        map( (items) => GifMapper.mapGiphyItemstoGifArray(items)));

        //TODO:Historial

    /*  .subscribe((resp) => {
        const gifs = GifMapper.mapGiphyItemstoGifArray(resp.data);
        console.log({ search: gifs });
      }); */
  }
}
