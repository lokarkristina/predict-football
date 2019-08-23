import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Game } from '../../models/game.model';

import * as fromStore from '../../store';
@Component({
  selector: 'app-game-single',
  templateUrl: './game-single.component.html',
  styleUrls: ['./game-single.component.scss'],
})
export class GameSingleComponent implements OnInit {
  game: Observable<Game>;
  id: number;

  constructor(
    private store: Store<fromStore.AllGamesState>,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');

    this.store
      .select(fromStore.getSelectedGame(this.id))
      .subscribe(game => (this.game = game));
  }
}
