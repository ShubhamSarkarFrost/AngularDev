import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
  @Output('servCreated') serverCreated = new EventEmitter<{ name: string; content: string }>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{ name: string; content: string }>();
  newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput: ElementRef ;

  constructor() {}

  ngOnInit(): void {}

  public onAddServer() {
    // console.log(serverNameInput.value); ---> Fetching Data from Local Refrences
    this.serverCreated.emit({
      name: this.newServerName,
      content: this.serverContentInput.nativeElement.value
    });
  }

  public onAddBlueprint() {
    this.blueprintCreated.emit({
      name: this.newServerName,
      content: this.serverContentInput.nativeElement.value
    });
  }
}
