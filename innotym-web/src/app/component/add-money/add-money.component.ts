import { Component, OnInit } from '@angular/core';
import { SharedService } from '../login-signup/shared.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {UserService} from '../user/user.service'
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-money',
  templateUrl: './add-money.component.html',
  styleUrls: ['./add-money.component.scss']
})
export class AddMoneyComponent implements OnInit {
  userDetails:any={};
  addMoneyForm:FormGroup;
  constructor(
    private sharedService:SharedService,
    private fb:FormBuilder,
    private userService:UserService,
    private _snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
    this.sharedService.currentData.subscribe(data=>{
      this.userDetails=data;
    });
    this.addMoneyForm=this.fb.group({
      amount:['',Validators.required]
    })
  }
  addMoney(){
    this.userDetails.amount=parseInt(this.userDetails.amount+this.addMoneyForm.value.amount);
    console.log(this.addMoneyForm.value);
    this.userService.updateUser(this.userDetails).subscribe(data =>{
      this._snackBar.open('Money Added Successfully😀😀','Success',{
        duration:4000
      });
      this.sharedService.updateMessage(data);
      console.log(data);
    },
    err => {
      console.log(err);
      this._snackBar.open('Sorry! Adding Money Failed😥','Error',{
        duration:4000
      });
    })
  }
}
