import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  @Output() logoutEvent = new EventEmitter();

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  public logout(): void {
    sessionStorage.setItem('token', '');
    sessionStorage.setItem('userAuth', '');
    this.logoutEvent.emit('logEvent');
    this.router.navigate(['/']);
  }

}
