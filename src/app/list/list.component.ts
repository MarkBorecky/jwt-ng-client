import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../model/book';
import { ServiceService } from '../services/api/service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  books: Book[];

  constructor(
    private service: ServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.service.getBooks().subscribe(res => {
      this.books = res;
      console.log(this.books);
    });
  }

  showBook(book: Book): void {
    this.router.navigate(['/book', book.id]);
  }
}
