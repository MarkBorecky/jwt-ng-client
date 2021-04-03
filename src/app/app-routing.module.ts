import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService as AuthGuard } from './services/auth-guard.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { LogoutComponent } from './logout/logout.component';
import { ListComponent } from './list/list.component';
import { CartComponent } from './cart/cart.component';
import { BookComponent } from './book/book.component';
import { BookResolve } from './resolves/book-resolve';
import { ErrorNotFoundExceptionComponent } from './error-not-found-exception/error-not-found-exception.component';

const routes: Routes = [
  { path: '' , component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'list', component: ListComponent },
  { path: 'book/:id', component: BookComponent, resolve: { book: BookResolve} },
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: '404', component: ErrorNotFoundExceptionComponent },
  { path: '**', redirectTo: '404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
