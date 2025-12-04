import { Component, inject, signal } from '@angular/core';
import { GifListComponent } from '../../components/gif-list/gif-list';
import { GifService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gif.interface';

@Component({
  selector: 'app-search-page',
  imports: [GifListComponent],
  templateUrl: './search-page.html'
})
export default class SearchPage {

   gifService = inject(GifService);
   gifs = signal<Gif[]>([]);

  onSearch(query: string) {
    console.log({query});
    this.gifService.searchGifs(query).subscribe(rpta => {
      this.gifs.set(rpta);
    })
  }
}
