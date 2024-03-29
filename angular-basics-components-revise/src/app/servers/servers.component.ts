import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No Server was Created!!';
  serverName = '';

  constructor() {
    setTimeout(() =>{
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Yes the Server was Created!! Name is '+ this.serverName;
  }

  onUpdateServerName(event:Event) {
   this.serverName = (<HTMLInputElement>event.target).value
      //this.serverCreationStatus = ` New Server has been created with the value ${event.target.value} `
  }

}
