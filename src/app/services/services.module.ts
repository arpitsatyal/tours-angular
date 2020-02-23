import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { notifyService } from './toastr.service';
import { AuthService } from './auth.service';
import { ToursService } from './tours.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ], 
  exports: [],

  providers: [AuthService, notifyService, ToursService]
})
export class ServicesModule { }
