import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // template: '<app-server></app-server>' +
  //   '<app-server></app-server>',      //component-Template
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No Server was Created !!"
  serverName = 'TestServer';

  constructor() {
    setTimeout(() =>{
        this.allowNewServer = true;
        console.log(this.allowNewServer);
    }, 2000)
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStatus = 'server was Created!!' + 'The Name is '+ this.serverName
  }
  onUpdateServerName(event){
     this.serverName = (<HTMLInputElement>event.target).value;
     console.log(this.serverName);
  }
}
