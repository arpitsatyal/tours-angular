import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {HttpClientModule } from '@angular/common/http'
import {ToastrModule} from 'ngx-toastr'

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AppRoutingModule } from './app.routing';
import { ServicesModule } from './services/services.module';
import { GetToursComponent } from './tours/get-tours/get-tours.component';
import { PostToursComponent } from './tours/post-tours/post-tours.component';
import { HeaderComponent } from './tours/header/header.component';
import { FooterComponent } from './tours/footer/footer.component';
import { WelcomeComponent } from './tours/welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    GetToursComponent,
    PostToursComponent,
    HeaderComponent,
    FooterComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ServicesModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
