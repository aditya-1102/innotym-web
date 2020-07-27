import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserComponent} from '../app/component/user/user.component';
import { LoginSignupComponent } from './component/login-signup/login-signup.component';
import { AddMoneyComponent } from './component/add-money/add-money.component';
import { DoTransactionComponent } from './component/transaction/do-transaction/do-transaction.component';
import { MyTransactionComponent } from './component/transaction/my-transaction/my-transaction.component';


const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'user',component:UserComponent},
  {path:'login',component:LoginSignupComponent},
  {path:'add-money',component:AddMoneyComponent},
  {path:'my-transaction',component:MyTransactionComponent},
  {path:'do-transaction',component:DoTransactionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
