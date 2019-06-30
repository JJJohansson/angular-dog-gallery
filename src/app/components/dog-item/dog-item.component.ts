import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DogService } from '../../services/dog.service';
import { Dog } from '../../models/Dog';

@Component({
  selector: 'app-dog-item',
  templateUrl: './dog-item.component.html',
  styleUrls: ['./dog-item.component.css']
})
export class DogItemComponent implements OnInit {
  @Input() dog: Dog;
  @Output() searchResult: EventEmitter<Dog[]> = new EventEmitter();

  url: string;

  constructor(private dogService: DogService) {
  }

  ngOnInit() {
    this.dogService.getDog(this.dog.breed).subscribe(dogs => {
      this.dog.url ? this.url = this.dog.url : this.url = dogs.message[0];
    });
  }

  loadByBreed() {
    this.dogService.getDog(this.dog.breed).subscribe(response => {
      let dogs: Dog[] = [];
      for (let url of response.message) dogs.push(new Dog(this.dog.breed, url));
      this.searchResult.emit(dogs);
    })
  }
}
