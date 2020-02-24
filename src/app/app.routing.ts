import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router'
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { PostToursComponent } from './tours/post-tours/post-tours.component';
import { GetToursComponent } from './tours/get-tours/get-tours.component';
import { WelcomeComponent } from './tours/welcome/welcome.component';
import { PageNotFoundComponent } from './services/shared/page_not_found/four-o-four.component';
import { ToursDetailsComponent } from './tours/tours-details/tours-details.component';

let AuthRoutes: Routes = [
    {path: '', pathMatch: 'full', component: WelcomeComponent},
    { path: 'auth/login', component: LoginComponent},
    {path: 'auth/register', component: RegisterComponent},
    {path: 'getTours', component: GetToursComponent},
    {path: 'createTour', component: PostToursComponent},
    {path: 'toursDetails/:id', component: ToursDetailsComponent},
    {path: '**', component: PageNotFoundComponent}
]
@NgModule({
    imports: [RouterModule.forRoot(AuthRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}