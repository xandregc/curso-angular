import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Photo } from './../../models/Photo.model';

const API = 'http://localhost:3000';

@Injectable({providedIn: 'root'})
export class PhotoService {

  constructor(private http: HttpClient) {}

  listFromUser(username: string) {
    return this.http.get<Photo[]>(API + '/photos');
  }
}
