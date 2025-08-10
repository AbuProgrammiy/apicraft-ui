import { Component } from '@angular/core';
import { Card } from 'primeng/card';
import { FloatLabel } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-login',
  imports: [
    Card,
    InputTextModule,
    FloatLabel
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {

}
