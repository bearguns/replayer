import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Component Imports
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

// Module Imports
import { MaterialComponentsModule } from './material-components/material-components.module';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    MaterialComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
