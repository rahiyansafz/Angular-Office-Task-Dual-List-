import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DualListComponent } from './dual-list/dual-list.component';
import {HttpClientModule} from '@angular/common/http';
import { ApiService } from './api.service';
import {HttpModule} from "@angular/http";

@NgModule({
  imports:      [ BrowserModule, FormsModule, CommonModule, HttpClientModule, HttpModule ],
  declarations: [ AppComponent, HelloComponent, DualListComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ApiService]
})
export class AppModule { }
