import { Component, OnInit, Input } from '@angular/core';

import { Game } from '../../models/game.model';

import * as fromStore from '../../store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss'],
})
export class GameDetailsComponent implements OnInit {
  awayCountryName: string;
  homeCountryName: string;

  @Input() game: Game;
  // set game(game: Game) {
  //   const homeCountryId = game.homeCountryId;
  //   const awayCountryId = game.awayCountryId;

  //   if (homeCountryId && awayCountryId) {
  //     this.store
  //       .select(fromStore.getSelectedCountry(homeCountryId))
  //       .subscribe(country => {
  //         if (country) {
  //           this.homeCountryName = country.name;
  //         }
  //       });

  //     this.store
  //       .select(fromStore.getSelectedCountry(awayCountryId))
  //       .subscribe(country => {
  //         if (country) {
  //           this.awayCountryName = country.name;
  //         }
  //       });
  //   }
  // }

  constructor(private store: Store<fromStore.GameState>) {}

  ngOnInit() {
    const homeCountryId = this.game.homeCountryId;
    const awayCountryId = this.game.awayCountryId;

    if (homeCountryId && awayCountryId) {
      this.store
        .select(fromStore.getSelectedCountry(homeCountryId - 1))
        .subscribe(country => country && (this.homeCountryName = country.name));

      this.store
        .select(fromStore.getSelectedCountry(awayCountryId - 1))
        .subscribe(country => country && (this.awayCountryName = country.name));
    }
  }
}
