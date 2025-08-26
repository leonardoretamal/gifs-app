import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { GifService } from '../../services/gifs';
import { GifsList } from "../../components/gifs-list/gifs-list";

@Component({
  selector: 'app-gif-history',
  imports: [GifsList],
  templateUrl: './gif-history.html',
  styleUrl: './gif-history.css',
})
export default class GifHistory {
  /* query = inject(ActivatedRoute).params.subscribe((params) => {
    console.log({ params });
  }); */

  gifService = inject(GifService);

  query = toSignal(
    inject(ActivatedRoute).params.pipe(map((params) => params['query']))
  ); //señal que cambia automáticamente

  gifsByKey = computed(() => {
    return this.gifService.getHistoryGifs(this.query());
  });
}
