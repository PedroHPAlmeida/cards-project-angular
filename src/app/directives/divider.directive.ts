import { Directive } from '@angular/core';

@Directive({
  selector: 'app-divider, [appDivider]',
  host: {
    class: 'ca-c-divider-v2'
  }
})
export class DividerDirective { }
