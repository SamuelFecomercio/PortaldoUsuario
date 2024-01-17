import {MatIconModule} from '@angular/material/icon'
import { Component } from '@angular/core';

@Component({
  selector: 'app-login-component',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './login-component.component.html',
  styleUrl: './login-component.component.css'
})
export class LoginComponent {
  cpf: string = '';
  senha: string = '';
  mask: string = '';




  login() {
    // Lógica de login
  }
}
