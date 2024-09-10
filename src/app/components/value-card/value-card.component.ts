import { Component, Input } from '@angular/core';
import { Value } from '../../models/value.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-value-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './value-card.component.html',
  styleUrl: './value-card.component.css'
})
export class ValueCardComponent {
  @Input() value?: Value;

  isHovered: boolean = false;
}
