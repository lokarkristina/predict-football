import { Component, OnInit } from '@angular/core';
import { Game } from '../../models/game.model';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
})
export class GamesComponent implements OnInit {
  games: Game[] = [
    {
      id: 1,
      userId: 2,
      homeCountryId: 3,
      awayCountryId: 4,
      homeScore: 2,
      awayScore: 2,
    },
    {
      id: 2,
      userId: 2,
      homeCountryId: 5,
      awayCountryId: 8,
      homeScore: 8,
      awayScore: 0,
    },
    {
      id: 3,
      userId: 4,
      homeCountryId: 1,
      awayCountryId: 20,
      homeScore: 2,
      awayScore: 1,
    },
  ];
  constructor() {}

  ngOnInit() {}
}
