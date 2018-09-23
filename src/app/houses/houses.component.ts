import { Component, OnInit } from '@angular/core';

import { Houses } from '../utils/houses.enum';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent implements OnInit {

  housesEnum = [Houses.Gryffindor, Houses.Hufflepuff, Houses.Ravenclaw, Houses.Slytherin];
  housesList = [];
  houseLeader;

  constructor() { }

  ngOnInit() {
    let houseObj;
    this.housesEnum.forEach(house => {
      houseObj = {
        name: house,
        points: Math.floor(Math.random() * (5000 - 1000)) + 1000
      }
      this.housesList.push(houseObj);
    })
    this.houseLeader = this.getLeader();
  }

  getLeader() {
    return this.housesList.reduce(function(prev, current) {
      return (prev.points > current.points) ? prev : current
    })
  }
  isLeader(houseName: string) {
    return houseName === this.houseLeader.name;
  }

  getImage(houseName: string) {
    let path = 'assets/images/'
    let imgPath = path + houseName.toLowerCase() + '_crest.png'
    return imgPath;
  }

}
