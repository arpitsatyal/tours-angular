import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router'
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { PostToursComponent } from './tours/post-tours/post-tours.component';
import { GetToursComponent } from './tours/get-tours/get-tours.component';
import { WelcomeComponent } from './tours/welcome/welcome.component';

let AuthRoutes: Routes = [
    {path: '', pathMatch: 'full', component: WelcomeComponent},
    { path: 'auth/login', component: LoginComponent},
    {path: 'auth/register', component: RegisterComponent},
    {path: 'getTours', component: GetToursComponent},
    {path: 'createTour', component: PostToursComponent}
]
@NgModule({
    imports: [RouterModule.forRoot(AuthRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}