import { Component } from '@angular/core';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrl: './credit-card.component.scss'
})
export class CreditCardComponent {
  infos = [
    {
      first: { left: '1234567891011 - FELIPE DA SILVA FREITAS', right: 'MASTER CARD' },
      second: { left: 'Limite de Compra', right: 'R$ 1,000.00' }
    },
    {
      first: { left: 'Disponível', right: 'R$ 1,200.00' },
      second: { left: 'Limite de Saque', right: 'R$ 2,000.00' }
    },
    {
      first: { left: 'Disponível', right: 'R$ 1,300.00' },
      second: { left: 'Limite Total Utilizado', right: 'R$ 3,000.00' }
    },
  ];
}
