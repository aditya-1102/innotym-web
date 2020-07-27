import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user';
import { remove, concat } from 'lodash';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
userList:User[];
constructor(private _userService:UserService,private _snackBar:MatSnackBar) { }
displayedColumns: string[] = ['_id', 'name', 'email','amount','role','action'];
dataSource = [];
ngOnInit(): void {
    this.getUserList();
}
getUserList(){
    this._userService.getUsers().subscribe(res =>{
    this.userList=res;
    console.log(this.userList);
    this.dataSource=this.userList;
  })
}
deleteUser(user){
  this._userService.deleteUser(user._id).subscribe(data =>{
    console.log(data);
    const removedItem=remove(this.dataSource,(item)=>{
      return item._id===data._id;
    })
    console.log(this.dataSource);
    this.dataSource=[...this.dataSource];
    this._snackBar.open('User Deleted Successfully!!','Success',{
      duration:4000
    });
  },err=>{
    console.log(err);
    this._snackBar.open('Error! User Delete Failed!!!','Error',{
      duration:4000
    });
  })
}

}
