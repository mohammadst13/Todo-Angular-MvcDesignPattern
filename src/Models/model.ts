export class Model {
  user;
  items: any;

  constructor() {
    this.user = 'Mohammad.SayarTehrani@yahoo.Com';
    this.items = [
      { action: 'Buy Milk', done: false },
      { action: 'Eat Breakfast', done: false },
      { action: 'Go Work', done: true },
      { action: 'Do The Task', done: false }
    ];
  }
}

export class TodoItem {
  action;
  done;

  constructor(action: string, done: boolean) {
    this.action = action;
    this.done = done;
  }
}
