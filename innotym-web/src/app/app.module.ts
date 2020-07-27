import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { UserComponent } from './component/user/user.component';
import {MatTableModule} from '@angular/material/table';
import { LoginSignupComponent } from './component/login-signup/login-signup.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { SharedService } from './component/login-signup/shared.service';
import { AddMoneyComponent } from './component/add-money/add-money.component';
import { DoTransactionComponent } from './component/transaction/do-transaction/do-transaction.component';
import {MatSelectModule} from '@angular/material/select';
import { MyTransactionComponent } from './component/transaction/my-transaction/my-transaction.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UserComponent,
    LoginSignupComponent,
    AddMoneyComponent,
    DoTransactionComponent,
    MyTransactionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    MatTableModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatPaginatorModule,
    MatIconModule,
    MatMenuModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
