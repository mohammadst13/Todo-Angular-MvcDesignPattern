import { Component } from '@angular/core';
import { Model, TodoItem } from './../Models/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo-Angular-MVC';
  model = new Model();

  getName() {
    return this.model.user;
  }

  getTodoItems() {
    return this.model.items;
  }

  addItem(newTask: string) {
    if (newTask != '') {
      this.model.items.push(new TodoItem(newTask, false));
    }
  }
}
