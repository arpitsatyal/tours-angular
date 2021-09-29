import { NgModule } from "@angular/core";
import {Routes, RouterModule } from '@angular/router'
import { ChangePasswordComponent } from './change-password/change-password.component';
import {UpdateProfileComponent} from './update-profile/update-profile.component'
import {ProfileComponent } from './profile/profile.component'
import { MyReviewsComponent } from "./my-reviews/my-reviews.component";

const routes: Routes = [
    {path: 'me/:id', component: ProfileComponent},
    { path: 'updateMe/:id', component: UpdateProfileComponent },
    {path: 'changePassword', component: ChangePasswordComponent},
    {path: 'myReviews', component: MyReviewsComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class UserRoutingModule {}