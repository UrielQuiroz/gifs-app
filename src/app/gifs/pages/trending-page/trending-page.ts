import { Component } from '@angular/core';
import { GifListComponent } from "../../components/gif-list/gif-list";

@Component({
  selector: 'app-trending-page',
  imports: [GifListComponent],
  templateUrl: './trending-page.html'
})
export default class TrendingPage { }
