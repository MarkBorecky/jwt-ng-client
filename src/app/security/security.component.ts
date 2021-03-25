import { Component, OnInit } from '@angular/core';
import { JwtClientService } from '../jwt-client.service';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {

  authRequest: any = {
    userName: 'user2',
    password: 'pass2'
  };

  response: any;

  constructor(private service: JwtClientService) { }

  ngOnInit(): void {
    this.getAccessToken(this.authRequest);

  }

  public getAccessToken(authRequest): void {
    this.service.generateToken(authRequest)
      .subscribe(data => {
        console.log(`Token : ${data}`);
        this.accessApi(data);
      });
  }

  public accessApi(token): void {
    this.service.welcome(token)
      .subscribe(data => this.response = data);
  }

}
