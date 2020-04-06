import { Component, OnInit, EventEmitter } from '@angular/core';
import { combineLatest } from 'rxjs';
import { distinctUntilChanged, filter } from 'rxjs/operators';

import { LongPollService } from '../../services/long-poll/long-poll.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public readonly isUserLoggedIn$: EventEmitter<boolean> = new EventEmitter();
  public readonly onlineStatus$ = this.longPollService.getOnlineStatus();

  constructor(
    private longPollService: LongPollService
  ) { }

  ngOnInit() {
    combineLatest(
      this.isUserLoggedIn$,
      this.onlineStatus$
    ).pipe(
      distinctUntilChanged(([pLogged, pOnline]/*prev*/, [cLogged, cOnline]/*curr*/) => pLogged === cLogged && pOnline === cOnline),
      filter(([loggedIn, online]) => {
        return loggedIn && online;
      }),
    ).subscribe(() => console.warn('User is online and logged in'));
  }

}
