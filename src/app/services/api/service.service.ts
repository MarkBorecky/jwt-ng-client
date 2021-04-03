import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Book } from 'src/app/model/book';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  public welcome(): any {
    const token = sessionStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get('/api/hello', { headers, responseType: 'text' as 'json' });
  }

  public getBooks(): Observable<Book[]> {
    // const token = sessionStorage.getItem('token');
    // const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<Book[]>('/api/books')
      .pipe(map(res => {
        if (res) {
          return Object.values(res);
        }
        return [];
      }));
  }

  public getBook(id: number): Observable<Book> {
    const res =  this.http.get<Book>(`/api/books/${id}`);
    console.log('res', res);
    return res;
  }

}

