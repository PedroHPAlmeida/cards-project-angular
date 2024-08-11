import { Directive } from '@angular/core';

@Directive({
  selector: 'app-card-content, [appCardContent]',
  host: {
    'class': 'ca-c-card-v2__content'
  }
})
export class CardContentDirective { }
