import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
  url = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  getUser(): Observable<User> {
    return this.http
      .get<User>(this.url)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
}
