import { Component } from '@angular/core';

@Component({
  selector: 'app-client-infos',
  templateUrl: './client-infos.component.html',
  styleUrl: './client-infos.component.scss'
})
export class ClientInfosComponent {
  clientInfos = [
    { label: 'Nome', value: 'Felipe da Silva Freitas' },
    { label: 'Idade', value: '26 anos' },
    { label: 'Renda Mensal', value: 'R$ -1,000.00' },
    { label: 'Nacionalidade', value: 'Brasileiro' },
  ];
}
