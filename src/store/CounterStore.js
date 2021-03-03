import {
  makeAutoObservable,
  observable,
  action,
  reaction,
  when,
  configure,
  runInAction,
} from "mobx";

configure({
  enforceActions: "observed",
});
class CounterStore {
  count = 0;
  constructor() {
    makeAutoObservable(this);

    /*  Sürekli çalışır  */
    /* reaction(
      () => this.count,
      (count) => {
        if (count === 5) {
          alert("Başardın");
        }
      }
    );*/

    /*  1 kere çalışır */
    when(
      () => this.count === 5,
      () => {
        alert("başardın");
      }
    );
  }

  @action increment() {
    setTimeout(() => {
      runInAction(() => {
        this.count++;
      });
    }, 2000);
    console.log("incretment" + this.count);
  }
  @action dicrement() {
    this.count--;
    console.log("incretment" + this.count);
  }
}

export default new CounterStore();
