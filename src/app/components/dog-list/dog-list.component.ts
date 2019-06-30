import { Component, OnInit, Input } from '@angular/core';
import { DogService } from '../../services/dog.service';
import { Dog } from '../../models/Dog';

@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.css']
})
export class DogListComponent implements OnInit {
  @Input() dogs: Dog[] = [];

  constructor(private dogService: DogService) { }

  ngOnInit() {
  }

  onSearchResult(dogs: Dog[]) {
    if (dogs) this.dogs = dogs;
  }
}
