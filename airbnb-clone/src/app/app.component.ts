import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';


import { fontAwesomeIcons } from './shared/font-awesome-icons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'airbnb-clone';
  faIconLibrary: FaIconLibrary = inject(FaIconLibrary);

  ngOnInit(): void {
    this.initFontAwesome();
  }
  initFontAwesome() {
    this.faIconLibrary.addIcons(...fontAwesomeIcons);
  }
}
