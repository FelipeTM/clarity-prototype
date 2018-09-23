import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Character } from '../../utils/character.model';
import { Houses } from '../../utils/houses.enum';

@Component({
  selector: 'app-character-insert-dialog',
  templateUrl: './character-insert-dialog.component.html',
  styleUrls: ['./character-insert-dialog.component.css']
})
export class CharacterInsertDialogComponent implements OnInit {

  show: boolean = false;
  char: Character;
  @Output() onOK: EventEmitter<Character> = new EventEmitter<Character>();

  // Form values
  id: number;
  name: string;
  birthday: Date;
  selectedHouse: string;
  housesOpts = [Houses.Gryffindor, Houses.Hufflepuff, Houses.Ravenclaw, Houses.Slytherin];

  constructor() { }

  ngOnInit() {
  }

  open(charToAdd: Character) {
    this.show = true;
    this.id = charToAdd.id;
    this.name = charToAdd.name;
    this.birthday = charToAdd.birthday;
    this.selectedHouse = charToAdd.house;
  }

  close() {
    this.show = false;
  }

  onCancel() {
    this.close();
  }

  onSave() {
    let charToAdd: Character = new Character(this.id, this.name, this.birthday, this.selectedHouse)
    this.onOK.emit(charToAdd);
    this.close();
  }

}
