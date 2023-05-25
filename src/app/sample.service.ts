import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SampleService {
  showParagraph= new BehaviorSubject<boolean>(false)
  constructor() { }
}
