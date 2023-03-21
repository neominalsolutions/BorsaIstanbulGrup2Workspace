import { Component, Input } from '@angular/core';

export type btnColor = 'primary' | 'secondary' | 'accent' | 'warn';

@Component({
  selector: 'lib-borsaist-button',
  templateUrl: './borsaist-button.component.html',
  styleUrls: ['./borsaist-button.component.css'],
})
export class BorsaistButtonComponent {
  @Input() btnText!: string;
  @Input() btnColor!: btnColor;
}
