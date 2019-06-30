import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { DogService } from '../../services/dog.service';

import { Dog } from '../../models/Dog';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Output() searchResult: EventEmitter<Dog[]> = new EventEmitter();

  breed: string;

  constructor(private dogService: DogService) { }

  search() {
    console.log(this.breed);
    this.dogService.getDog(this.breed).subscribe(response => {
      let dogs: Dog[] = [];
      for (let url of response.message) dogs.push(new Dog(this.breed, url));
      this.searchResult.emit(dogs);
    })
  }

  ngOnInit() {
  }

}
