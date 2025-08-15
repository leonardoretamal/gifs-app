import { Component, inject } from '@angular/core';
import { GifsList } from '../../components/gifs-list/gifs-list';
import { GifService } from '../../services/gifs';

@Component({
  selector: 'app-search-page',
  imports: [GifsList],
  templateUrl: './search-page.html',
  styleUrl: './search-page.css',
})
export default class SearchPage {
  gifService = inject(GifService);

  onSearch(query: string) {
    this.gifService.searchGifs(query);
  }
}
