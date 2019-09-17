import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromStore from '../../store';

import { Game } from '../../models/game.model';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
})
export class GamesComponent implements OnInit {
  games$: Observable<Game[]>;
  breakpoint: number;

  constructor(private store: Store<fromStore.GameState>) {}

  ngOnInit() {
    this.games$ = this.store.select(fromStore.getAllGames);
    this.breakpoint =
      window.innerWidth <= 476
        ? 1
        : window.innerWidth <= 768
        ? 2
        : window.innerWidth <= 991
        ? 3
        : 4;
  }

  onResize(event) {
    this.breakpoint =
      window.innerWidth <= 476
        ? 1
        : window.innerWidth <= 768
        ? 2
        : window.innerWidth <= 991
        ? 3
        : 4;
  }
}
