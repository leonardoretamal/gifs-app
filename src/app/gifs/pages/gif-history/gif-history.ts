import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Component({
  selector: 'app-gif-history',
  imports: [],
  templateUrl: './gif-history.html',
  styleUrl: './gif-history.css',
})
export default class GifHistory {
  /* query = inject(ActivatedRoute).params.subscribe((params) => {
    console.log({ params });
  }); */

  query = toSignal(
    inject(ActivatedRoute).params.pipe(map((params) => params['query']))
  ); //señal que cambia automáticamente
}
