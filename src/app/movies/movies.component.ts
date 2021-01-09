import { Component, OnInit }        from '@angular/core';
import { Router }                   from '@angular/router';
import { Observable }               from 'rxjs/Observable';
import { MoviesService }            from './movies.service';
import { Movie }                    from './movie';
import { UpMovie }                  from './up_movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})

export class MoviesComponent implements OnInit {
  movies: Observable<Movie[]>;
  upmovies: Observable<UpMovie[]>;
  language: string;

  constructor(
    private moviesService: MoviesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getMovies();
    this.getUpMovies();
  }

  getMovies() {
    this.movies = this.moviesService.getMovies();
  }

  getUpMovies(){
    this.upmovies=this.moviesService.getUpMovies();
  }

}
