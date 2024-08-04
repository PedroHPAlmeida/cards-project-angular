import { Component } from '@angular/core';

@Component({
  selector: 'app-balance-card',
  templateUrl: './balance-card.component.html',
  styleUrl: './balance-card.component.scss'
})
export class BalanceCardComponent {
  availableBalances = [
    { display: 'Conta Corrente', value: 200 },
    { display: 'Conta Corrente Saldo Vinculados', value: 300 },
    { display: 'Conta Poupança Saldo Vinculados', value: 400 },
    { display: 'Investimentos com Baixa Automática', value: 500 },
    { display: 'Investimentos sem Baixa Automática', value: 500 },
  ];
  summary = [
    { display: 'Saldo Total', value: 1000 },
    { display: 'Livre para Movimentação', value: 1000 },
  ];
}
