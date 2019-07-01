import { Component, OnInit, Input } from '@angular/core';
import { DogService } from '../../services/dog.service';

import { Dog } from '../../models/Dog';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {
  dogs: Dog[] = [];

  constructor(private dogService: DogService) { }

  ngOnInit() {
    this.dogService.getDogs().subscribe(response => {
      for (let dog in response.message) this.dogs.push(new Dog(dog));
    })
  }
}
