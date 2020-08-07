import { Component, OnInit } from '@angular/core';

import { Global } from '../global';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-global-stats',
  templateUrl: './global-stats.component.html',
  styleUrls: ['./global-stats.component.scss']
})
export class GlobalStatsComponent implements OnInit {
  globalStats: Global;

  constructor(
    private globalService: GlobalService
  ) { }

  ngOnInit(): void {
    // this.getStats();
  }

  getStats(): void {
    this.globalService.getStats().subscribe(
      stats => this.globalStats = stats);
  }

}
