import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
    @Input() movieName;
    likesCounter;
    placeholder;
    texti;

  constructor() { 
    this.likesCounter = 0;
    this.placeholder = 'zxc';
    this.texti = Date();
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


