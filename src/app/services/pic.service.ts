import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Pic } from './../pic';
import { Response } from './../response';

import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/filter';


@Injectable()
export class PicService {

  private picSearchUrl = 'https://pixabay.com/api?key=6940021-6a38cf1143bb8a861d563f4d0';  // URL to web api
  private res = null;
  public oldTerm:string = '';

  constructor(
    private http: HttpClient) {}

  /** GET pics from the server whose name contains search term */
  getPics (term: string): Observable<Response> {
    const url = `${this.picSearchUrl}&q=${term}`;

    if (term === this.oldTerm) {
    // if user has already serached with the key word
      console.log("Old Terms");

      return this.res;
    } else {
      this.res = this.http.get<Response>(url);
    }

    this.oldTerm = term;

  return this.res;
  }

  /** GET pic by id. */
  getPic(id: number): Observable<Pic> {
    return this.res
    .flatMap(data => data.hits)
      .filter(pic => pic.id === id);
  }

}
