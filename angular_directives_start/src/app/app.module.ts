import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import {BasicHighlightDirective} from "./basic-highlight/basic-highlight-directive";
import {BetterHighlight} from "./basic-highlight/better-highlight";
import {UnlessDirective} from "./basic-highlight/unless-directive";

@NgModule({
  declarations: [
    AppComponent,
    BasicHighlightDirective, // add the directive declared
    BetterHighlight, // add the directive declared
    UnlessDirective // add the directive declared
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
