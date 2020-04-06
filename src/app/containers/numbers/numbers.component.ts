import { Component, OnInit, OnDestroy, EventEmitter } from '@angular/core';
import { ListOfNumbersService } from '../../services/list-of-numbers/list-of-numbers.service';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.scss']
})
export class NumbersComponent implements OnInit, OnDestroy {
  private toogleListOfNumbers$ = new EventEmitter();
  public listOfNumbers: Array<number>;

  constructor(
    private listOfNumbersService: ListOfNumbersService
  ) { }

  ngOnInit() {
    this.toogleListOfNumbers$.subscribe(val => {
      if (val) {
        this.listOfNumbersService.getListOfRandomNumbers().subscribe(res => {
          this.listOfNumbers = res;
          console.log('List of random numbers: ', res);
        });
      } else {
        this.listOfNumbersService.destroy();
      }
    });
  }

  ngOnDestroy() {
    this.listOfNumbersService.destroy();
  }

}
