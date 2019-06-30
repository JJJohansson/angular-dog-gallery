import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { DogService } from './services/dog.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DogsComponent } from './components/dogs/dogs.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { DogItemComponent } from './components/dog-item/dog-item.component';
import { DogListComponent } from './components/dog-list/dog-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DogsComponent,
    SearchBarComponent,
    DogItemComponent,
    DogListComponent,
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
