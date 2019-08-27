import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Store } from '@ngrx/store';

import { Game } from '../../models/game.model';
import { Country } from '../../models/country.model';

import * as fromStore from '../../store';
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

  constructor(
    private store: Store<fromStore.GameState>,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');

    this.store.select(fromStore.getSelectedGame(this.id)).subscribe(game => {
      this.game = game;

      if (!this.game) {
        return;
      }

      this.store
        .select(fromStore.getSelectedCountry(this.game.homeCountryId - 1))
        .subscribe(country => (this.homeCountry = country));

      this.store
        .select(fromStore.getSelectedCountry(this.game.awayCountryId - 1))
        .subscribe(country => (this.awayCountry = country));
    });
  }
}
