import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { HomeComponent } from './home.component';
import { NotFoundComponent } from './not-found.component';

import { MessagesModule } from './messages/messages.module';
import { PhotosModule } from './photos/photos.module';
import { Routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MessagesModule,
    PhotosModule,
    Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
