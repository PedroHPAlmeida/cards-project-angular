import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrl: './card-item.component.scss'
})
export class CardItemComponent {
  @Input({ required: true }) leftContent!: string;
  @Input({ required: true }) rightContent!: string;
}
