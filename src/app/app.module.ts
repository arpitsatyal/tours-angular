import { NgModule } from '@angular/core';
import {HttpClientModule } from '@angular/common/http'
import {ToastrModule} from 'ngx-toastr'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { ServicesModule } from './services/services.module';
import { AuthModule } from './auth/auth.module';
import { TourModule } from './tours/tour.module';
import { UsersModule } from './users/users.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ServicesModule,
    AuthModule,
    TourModule,
    UsersModule,
    ToastrModule.forRoot()
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
