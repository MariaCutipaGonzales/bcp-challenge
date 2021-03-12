import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Agency } from '@core/models/agency-model';
import { Utils } from '@core/utils/utils';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AgencyService {
  private readonly urlAgencyMock = 'assets/api/agencies.json';
  constructor(private http: HttpClient) {}

  getList(): Observable<Array<Agency>> {
    return this.http.get<Array<Agency>>(this.urlAgencyMock).pipe(
      map((data) => {
        const listAgency: Agency[] = [];
        for (let key in data) {
          let imgSrc = Utils.getImgSrc();
          listAgency.push({ ...data[key], img: imgSrc, id: key });
        }

        return listAgency;
      })
    );
  }
}
