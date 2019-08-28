import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Store } from '@ngrx/store';

import * as fromStore from '../../store';
import * as fromCoreStore from '../../../core/store';

import { Game } from '../../models/game.model';
import { Country } from '../../models/country.model';

@Component({
  selector: 'app-game-single',
  templateUrl: './game-single.component.html',
  styleUrls: ['./game-single.component.scss'],
})
export class GameSingleComponent implements OnInit {
  game: Game;
  homeCountry: Country;
  awayCountry: Country;
  id: number;
  userId: number;
  userLoggedIn: boolean;

  constructor(
    private store: Store<fromStore.GameState>,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.store.select(fromCoreStore.getLoggedInUser).subscribe(user => {
      user && ((this.userId = user.id), (this.userLoggedIn = true));
    });

    this.id = +this.route.snapshot.paramMap.get('id');

    this.store.select(fromStore.getSelectedGame(this.id)).subscribe(game => {
      this.game = game;

      if (!this.game) {
        return;
      }

      this.store
        .select(fromStore.getSelectedCountry(this.game.playerHomeId - 1))
        .subscribe(country => (this.homeCountry = country));

      this.store
        .select(fromStore.getSelectedCountry(this.game.playerAwayId - 1))
        .subscribe(country => (this.awayCountry = country));
    });
  }
}
