import { Component } from '@angular/core';
import { LoginComponent } from '../../componentes/login/login-component/login-component.component';
import { LogoComponentComponent } from '../../componentes/login/logo-component/logo-component.component';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ LoginComponent, LogoComponentComponent ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginPageComponent {

}
