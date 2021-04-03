import { Component, OnInit } from '@angular/core';
import { UserAuth } from './model/user-auth';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  currentUser: UserAuth = null;

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.checkUser();
  }

  private checkUser(): void {
    this.currentUser = this.auth.checkUser();
  }

  public isLogged(): boolean {
    return true;
  }

  loginEvent(event): void {
      this.checkUser();
  }

}
