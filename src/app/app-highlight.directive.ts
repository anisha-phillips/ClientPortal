import { Directive, OnChanges, Input, SimpleChanges } from '@angular/core';

@Directive({
    selector: '[appHighlight]'
  })
  export class HighlightDirective implements OnChanges {
    @Input() public number: any;
    @Input() public input: any;
  
    ngOnChanges(changes: SimpleChanges){
      if(changes.input){
        console.log(`${changes.input} changed.`);
      }
    }
  }