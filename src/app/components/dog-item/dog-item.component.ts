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
  @Input() path: string;
  @Output() searchResult: EventEmitter<Dog[]> = new EventEmitter();
  url: string;

  constructor(private dogService: DogService) {
  }

  ngOnInit() {
    this.dogService.getDog(this.dog.breed).subscribe(dogs => {
      const rng: number = Math.floor(Math.random() * dogs.message.length) + 0;
      this.dog.url ? this.url = this.dog.url : this.url = dogs.message[rng];
    });
  }

  open(event) {
    const url: string = event.target.src;
    console.log(event.target.src)
    var win = window.open(url, '_blank');
    win.focus();
  }
}
