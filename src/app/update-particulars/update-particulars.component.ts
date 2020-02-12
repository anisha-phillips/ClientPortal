import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-particulars',
  templateUrl: './update-particulars.component.html',
  styleUrls: ['./update-particulars.component.css']
})
export class UpdateParticularsComponent implements OnInit {

  LastUpdateDateTime = 'Last Updated on 20 July 2019';
  AccountNo = 'AAA2222';
  emailAddress = 'peterfirstcher1@phillip.com.sg';

  countries = [
    {id:0, name: "Singapore"},
    {id:1, name: "Malaysia"},
    {id:2, name: "Indonesia"},
    {id:3, name: "Thailand"},
  ];

  bankcountries = [
    {id:0, name: "Singapore"},
    {id:1, name: "Malaysia"},
    {id:2, name: "Indonesia"},
    {id:3, name: "Thailand"},
  ];

  idtypes = [
    {id:0, name: "NRIC"},
    {id:1, name: "Passport"},
  ];

  countriescodes = [
    {id:65, name: "+65"},
    {id:60, name: "+60"},
    {id:62, name: "+62"},
    {id:66, name: "+66"},
  ];

  contacttypes = [
    {id:0, name: "Call"},
    {id:1, name: "SMS"},
    {id:2, name: "Call and SMS"},
  ];

  banknames = [
    {id:0, name: "DBS"},
    {id:1, name: "OCBC"},
    {id:2, name: "UOB"},
  ];

  Occupations = [
    {id:0, name: "Trader"},
    {id:1, name: "Housewife"},
    {id:2, name: "Others"},
  ];

  Incomes = [
    {id:0, name: "--Please Select--"},
    {id:1, name: "10,000 to 50,000"},
    {id:2, name: "50,001 to 100,000"},
    {id:3, name: "100,001 to 500,000"},
    {id:4, name: "500,001 to 2 million"},
  ];

  NetWorths = [
    {id:0, name: "--Please Select--"},
    {id:1, name: "10,000 to 50,000"},
    {id:2, name: "50,001 to 100,000"},
    {id:3, name: "100,001 to 500,000"},
    {id:4, name: "500,001 to 2 million"},
  ];

  SourceWealths = [
    {id:0, name: "--Please Select--"},
    {id:1, name: "Inheritance"},
    {id:2, name: "Others"},
  ];

  EduLevels = [
    {id:0, name: "--Please Select--"},
    {id:1, name: "Primary"},
    {id:2, name: "Secondary"},
    {id:3, name: "Tertiary"},
  ];

  Qualifications = [
    {id:0, name: "--Please Select--"},
    {id:1, name: "Account"},
    {id:2, name: "Business"},
    {id:3, name: "Finance"},
  ];

  ProQualifications = [
    {id:0, name: "--Please Select--"},
    {id:1, name: "Associate Wealth Planner(AWP)"},
  ];

  elements: any = [
    {id: 1, product: 'something', broker: 'phillip', transaction: '20'},
  ];

  headerElements = ['#','Product(e.g.Futures, Options)','Name of Broker','Number of Transactions(past 3 years)'];

  files: any = [];
  //Residentialfiles: any = [];
  //Mailingfiles: any = [];

  uploadFile(event) {
    for (let index = 0; index < event.length; index++) {
      const element = event[index];
      this.files.push(element.name)
    }  
  }

  //uploadResidentialAddressFile(event) {
  //  for (let index = 0; index < event.length; index++) {
  //    const element = event[index];
  //    this.Residentialfiles.push(element.name)
  //  }  
  //}

  //uploadMailingAddressFile(event) {
  //  for (let index = 0; index < event.length; index++) {
  //    const element = event[index];
  //    this.Mailingfiles.push(element.name)
  //  }  
  //}

  deleteAttachment(index) {
    this.files.splice(index, 1)
  }

  //deleteResidentialAttachment(index) {
  //  this.Residentialfiles.splice(index, 1)
  //}

  //deleteMailingAttachment(index) {
  //  this.Mailingfiles.splice(index, 1)
  //}

  onSubmit(){
  };

  onSubmitContactDetails(){
    
  };

  onSubmitBankDetails(){

  };

  constructor() { }
  ngOnInit() {
  }

}