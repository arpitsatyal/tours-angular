import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { PostToursComponent } from './post-tours/post-tours.component';
import { EditTourComponent } from './edit-tour/edit-tour.component';
import { ToursDetailsComponent } from './tours-details/tours-details.component';
import { GetToursComponent } from './get-tours/get-tours.component';
import { SearchTourComponent } from './search-tour/search-tour.component';
import { GetReviewsComponent } from './reviews/get-reviews/get-reviews.component';

const routes: Routes = [
    {path: 'getTours', component: GetToursComponent},
    { path: 'createTour', component: PostToursComponent },
    { path: 'editTour/:id', component: EditTourComponent },
    {path: 'tourDetails/:id', component: ToursDetailsComponent},
    {path: 'searchTours', component: SearchTourComponent}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ToursRoutingModule {}