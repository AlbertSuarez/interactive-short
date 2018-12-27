import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class InteractionService {

  constructor(private http: HttpClient) { }

  public getInteractionJson(): Observable<any> {
    return this.http.get('/assets/interaction.json');
  }

}
