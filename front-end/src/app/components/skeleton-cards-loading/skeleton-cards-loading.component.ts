import { Component } from '@angular/core';

@Component({
  selector: 'app-skeleton-cards-loading',
  standalone: true,
  imports: [],
  templateUrl: './skeleton-cards-loading.component.html',
  styleUrl: './skeleton-cards-loading.component.scss',
})
export class SkeletonCardsLoadingComponent {
  cards = new Array(8);
}
