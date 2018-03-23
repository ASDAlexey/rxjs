const button = document.querySelector('button');
Rx.Observable.fromEvent(button, 'click')
  .throttleTime(1000)
  .map((data) => {
    return data.clientY;
  })
  .subscribe((coordinate) => console.log(coordinate));
