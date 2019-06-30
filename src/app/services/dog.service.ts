import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Dog } from '../models/Dog';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class DogService {

  constructor(private http: HttpClient) { }

  getDogs(): Observable<any> {
    const url2 = 'https://dog.ceo/api/breed/hound/images';
    const url = 'https://dog.ceo/api/breeds/list/all';
    return this.http.get<any>(url);
  }

  getDog(breed: string): Observable<any> {
    const url = breed ? `https://dog.ceo/api/breed/${breed}/images` : 'https://dog.ceo/api/breeds/list/all';
    return this.http.get<any>(url);
  }
}
