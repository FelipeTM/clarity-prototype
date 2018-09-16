import { Component, OnInit } from '@angular/core';
import { Houses } from '../utils/houses.enum';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css']
})
export class MainContainerComponent implements OnInit {

  housesOpts = [Houses.Gryffindor, Houses.Hufflepuff, Houses.Ravenclaw, Houses.Slytherin];
  houseStyle: string = this.housesOpts[0];

  constructor() { }

  ngOnInit() {
  }

  onChangeStyle(selectedHouse: string) {
    this.houseStyle = selectedHouse;
  }

}
