import { Component, OnInit } from '@angular/core';
import { SkeletonCardsLoadingComponent } from '../../components/skeleton-cards-loading/skeleton-cards-loading.component';

@Component({
  selector: 'app-publications',
  standalone: true,
  imports: [SkeletonCardsLoadingComponent],
  templateUrl: './publications.component.html',
  styleUrl: './publications.component.scss',
})
export class PublicationsComponent implements OnInit {
  loading: boolean = true;

  ngOnInit(): void {
    setTimeout(() => (this.loading = false), 5000);
  }
}
