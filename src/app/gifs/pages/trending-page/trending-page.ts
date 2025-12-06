import { Component, ElementRef, inject, signal, viewChild } from '@angular/core';
import { GifListComponent } from "../../components/gif-list/gif-list";
import { GifService } from '../../services/gifs.service';

@Component({
  selector: 'app-trending-page',
  // imports: [GifListComponent],
  templateUrl: './trending-page.html'
})
export default class TrendingPage {
  gifService = inject(GifService);

  scrollDivRef = viewChild<ElementRef>('groupDiv');

  onScroll(event: Event) {
    const scrollDiv = this.scrollDivRef()?.nativeElement;
    console.log(scrollDiv);
  }
}
