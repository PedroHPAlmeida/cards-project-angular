import { Component } from '@angular/core';

@Component({
  selector: 'app-balance-card',
  templateUrl: './balance-card.component.html',
  styleUrl: './balance-card.component.scss'
})
export class BalanceCardComponent {
  totalBalanceValue: number = 100;
  ccValue: number = 200;
  linkedBalanceCC: number = 300;
  linkedBalanceSA: number = 400;
  automaticWithdrawal: number = 500;
  noAutomaticWithdrawal: number = 500;
  totalBalance: number = 1000;
  freeMovement: number = 1000;
}
