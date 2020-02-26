import { NgModule } from "@angular/core";
import {Routes, RouterModule } from '@angular/router'
import { ProfileComponent } from './profile/profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

const routes: Routes = [
    { path: 'me/:id', component: ProfileComponent },
    {path: 'changePassword', component: ChangePasswordComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class UserRoutingModule {}