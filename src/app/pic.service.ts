import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Response } from './response';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PicService {

  private picSearchUrl = 'https://pixabay.com/api?key=6940021-6a38cf1143bb8a861d563f4d0';  // URL to web api

  constructor(
    private http: HttpClient) {}

  /** GET pics from the server whose name contains search term */
  getPics (term: string): Observable<Response> {
    const url = `${this.picSearchUrl}&q=${term}`;

    if (!term.trim()) {
    // if not search term, return empty.
    return of();
    }

  return this.http.get<Response>(url);
  }

}
