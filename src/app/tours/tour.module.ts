import { NgModule} from "@angular/core";
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
import { SearchTourComponent } from './search-tour/search-tour.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { GetReviewsComponent } from './reviews/get-reviews/get-reviews.component';
import { CreateReviewComponent } from './reviews/create-review/create-review.component';
import { AgmCoreModule } from '@agm/core'

@NgModule({
    declarations: [
        GetToursComponent,
        EditTourComponent,
        ToursDetailsComponent,
        PostToursComponent,
        WelcomeComponent,
        HeaderComponent,
        FooterComponent,
        SearchTourComponent,
        GetReviewsComponent,
        CreateReviewComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ToursRoutingModule,
        MatPaginatorModule,
        AgmCoreModule
    ]
})

export class TourModule { }