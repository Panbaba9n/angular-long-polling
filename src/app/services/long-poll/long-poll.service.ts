import { Injectable } from '@angular/core';
import { Observable, timer, BehaviorSubject, Subject } from 'rxjs';
import { concatMap, pluck, takeUntil, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LongPollService {
  private dummyOnline$: Observable<{ status: boolean }>;
  private longPoll$: Observable<boolean>;
  private stop$ = new Subject();
  private onlineStatus$ = new BehaviorSubject(false);

  constructor() { }

  getOnlineStatus(): Observable<boolean> {
    return this.onlineStatus$;
  }

  set dummyOnline(dummyOnline$: Observable<{ status: boolean }>) {
    this.dummyOnline$ = dummyOnline$;
  }

  startLongPolling(interval: number = 2000) {
    this.longPoll$ = timer(0, interval).pipe(
      tap(value => console.log('interval value: ', value)),
      concatMap(() => this.dummyOnline$),
      pluck('status'),
      tap(value => console.log('concatMap value: ', value)),
      tap((value) => this.onlineStatus$.next(value)),
      takeUntil(this.stop$)
    );

    this.longPoll$.subscribe();
  }

  stopLongPolling() {
    this.stop$.next();
  }
}
