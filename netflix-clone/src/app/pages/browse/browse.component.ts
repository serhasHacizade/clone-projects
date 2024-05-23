import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { MovieCategoryComponent } from '../../components/movie-category/movie-category.component';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [CommonModule, HeaderComponent, MovieCategoryComponent],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.scss'
})
export class BrowseComponent {
  movieService = inject(MovieService)

  popularMovie:any[] = [];
  ngOnInit() {
    this.movieService.getPopularMovies().subscribe((res:any) => {
      console.log(res.results);
      this.popularMovie = res.results;
      
    });
  }



}
