import { Injectable } from '@angular/core';
import { Observable, timer, Subject } from 'rxjs';
import { tap, map, takeUntil, bufferTime } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ListOfNumbersService {
  private myNumber$ = new Subject<number>();
  private destroy$ = new Subject<void>();

  constructor() { }

  getNumber(): Observable<number> {
    this.initMyNumbers();

    return this.myNumber$;
  }

  getListOfRandomNumbers(): Observable<number[]> {
    return this.getNumber().pipe(
      bufferTime(2000),
      takeUntil(this.destroy$)
    );
  }

  initMyNumbers() {
    timer(0, 500).pipe(
      map(val => Math.round(Math.random() * 100)),
      tap(val => this.myNumber$.next(val)),
      takeUntil(this.destroy$),
    ).subscribe();
  }

  destroy() {
    this.destroy$.next();
  }
}
