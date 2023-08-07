import { Component, OnInit } from '@angular/core';
import {FilmService} from '../film.service'
import { Film } from '../film';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css'],
})
export class FilmComponent implements OnInit {

  films: Film[] = [];
  constructor(private filmService: FilmService) { }

  ngOnInit(): void {
    this.getFilms();
  }

  getFilms(): void {
    this.filmService.getFilms().subscribe(films => {
      this.films = films;
      console.log(films);
    });
  }
}