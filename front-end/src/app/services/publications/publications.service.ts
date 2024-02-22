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

  getPublications() {
    return this.httpClient.get<PageableResponse<Publication>>(
      `${this.url}/publication`
    );
  }
}
