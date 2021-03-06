import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablePipesComponent } from './components/table-pipes/table-pipes.component';
import { CapitalizePipe } from './utils/pipes/capitalize.pipe';
import { DomSanitizerPipe } from './utils/pipes/dom-sanitizer.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TablePipesComponent,
    CapitalizePipe,
    DomSanitizerPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
