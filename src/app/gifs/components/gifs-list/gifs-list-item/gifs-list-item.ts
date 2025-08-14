import { Component, input } from '@angular/core';

@Component({
  selector: 'gifs-list-item',
  imports: [],
  templateUrl: './gifs-list-item.html',
  styleUrl: './gifs-list-item.css'
})
export class GifsListItem {

  imageURL= input.required<string>()

}
