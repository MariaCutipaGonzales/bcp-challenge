import { Component, OnInit } from '@angular/core';
import { AppState } from '@core/store/core.state';
import { getLoading } from '@core/store/shared/shared.selector';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'mg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'BCP CHALLENGE';
  showLoading: Observable<boolean> = new Observable<boolean>();
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.showLoading = this.store.select(getLoading);
  }
}
