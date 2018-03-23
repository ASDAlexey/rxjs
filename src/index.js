// 1
/*const button = document.querySelector('button');
const observer = {
  next: (value) => {
    console.log(value);
  },
  error: (error) => {
    console.log(error);
  },
  complete: () => {
    console.log('Completed');
  },
};

// Rx.Observable.fromEvent(button, 'click')
//   .subscribe(observer);*/


// 2
/*
const subscription = Rx.Observable.create((obs) => {
  // obs.next('A value');
  // obs.error('Error');
  // obs.complete();
  // setTimeout(() => {
  //   obs.next('A second value');
  //   obs.complete();
  // }, 2000)
  button.onclick = function (event) {
    obs.next(event);
  }
}).subscribe(observer);

setTimeout(() => {
  subscription.unsubscribe();
}, 5000);
*/

// 3
/*const observable = Rx.Observable.interval(1000);
const observer = {
  next: (value) => {
    console.log(value);
  },
};

observable
  .map((value) => ('Number: ' + value))
  .throttleTime(2000)
  .subscribe(observer);*/

// 4
/*
const subject = new Rx.Subject();
subject.subscribe({
  next: (value) => {
    console.log(value);
  },
  error: (error) => {
    console.log(error);
  },
  complete: () => {
    console.log('Complete');
  },
});

subject.subscribe({
  next: (value) => {
    console.log(value);
  },
});

subject.next('A new data piece');
// subject.error('Error');
subject.complete();
subject.next('New value');
*/

// 5 -> filter
// const observable = Rx.Observable.interval(1000);
// const observer = {
//   next: (value) => {
//     console.log(value);
//   },
//   error: (error) => {
//     console.log('Error: ' + error);
//   }
// };
//
// observable
//   .filter((value) => {
//     return value % 2 === 0;
//   })
//   .subscribe(observer);

// 6 distinctUntilChanged
/*
const input = document.querySelector('input');
const observable = Rx.Observable.fromEvent(input, 'input');
const observer = {
  next: (value) => {
    console.log(value);
  },
};
observable
  .map(event => event.target.value)
  .debounceTime(500)
  .distinctUntilChanged()
  .subscribe(observer);
*/
