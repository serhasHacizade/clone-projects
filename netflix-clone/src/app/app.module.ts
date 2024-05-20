import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { BrowseComponent } from './pages/browse/browse.component';

import { FormsModule } from '@angular/forms';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    BrowseComponent,
  ],
  imports: [
    BrowserModule,
    LoginComponent,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    provideToastr(),
    provideAnimations(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
