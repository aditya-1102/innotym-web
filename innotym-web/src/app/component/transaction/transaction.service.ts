import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaction, TransactionPaginate } from './transaction';

const baseURL='http://localhost:3000/api/transactions';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http:HttpClient) { }
  
  createTransaction(model):Observable<Transaction>{
    return this.http.post<Transaction>(`${baseURL}`,model);
  }
  getMyTransaction(id,page,perPage){
   return this.http.get<TransactionPaginate>(`${baseURL}/myTransactions/${id}?page=${page}&perPage=${perPage}`); 
  }
}
