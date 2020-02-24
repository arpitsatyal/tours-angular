import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { PageNotFoundComponent } from './services/shared/page_not_found/four-o-four.component';
import { WelcomeComponent } from './tours/welcome/welcome.component';

let AuthRoutes: Routes = [
    { path: '', pathMatch: 'full', component: WelcomeComponent },
    {path: 'auth', loadChildren: './auth/auth.module#AuthModule'},
    {path: 'tours', loadChildren: './tours/tour.module#TourModule'},
    { path: '**', component: PageNotFoundComponent }
]
@NgModule({
    imports: [RouterModule.forRoot(AuthRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }