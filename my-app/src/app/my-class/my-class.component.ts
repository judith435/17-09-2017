import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-class',
  templateUrl: './my-class.component.html',
  /*template: `<p>
    my-class works!
    </p>`,*/
  styleUrls: ['./my-class.component.css']
})
export class MyClassComponent implements OnInit {
  @Input() myInput;

  constructor() { 
   
  }

  ngOnInit() {

  }

}
