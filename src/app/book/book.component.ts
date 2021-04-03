import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart/cart.service';
import { Book } from '../model/book';
import { UserAuth } from '../model/user-auth';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  book: Book;
  currentUser: UserAuth;

  constructor(
    private cartService: CartService,
    private auth: AuthService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.currentUser = this.auth.checkUser();
    this.book = this.route.snapshot.data['book'];
  }

  addBookToCart(book: Book): void {
    this.cartService.addBook(book)
      .subscribe(res => console.log('res', res));
  }
}
