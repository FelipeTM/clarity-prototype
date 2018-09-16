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
import { ContentContainerComponent } from './content-container/content-container.component';

import { JSONService } from './services/json.service';
import { CharacterInsertDialogComponent } from './content-container/character-insert-dialog/character-insert-dialog.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MainContainerComponent,
    ContentContainerComponent,
    CharacterInsertDialogComponent,
    HomeComponent
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
