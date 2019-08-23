import { Component, OnInit, Input } from '@angular/core';

import { Game } from '../../models/game.model';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss'],
})
export class GameDetailsComponent implements OnInit {
  @Input() game: Game;

  constructor() {}

  ngOnInit() {}
}
