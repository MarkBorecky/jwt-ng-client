import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/api/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userName: string;
  message = '';

  constructor(
    private service: ServiceService
  ) { }

  ngOnInit(): void {
    this.updateUserName();

    if (this.userName) {
      this.service.welcome().subscribe(res => this.message = res);
    }
  }

  private updateUserName(): void {
    const str = sessionStorage.getItem('userAuth');
    const user = str !== '' ? JSON.parse(str) : '';
    this.userName = user?.username || '';
  }

}
