import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from "@angular/forms"
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { LoginService } from '../../services/login.service';
import { HeaderComponent } from '../../components/header/header.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent],
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  email!:string;
  password!: string;
  loginService = inject(LoginService);
  router = inject(Router);
  toasterService = inject(ToastrService);

  ngOnInit() {
    if (this.loginService.isLoggedIn) {
      this.router.navigateByUrl("/browse");
      
    }
  }

  onSubmit() {
    if (!this.email || !this.password) {
      this.toasterService.error("provide email or parrword!");
      return;
    }
    
    this.loginService.login(this.email, this.password);
    
    this.toasterService.success("Logged in successfully!");
    this.router.navigateByUrl("/browse");
  }
}
