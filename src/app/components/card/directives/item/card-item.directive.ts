import { Directive } from '@angular/core';

@Directive({
  selector: '[appCardItem]',
  host: {
    'class': 'ca-c-card__content-item'
  }
})
export class CardItemDirective { }
