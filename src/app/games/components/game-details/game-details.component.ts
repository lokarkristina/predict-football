import { Component, OnInit, Input } from '@angular/core';

import { Store } from '@ngrx/store';

import * as fromStore from '../../store';
import * as fromCoreStore from '../../../core/store';

import { Game } from '../../models/game.model';
import { Prediction } from '../../models/prediction.model';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss'],
})
export class GameDetailsComponent implements OnInit {
  @Input() game: Game;

  awayCountryName: string;
  homeCountryName: string;
  predId: number;
  userId: number;
  userLoggedIn: boolean;
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
    const homeCountryId = this.game.playerHomeId;
    const awayCountryId = this.game.playerAwayId;

    if (homeCountryId && awayCountryId) {
      this.store
        .select(fromStore.getSelectedCountry(homeCountryId - 1))
        .subscribe(country => country && (this.homeCountryName = country.name));

      this.store
        .select(fromStore.getSelectedCountry(awayCountryId - 1))
        .subscribe(country => country && (this.awayCountryName = country.name));
    }

    this.store.select(fromCoreStore.getLoggedInUser).subscribe(user => {
      user && ((this.userId = user.id), (this.userLoggedIn = true));
    });

    this.store
      .select(fromStore.getGamePredictions(this.game.id))
      .subscribe(res => {
        res.map((prediction: Prediction) => {
          if (prediction.userId == this.userId) {
            this.predId = prediction.id;
          }
        });
      });
  }
}
