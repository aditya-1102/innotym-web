import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../user/user.service';
import { Transaction } from '../transaction';
import { SharedService } from '../../login-signup/shared.service';
import { User } from '../../user/user';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-do-transaction',
  templateUrl: './do-transaction.component.html',
  styleUrls: ['./do-transaction.component.scss']
})
export class DoTransactionComponent implements OnInit 
{
  transactionForm:FormGroup;
  userList:any=[];
  debitTransactionObj:Transaction=new Transaction();
  creditTransactionObj:Transaction=new Transaction();
  debitUser:User=new User();
  creditUser:User=new User();
  currentUser:any={};

  constructor(      //CONSTRUCTOR
    private transactionService:TransactionService,
    private fb:FormBuilder,
    private userService:UserService,
    private sharedService:SharedService,
    private _snackBar:MatSnackBar,
    private router:Router
    ) { }
  ngOnInit(): void {      //ngONINIT
    this.createForm();
    this.getUsers();
    this.getCurrentUser();
  }

  getCurrentUser(){
    this.sharedService.currentData.subscribe(data => {
      this.currentUser=data
    });
  }

  createForm(){
    this.transactionForm=this.fb.group({
      amount:['',Validators.required],
      user:['',Validators.required],
    })
  }
  getUsers(){
    this.userService.getUsers().subscribe(data => {
      this.userList=data;
      console.log(this.userList);
    },err => {
      console.log(err);
    })
  }

  doTransaction(){        //DO TRANSACTION BUTTON LOGIC
    this.debitTransactionObj.userId = this.currentUser._id;
    this.debitTransactionObj.refId=this.transactionForm.value.user._id;
    this.debitTransactionObj.initialAmount=this.currentUser.amount;
    this.debitTransactionObj.transferAmount=this.transactionForm.value.amount;
    this.debitTransactionObj.transactionType="Debit";
    this.debitTransactionObj.date=new Date();

    this.creditTransactionObj.userId = this.transactionForm.value.user._id;
    this.creditTransactionObj.refId=this.currentUser._id;
    this.creditTransactionObj.initialAmount=this.transactionForm.value.user.amount;
    this.creditTransactionObj.transferAmount=this.transactionForm.value.amount;
    this.creditTransactionObj.transactionType="Credit";
    this.creditTransactionObj.date=new Date();

    this.debitUser=this.currentUser;
    this.debitUser.amount=this.currentUser.amount - this.transactionForm.value.amount;

    this.creditUser=this.transactionForm.value.user;
    this.creditUser.amount=this.creditUser.amount + this.transactionForm.value.amount;

    console.log(this.debitTransactionObj);
    console.log(this.creditTransactionObj);
    console.log(this.debitUser);
    console.log(this.creditUser);

    this.userService.updateUser(this.debitUser).subscribe(res =>{   //debit transaction update call
      this.userService.updateUser(this.creditUser).subscribe(res =>{    //credit transaction update call
        this.transactionService.createTransaction(this.debitTransactionObj).subscribe(res =>{   //debit transaction create call
          this.transactionService.createTransaction(this.creditTransactionObj).subscribe(res =>{    //credit transaction create call
            
            this._snackBar.open('Transaction Successfull!!😀😀','Success',{
              duration:4000
            });
            this.router.navigate(['user']);

          },err =>{
            alert("not done!!");
            this._snackBar.open('Sorry! Something went wrong.','Error',{
              duration:4000
            });
            console.log(err);
          })
          
        },err =>{
          console.log(err);
        })
      },err =>{
        console.log(err);
      })
    },err =>{
      console.log(err);
    })

  }

}
