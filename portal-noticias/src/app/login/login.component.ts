import { Component } from '@angular/core';
import { Router } from 'express';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username = ''
  password = ''
  invalidLogin = false

  constructor() { }

}
