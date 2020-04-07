import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';

import { Message } from '../../shared/models/message.model';


@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  private apiUrl = 'assets/MOCK_DATA.json';

  constructor(
    private http: HttpClient
  ) { }

  searchMessages(keyword: string): Observable<Message[]> {
    const searchKeyword = keyword.toLowerCase();

    return this.getMessages().pipe(
      delay(700), // to look like real http call.
      map(resp => resp.filter(message => message.text.toLowerCase().indexOf(searchKeyword) > -1))
    );
  }

  getMessages(): Observable<Message[]> {
    return this.http.get<Message[]>(this.apiUrl);
  }
}
