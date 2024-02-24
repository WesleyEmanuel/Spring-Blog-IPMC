import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { PageableResponse } from '../../models/PageableResponse';
import { Publication } from '../../models/Publication';

@Injectable({
  providedIn: 'root',
})
export class PublicationsService {
  private url = environment.api;

  constructor(private httpClient: HttpClient) {}

  getPublications(page: number = 0, size: number = 9) {
    return this.httpClient.get<PageableResponse<Publication>>(
      `${this.url}/publication?size=${size}&page=${page}`
    );
  }

  getPublicationById(id: number) {
    return this.httpClient.get<Publication>(`${this.url}/publication/${id}`);
  }
}
