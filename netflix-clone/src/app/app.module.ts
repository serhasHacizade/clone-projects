import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { BrowseComponent } from './pages/browse/browse.component';

import { FormsModule } from '@angular/forms';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    LoginComponent,
    AppRoutingModule,
    FormsModule,
    HeaderComponent,
    BrowseComponent,
  ],
  providers: [
    provideClientHydration(),
    provideToastr(),
    provideAnimations(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
