import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromStore from '../../store';

import { Game } from '../../models/game.model';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
})
export class GamesComponent implements OnInit {
  constructor(private store: Store<fromStore.GameState>) {}
  games$: Observable<Game[]>;
  breakpoint: number;

  ngOnInit() {
    this.games$ = this.store.select(fromStore.getAllGames);
    this.breakpoint =
      window.innerWidth <= 476
        ? 1
        : window.innerWidth <= 768
        ? 2
        : window.innerWidth <= 991
        ? 3
        : 4;
  }

  onResize(event) {
    this.breakpoint =
      window.innerWidth <= 476
        ? 1
        : window.innerWidth <= 768
        ? 2
        : window.innerWidth <= 991
        ? 3
        : 4;
  }

  onFilterSelection(filterClass: string, event) {
    const gameElements = document.getElementsByClassName('game-details');

    if (filterClass == 'all') {
      filterClass = '';
    }

    for (let i = 0; i < gameElements.length; i++) {
      this.removeClass(gameElements[i], 'show');
      gameElements[i].className.indexOf(filterClass) > -1 &&
        this.addClass(gameElements[i], 'show');
    }

    const btns = document.getElementsByClassName('filter-button');
    const current = event.target;

    for (let i = 0; i < btns.length; i++) {
      this.removeClass(btns[i], 'active');
    }

    this.addClass(current.parentNode, 'active');
  }

  private removeClass(element, name: string) {
    const arr1 = element.className.split(' ');
    const arr2 = name.split(' ');

    for (let i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);
      }
    }

    element.className = arr1.join(' ');
  }

  private addClass(element, name: string) {
    const arr1 = element.className.split(' ');
    const arr2 = name.split(' ');

    for (let i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) {
        element.className += ' ' + arr2[i];
      }
    }
  }
}
