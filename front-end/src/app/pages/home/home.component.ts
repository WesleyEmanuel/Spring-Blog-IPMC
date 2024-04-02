import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorariosComponent } from '../../components/horarios/horarios.component';
import { PublicationsService } from '@app/services/publications/publications.service';
import { Publication } from '@app/models/Publication';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HorariosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit{

  publications!: Publication[];
  mobile_size: boolean = false;

  constructor(private publicationsService: PublicationsService, private router: Router) {}

  ngOnInit(): void {
    this.checkWindowWidth();
    this.getPublications();
  }
  
  getPublications(pageNumber?: number) {
    this.publicationsService.getPublications(pageNumber).subscribe(
      (resp) => {
        this.publications = resp.content;
      },
    );
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkWindowWidth();
  }

  checkWindowWidth() {
    this.mobile_size = window.innerWidth <= 900;
  }

  openPublication(id: number) {
    this.router.navigate(['publicacao'], { queryParams: { id } });
  }
}
