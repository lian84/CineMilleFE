import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Film } from './film';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  private baseUrl = "http://localhost:8080/api/programmazione/all";

  constructor(private http: HttpClient) { }

  getFilms(): Observable<Film[]>{
    return this.http.get<Film[]>(`${this.baseUrl}`);
  }
}
