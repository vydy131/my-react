import { autorun, makeAutoObservable, runInAction } from "mobx";

const delay = (ms: number) => new Promise((_) => setTimeout(_, ms));

class Store {
  constructor() {
    makeAutoObservable(this);
  }
  count = 0;
  //   *incr() {
  //     yield delay(1000);
  //     this.count++;
  //     this.count++;
  //     this.count++;
  //   }

  incr = async () => {
    await delay(1000);
    runInAction(() => {
      this.count++;
      this.count++;
      this.count++;
    });
  };

  decr = () => {
    this.count--;
  };
  get double() {
    return this.count * 2;
  }
}

export const counterStore = new Store();
