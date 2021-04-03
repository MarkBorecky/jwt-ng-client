import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Book } from '../model/book';
import { ServiceService } from '../services/api/service.service';

@Injectable()
export class BookResolve implements Resolve<Book> {

    constructor(
        private router: Router,
        private service: ServiceService
    ) { }

    resolve(route: ActivatedRouteSnapshot): any {
        return this.service.getBook(route.params['id']);
    }

}
