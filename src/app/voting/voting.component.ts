import { TodosService } from './../shared/todos.service';
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
@Component({
  selector: "app-voting",
  templateUrl: "./voting.component.html",
  styleUrls: ["./voting.component.css"]
})
export class VotingComponent implements OnInit {
  totalVotes = 0;
  todosItem: any = [];
  fg: FormGroup;
  message:string;
  constructor(fb: FormBuilder,
    private todos: TodosService) {
    this.fg = fb.group({
      name: ["", Validators.required],
      age: [""]
    });
  }

  upVote() {
    this.totalVotes++;
  }

  downVote() {
    this.totalVotes--;
  }

  ngOnInit() {
    this.todos.getTodods().subscribe(
      (item) => {
        this.todosItem = item;
      }
    )
  }


  addTodos() {
    var todo = {title : 'xyz'};
    this.todos.addTodos(todo).subscribe(
      t => this.todosItem.push(t),
      err => this.message = err
    );
  }


  deleteTodo(id:number) {
    if(confirm("Do you want to delete?")){
      this.todos.deleteTodo(id).subscribe();
    }
  }
}
