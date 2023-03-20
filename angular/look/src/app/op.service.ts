import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class OpService {

  constructor() { }
 // Define a private BehaviorSubject to store the current username
private userName = new BehaviorSubject<string>('');

// Define a private Observable that is the observable version of the userName BehaviorSubject
private _userName$ = this.userName.asObservable();



// Define a public method that sets the current username using the BehaviorSubject
throwUserName(userName: string) {

  console.log(this.userName);

  this.userName.next(userName);
}

// Define a public method that returns the private Observable of the userName BehaviorSubject
getUserName(): Observable<string> {
  console.log("get")
  console.table(this._userName$)

  return this._userName$;
}


}
