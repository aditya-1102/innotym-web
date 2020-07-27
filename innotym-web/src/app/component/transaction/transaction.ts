export class Transaction{
    refId:string;
    userId:string;
    transferAmount:number;
    initialAmount:number;
    transactionType:string;
    date:Date;
}
export class TransactionPaginate{
    docs:Transaction[];
    total:number;
    limit:number;
    page:number;
    pages:number;
}