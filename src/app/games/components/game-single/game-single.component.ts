import { Component, OnInit, Input } from '@angular/core';

import { Game } from '../../models/game.model';

@Component({
  selector: 'app-game-single',
  templateUrl: './game-single.component.html',
  styleUrls: ['./game-single.component.scss'],
})
export class GameSingleComponent implements OnInit {
  @Input() game: Game;

  constructor() {}

  ngOnInit() {}
}
