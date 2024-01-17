import { Component } from '@angular/core';

import { MatIconModule } from '@angular/material/icon'
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'app-login-component',
  standalone: true,
  imports: [MatIconModule, NgxMaskDirective],
  providers: [provideNgxMask({ /* opções de cfg */ })],
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
