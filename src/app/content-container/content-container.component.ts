import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { Houses } from '../utils/houses.enum' 
import { Character } from '../utils/character.model';

import { CharacterInsertDialogComponent } from './character-insert-dialog/character-insert-dialog.component';

import { JSONService } from '../services/json.service'; 

@Component({
  selector: 'app-content-container',
  templateUrl: './content-container.component.html',
  styleUrls: ['./content-container.component.css']
})
export class ContentContainerComponent implements OnInit, AfterViewInit {

  dataSource: any;
  selectedChars: Character[] = [];

  // Form values
  id: number = null;
  name: string = null;
  birthday: Date = null;
  selectedHouse: string = null;
  housesOpts = [Houses.Gryffindor, Houses.Hufflepuff, Houses.Ravenclaw, Houses.Slytherin];
  charToAdd: Character;

  // Modal values
  @ViewChild(CharacterInsertDialogComponent) modal: CharacterInsertDialogComponent;

  constructor(private jsonService: JSONService) { }

  ngOnInit() {
    this.jsonService.getJSON().subscribe(
      (data: any) => {
        this.dataSource = data.characters;
      },
      (error: any) => {
        console.log("ERROR", error);
      }
    )
  }

  ngAfterViewInit() {
    this.modal.onOK.subscribe(char => {
      this.charToAdd = char;
      this.save();
      this.modal.close();
    });
  }

  clearForms() {
    this.id = null;
    this.name = null;
    this.birthday = new Date();
    this.selectedHouse = null;
  }

  getLastIndex(array: any[]) {
    return array.length - 1;
  }

  onAdd() {
    let newChar: Character = new Character(this.dataSource[this.getLastIndex(this.dataSource)].id + 1, null, null, null);
    this.modal.open(newChar);
  }

  onEdit(selectedChars: any[]) { 
    this.id = selectedChars[0].id;
    this.name = selectedChars[0].name;
    this.birthday = new Date(selectedChars[0].birthday);
    this.selectedHouse = selectedChars[0].house;
    this.selectedChars = [];
    let editedChar: Character = new Character(this.id, this.name, this.birthday, this.selectedHouse);
    this.modal.open(editedChar);
  }

  onDelete(selectedChars: any[]) {
    selectedChars.forEach(char => {
      let indexToDel = this.dataSource.indexOf(char)
      this.dataSource.splice(indexToDel, 1)
    })
  }

  save() {
    if(!this.charToAdd.id) {
      this.charToAdd.id = this.dataSource.length + 1;
    }
    let editIndex = null;
    this.dataSource.forEach((char, index) => {
      if(char.id === this.charToAdd.id) {
        editIndex = index;
      }
    })
    if(editIndex) {
      this.dataSource[editIndex] = this.charToAdd;
    } else {
      this.dataSource.push(this.charToAdd);
    }
    this.clearForms()
  }
}
