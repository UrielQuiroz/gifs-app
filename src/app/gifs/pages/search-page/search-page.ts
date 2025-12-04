import { Component, inject } from '@angular/core';
import { GifListComponent } from '../../components/gif-list/gif-list';
import { GifService } from '../../services/gifs.service';

@Component({
  selector: 'app-search-page',
  imports: [GifListComponent],
  templateUrl: './search-page.html'
})
export default class SearchPage {

   gifService = inject(GifService);

  onSearch(query: string) {
    console.log({query});
    this.gifService.searchGifs(query);
  }
}
