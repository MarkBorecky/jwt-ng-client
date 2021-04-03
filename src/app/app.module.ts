import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecurityComponent } from './security/security.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { JwtModule, JwtHelperService } from '@auth0/angular-jwt';
import { ReactiveFormsModule } from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';
import { ListComponent } from './list/list.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CartComponent } from './cart/cart.component';
import { BookComponent } from './book/book.component';
import { ErrorNotFoundExceptionComponent } from './error-not-found-exception/error-not-found-exception.component';
import { BookResolve } from './resolves/book-resolve';

@NgModule({
  declarations: [
    AppComponent,
    SecurityComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    LogoutComponent,
    ListComponent,
    CartComponent,
    BookComponent,
    ErrorNotFoundExceptionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    JwtModule.forRoot({ // for JwtHelperService
      config: {
        tokenGetter: () => {
          return '';
        }
      }
    }),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
  ],
  providers: [JwtHelperService, BookResolve],
  bootstrap: [AppComponent]
})
export class AppModule { }
