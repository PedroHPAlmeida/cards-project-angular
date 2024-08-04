import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input({ required: true }) icon: string = '';
  @Input({ required: true }) title: string = '';
  @Input() value: number | undefined = undefined;
  @Input() headerColor: string = '#e98132';
}
