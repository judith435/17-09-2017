import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  
  @Input() movieName;
  likesCounter;
  placeholder;

  constructor() { 
    this.likesCounter = 0;
    this.placeholder = 'zxc';
  }

  ngOnInit() {
  }

  like() {
    this.likesCounter++;
  }

  dislike() {
    this.likesCounter--;
  }

}
