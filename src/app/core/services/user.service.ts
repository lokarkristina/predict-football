import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
  urlUsers = 'http://localhost:3333/users';

  constructor(private http: HttpClient) {}

  fetchUsers(): Observable<User[]> {
    return this.http
      .get<User[]>(this.urlUsers)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  fetchUser(id: number) {
    return this.http
      .get<User>(`${this.urlUsers}/${id}`)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
}
