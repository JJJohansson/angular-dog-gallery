import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { DogService } from './services/dog.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DogsComponent } from './components/dogs/dogs.component';
import { DogItemComponent } from './components/dog-item/dog-item.component';
import { DogListComponent } from './components/dog-list/dog-list.component';
import { BreedComponent } from './components/pages/breed/breed.component';

@NgModule({
  declarations: [
    AppComponent,
    DogsComponent,
    DogItemComponent,
    DogListComponent,
    BreedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [DogService],
  bootstrap: [AppComponent]
})

export class AppModule { }
