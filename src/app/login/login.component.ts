import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { JwtClientService } from '../services/jwt-client.service';
import { UserAuth } from '../model/user-auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() loginEvent = new EventEmitter<any>();

  userAuth: UserAuth = {
    username: '',
    password: ''
  };

  userForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  error = null;

  constructor(
    private jwtClientService: JwtClientService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.error = null;
  }

  public login(): void {
    const auth = this.getUserAuthFromForm();
    this.jwtClientService.generateToken(auth)
    .subscribe(token => {
      sessionStorage.setItem('token', token + '');
      sessionStorage.setItem('userAuth', JSON.stringify(auth));
      this.error = null;
      this.loginEvent.emit();
      this.router.navigate(['/']);
    },
    err => {
      console.log('err', err);
      this.error = 'Invalid username or password';
    });
  }

  getUserAuthFromForm(): any {
    this.userAuth.username = this.userForm.get('username').value;
    this.userAuth.password = this.userForm.get('password').value;
    return this.userAuth;
  }


}
