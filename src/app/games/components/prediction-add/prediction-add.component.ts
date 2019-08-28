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
  @Input() userId: number;
  @Input() playerHomeId: number;
  @Input() playerAwayId: number;
  @Input() playerHomeScore: number;
  @Input() playerAwayScore: number;

  predictionForm: FormGroup;
  message: string;

  constructor(private store: Store<fromStore.GameState>) {}

  ngOnInit() {
    this.buildForm(this.playerHomeScore, this.playerAwayScore);
  }

  onSubmit() {
    const form = this.predictionForm;
    const newPrediction = form.value;

    // Set scores
    this.playerHomeScore = form.value.homeScore;
    this.playerAwayScore = form.value.awayScore;

    // Set other values
    newPrediction.gameId = this.gameId;
    newPrediction.userId = this.userId;
    newPrediction.playerHomeId = this.playerHomeId;
    newPrediction.playerAwayId = this.playerAwayId;

    // Add new prediction
    this.store.dispatch(new fromStore.AddPrediction(newPrediction));
  }

  private buildForm(homeScore: number, awayScore: number) {
    this.predictionForm = new FormGroup({
      homeScore: new FormControl(homeScore),
      awayScore: new FormControl(awayScore),
    });
  }
}
