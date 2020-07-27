import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user/user.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { SharedService } from './shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.scss']
})
export class LoginSignupComponent implements OnInit {
  signupForm: FormGroup;
  loginForm:FormGroup;
  
  constructor(private fb:FormBuilder, private userService:UserService, private _snackBar: MatSnackBar, private sharedservice:SharedService, private router:Router) { }
  ngOnInit(): void {
    this.createLoginForm();
    this.createSignupForm();
  }

  createLoginForm(){      //login
    this.loginForm=this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }  
  login(){
    this.userService.loginUser(this.loginForm.value).subscribe(
      data=>{
        this._snackBar.open('Congrats!😀 You are now successfully logged in😀😀','Success',{
          duration:4000
        });
        this.sharedservice.updateMessage(data);
        this.router.navigate(['my-transaction']);
        console.log(data);
      },
      err=>{
        this._snackBar.open('Sorry! Something went wrong.','Error',{
          duration:4000
        });
        console.log(err);
      }
    )
  }
  
  createSignupForm(){     //signup
    this.signupForm=this.fb.group({
      name:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],
      amount:['',Validators.required]
    })
  }
  signup(){
    this.signupForm.value.role="user";
    this.userService.createUser(this.signupForm.value).subscribe(data =>{
      this._snackBar.open('Congrats!😀 You are now successfully registered😀😀','Success',{
        duration:4000
      });
      console.log(data);
    },
    err =>{
      this._snackBar.open('Sorry! Something went wrong.','Error',{
        duration:4000
      });
      console.log(err)
    }
    );
  }
}
