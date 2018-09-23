import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterInsertDialogComponent } from './character-insert-dialog.component';

describe('CharacterInsertDialogComponent', () => {
  let component: CharacterInsertDialogComponent;
  let fixture: ComponentFixture<CharacterInsertDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterInsertDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterInsertDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
