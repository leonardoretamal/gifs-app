import {
  Component,
  computed,
  ElementRef,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { GifsList } from '../../components/gifs-list/gifs-list';
import { GifService } from '../../services/gifs';

@Component({
  selector: 'app-trending-page',
  //imports: [GifsList],
  templateUrl: './trending-page.html',
  styleUrl: './trending-page.css',
})
export default class TrendingPage {
  gifService = inject(GifService);

  scrollDivRef = viewChild<ElementRef>('groupDiv');

  onScroll(event: Event) {
    const scrollDiv = this.scrollDivRef()?.nativeElement;


    console.log(scrollDiv);
  }
}
