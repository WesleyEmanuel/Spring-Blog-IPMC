import { Component, Input } from '@angular/core';
import { Publication } from '../../../models/Publication';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() publication!: Publication;

  constructor(private router: Router) {}

  openPublication(id: number) {
    this.router.navigate(['publicacao'], { queryParams: { id } });
  }
}
