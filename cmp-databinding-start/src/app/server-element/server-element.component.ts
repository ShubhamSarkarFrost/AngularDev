import {
  AfterContentChecked,
  AfterContentInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked {
  @Input('srvElement') element: {type:string, name:string, content:string};
  @Input() name
  constructor() {
    console.log('Constructor Called')
  }
  ngOnChanges(changes:SimpleChanges){
    console.log('Ng On Changes Called!!')
    console.log(changes)
  }
  ngOnInit(): void {
    console.log('ngOn Init Called!!')
  }

  ngDoCheck() {
    console.log('ng Do Check Called!!')
  }

  ngAfterContentInit()  {
    console.log("ng After Content Init was Called!!")
  }

  ngAfterContentChecked(){
    console.log("NG AfterContentChecked is Called!!")
  }
}
