import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  author:string = '';
  quote:string = '';
  isQuoteAuthorDefined:boolean = false;
  shouldDisplayBlockquote:string = 'none';

  constructor() {
  }

  ngOnInit() {
  }

  OnUpdateQuoteAndAuthor(){
    this.author = (<HTMLInputElement>event.target).value;
    this.quote =  (<HTMLInputElement>event.target).value;
    console.log(`${this.author} - ${this.quote}`)
    if(this.author !== '' && this.quote !== ''){
      this.isQuoteAuthorDefined = true
      this.shouldDisplayBlockquote = "block";
    }

  }

}
