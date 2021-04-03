import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtClientService {

  constructor(private http: HttpClient) { }

  public generateToken(request) {
    return this.http
      .post('/api/authenticate', request, {responseType: 'text' as 'json'});
  }
}
