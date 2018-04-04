import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainDetailComponent } from './train-detail/train-detail.component';
import { TrainSearchComponent } from './train-search/train-search.component';

const routes: Routes = [
  { path: 'search', component: TrainSearchComponent },
  { path: 'trains', component: TrainDetailComponent },
  { path: '', redirectTo: '/search', pathMatch: 'full' }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})

export class AppRoutingModule { }
