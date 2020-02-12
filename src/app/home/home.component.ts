import { Component } from '@angular/core';
import 'hammerjs';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent {
  showNavigationArrows = false;
  showNavigationIndicators = false;
  images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/1200/350`);
  constructor(config: NgbCarouselConfig) { 
// customize default values of carousels used by this component tree
     config.interval = 10000;
     config.wrap = false;
     config.keyboard = false;
     config.pauseOnHover = false;
  }
  cards = [
    {
      accountNo: '4758765876948659876',
      accountType: 'MT5 account'
    },
    {
      accountNo: '7687674659776778768',
      accountType: 'Standard account'
    },
    {
      accountNo: '684365876485768465',
      accountType: 'Phillip Future account'
    }
  
  

  ];


}
