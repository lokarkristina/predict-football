import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Store } from '@ngrx/store';

import { Game } from '../../models/game.model';

import * as fromStore from '../../store';
@Component({
  selector: 'app-game-single',
  templateUrl: './game-single.component.html',
  styleUrls: ['./game-single.component.scss'],
})
export class GameSingleComponent implements OnInit {
  game: Game;
  id: number;

  constructor(
    private store: Store<fromStore.AllGamesState>,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.store
      .select(fromStore.getSelectedGame(this.id))
      .subscribe(res => (this.game = res));
  }
}
