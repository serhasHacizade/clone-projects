import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimations } from '@angular/platform-browser/animations';

import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { MenuModule } from 'primeng/menu';
import { ToastModule } from 'primeng/toast';
import {MessageService} from "primeng/api"


import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { NavbarComponent } from './layout/navbar/navbar.component';
import { AvatarComponent } from './layout/navbar/avatar/avatar.component';
import { CategoryComponent } from './layout/navbar/category/category.component';
import { FooterComponent } from './layout/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AvatarComponent,
    CategoryComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    ToolbarModule,
    MenuModule,
    ToastModule,
    FontAwesomeModule
  ],
  providers: [provideAnimations(),MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
