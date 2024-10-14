import { Component, inject } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  location:string = "Anywhere";
  guests:string = "Add guests";
  dates:string = "Any week";
  toastService = inject(ToastService);

  // login() => this.authService.login();
  // logout() => this.authService.logout();

  currentMenuItem: MenuItem[] | undefined = [];

  ngOnInit(): void {
    this.fetchMenu();
    this.toastService.send({severity:"info", summary: "Welcome to your Airbnb app"})
  }

  private fetchMenu() {

    return [
      {
        label: "Sign up",
        styleClass: "font-bold"
      },
      {
        label: "Log in"
      },
      
    ]
  }
}
