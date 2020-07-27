import { Component, OnInit, ViewChild } from '@angular/core';
import { TransactionService } from '../transaction.service';
import { SharedService } from '../../login-signup/shared.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-my-transaction',
  templateUrl: './my-transaction.component.html',
  styleUrls: ['./my-transaction.component.scss']
})
export class MyTransactionComponent implements OnInit {
  
  userDetails:any={};
  constructor(private transactionService:TransactionService,
  private sharedService:SharedService) { }
  displayedColumns: string[] = ['refId.name','userId','initialAmount','transferAmount','transactionType',];
  dataSource = [];
  page=1;
  perPage=10;
  resultSize:any=0;
  @ViewChild(MatPaginator,{static:true}) paginator:MatPaginator;

  ngOnInit():void {

    this.sharedService.currentData.subscribe(data =>{
      this.userDetails=data;
      if(this.userDetails != null){
        this.getMyTransaction(this.userDetails._id);
      }
    });

    this.paginator.page.subscribe(data =>{
      this.transactionService.getMyTransaction(this.userDetails._id,++data.pageIndex,data.pageSize).subscribe(data => {
      this.dataSource=data.docs;
      this.resultSize=data.total;
    })
  });
}

getMyTransaction(id){
  this.transactionService.getMyTransaction(id,this.page,this.perPage).subscribe(data =>{
    this.dataSource=data.docs;
    this.resultSize=data.total;
    console.log(data);                       
  },
  err =>{
    console.log(err);
  })
}

}
