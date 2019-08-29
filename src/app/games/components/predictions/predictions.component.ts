import { Component, OnInit, Input } from '@angular/core';

import { Prediction } from '../../models/prediction.model';

@Component({
  selector: 'app-predictions',
  templateUrl: './predictions.component.html',
  styleUrls: ['./predictions.component.scss'],
})
export class PredictionsComponent implements OnInit {
  @Input() prediction: Prediction;

  constructor() {}

  ngOnInit() {}
}
