import { Component, Input } from '@angular/core';
import { Hobby } from '../../models/hobby.model';

@Component({
  selector: 'app-hobby-card',
  standalone: true,
  imports: [],
  templateUrl: './hobby-card.component.html',
  styleUrl: './hobby-card.component.css'
})
export class HobbyCardComponent {
  @Input() hobby?: Hobby;
}
