import { Component, OnInit,ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material';

export interface Transaction {
  item: string;
  cost: number;
}

export interface transactionHistory {
  orderNO: number;
  wdCurrency: string;
  wdAmount:number;
  status:string;
  type:string;
  time:Date;
}

const transactionHistory_data: transactionHistory[] = [
  {orderNO: 1, wdCurrency: 'USD',wdAmount:1234,status:'A',type:'M',time:new Date},
  {orderNO: 2, wdCurrency: 'JPY',wdAmount:3456,status:'R',type:'S',time:new Date},
  {orderNO: 3, wdCurrency: 'CAD',wdAmount:65777,status:'P',type:'M',time:new Date},
  {orderNO: 4, wdCurrency: 'INR',wdAmount:986578,status:'R',type:'S',time:new Date},
  {orderNO: 5, wdCurrency: 'AUD',wdAmount:5479854,status:'A',type:'M',time:new Date},
  {orderNO: 6, wdCurrency: 'USD',wdAmount:765498654,status:'A',type:'S',time:new Date}
];

@Component({
  selector: 'app-fund-withdrawal',
  templateUrl: './fund-withdrawal.component.html',
  styleUrls: ['./fund-withdrawal.component.css']
})


export class FundWithdrawalComponent implements OnInit {
  today: number = Date.now();
  pNames = ['CAD', 'CNH', 'JPY','NGD','SBD','USD'];
  pOptions = ['Quick Cheque Deposit', 'Collect Personally', 'Authorization for cheque collection','Internal Transfer Futures','Internal Phillip Transfer','Remittance to Bank'];
  pcStatus = ['Processed', 'Pending Approval', 'Approved','Rejected'];
  ppStatus = ['Approved','Rejected'];
  pBankcodes = ['7199','7171','7171','7339'];
  pInternalACnos=['5241670123456789','123489075436879','65437687654983','898798435568769']

  displayedColumns = ['item', 'cost'];

 

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  dataSource: MatTableDataSource<transactionHistory>;


  

  ngOnInit() {
    this.dataSource = new MatTableDataSource(transactionHistory_data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

 
  transactions: Transaction[] = [
    {item: 'CAD', cost: 23.00},
    {item: 'CNH', cost: -131171.04},
    {item: 'JPY', cost: 823860.00},
    {item: 'NGD', cost: 1123.00},
    {item: 'SBD', cost: 60079.19},
    {item: 'USD', cost: 20056.06},
  ];

  displayedColumns1 : string[]  = ['orderNO', 'wdCurrency','wdAmount','status','type','time'];


 

  /** Gets the total cost of all transactions. */
  getTotalCost() {
    return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);
  }
}
