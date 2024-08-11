import { Directive, HostBinding, Input } from '@angular/core';

// Renomear diretiva de elemente após excluir o componente CardHeader 
@Directive({
  selector: 'app-card-header-dir, [appCardHeader]',
  host: {
    'class': 'ca-c-card-v2__header'
  }
})
export class CardHeaderDirective { 
  @Input()
  @HostBinding('style.background-color') bgColor: string = '#E98132';
}
