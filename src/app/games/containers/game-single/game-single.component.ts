import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MatSnackBar } from '@angular/material/snack-bar';

import { Store } from '@ngrx/store';

import * as fromStore from '../../store';
import * as fromCoreStore from '../../../core/store';

import { Game } from '../../models/game.model';
import { Country } from '../../models/country.model';
import { Prediction } from '../../models/prediction.model';

@Component({
  selector: 'app-game-single',
  templateUrl: './game-single.component.html',
  styleUrls: ['./game-single.component.scss'],
})
export class GameSingleComponent implements OnInit {
  game: Game;
  playerHome: Country;
  playerAway: Country;
  predictions$: Prediction[];

  playerHomeScore: number;
  playerAwayScore: number;
  id: number;
  userId: number;
  userLoggedIn: boolean;
  predId: number;

  constructor(
    private store: Store<fromStore.GameState>,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
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

      // Get home and away country name
      this.store
        .select(fromStore.getSelectedCountry(this.game.playerHomeId - 1))
        .subscribe(country => (this.playerHome = country));

      this.store
        .select(fromStore.getSelectedCountry(this.game.playerAwayId - 1))
        .subscribe(country => (this.playerAway = country));

      // Get home and away player scores
      this.store
        .select(fromStore.getGamePredictions(this.game.id))
        .subscribe(res => {
          this.predictions$ = [];

          res.map((prediction: Prediction) => {
            if (prediction.userId == this.userId) {
              this.playerHomeScore = prediction.homeScore;
              this.playerAwayScore = prediction.awayScore;
              this.predId = prediction.id;
            } else {
              this.predictions$.push(prediction);
            }
          });
        });
    });
  }

  removePred(predId: number) {
    this.store.dispatch(new fromStore.DeletePrediction(predId));
    this.predId = null;
    document.querySelector('form').reset();
    this.snackBar.open('Prediction successfully deleted.', 'OK', {
      duration: 3000,
    });
  }
}
