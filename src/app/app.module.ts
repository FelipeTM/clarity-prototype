import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { ClrFormsNextModule  } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainContainerComponent } from './main-container/main-container.component';
import { CharacterListComponent } from './character-list/character-list.component';

import { JSONService } from './services/json.service';
import { CharacterInsertDialogComponent } from './character-list/character-insert-dialog/character-insert-dialog.component';
import { HomeComponent } from './home/home.component';
import { HousesComponent } from './houses/houses.component';

@NgModule({
  declarations: [
    AppComponent,
    MainContainerComponent,
    CharacterListComponent,
    CharacterInsertDialogComponent,
    HomeComponent,
    HousesComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ClarityModule,
    ClrFormsNextModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [JSONService],
  bootstrap: [AppComponent]
})
export class AppModule { }
