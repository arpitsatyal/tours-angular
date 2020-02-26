import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { UserRoutingModule } from './users.routing';
import { FormsModule } from '@angular/forms';
import { ChangePasswordComponent } from './change-password/change-password.component';



@NgModule({
  declarations: [ProfileComponent, ChangePasswordComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ]
})
export class UsersModule { }
