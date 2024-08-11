import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-header-title',
  templateUrl: './card-header-title.component.html',
  styleUrl: './card-header-title.component.scss'
})
export class CardHeaderTitleComponent {
  @Input({ required: true }) text!: string;
  @Input({ required: true }) icon!: string;
}
