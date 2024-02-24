import { Component, OnInit } from '@angular/core';
import { SkeletonCardsLoadingComponent } from '../../components/skeleton-cards-loading/skeleton-cards-loading.component';
import { PublicationsService } from '../../services/publications/publications.service';
import { PageableResponse } from '../../models/PageableResponse';
import { Publication } from '../../models/Publication';
import { CardComponent } from '../../components/publications/card/card.component';

@Component({
  selector: 'app-publications',
  standalone: true,
  imports: [SkeletonCardsLoadingComponent, CardComponent],
  templateUrl: './publications.component.html',
  styleUrl: './publications.component.scss',
})
export class PublicationsComponent implements OnInit {
  loading: boolean = true;
  loadingBtn: boolean = false;
  pageablePublications!: PageableResponse<Publication>;

  constructor(private publicationsService: PublicationsService) {}

  ngOnInit(): void {
    this.getPublications(() => {
      this.loading = false;
    });
  }

  getPublications(callback = () => {}, pageNumber?: number) {
    this.publicationsService.getPublications(pageNumber).subscribe(
      (resp) => {
        this.pageablePublications = {
          ...resp,
          content: this.pageablePublications
            ? this.pageablePublications.content.concat(resp.content)
            : resp.content,
        };
        callback();
      },
      () => {
        callback();
      }
    );
  }

  loadingMorePublications(currentPageNumber: number) {
    this.loadingBtn = true;
    const loadingPage = currentPageNumber + 1;

    this.getPublications(() => {
      this.loadingBtn = false;
    }, loadingPage);
  }
}
