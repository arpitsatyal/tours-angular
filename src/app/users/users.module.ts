import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { UserRoutingModule } from './users.routing';
import { FormsModule } from '@angular/forms';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { MyReviewsComponent } from './my-reviews/my-reviews.component';

@NgModule({
  declarations: [ProfileComponent, ChangePasswordComponent, UpdateProfileComponent, MyReviewsComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ]
})
export class UsersModule { }
