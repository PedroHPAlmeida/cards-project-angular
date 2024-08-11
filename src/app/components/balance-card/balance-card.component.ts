import { Component } from '@angular/core';

@Component({
  selector: 'app-balance-card',
  templateUrl: './balance-card.component.html',
  styleUrl: './balance-card.component.scss'
})
export class BalanceCardComponent {
  totalBalanceValue = `R$ ${100},00`;
  ccValue = `R$ ${200},00`;
  linkedBalanceCC = `R$ ${300},00`;
  linkedBalanceSA = `R$ ${400},00`;
  automaticWithdrawal = `R$ ${500},00`;
  noAutomaticWithdrawal = `R$ ${500},00`;
  totalBalance = `R$ ${1000},00`;
  freeMovement = `R$ ${1000},00`;
}
