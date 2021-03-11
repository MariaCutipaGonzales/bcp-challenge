import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Agency } from '@core/models/agency-model';
import { Observable } from 'rxjs';

@Injectable()
export class AgencyService {
  private readonly urlAgencyMock = 'assets/api/agencies.json';
  constructor(private http: HttpClient) {}

  getList(): Observable<Array<Agency>> {
    return this.http.get<Array<Agency>>(this.urlAgencyMock);
  }
}
