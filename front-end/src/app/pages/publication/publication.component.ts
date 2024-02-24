import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Publication } from '@app/models/Publication';
import { PublicationsService } from '@app/services/publications/publications.service';

@Component({
  selector: 'app-publication',
  standalone: true,
  imports: [MatIconModule, RouterLink],
  templateUrl: './publication.component.html',
  styleUrl: './publication.component.scss',
})
export class PublicationComponent implements OnInit {
  publicationId!: number;
  publication!: Publication;

  constructor(
    private route: ActivatedRoute,
    private publicationService: PublicationsService
  ) {
    this.route.queryParams.subscribe((params) => {
      this.publicationId = params['id'];
    });
  }

  ngOnInit(): void {
    this.getPublicationById(this.publicationId);
  }

  getPublicationById(id: number) {
    this.publicationService.getPublicationById(id).subscribe((resp) => {
      this.publication = resp;
    });
  }
}
