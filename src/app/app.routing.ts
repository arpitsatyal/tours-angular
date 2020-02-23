import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router'
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

let AuthRoutes: Routes = [
    {path: '', component: LoginComponent},
    { path: 'auth/login', component: LoginComponent},
    {path: 'auth/register', component: RegisterComponent}
]
@NgModule({
    imports: [RouterModule.forRoot(AuthRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}