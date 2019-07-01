import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DogsComponent } from './components/dogs/dogs.component';
import { BreedComponent } from './components/pages/breed/breed.component';

const routes: Routes = [
  { path: '', component: DogsComponent },
  { path: 'breed/:breed', component: BreedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
