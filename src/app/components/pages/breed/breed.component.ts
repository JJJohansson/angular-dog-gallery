import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs';
import { DogService } from '../../../services/dog.service';
import { Dog } from '../../../models/Dog';

@Component({
  selector: 'app-breed',
  templateUrl: './breed.component.html',
  styleUrls: ['./breed.component.css']
})
export class BreedComponent implements OnInit {
  dogs: Dog[] = [];
  @Input() path: string;

  constructor(route: ActivatedRoute, dogService: DogService) {
    route.url.subscribe(params => this.path = params[0].path);
    route.params.subscribe(dog => {
      dogService.getDog(dog.breed).subscribe(dogs => {
        for (let url of dogs.message) this.dogs.push(new Dog(dog.breed, url));
      })
    });
  }

  ngOnInit() {
  }

}
