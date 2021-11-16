import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxAutonumericModule } from 'projects/ngx-autonumeric/src/public-api';

import { AppComponent } from './app.component';
import { ConfigurationsComponent } from './controls/configurations/configurations.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfigurationsComponent
  ],
  imports: [
    NgxAutonumericModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
