import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Store } from '@ngrx/store';

import * as fromStore from '../../store';

@Component({
  selector: 'app-prediction-add',
  templateUrl: './prediction-add.component.html',
  styleUrls: ['./prediction-add.component.scss'],
})
export class PredictionAddComponent implements OnInit {
  @Input() gameId: number;
  @Input() homeCountryId: number;
  @Input() awayCountryId: number;
  @Input() homeScore: number;
  @Input() awayScore: number;

  predictionForm: FormGroup;
  // TODO: Make it dynamic
  userId = 1;
  message: string;

  constructor(private store: Store<fromStore.AllGamesState>) {}

  ngOnInit() {
    this.buildForm();
  }

  onSubmit(home, away) {
    this.homeScore = +home.value;
    this.awayScore = +away.value;

    const newPrediction = {
      id: this.gameId,
      userId: this.userId,
      homeCountryId: this.homeCountryId,
      awayCountryId: this.awayCountryId,
      homeScore: this.homeScore,
      awayScore: this.awayScore,
    };
    this.store.dispatch(new fromStore.AddPrediction(newPrediction));
  }

  private buildForm(homeScore?: number, awayScore?: number) {
    this.predictionForm = new FormGroup({
      homeScore: new FormControl(this.homeScore),
      awayScore: new FormControl(this.awayScore),
    });
  }
}
