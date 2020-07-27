import { Component, OnInit } from '@angular/core';
import { SharedService } from '../login-signup/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
userobj:any={};
isHidden:boolean=true;

  constructor(private sharedService:SharedService){ }

  ngOnInit(): void {
    this.sharedService.currentData.subscribe(data=>{
      if(data == ''){
        this.isHidden=true;
        this.userobj=null;
      }else{
        this.isHidden=false;
        this.userobj=data;
      }
    })
  }

}
