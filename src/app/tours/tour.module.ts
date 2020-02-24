import { NgModule } from "@angular/core";
import { EditTourComponent } from './edit-tour/edit-tour.component';
import { ToursDetailsComponent } from './tours-details/tours-details.component';
import { PostToursComponent } from './post-tours/post-tours.component';
import { FormsModule } from '@angular/forms';
import { ToursRoutingModule } from './tour.routing'
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GetToursComponent } from './get-tours/get-tours.component';

@NgModule({
    declarations: [
        GetToursComponent,
        EditTourComponent,
        ToursDetailsComponent,
        PostToursComponent,
        WelcomeComponent,
        HeaderComponent,
        FooterComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ToursRoutingModule
    ],
    exports: []
})

export class TourModule {}