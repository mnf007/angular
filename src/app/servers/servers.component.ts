import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit{
  allowNewServer=false;
  serverCreationStaus="server was not created";
  serverName='Test Server';
  items: String[]=[];
  allow=false;
  history=false;
  // userName='';
  constructor(){
    setTimeout(()=>{
      this.allowNewServer=true;
    },2000)
  }
  onCreateServer(){
    this.history=false;
    this.allow=true;
    this.items.push(this.serverName);
    console.log('button clicked');
  }
  onUpdateServerName(event:Event){
this.serverName=(<HTMLInputElement>event.target).value;
  }
  // onUpdateUserName(event:Event){
  //   this.userName=(<HTMLInputElement>event.target).value;
  //     }
  onReset(){
    this.items=[];
    this.serverName='Test Server';
    this.history=true;
    this.allow=false;
  }
  ngOnInit(){}
}
