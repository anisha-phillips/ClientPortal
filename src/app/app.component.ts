import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import 'hammerjs';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

export interface cards {
  accountNo: String;
  accountType:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[]
})
export class AppComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();

  title = 'ClientPortalMobileApp';
  showNavigationArrows = false;
  showNavigationIndicators = false;
  images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/1485/913`);

  cards = [
    {
      accountNo: '4758765876948659876',
      accountType: 'MT5 account'
    },
    {
      accountNo: '7687674659776778768',
      accountType: 'Standard account'
    }
  

  ];

  constructor(config: NgbCarouselConfig) {

    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit() {
  }
 
   public onSidenavClose = () => {
    this.sidenavClose.emit();
  }



}
