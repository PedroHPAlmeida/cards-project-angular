import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-header',
  templateUrl: './card-header.component.html',
  styleUrl: './card-header.component.scss'
})
export class CardHeaderComponent {
  @Input({ required: true }) icon: string = '';
  @Input({ required: true }) title: string = '';
  @Input() value: number | undefined = undefined;
  @Input() headerColor: string = '#e98132';
}
