import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   evenNumbers: number[] = [];
   oddNumbers: number[] = [];

  onIntervalFired(lastnumbergot:number) {
    if(lastnumbergot % 2 == 0){
      this.evenNumbers.push(lastnumbergot);
    }else{
      this.oddNumbers.push(lastnumbergot)
    }
  }
}
