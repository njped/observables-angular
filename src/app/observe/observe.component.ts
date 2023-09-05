import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observe',
  templateUrl: './observe.component.html',
  styleUrls: ['./observe.component.css']
})
export class ObserveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // this.checkObserveLong()
    this.checkObserveShort()
  }

  checkObserveLong() {
    const observer = {
      next: (apple: any) => console.log(`Apple was emmitted ${apple}`),
      error: (error: any) => console.log(`404 occurred: ${error}`),
      complete: () => console.log(`No more apples, go home`)
    };

    // new code for an observable in its long form
    const appleStream = new Observable(appleObserver => {
      appleObserver.next('Apple 1');
      appleObserver.next('Apple 2');
      appleObserver.error(`Banana isn't an apple`)
      appleObserver.complete();
    });

    // new code to show how to subscribe to an Observable
    const subscription = appleStream.subscribe(observer);

  }

  checkObserveShort() {
    const appleStream = new Observable(appleObserver => {
      appleObserver.next('Apple 1');
      appleObserver.next('Apple 2');
      appleObserver.error(`Banana isn't an apple`)
      appleObserver.complete();
    });

    const sub = appleStream.subscribe(
      apple => console.log(`Apple was emmitted ${apple}`),
      error => console.log(`404 occurred: ${error}`),
      () => console.log(`No more apples, go home`)
    );

    // Call unsubscribe() - stops the stream without calling the complete() method
    sub.unsubscribe()
  }

}
