import { Component, OnInit } from '@angular/core';

import { Global } from '../global';
import { GlobalService } from '../global.service';
import { Country } from '../country';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-global-stats',
  templateUrl: './global-stats.component.html',
  styleUrls: ['./global-stats.component.scss']
})
export class GlobalStatsComponent implements OnInit {
  globalStats: Global;
  searchResults: Country[];

  constructor(
    private globalService: GlobalService,
    private searchService: SearchService
  ) { }

  ngOnInit(): void {
    this.getStats();
    this.search();
  }

  getStats(): void {
    this.globalService.getStats().subscribe(
      stats => this.globalStats = stats);
  }

  search() {
    this.searchService.searchResults.subscribe(
      stats => this.searchResults = stats);
  }

}
