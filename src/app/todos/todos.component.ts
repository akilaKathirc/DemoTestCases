import { Component, OnInit } from '@angular/core';
import { TodosService } from '../shared/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
todos1;
  todos: any = [];
  message; 

  constructor(private service: TodosService) {}


  ngOnInit() {
    console.log('component')
   this.service.getTodods().subscribe(t => this.todos = t);
   console.log(this.todos.length);
//  this.service.getTodosPromise()
//  .then(t => this.todos = t);
   }


  
  add() { 
    var newTodo = { title: '... ' };
    this.service.add(newTodo).subscribe(
      t => this.todos.push(t),
      err => this.message = err);
  }

  delete(id) {
    if (confirm('Are you sure?'))
      this.service.delete(id).subscribe();
  } 
}
