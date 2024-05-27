import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { MovieCategoryComponent } from '../../components/movie-category/movie-category.component';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../types/movies';
import { tmdbConfig } from '../../constants/config';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [CommonModule, HeaderComponent, MovieCategoryComponent],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.scss'
})
export class BrowseComponent {
  movieService = inject(MovieService)

  tmdbConfig = tmdbConfig;

  popularMovies: Movie[] = [];
  topRatedMovies: Movie[] = [];
  upcomingMovies: Movie[] = [];
  nowPlayingMovies: Movie[] = [];

  bannerMovie!: Movie;

  public domSanitise = inject(DomSanitizer);

  ngOnInit() {
    this.movieService.getPopularMovies().subscribe((res: any) => {
      this.popularMovies = res.results;
      this.bannerMovie = this.popularMovies[0];
      this.movieService.getMovieVideos(this.bannerMovie.id).subscribe((res: any) => {
        console.log(res);
        this.bannerMovie.videoKey = res.results.find((x:any) => x.site = "Youtube").key;
        console.log(this.bannerMovie);
        

      })
    });
    this.movieService.getTopRatedMovies().subscribe((res: any) => {
      this.topRatedMovies = res.results;
    });
    this.movieService.getUpcomingMovies().subscribe((res: any) => {
      this.upcomingMovies = res.results;
    });
    this.movieService.getNowPlayingMovies().subscribe((res: any) => {
      this.nowPlayingMovies = res.results;
    });
  }
}

