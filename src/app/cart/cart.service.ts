import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Item } from '../item';
import { Book } from '../model/book';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) { }

  addBook(book: Book) {
    const cart = JSON.parse(sessionStorage.getItem('cart'));
    console.log('cart.id', cart.id);
    const item = {
      cartId: cart.id,
      bookId: book.id,
      amount: 1
    };
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const username = this.auth.checkUser().username;
    return this.http.post(`/api/carts/${username}`, item, { headers });
  }

  getCart() {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const username = this.auth.checkUser().username;
    return this.http.get(`/api/carts/${username}`, { headers })
      .subscribe(res => {
        console.log('res', res);
        sessionStorage.setItem('cart', JSON.stringify(res));
        return res;
      });
  }
}
