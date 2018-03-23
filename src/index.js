const button = document.querySelector('button');
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
//   .subscribe(observer);

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
