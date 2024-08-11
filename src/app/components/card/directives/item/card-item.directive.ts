import { Directive } from '@angular/core';

// Remover
@Directive({
  selector: '[appCardItem]',
  host: {
    'class': 'ca-c-card-v2__content-item'
  }
})
export class CardItemDirective { }
